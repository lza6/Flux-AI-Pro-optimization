// =================================================================================
//  风格合并器 (Style Merger)
//  负责合并核心风格、扩展风格和用户自定义风格
// =================================================================================

import { CORE_STYLES, CORE_CATEGORIES } from '../styles/core.js';
import { EXTENDED_STYLES, EXTENDED_CATEGORIES } from '../styles/extended.js';

export class StyleMerger {
  constructor() {
    this.coreStyles = CORE_STYLES;
    this.coreCategories = CORE_CATEGORIES;
    this.extendedStyles = EXTENDED_STYLES;
    this.extendedCategories = EXTENDED_CATEGORIES;
    this.userStyles = {};
    this.userCategories = {};
    this.dbName = 'FluxAI_Styles';
    this.dbVersion = 1;
    this.initialized = false;
  }

  /**
   * 初始化并加载用户风格
   */
  async initialize() {
    if (this.initialized) return;
    
    try {
      await this.loadUserStyles();
      this.initialized = true;
      console.log('✅ StyleMerger initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize StyleMerger:', error);
      // 即使失败也标记为已初始化，避免重复尝试
      this.initialized = true;
    }
  }

  /**
   * 从 IndexedDB 加载用户风格
   */
  async loadUserStyles() {
    try {
      const db = await this.openDB();
      const styles = await this.getAllFromDB(db, 'user_styles');
      const categories = await this.getAllFromDB(db, 'user_categories');
      
      this.userStyles = styles.reduce((acc, style) => {
        acc[style.id] = {
          name: style.name,
          prompt: style.prompt,
          negative: style.negative || "",
          category: style.category,
          icon: style.icon || "🎨",
          description: style.description || "",
          isUser: true,
          createdAt: style.createdAt || Date.now()
        };
        return acc;
      }, {});
      
      this.userCategories = categories.reduce((acc, cat) => {
        acc[cat.id] = {
          name: cat.name,
          icon: cat.icon,
          order: cat.order || 999
        };
        return acc;
      }, {});
      
      console.log(`📦 Loaded ${Object.keys(this.userStyles).length} user styles`);
      return { styles: this.userStyles, categories: this.userCategories };
    } catch (error) {
      console.error("Failed to load user styles:", error);
      return { styles: {}, categories: {} };
    }
  }

  /**
   * 合并所有风格
   */
  merge() {
    const mergedStyles = {
      ...this.coreStyles,
      ...this.extendedStyles,
      ...this.userStyles
    };
    
    const mergedCategories = {
      ...this.coreCategories,
      ...this.extendedCategories,
      ...this.userCategories
    };
    
    return {
      styles: mergedStyles,
      categories: mergedCategories,
      stats: {
        core: Object.keys(this.coreStyles).length,
        extended: Object.keys(this.extendedStyles).length,
        user: Object.keys(this.userStyles).length,
        total: Object.keys(mergedStyles).length
      }
    };
  }

  /**
   * 保存用户风格
   */
  async saveUserStyle(styleId, styleConfig) {
    try {
      const db = await this.openDB();
      await this.putToDB(db, 'user_styles', {
        id: styleId,
        ...styleConfig,
        createdAt: Date.now()
      });
      
      // 更新内存
      this.userStyles[styleId] = {
        ...styleConfig,
        isUser: true,
        createdAt: Date.now()
      };
      
      console.log(`✅ Saved user style: ${styleId}`);
      return { success: true, styleId };
    } catch (error) {
      console.error("Failed to save user style:", error);
      return { success: false, error: error.message };
    }
  }

  /**
   * 删除用户风格
   */
  async deleteUserStyle(styleId) {
    try {
      const db = await this.openDB();
      await this.deleteFromDB(db, 'user_styles', styleId);
      delete this.userStyles[styleId];
      console.log(`🗑️ Deleted user style: ${styleId}`);
      return { success: true, styleId };
    } catch (error) {
      console.error("Failed to delete user style:", error);
      return { success: false, error: error.message };
    }
  }

  /**
   * 更新用户风格
   */
  async updateUserStyle(styleId, styleConfig) {
    try {
      const db = await this.openDB();
      const existing = await this.getFromDB(db, 'user_styles', styleId);
      
      if (!existing) {
        return { success: false, error: 'Style not found' };
      }
      
      await this.putToDB(db, 'user_styles', {
        ...existing,
        ...styleConfig,
        id: styleId,
        updatedAt: Date.now()
      });
      
      // 更新内存
      this.userStyles[styleId] = {
        ...this.userStyles[styleId],
        ...styleConfig,
        isUser: true,
        updatedAt: Date.now()
      };
      
      console.log(`✏️ Updated user style: ${styleId}`);
      return { success: true, styleId };
    } catch (error) {
      console.error("Failed to update user style:", error);
      return { success: false, error: error.message };
    }
  }

  /**
   * 获取用户风格列表
   */
  getUserStylesList() {
    return Object.entries(this.userStyles).map(([id, style]) => ({
      id,
      ...style
    }));
  }

  /**
   * 导出用户风格
   */
  exportUserStyles() {
    return {
      styles: this.userStyles,
      categories: this.userCategories,
      exportedAt: new Date().toISOString(),
      version: '1.0'
    };
  }

  /**
   * 导入用户风格
   */
  async importUserStyles(data) {
    try {
      if (!data.styles || typeof data.styles !== 'object') {
        throw new Error('Invalid import data');
      }
      
      const db = await this.openDB();
      let importedCount = 0;
      
      for (const [styleId, styleConfig] of Object.entries(data.styles)) {
        await this.putToDB(db, 'user_styles', {
          id: styleId,
          ...styleConfig,
          importedAt: Date.now()
        });
        importedCount++;
      }
      
      // 导入类别
      if (data.categories && typeof data.categories === 'object') {
        for (const [catId, catConfig] of Object.entries(data.categories)) {
          await this.putToDB(db, 'user_categories', {
            id: catId,
            ...catConfig
          });
        }
      }
      
      // 重新加载
      await this.loadUserStyles();
      
      console.log(`📥 Imported ${importedCount} user styles`);
      return { success: true, importedCount };
    } catch (error) {
      console.error("Failed to import user styles:", error);
      return { success: false, error: error.message };
    }
  }

  /**
   * 清空所有用户风格
   */
  async clearUserStyles() {
    try {
      const db = await this.openDB();
      await this.clearStore(db, 'user_styles');
      await this.clearStore(db, 'user_categories');
      this.userStyles = {};
      this.userCategories = {};
      console.log('🧹 Cleared all user styles');
      return { success: true };
    } catch (error) {
      console.error("Failed to clear user styles:", error);
      return { success: false, error: error.message };
    }
  }

  // ====== IndexedDB 辅助方法 ======

  /**
   * 打开 IndexedDB
   */
  openDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        
        // 创建 user_styles store
        if (!db.objectStoreNames.contains('user_styles')) {
          const styleStore = db.createObjectStore('user_styles', { keyPath: 'id' });
          styleStore.createIndex('createdAt', 'createdAt', { unique: false });
          styleStore.createIndex('category', 'category', { unique: false });
        }
        
        // 创建 user_categories store
        if (!db.objectStoreNames.contains('user_categories')) {
          db.createObjectStore('user_categories', { keyPath: 'id' });
        }
      };
    });
  }

  /**
   * 从 store 获取所有数据
   */
  getAllFromDB(db, storeName) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.getAll();
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || []);
    });
  }

  /**
   * 从 store 获取单条数据
   */
  getFromDB(db, storeName, key) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.get(key);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  /**
   * 向 store 写入数据
   */
  putToDB(db, storeName, data) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.put(data);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  /**
   * 从 store 删除数据
   */
  deleteFromDB(db, storeName, key) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.delete(key);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  /**
   * 清空 store
   */
  clearStore(db, storeName) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.clear();
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }
}

// 单例实例
export const styleMerger = new StyleMerger();

// 自动初始化（在浏览器环境中）
if (typeof window !== 'undefined') {
  styleMerger.initialize().catch(console.error);
}
