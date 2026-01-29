// =================================================================================
//  i18n 管理器 (Internationalization Manager)
//  负责管理多语言切换、翻译、语言检测等功能
// =================================================================================

import { 
  TRANSLATIONS, 
  LANGUAGE_CONFIG, 
  SUPPORTED_LANGUAGES, 
  DEFAULT_LANGUAGE,
  getTranslation,
  getTranslations,
  isLanguageSupported,
  getLanguageConfig
} from './translations.js';

/**
 * i18n 管理器类
 */
export class I18nManager {
  constructor() {
    this.currentLanguage = this.detectLanguage();
    this.listeners = [];
    this.storageKey = 'flux-ai-language';
    this.autoDetectKey = 'flux-ai-auto-detect';
    this.autoDetect = this.loadAutoDetect();
    
    // 从 localStorage 读取保存的语言
    this.loadSavedLanguage();
  }
  
  /**
   * 检测浏览器语言
   */
  detectLanguage() {
    if (typeof window === 'undefined') {
      return DEFAULT_LANGUAGE;
    }
    
    // 1. 检查 URL 参数
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && isLanguageSupported(langParam)) {
      return langParam;
    }
    
    // 2. 检查 localStorage（如果未启用自动检测）
    if (!this.autoDetect) {
      const savedLang = localStorage.getItem(this.storageKey);
      if (savedLang && isLanguageSupported(savedLang)) {
        return savedLang;
      }
    }
    
    // 3. 检查浏览器语言
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0];
    
    if (isLanguageSupported(langCode)) {
      return langCode;
    }
    
    // 4. 返回默认语言
    return DEFAULT_LANGUAGE;
  }
  
  /**
   * 从 localStorage 载入保存的语言
   */
  loadSavedLanguage() {
    try {
      const savedLang = localStorage.getItem(this.storageKey);
      if (savedLang && isLanguageSupported(savedLang)) {
        this.currentLanguage = savedLang;
      }
    } catch (error) {
      console.warn('Failed to load saved language:', error);
    }
  }
  
  /**
   * 保存语言到 localStorage
   */
  saveLanguage(lang) {
    try {
      localStorage.setItem(this.storageKey, lang);
    } catch (error) {
      console.warn('Failed to save language:', error);
    }
  }
  
  /**
   * 载入自动检测设定
   */
  loadAutoDetect() {
    try {
      const saved = localStorage.getItem(this.autoDetectKey);
      return saved === 'true';
    } catch (error) {
      console.warn('Failed to load auto-detect setting:', error);
      return false;
    }
  }
  
  /**
   * 保存自动检测设定
   */
  saveAutoDetect(enabled) {
    try {
      localStorage.setItem(this.autoDetectKey, String(enabled));
    } catch (error) {
      console.warn('Failed to save auto-detect setting:', error);
    }
  }
  
  /**
   * 切换自动检测模式
   */
  toggleAutoDetect() {
    this.autoDetect = !this.autoDetect;
    this.saveAutoDetect(this.autoDetect);
    
    if (this.autoDetect) {
      // 启用自动检测时，重新检测语言
      const detectedLang = this.detectSystemLanguage();
      if (detectedLang !== this.currentLanguage) {
        this.setLanguage(detectedLang);
      }
    }
    
    return this.autoDetect;
  }
  
  /**
   * 检测系统语言（不考虑 localStorage）
   */
  detectSystemLanguage() {
    if (typeof window === 'undefined') {
      return DEFAULT_LANGUAGE;
    }
    
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0];
    
    if (isLanguageSupported(langCode)) {
      return langCode;
    }
    
    return DEFAULT_LANGUAGE;
  }
  
  /**
   * 检查是否启用自动检测
   */
  isAutoDetectEnabled() {
    return this.autoDetect;
  }
  
  /**
   * 设置当前语言
   */
  setLanguage(lang) {
    if (!isLanguageSupported(lang)) {
      console.warn(`Language "${lang}" is not supported. Using default.`);
      lang = DEFAULT_LANGUAGE;
    }
    
    const oldLang = this.currentLanguage;
    this.currentLanguage = lang;
    this.saveLanguage(lang);
    
    // 更新 HTML lang 属性
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      
      // 更新方向（RTL/LTR）
      const config = getLanguageConfig(lang);
      document.documentElement.dir = config.direction;
    }
    
    // 通知监听器
    this.notifyListeners(oldLang, lang);
  }
  
  /**
   * 获取当前语言
   */
  getLanguage() {
    return this.currentLanguage;
  }
  
  /**
   * 获取翻译
   */
  t(key, fallback = null) {
    const translation = getTranslation(this.currentLanguage, key);
    return translation !== key ? translation : (fallback || key);
  }
  
  /**
   * 获取所有翻译
   */
  getTranslations() {
    return getTranslations(this.currentLanguage);
  }
  
  /**
   * 获取语言配置
   */
  getLanguageConfig() {
    return getLanguageConfig(this.currentLanguage);
  }
  
  /**
   * 获取所有支持的语言
   */
  getSupportedLanguages() {
    return SUPPORTED_LANGUAGES.map(lang => ({
      code: lang,
      ...LANGUAGE_CONFIG[lang]
    }));
  }
  
  /**
   * 切换到下一个语言
   */
  nextLanguage() {
    const currentIndex = SUPPORTED_LANGUAGES.indexOf(this.currentLanguage);
    const nextIndex = (currentIndex + 1) % SUPPORTED_LANGUAGES.length;
    this.setLanguage(SUPPORTED_LANGUAGES[nextIndex]);
  }
  
  /**
   * 添加语言变更监听器
   */
  addListener(callback) {
    this.listeners.push(callback);
  }
  
  /**
   * 移除语言变更监听器
   */
  removeListener(callback) {
    const index = this.listeners.indexOf(callback);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }
  
  /**
   * 通知所有监听器
   */
  notifyListeners(oldLang, newLang) {
    this.listeners.forEach(callback => {
      try {
        callback(oldLang, newLang);
      } catch (error) {
        console.error('Error in language change listener:', error);
      }
    });
  }
  
  /**
   * 格式化日期
   */
  formatDate(date, options = {}) {
    const config = getLanguageConfig(this.currentLanguage);
    const defaultOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    
    return new Intl.DateTimeFormat(config.dateFormat, { ...defaultOptions, ...options }).format(date);
  }
  
  /**
   * 格式化数字
   */
  formatNumber(number, options = {}) {
    const config = getLanguageConfig(this.currentLanguage);
    const defaultOptions = {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    };
    
    return new Intl.NumberFormat(config.dateFormat, { ...defaultOptions, ...options }).format(number);
  }
  
  /**
   * 格式化文件大小
   */
  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return this.formatNumber(bytes / Math.pow(k, i), { maximumFractionDigits: 2 }) + ' ' + sizes[i];
  }
  
  /**
   * 格式化时间
   */
  formatTime(seconds) {
    if (seconds < 60) {
      return this.t('cooldown_msg', `⏳ ${seconds}s`);
    }
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    if (minutes < 60) {
      return `${minutes}m ${remainingSeconds}s`;
    }
    
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    return `${hours}h ${remainingMinutes}m`;
  }
}

// ====== 单例实例 ======
export const i18n = new I18nManager();

// ====== 初始化 ======
if (typeof window !== 'undefined') {
  // 设置初始 HTML lang 属性
  document.documentElement.lang = i18n.getLanguage();
  
  // 设置初始方向
  const config = i18n.getLanguageConfig();
  document.documentElement.dir = config.direction;
}

// ====== 便捷函数 ======
export function t(key, fallback) {
  return i18n.t(key, fallback);
}

export function setLanguage(lang) {
  return i18n.setLanguage(lang);
}

export function getLanguage() {
  return i18n.getLanguage();
}

export function getSupportedLanguages() {
  return i18n.getSupportedLanguages();
}

export function formatDate(date, options) {
  return i18n.formatDate(date, options);
}

export function formatNumber(number, options) {
  return i18n.formatNumber(number, options);
}

export function formatFileSize(bytes) {
  return i18n.formatFileSize(bytes);
}

export function formatTime(seconds) {
  return i18n.formatTime(seconds);
}

export function toggleAutoDetect() {
  return i18n.toggleAutoDetect();
}

export function isAutoDetectEnabled() {
  return i18n.isAutoDetectEnabled();
}

export function detectSystemLanguage() {
  return i18n.detectSystemLanguage();
}