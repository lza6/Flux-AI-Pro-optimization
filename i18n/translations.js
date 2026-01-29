// =================================================================================
//  多语言翻译文件 (i18n Translations)
//  支持语言：简体中文 (zh)、英文 (en)、日文 (ja)、韩文 (ko)、阿拉伯语 (ar - RTL)、
//           法语 (fr)、德语 (de)、西班牙语 (es)、俄语 (ru)、葡萄牙语 (pt)、意大利语 (it)
// =================================================================================

export const TRANSLATIONS = {
  // ====== 简体中文 (zh) ======
  zh: {
    // 导航选项
    nav_gen: "🎨 生成图像",
    nav_his: "📚 历史记录",
    nav_nano: "🍌 Nano版",
    
    // 设置标签
    settings_title: "⚙️ 生成参数",
    provider_label: "API 供应商",
    model_label: "模型选择",
    size_label: "尺寸预设",
    style_label: "艺术风格 🎨",
    quality_label: "质量模式",
    seed_label: "Seed (种子码)",
    seed_random: "🎲 随机",
    seed_lock: "🔒 锁定",
    auto_opt_label: "✨ 自动优化",
    auto_opt_desc: "自动调整 Steps 与 Guidance",
    adv_settings: "🛠️ 进阶参数",
    steps_label: "生成步数 (Steps)",
    guidance_label: "引导系数 (Guidance)",
    
    // 按钮
    gen_btn: "🎨 开始生成",
    btn_export: "📥 导出",
    btn_clear: "🗑️ 清空",
    btn_reuse: "🔄 重用",
    btn_dl: "💾 下载",
    
    // 提示词相关
    pos_prompt: "正面提示词",
    neg_prompt: "负面提示词 (可选)",
    ref_img: "参考图像 (Img2Img) 📸",
    
    // 状态信息
    empty_title: "尚未生成任何图像",
    no_history: "暂无历史记录",
    cooldown_msg: "⏳ 请等待冷却时间...",
    generating: "生成中...",
    
    // 统计
    stat_total: "📊 总记录数",
    stat_storage: "💾 存储空间 (永久)",
    
    // Nano 版专用
    nano_title: "🍌 NanoBanana Pro - 控制台",
    nano_prompt: "Prompt",
    nano_canvas_ratio: "画布比例",
    nano_style_settings: "风格与设定",
    nano_exclude: "排除",
    nano_energy_per_hour: "每小时能量",
    nano_consume_energy: "消耗 1 香蕉能量",
    nano_energy_recharging: "能量回充中",
    nano_injecting_energy: "正在注入 AI 能量",
    nano_generating: "生成中",
    nano_uploading_image: "上传图片",
    nano_energy_depleted: "本小时能量已耗尽",
    nano_come_back_later: "请稍后再来",
    nano_dice: "🎲 灵感骰子",
    
    // 提示词生成器
    prompt_generator_title: "专业提示词生成器",
    prompt_generator_upload_ref: "上传参考图片 (可选)",
    prompt_generator_select_image: "选择图片",
    prompt_generator_simple_desc: "简单描述你想要的画面",
    prompt_generator_generate: "生成专业提示词",
    prompt_generator_apply: "应用到提示词",
    prompt_generator_generated: "生成的专业提示词",
    prompt_generator_tip: "💡 小提示：选择左侧的「艺术风格」后，生成器会自动融合该风格（如：赛博朋克、水墨画等）到提示词中，让画面更具艺术感！",
    
    // 质量模式
    quality_economy: "Economy",
    quality_standard: "Standard",
    quality_ultra: "Ultra HD",
    quality_economy_desc: "快速出图",
    quality_standard_desc: "平衡质量与速度",
    quality_ultra_desc: "极致质量",
    
    // 供应商
    provider_pollinations: "Pollinations.ai (Free)",
    provider_infip: "Ghostbot (Infip) 🌟",
    
    // API Key
    api_key_label: "API Key",
    api_key_desc: "Stored locally",
    api_key_placeholder: "Paste your API Key here",
    api_key_get_key: "Get free key from",
    
    // NSFW
    nsfw_label: "🔞 解除成人内容限制 (NSFW)",
    nsfw_desc: "启用此选项将允许生成成人内容 (仅 Infip)",
    
    // 批量生成
    batch_label: "🖼️ 批量生成",
    batch_size_label: "生成数量 (Batch Size)",
    
    // 错误信息
    error_no_prompt: "⚠️ 请输入提示词",
    error_energy_depleted: "🚫 本小时能量已耗尽，请稍后再来！",
    error_image_too_large: "图片太大！最大 32MB",
    error_invalid_file: "请选择图片文件",
    error_upload_failed: "上传失败",
    
    // 语言切换
    lang_switch: "EN / 简中",
    lang_zh: "简体中文",
    lang_en: "English",
    lang_ja: "日本语",
    lang_ko: "한국어",
    lang_ar: "العربية",
    lang_auto_detect: "🌐 自动检测系统语言",
    lang_auto_detect_desc: "根据浏览器语言自动切换界面语言",
    
    // 风格类别
    style_category_basic: "基础",
    style_category_illustration: "插画动画",
    style_category_manga: "漫画风格",
    style_category_monochrome: "黑白单色",
    style_category_realistic: "写实照片",
    style_category_painting: "绘画风格",
    style_category_art_movement: "艺术流派",
    style_category_visual: "视觉风格",
    style_category_digital: "数字风格",
    style_category_traditional: "传统艺术",
    style_category_aesthetic: "美学风格",
    style_category_scifi: "科幻",
    style_category_fantasy: "奇幻",
    
    // 风格名称
    style_none: "无风格",
    style_anime: "动漫风格",
    style_ghibli: "吉卜力",
    style_manga: "日本漫画",
    style_manga_color: "彩色日漫",
    style_american_comic: "美式漫画",
    style_korean_webtoon: "韩国网漫",
    style_chibi: "Q版漫画",
    style_black_white: "黑白",
    style_sketch: "素描",
    style_ink_drawing: "水墨画",
    style_silhouette: "剪影",
    style_charcoal: "炭笔画",
    style_photorealistic: "写实照片",
    style_oil_painting: "油画",
    style_watercolor: "水彩画",
    style_impressionism: "印象派",
    style_abstract: "抽象派",
    style_cubism: "立体主义",
    style_surrealism: "超现实主义",
    style_pop_art: "波普艺术",
    style_neon: "霓虹灯",
    style_vintage: "复古",
    style_steampunk: "蒸汽朋克",
    style_minimalist: "极简主义",
    style_vaporwave: "蒸汽波",
    style_pixel_art: "像素艺术",
    style_low_poly: "低多边形",
    style_3d_render: "3D渲染",
    style_gradient: "渐变",
    style_glitch: "故障艺术",
    style_ukiyo_e: "浮世绘",
    style_stained_glass: "彩绘玻璃",
    style_paper_cut: "剪纸艺术",
    style_gothic: "哥特风格",
    style_art_nouveau: "新艺术",
    style_cyberpunk: "赛博朋克",
    style_fantasy: "奇幻风格"
  },
  
  // ====== 英文 (en) ======
  en: {
    // Navigation
    nav_gen: "🎨 Generate Image",
    nav_his: "📚 History",
    nav_nano: "🍌 Nano",
    
    // Settings
    settings_title: "⚙️ Generation Settings",
    provider_label: "API Provider",
    model_label: "Model Selection",
    size_label: "Image Size",
    style_label: "Art Style 🎨",
    quality_label: "Quality Mode",
    seed_label: "Seed Value",
    seed_random: "🎲 Random",
    seed_lock: "🔒 Lock",
    auto_opt_label: "✨ Auto Optimize",
    auto_opt_desc: "Automatically adjust Steps & Guidance",
    adv_settings: "🛠️ Advanced Settings",
    steps_label: "Generation Steps",
    guidance_label: "Guidance Scale",
    
    // Buttons
    gen_btn: "🎨 Start Generation",
    btn_export: "📥 Export",
    btn_clear: "🗑️ Clear All",
    btn_reuse: "🔄 Reuse Settings",
    btn_dl: "💾 Download",
    
    // Prompts
    pos_prompt: "Positive Prompt",
    neg_prompt: "Negative Prompt (Optional)",
    ref_img: "Reference Image (Img2Img) 📸",
    
    // Status Messages
    empty_title: "No images generated yet",
    no_history: "No history records found",
    cooldown_msg: "⏳ Please wait for cooldown...",
    generating: "Generating...",
    
    // Statistics
    stat_total: "📊 Total Records",
    stat_storage: "💾 Storage Space (Permanent)",
    
    // Nano Version
    nano_title: "🍌 NanoBanana Pro - Console",
    nano_prompt: "Prompt",
    nano_canvas_ratio: "Canvas Ratio",
    nano_style_settings: "Style & Settings",
    nano_exclude: "Exclude",
    nano_energy_per_hour: "Energy per Hour",
    nano_consume_energy: "Consume 1 Banana Energy",
    nano_energy_recharging: "Energy Recharging",
    nano_injecting_energy: "Injecting AI Energy...",
    nano_generating: "Generating",
    nano_uploading_image: "Uploading Image",
    nano_energy_depleted: "Energy Depleted This Hour",
    nano_come_back_later: "Please come back later",
    nano_dice: "🎲 Inspiration Dice",
    
    // Prompt Generator
    prompt_generator_title: "Professional Prompt Generator",
    prompt_generator_upload_ref: "Upload Reference Image (Optional)",
    prompt_generator_select_image: "Select Image",
    prompt_generator_simple_desc: "Simply describe the image you want",
    prompt_generator_generate: "Generate Professional Prompt",
    prompt_generator_apply: "Apply to Prompt",
    prompt_generator_generated: "Generated Professional Prompt",
    prompt_generator_tip: "💡 Tip: After selecting an 'Art Style' on the left, the generator will automatically blend that style (e.g., Cyberpunk, Ink Wash) into your prompt for more artistic results!",
    
    // Quality Modes
    quality_economy: "Economy",
    quality_standard: "Standard",
    quality_ultra: "Ultra HD",
    quality_economy_desc: "Fast generation",
    quality_standard_desc: "Balanced quality & speed",
    quality_ultra_desc: "Maximum quality",
    
    // Providers
    provider_pollinations: "Pollinations.ai (Free)",
    provider_infip: "Ghostbot (Infip) 🌟",
    
    // API Key
    api_key_label: "API Key",
    api_key_desc: "Stored locally",
    api_key_placeholder: "Paste your API Key here",
    api_key_get_key: "Get free key from",
    
    // NSFW
    nsfw_label: "🔞 Disable NSFW Filter",
    nsfw_desc: "Enable this option to allow adult content generation (Infip only)",
    
    // Batch Generation
    batch_label: "🖼️ Batch Generation",
    batch_size_label: "Batch Size",
    
    // Error Messages
    error_no_prompt: "⚠️ Please enter a prompt",
    error_energy_depleted: "🚫 Energy depleted this hour, please come back later!",
    error_image_too_large: "Image too large! Max size is 32MB",
    error_invalid_file: "Please select an image file",
    error_upload_failed: "Upload failed",
    
    // Language Switch
    lang_switch: "EN / 简中",
    lang_zh: "简体中文",
    lang_en: "English",
    lang_ja: "日本語",
    lang_ko: "한국어",
    lang_ar: "العربية",
    lang_auto_detect: "🌐 Auto-detect System Language",
    lang_auto_detect_desc: "Automatically switch interface language based on browser language",
    
    // Style Categories
    style_category_basic: "Basic",
    style_category_illustration: "Illustration & Animation",
    style_category_manga: "Manga Style",
    style_category_monochrome: "Monochrome",
    style_category_realistic: "Photorealistic",
    style_category_painting: "Painting Style",
    style_category_art_movement: "Art Movement",
    style_category_visual: "Visual Style",
    style_category_digital: "Digital Style",
    style_category_traditional: "Traditional Art",
    style_category_aesthetic: "Aesthetic Style",
    style_category_scifi: "Sci-Fi",
    style_category_fantasy: "Fantasy",
    
    // Style Names
    style_none: "No Style",
    style_anime: "Anime Style",
    style_ghibli: "Ghibli",
    style_manga: "Japanese Manga",
    style_manga_color: "Colored Manga",
    style_american_comic: "American Comic",
    style_korean_webtoon: "Korean Webtoon",
    style_chibi: "Chibi",
    style_black_white: "Black & White",
    style_sketch: "Sketch",
    style_ink_drawing: "Ink Wash",
    style_silhouette: "Silhouette",
    style_charcoal: "Charcoal",
    style_photorealistic: "Photorealistic",
    style_oil_painting: "Oil Painting",
    style_watercolor: "Watercolor",
    style_impressionism: "Impressionism",
    style_abstract: "Abstract",
    style_cubism: "Cubism",
    style_surrealism: "Surrealism",
    style_pop_art: "Pop Art",
    style_neon: "Neon",
    style_vintage: "Vintage",
    style_steampunk: "Steampunk",
    style_minimalist: "Minimalist",
    style_vaporwave: "Vaporwave",
    style_pixel_art: "Pixel Art",
    style_low_poly: "Low Poly",
    style_3d_render: "3D Render",
    style_gradient: "Gradient",
    style_glitch: "Glitch Art",
    style_ukiyo_e: "Ukiyo-e",
    style_stained_glass: "Stained Glass",
    style_paper_cut: "Paper Cut",
    style_gothic: "Gothic",
    style_art_nouveau: "Art Nouveau",
    style_cyberpunk: "Cyberpunk",
    style_fantasy: "Fantasy Style"
  },
  
  // ====== 日文 (ja) ======
  ja: {
    // ナビゲーション
    nav_gen: "🎨 画像生成",
    nav_his: "📚 履歴",
    nav_nano: "🍌 Nano版",
    
    // 設定
    settings_title: "⚙️ 生成設定",
    provider_label: "API プロバイダー",
    model_label: "モデル選択",
    size_label: "画像サイズ",
    style_label: "アートスタイル 🎨",
    quality_label: "品質モード",
    seed_label: "シード値",
    seed_random: "🎲 ランダム",
    seed_lock: "🔒 固定",
    auto_opt_label: "✨ 自動最適化",
    auto_opt_desc: "ステップ数とガイダンスを自動調整",
    adv_settings: "🛠️ 詳細設定",
    steps_label: "生成ステップ数",
    guidance_label: "ガイダンススケール",
    
    // ボタン
    gen_btn: "🎨 生成開始",
    btn_export: "📥 エクスポート",
    btn_clear: "🗑️ 全削除",
    btn_reuse: "🔄 再利用",
    btn_dl: "💾 ダウンロード",
    
    // プロンプト
    pos_prompt: "ポジティブプロンプト",
    neg_prompt: "ネガティブプロンプト（任意）",
    ref_img: "参照画像 (Img2Img) 📸",
    
    // ステータスメッセージ
    empty_title: "まだ画像が生成されていません",
    no_history: "履歴がありません",
    cooldown_msg: "⏳ クールダウンをお待ちください...",
    generating: "生成中...",
    
    // 統計
    stat_total: "📊 総記録数",
    stat_storage: "💾 ストレージ（永続）",
    
    // Nano版
    nano_title: "🍌 NanoBanana Pro - コンソール",
    nano_prompt: "プロンプト",
    nano_canvas_ratio: "キャンバス比率",
    nano_style_settings: "スタイルと設定",
    nano_exclude: "除外",
    nano_energy_per_hour: "1時間あたりのエネルギー",
    nano_consume_energy: "バナナエネルギー1消費",
    nano_energy_recharging: "エネルギー充電中",
    nano_injecting_energy: "AIエネルギー注入中...",
    nano_generating: "生成中",
    nano_uploading_image: "画像アップロード中",
    nano_energy_depleted: "今時間のエネルギーが枯渇しました",
    nano_come_back_later: "後でもう一度お越しください",
    nano_dice: "🎲 インスピレーションダイス",
    
    // プロンプトジェネレーター
    prompt_generator_title: "プロフェッショナルプロンプトジェネレーター",
    prompt_generator_upload_ref: "参照画像をアップロード（任意）",
    prompt_generator_select_image: "画像を選択",
    prompt_generator_simple_desc: "作成したい画像を簡単に説明",
    prompt_generator_generate: "プロフェッショナルプロンプトを生成",
    prompt_generator_apply: "プロンプトに適用",
    prompt_generator_generated: "生成されたプロフェッショナルプロンプト",
    prompt_generator_tip: "💡 ヒント：左側の「アートスタイル」を選択すると、ジェネレーターがそのスタイル（サイバーパンク、水墨画など）を自動的にプロンプトにブレンドし、より芸術的な結果が得られます！",
    
    // 品質モード
    quality_economy: "エコノミー",
    quality_standard: "スタンダード",
    quality_ultra: "ウルトラHD",
    quality_economy_desc: "高速生成",
    quality_standard_desc: "品質と速度のバランス",
    quality_ultra_desc: "最高品質",
    
    // プロバイダー
    provider_pollinations: "Pollinations.ai (無料)",
    provider_infip: "Ghostbot (Infip) 🌟",
    
    // API Key
    api_key_label: "APIキー",
    api_key_desc: "ローカルに保存",
    api_key_placeholder: "ここにAPIキーを貼り付け",
    api_key_get_key: "無料キーを取得",
    
    // NSFW
    nsfw_label: "🔞 NSFWフィルターを無効化",
    nsfw_desc: "このオプションを有効にすると、成人向けコンテンツの生成が可能になります（Infipのみ）",
    
    // バッチ生成
    batch_label: "🖼️ バッチ生成",
    batch_size_label: "バッチサイズ",
    
    // エラーメッセージ
    error_no_prompt: "⚠️ プロンプトを入力してください",
    error_energy_depleted: "🚫 今時間のエネルギーが枯渇しました。後でもう一度お越しください！",
    error_image_too_large: "画像が大きすぎます！最大サイズは32MBです",
    error_invalid_file: "画像ファイルを選択してください",
    error_upload_failed: "アップロードに失敗しました",
    
    // 言語切り替え
    lang_switch: "EN / 简中",
    lang_zh: "简体中文",
    lang_en: "English",
    lang_ja: "日本語",
    lang_ko: "한국어",
    lang_ar: "العربية",
    lang_auto_detect: "🌐 システム言語を自動検出",
    lang_auto_detect_desc: "ブラウザの言語設定に基づいてインターフェース言語を自動的に切り替えます",
    
    // スタイルカテゴリ
    style_category_basic: "基本",
    style_category_illustration: "イラスト・アニメ",
    style_category_manga: "漫画スタイル",
    style_category_monochrome: "モノクロ",
    style_category_realistic: "フォトリアル",
    style_category_painting: "絵画スタイル",
    style_category_art_movement: "芸術運動",
    style_category_visual: "ビジュアルスタイル",
    style_category_digital: "デジタルスタイル",
    style_category_traditional: "伝統芸術",
    style_category_aesthetic: "美学スタイル",
    style_category_scifi: "SF",
    style_category_fantasy: "ファンタジー",
    
    // スタイル名
    style_none: "スタイルなし",
    style_anime: "アニメスタイル",
    style_ghibli: "ジブリ",
    style_manga: "日本の漫画",
    style_manga_color: "カラー漫画",
    style_american_comic: "アメリカンコミック",
    style_korean_webtoon: "韓国ウェブトゥーン",
    style_chibi: "ちびキャラ",
    style_black_white: "白黒",
    style_sketch: "スケッチ",
    style_ink_drawing: "水墨画",
    style_silhouette: "シルエット",
    style_charcoal: "木炭画",
    style_photorealistic: "フォトリアル",
    style_oil_painting: "油絵",
    style_watercolor: "水彩画",
    style_impressionism: "印象派",
    style_abstract: "抽象派",
    style_cubism: "キュビズム",
    style_surrealism: "シュルレアリスム",
    style_pop_art: "ポップアート",
    style_neon: "ネオン",
    style_vintage: "ヴィンテージ",
    style_steampunk: "スチームパンク",
    style_minimalist: "ミニマリズム",
    style_vaporwave: "ベイパーウェーブ",
    style_pixel_art: "ピクセルアート",
    style_low_poly: "ローポリ",
    style_3d_render: "3Dレンダリング",
    style_gradient: "グラデーション",
    style_glitch: "グリッチアート",
    style_ukiyo_e: "浮世絵",
    style_stained_glass: "ステンドグラス",
    style_paper_cut: "切り絵",
    style_gothic: "ゴシック",
    style_art_nouveau: "アールヌーボー",
    style_cyberpunk: "サイバーパンク",
    style_fantasy: "ファンタジースタイル"
  },
  
  // ====== 韩文 (ko) ======
  ko: {
    // 네비게이션
    nav_gen: "🎨 이미지 생성",
    nav_his: "📚 기록",
    nav_nano: "🍌 Nano",
    
    // 설정
    settings_title: "⚙️ 생성 설정",
    provider_label: "API 공급자",
    model_label: "모델 선택",
    size_label: "이미지 크기",
    style_label: "아트 스타일 🎨",
    quality_label: "품질 모드",
    seed_label: "시드 값",
    seed_random: "🎲 랜덤",
    seed_lock: "🔒 잠금",
    auto_opt_label: "✨ 자동 최적화",
    auto_opt_desc: "스텝 및 가이던스 자동 조정",
    adv_settings: "🛠️ 고급 설정",
    steps_label: "생성 스텝",
    guidance_label: "가이던스 스케일",
    
    // 버튼
    gen_btn: "🎨 생성 시작",
    btn_export: "📥 내보내기",
    btn_clear: "🗑️ 전체 삭제",
    btn_reuse: "🔄 설정 재사용",
    btn_dl: "💾 다운로드",
    
    // 프롬프트
    pos_prompt: "긍정적 프롬프트",
    neg_prompt: "부정적 프롬프트 (선택 사항)",
    ref_img: "참조 이미지 (Img2Img) 📸",
    
    // 상태 메시지
    empty_title: "아직 생성된 이미지가 없습니다",
    no_history: "기록이 없습니다",
    cooldown_msg: "⏳ 쿨다운을 기다려주세요...",
    generating: "생성 중...",
    
    // 통계
    stat_total: "📊 총 기록 수",
    stat_storage: "💾 저장 공간 (영구)",
    
    // Nano 버전
    nano_title: "🍌 NanoBanana Pro - 콘솔",
    nano_prompt: "프롬프트",
    nano_canvas_ratio: "캔버스 비율",
    nano_style_settings: "스타일 및 설정",
    nano_exclude: "제외",
    nano_energy_per_hour: "시간당 에너지",
    nano_consume_energy: "바나나 에너지 1 소모",
    nano_energy_recharging: "에너지 충전 중",
    nano_injecting_energy: "AI 에너지 주입 중...",
    nano_generating: "생성 중",
    nano_uploading_image: "이미지 업로드 중",
    nano_energy_depleted: "이번 시간 에너지가 소진되었습니다",
    nano_come_back_later: "나중에 다시 방문해주세요",
    nano_dice: "🎲 영감 주사위",
    
    // 프롬프트 생성기
    prompt_generator_title: "전문 프롬프트 생성기",
    prompt_generator_upload_ref: "참조 이미지 업로드 (선택 사항)",
    prompt_generator_select_image: "이미지 선택",
    prompt_generator_simple_desc: "원하는 이미지를 간단히 설명",
    prompt_generator_generate: "전문 프롬프트 생성",
    prompt_generator_apply: "프롬프트에 적용",
    prompt_generator_generated: "생성된 전문 프롬프트",
    prompt_generator_tip: "💡 팁: 왼쪽의 '아트 스타일'을 선택하면 생성기가 해당 스타일(사이버펑크, 수묵화 등)을 자동으로 프롬프트에 혼합하여 더 예술적인 결과를 얻을 수 있습니다!",
    
    // 품질 모드
    quality_economy: "이코노미",
    quality_standard: "스탠다드",
    quality_ultra: "울트라 HD",
    quality_economy_desc: "빠른 생성",
    quality_standard_desc: "품질과 속도의 균형",
    quality_ultra_desc: "최고 품질",
    
    // 공급자
    provider_pollinations: "Pollinations.ai (무료)",
    provider_infip: "Ghostbot (Infip) 🌟",
    
    // API Key
    api_key_label: "API 키",
    api_key_desc: "로컬에 저장",
    api_key_placeholder: "여기에 API 키를 붙여넣으세요",
    api_key_get_key: "무료 키 받기",
    
    // NSFW
    nsfw_label: "🔞 NSFW 필터 비활성화",
    nsfw_desc: "이 옵션을 활성화하면 성인 콘텐츠 생성이 허용됩니다 (Infip만 해당)",
    
    // 배치 생성
    batch_label: "🖼️ 배치 생성",
    batch_size_label: "배치 크기",
    
    // 오류 메시지
    error_no_prompt: "⚠️ 프롬프트를 입력하세요",
    error_energy_depleted: "🚫 이번 시간 에너지가 소진되었습니다. 나중에 다시 방문해주세요!",
    error_image_too_large: "이미지가 너무 큽니다! 최대 크기는 32MB입니다",
    error_invalid_file: "이미지 파일을 선택하세요",
    error_upload_failed: "업로드 실패",
    
    // 언어 전환
    lang_switch: "EN / 简中",
    lang_zh: "简体中文",
    lang_en: "English",
    lang_ja: "日本語",
    lang_ko: "한국어",
    lang_ar: "العربية",
    lang_auto_detect: "🌐 시스템 언어 자동 감지",
    lang_auto_detect_desc: "브라우저 언어 설정에 따라 인터페이스 언어를 자동으로 전환합니다",
    
    // 스타일 카테고리
    style_category_basic: "기본",
    style_category_illustration: "일러스트레이션 & 애니메이션",
    style_category_manga: "만화 스타일",
    style_category_monochrome: "단색",
    style_category_realistic: "포토리얼리즘",
    style_category_painting: "회화 스타일",
    style_category_art_movement: "예술 운동",
    style_category_visual: "비주얼 스타일",
    style_category_digital: "디지털 스타일",
    style_category_traditional: "전통 예술",
    style_category_aesthetic: "미학 스타일",
    style_category_scifi: "SF",
    style_category_fantasy: "판타지",
    
    // 스타일 이름
    style_none: "스타일 없음",
    style_anime: "애니메이션 스타일",
    style_ghibli: "지브리",
    style_manga: "일본 만화",
    style_manga_color: "컬러 만화",
    style_american_comic: "미국 만화",
    style_korean_webtoon: "한국 웹툰",
    style_chibi: "치비",
    style_black_white: "흑백",
    style_sketch: "스케치",
    style_ink_drawing: "수묵화",
    style_silhouette: "실루엣",
    style_charcoal: "목탄화",
    style_photorealistic: "포토리얼리즘",
    style_oil_painting: "유화",
    style_watercolor: "수채화",
    style_impressionism: "인상주의",
    style_abstract: "추상주의",
    style_cubism: "입체주의",
    style_surrealism: "초현실주의",
    style_pop_art: "팝 아트",
    style_neon: "네온",
    style_vintage: "빈티지",
    style_steampunk: "스팀펑크",
    style_minimalist: "미니멀리즘",
    style_vaporwave: "베이퍼웨이브",
    style_pixel_art: "픽셀 아트",
    style_low_poly: "로우 폴리",
    style_3d_render: "3D 렌더링",
    style_gradient: "그라데이션",
    style_glitch: "글리치 아트",
    style_ukiyo_e: "우키요에",
    style_stained_glass: "스테인드글라스",
    style_paper_cut: "종이 절기",
    style_gothic: "고딕",
    style_art_nouveau: "아르 누보",
    style_cyberpunk: "사이버펑크",
    style_fantasy: "판타지 스타일"
  },
  
  // ====== 阿拉伯语 (ar) - RTL ======
  ar: {
    // التنقل
    nav_gen: "🎨 إنشاء صورة",
    nav_his: "📚 السجل",
    nav_nano: "🍌 Nano",
    
    // الإعدادات
    settings_title: "⚙️ إعدادات الإنشاء",
    provider_label: "مزود API",
    model_label: "اختيار النموذج",
    size_label: "حجم الصورة",
    style_label: "النمط الفني 🎨",
    quality_label: "وضع الجودة",
    seed_label: "قيمة البذرة",
    seed_random: "🎲 عشوائي",
    seed_lock: "🔒 قفل",
    auto_opt_label: "✨ تحسين تلقائي",
    auto_opt_desc: "ضبط الخطوات والتوجيه تلقائيًا",
    adv_settings: "🛠️ إعدادات متقدمة",
    steps_label: "خطوات الإنشاء",
    guidance_label: "مقياس التوجيه",
    
    // الأزرار
    gen_btn: "🎨 بدء الإنشاء",
    btn_export: "📥 تصدير",
    btn_clear: "🗑️ مسح الكل",
    btn_reuse: "🔄 إعادة الاستخدام",
    btn_dl: "💾 تنزيل",
    
    // المطالبات
    pos_prompt: "موجه إيجابي",
    neg_prompt: "موجه سلبي (اختياري)",
    ref_img: "صورة مرجعية (Img2Img) 📸",
    
    // رسائل الحالة
    empty_title: "لم يتم إنشاء أي صور بعد",
    no_history: "لا توجد سجلات",
    cooldown_msg: "⏳ يرجى الانتظار...",
    generating: "جاري الإنشاء...",
    
    // الإحصائيات
    stat_total: "📊 إجمالي السجلات",
    stat_storage: "💾 مساحة التخزين (دائمة)",
    
    // إصدار Nano
    nano_title: "🍌 NanoBanana Pro - وحدة التحكم",
    nano_prompt: "موجه",
    nano_canvas_ratio: "نسبة اللوحة",
    nano_style_settings: "النمط والإعدادات",
    nano_exclude: "استبعاد",
    nano_energy_per_hour: "الطاقة لكل ساعة",
    nano_consume_energy: "استهلاك 1 طاقة موز",
    nano_energy_recharging: "إعادة شحن الطاقة",
    nano_injecting_energy: "حقن طاقة AI...",
    nano_generating: "جاري الإنشاء",
    nano_uploading_image: "رفع الصورة",
    nano_energy_depleted: "نفدت الطاقة لهذه الساعة",
    nano_come_back_later: "يرجى العودة لاحقًا",
    nano_dice: "🎲 نرد الإلهام",
    
    // مولد المطالبات
    prompt_generator_title: "مولد المطالبات الاحترافي",
    prompt_generator_upload_ref: "رفع صورة مرجعية (اختياري)",
    prompt_generator_select_image: "اختر صورة",
    prompt_generator_simple_desc: "صف الصورة التي تريدها ببساطة",
    prompt_generator_generate: "إنشاء موجه احترافي",
    prompt_generator_apply: "تطبيق على الموجه",
    prompt_generator_generated: "الموجه الاحترافي المُنشأ",
    prompt_generator_tip: "💡 نصيحة: بعد تحديد 'نمط فني' على اليسار، سيقوم المولد بدمج هذا النمط (مثل السايبربانك، الرسم بالحبر) تلقائيًا في موجهك للحصول على نتائج أكثر فنية!",
    
    // أوضاع الجودة
    quality_economy: "اقتصادي",
    quality_standard: "قياسي",
    quality_ultra: "فائق الدقة",
    quality_economy_desc: "إنشاء سريع",
    quality_standard_desc: "توازن الجودة والسرعة",
    quality_ultra_desc: "أقصى جودة",
    
    // المزودون
    provider_pollinations: "Pollinations.ai (مجاني)",
    provider_infip: "Ghostbot (Infip) 🌟",
    
    // مفتاح API
    api_key_label: "مفتاح API",
    api_key_desc: "مخزن محليًا",
    api_key_placeholder: "الصق مفتاح API هنا",
    api_key_get_key: "احصل على مفتاح مجاني من",
    
    // NSFW
    nsfw_label: "🔞 تعطيل فلتر NSFW",
    nsfw_desc: "تمكين هذا الخيار للسماح بإنشاء محتوى للبالغين (Infip فقط)",
    
    // الإنشاء المجموع
    batch_label: "🖼️ إنشاء مجموع",
    batch_size_label: "حجم المجموعة",
    
    // رسائل الخطأ
    error_no_prompt: "⚠️ يرجى إدخال موجه",
    error_energy_depleted: "🚫 نفدت الطاقة لهذه الساعة، يرجى العودة لاحقًا!",
    error_image_too_large: "الصورة كبيرة جدًا! الحد الأقصى 32 ميجابايت",
    error_invalid_file: "يرجى اختيار ملف صورة",
    error_upload_failed: "فشل الرفع",
    
    // تبديل اللغة
    lang_switch: "EN / 简中",
    lang_zh: "简体中文",
    lang_en: "English",
    lang_ja: "日本語",
    lang_ko: "한국어",
    lang_ar: "العربية",
    lang_auto_detect: "🌐 الكشف التلقائي عن لغة النظام",
    lang_auto_detect_desc: "التبديل التلقائي للغة الواجهة بناءً على لغة المتصفح",
    
    // فئات الأنماط
    style_category_basic: "أساسي",
    style_category_illustration: "الرسوم المتحركة",
    style_category_manga: "نمط المانغا",
    style_category_monochrome: "أحادي اللون",
    style_category_realistic: "واقعي",
    style_category_painting: "نمط الرسم",
    style_category_art_movement: "الحركة الفنية",
    style_category_visual: "النمط البصري",
    style_category_digital: "النمط الرقمي",
    style_category_traditional: "الفن التقليدي",
    style_category_aesthetic: "النمط الجمالي",
    style_category_scifi: "الخيال العلمي",
    style_category_fantasy: "الخيال",
    
    // أسماء الأنماط
    style_none: "بدون نمط",
    style_anime: "نمط الأنمي",
    style_ghibli: "جيبلي",
    style_manga: "مانغا يابانية",
    style_manga_color: "مانغا ملونة",
    style_american_comic: "كتاب هزلي أمريكي",
    style_korean_webtoon: "ويبتون كوري",
    style_chibi: "تشيبي",
    style_black_white: "أبيض وأسود",
    style_sketch: "رسم تخطيطي",
    style_ink_drawing: "رسم بالحبر",
    style_silhouette: "ظل",
    style_charcoal: "رسم بالفحم",
    style_photorealistic: "واقعي",
    style_oil_painting: "رسم بالزيت",
    style_watercolor: "رسم بالألوان المائية",
    style_impressionism: "الانطباعية",
    style_abstract: "تجريدي",
    style_cubism: "التكعيبية",
    style_surrealism: "السريالية",
    style_pop_art: "فن البوب",
    style_neon: "نيون",
    style_vintage: "عتيق",
    style_steampunk: "ستيمبانك",
    style_minimalist: "تقليلي",
    style_vaporwave: "فابورويف",
    style_pixel_art: "فن البكسل",
    style_low_poly: "متعدد الأضلاع المنخفض",
    style_3d_render: "عرض ثلاثي الأبعاد",
    style_gradient: "تدرج",
    style_glitch: "فن الخلل",
    style_ukiyo_e: "أوكييو-إي",
    style_stained_glass: "زجاج ملون",
    style_paper_cut: "قص الورق",
    style_gothic: "قوطي",
    style_art_nouveau: "الفن الجديد",
    style_cyberpunk: "سايبربانك",
    style_fantasy: "نمط الخيال"
  },
  
  // ====== 法语 (fr) ======
  fr: {
    // Navigation
    nav_gen: "🎨 Générer une image",
    nav_his: "📚 Historique",
    nav_nano: "🍌 Nano",
    
    // Settings
    settings_title: "⚙️ Paramètres de génération",
    provider_label: "Fournisseur API",
    model_label: "Sélection du modèle",
    size_label: "Taille de l'image",
    style_label: "Style artistique 🎨",
    quality_label: "Mode qualité",
    seed_label: "Valeur de graine",
    seed_random: "🎲 Aléatoire",
    seed_lock: "🔒 Verrouiller",
    auto_opt_label: "✨ Optimisation automatique",
    auto_opt_desc: "Ajuster automatiquement les étapes et le guidage",
    adv_settings: "🛠️ Paramètres avancés",
    steps_label: "Étapes de génération",
    guidance_label: "Échelle de guidage",
    
    // Buttons
    gen_btn: "🎨 Commencer la génération",
    btn_export: "📥 Exporter",
    btn_clear: "🗑️ Effacer tout",
    btn_reuse: "🔄 Réutiliser les paramètres",
    btn_dl: "💾 Télécharger",
    
    // Prompts
    pos_prompt: "Invite positive",
    neg_prompt: "Invite négative (Facultatif)",
    ref_img: "Image de référence (Img2Img) 📸",
    
    // Status Messages
    empty_title: "Aucune image générée pour le moment",
    no_history: "Aucun historique trouvé",
    cooldown_msg: "⏳ Veuillez attendre le temps de recharge...",
    generating: "Génération en cours...",
    
    // Statistics
    stat_total: "📊 Total des enregistrements",
    stat_storage: "💾 Espace de stockage (Permanent)",
    
    // Nano Version
    nano_title: "🍌 NanoBanana Pro - Console",
    nano_prompt: "Invite",
    nano_canvas_ratio: "Ratio du canevas",
    nano_style_settings: "Style et paramètres",
    nano_exclude: "Exclure",
    nano_energy_per_hour: "Énergie par heure",
    nano_consume_energy: "Consommer 1 Énergie de banane",
    nano_energy_recharging: "Recharge d'énergie",
    nano_injecting_energy: "Injection d'énergie IA...",
    nano_generating: "Génération",
    nano_uploading_image: "Téléchargement de l'image",
    nano_energy_depleted: "Énergie épuisée cette heure",
    nano_come_back_later: "Veuillez revenir plus tard",
    nano_dice: "🎲 Dé d'inspiration",
    
    // Prompt Generator
    prompt_generator_title: "Générateur d'invite professionnel",
    prompt_generator_upload_ref: "Télécharger une image de référence (Facultatif)",
    prompt_generator_select_image: "Sélectionner une image",
    prompt_generator_simple_desc: "Décrivez simplement l'image que vous voulez",
    prompt_generator_generate: "Générer une invite professionnelle",
    prompt_generator_apply: "Appliquer à l'invite",
    prompt_generator_generated: "Invite professionnelle générée",
    prompt_generator_tip: "💡 Astuce : Après avoir sélectionné un 'Style artistique' à gauche, le générateur fusionnera automatiquement ce style (par exemple, cyberpunk, lavis) dans votre invite pour des résultats plus artistiques !",
    
    // Quality Modes
    quality_economy: "Économique",
    quality_standard: "Standard",
    quality_ultra: "Ultra HD",
    quality_economy_desc: "Génération rapide",
    quality_standard_desc: "Équilibre qualité et vitesse",
    quality_ultra_desc: "Qualité maximale",
    
    // Providers
    provider_pollinations: "Pollinations.ai (Gratuit)",
    provider_infip: "Ghostbot (Infip) 🌟",
    
    // API Key
    api_key_label: "Clé API",
    api_key_desc: "Stockée localement",
    api_key_placeholder: "Collez votre clé API ici",
    api_key_get_key: "Obtenir une clé gratuite depuis",
    
    // NSFW
    nsfw_label: "🔞 Désactiver le filtre NSFW",
    nsfw_desc: "Activer cette option permet de générer du contenu adulte (Infip uniquement)",
    
    // Batch Generation
    batch_label: "🖼️ Génération par lots",
    batch_size_label: "Taille du lot",
    
    // Error Messages
    error_no_prompt: "⚠️ Veuillez entrer une invite",
    error_energy_depleted: "🚫 Énergie épuisée cette heure, veuillez revenir plus tard !",
    error_image_too_large: "Image trop grande ! Taille max 32 Mo",
    error_invalid_file: "Veuillez sélectionner un fichier image",
    error_upload_failed: "Échec du téléchargement",
    
    // Language Switch
    lang_switch: "EN / 简中",
    lang_zh: "简体中文",
    lang_en: "English",
    lang_ja: "日本語",
    lang_ko: "한국어",
    lang_ar: "العربية",
    lang_auto_detect: "🌐 Détection automatique de la langue système",
    lang_auto_detect_desc: "Changer automatiquement la langue de l'interface selon la langue du navigateur",
    
    // Style Categories
    style_category_basic: "Basique",
    style_category_illustration: "Illustration et animation",
    style_category_manga: "Style manga",
    style_category_monochrome: "Monochrome",
    style_category_realistic: "Photoréaliste",
    style_category_painting: "Style peinture",
    style_category_art_movement: "Mouvement artistique",
    style_category_visual: "Style visuel",
    style_category_digital: "Style numérique",
    style_category_traditional: "Art traditionnel",
    style_category_aesthetic: "Style esthétique",
    style_category_scifi: "Science-fiction",
    style_category_fantasy: "Fantaisie",
    
    // Style Names
    style_none: "Pas de style",
    style_anime: "Style animé",
    style_ghibli: "Ghibli",
    style_manga: "Manga japonais",
    style_manga_color: "Manga coloré",
    style_american_comic: "Bande dessinée américaine",
    style_korean_webtoon: "Webtoon coréen",
    style_chibi: "Chibi",
    style_black_white: "Noir et blanc",
    style_sketch: "Croquis",
    style_ink_drawing: "Lavis",
    style_silhouette: "Silhouette",
    style_charcoal: "Fusain",
    style_photorealistic: "Photoréaliste",
    style_oil_painting: "Peinture à l'huile",
    style_watercolor: "Aquarelle",
    style_impressionism: "Impressionnisme",
    style_abstract: "Abstrait",
    style_cubism: "Cubisme",
    style_surrealism: "Surréalisme",
    style_pop_art: "Art pop",
    style_neon: "Néon",
    style_vintage: "Vintage",
    style_steampunk: "Steampunk",
    style_minimalist: "Minimaliste",
    style_vaporwave: "Vaporwave",
    style_pixel_art: "Art pixelisé",
    style_low_poly: "Low poly",
    style_3d_render: "Rendu 3D",
    style_gradient: "Dégradé",
    style_glitch: "Art glitch",
    style_ukiyo_e: "Ukiyo-e",
    style_stained_glass: "Vitrail",
    style_paper_cut: "Papier découpé",
    style_gothic: "Gothique",
    style_art_nouveau: "Art nouveau",
    style_cyberpunk: "Cyberpunk",
    style_fantasy: "Style fantastique"
  },

  // ====== 德语 (de) ======
  de: {
    // Navigation
    nav_gen: "🎨 Bild generieren",
    nav_his: "📚 Verlauf",
    nav_nano: "🍌 Nano",
    
    // Settings
    settings_title: "⚙️ Generierungseinstellungen",
    provider_label: "API-Anbieter",
    model_label: "Modellauswahl",
    size_label: "Bildgröße",
    style_label: "Kunststil 🎨",
    quality_label: "Qualitätsmodus",
    seed_label: "Seed-Wert",
    seed_random: "🎲 Zufällig",
    seed_lock: "🔒 Sperren",
    auto_opt_label: "✨ Automatische Optimierung",
    auto_opt_desc: "Automatische Anpassung von Schritten und Führung",
    adv_settings: "🛠️ Erweiterte Einstellungen",
    steps_label: "Generierungsschritte",
    guidance_label: "Führungsskala",
    
    // Buttons
    gen_btn: "🎨 Generierung starten",
    btn_export: "📥 Exportieren",
    btn_clear: "🗑️ Alles löschen",
    btn_reuse: "🔄 Einstellungen wiederverwenden",
    btn_dl: "💾 Herunterladen",
    
    // Prompts
    pos_prompt: "Positiver Prompt",
    neg_prompt: "Negativer Prompt (Optional)",
    ref_img: "Referenzbild (Img2Img) 📸",
    
    // Status Messages
    empty_title: "Noch keine Bilder generiert",
    no_history: "Kein Verlauf gefunden",
    cooldown_msg: "⏳ Bitte warten Sie auf die Abkühlzeit...",
    generating: "Wird generiert...",
    
    // Statistics
    stat_total: "📊 Gesamteinträge",
    stat_storage: "💾 Speicherplatz (Permanent)",
    
    // Nano Version
    nano_title: "🍌 NanoBanana Pro - Konsole",
    nano_prompt: "Prompt",
    nano_canvas_ratio: "Leinwandverhältnis",
    nano_style_settings: "Stil und Einstellungen",
    nano_exclude: "Ausschließen",
    nano_energy_per_hour: "Energie pro Stunde",
    nano_consume_energy: "1 Bananenenergie verbrauchen",
    nano_energy_recharging: "Energie lädt sich nach",
    nano_injecting_energy: "KI-Energie wird injiziert...",
    nano_generating: "Wird generiert",
    nano_uploading_image: "Bild wird hochgeladen",
    nano_energy_depleted: "Energie in dieser Stunde erschöpft",
    nano_come_back_later: "Bitte kommen Sie später wieder",
    nano_dice: "🎲 Inspirationswürfel",
    
    // Prompt Generator
    prompt_generator_title: "Professioneller Prompt-Generator",
    prompt_generator_upload_ref: "Referenzbild hochladen (Optional)",
    prompt_generator_select_image: "Bild auswählen",
    prompt_generator_simple_desc: "Beschreiben Sie einfach das gewünschte Bild",
    prompt_generator_generate: "Professionellen Prompt generieren",
    prompt_generator_apply: "Auf Prompt anwenden",
    prompt_generator_generated: "Generierter professioneller Prompt",
    prompt_generator_tip: "💡 Tipp: Nach Auswahl eines 'Kunststils' links, fügt der Generator diesen Stil automatisch (z.B. Cyberpunk, Tusche) Ihrem Prompt hinzu für künstlerischere Ergebnisse!",
    
    // Quality Modes
    quality_economy: "Economy",
    quality_standard: "Standard",
    quality_ultra: "Ultra HD",
    quality_economy_desc: "Schnelle Generierung",
    quality_standard_desc: "Ausgewogene Qualität & Geschwindigkeit",
    quality_ultra_desc: "Maximale Qualität",
    
    // Providers
    provider_pollinations: "Pollinations.ai (Kostenlos)",
    provider_infip: "Ghostbot (Infip) 🌟",
    
    // API Key
    api_key_label: "API-Schlüssel",
    api_key_desc: "Lokal gespeichert",
    api_key_placeholder: "Fügen Sie Ihren API-Schlüssel hier ein",
    api_key_get_key: "Kostenlosen Schlüssel erhalten von",
    
    // NSFW
    nsfw_label: "🔞 NSFW-Filter deaktivieren",
    nsfw_desc: "Aktivieren Sie diese Option, um die Generierung von Inhalten für Erwachsene zu erlauben (nur Infip)",
    
    // Batch Generation
    batch_label: "🖼️ Stapelgenerierung",
    batch_size_label: "Stapelgröße",
    
    // Error Messages
    error_no_prompt: "⚠️ Bitte geben Sie einen Prompt ein",
    error_energy_depleted: "🚫 Energie in dieser Stunde erschöpft, bitte kommen Sie später wieder!",
    error_image_too_large: "Bild zu groß! Maximale Größe 32 MB",
    error_invalid_file: "Bitte wählen Sie eine Bilddatei aus",
    error_upload_failed: "Upload fehlgeschlagen",
    
    // Language Switch
    lang_switch: "EN / 简中",
    lang_zh: "简体中文",
    lang_en: "English",
    lang_ja: "日本語",
    lang_ko: "한국어",
    lang_ar: "العربية",
    lang_auto_detect: "🌐 Systemsprache automatisch erkennen",
    lang_auto_detect_desc: "Automatischer Wechsel der Oberflächensprache basierend auf der Browsersprache",
    
    // Style Categories
    style_category_basic: "Grundlegend",
    style_category_illustration: "Illustration & Animation",
    style_category_manga: "Manga-Stil",
    style_category_monochrome: "Einfarbig",
    style_category_realistic: "Photorealistisch",
    style_category_painting: "Malstil",
    style_category_art_movement: "Kunstbewegung",
    style_category_visual: "Visueller Stil",
    style_category_digital: "Digitaler Stil",
    style_category_traditional: "Traditionelle Kunst",
    style_category_aesthetic: "Ästhetischer Stil",
    style_category_scifi: "Science-Fiction",
    style_category_fantasy: "Fantasy",
    
    // Style Names
    style_none: "Kein Stil",
    style_anime: "Anime-Stil",
    style_ghibli: "Ghibli",
    style_manga: "Japanischer Manga",
    style_manga_color: "Farbiger Manga",
    style_american_comic: "Amerikanischer Comic",
    style_korean_webtoon: "Koreanischer Webtoon",
    style_chibi: "Chibi",
    style_black_white: "Schwarz-Weiß",
    style_sketch: "Skizze",
    style_ink_drawing: "Tuschezeichnung",
    style_silhouette: "Silhouette",
    style_charcoal: "Kohlezeichnung",
    style_photorealistic: "Photorealistisch",
    style_oil_painting: "Ölgemälde",
    style_watercolor: "Aquarell",
    style_impressionism: "Impressionismus",
    style_abstract: "Abstrakt",
    style_cubism: "Kubismus",
    style_surrealism: "Surrealismus",
    style_pop_art: "Pop-Art",
    style_neon: "Neon",
    style_vintage: "Vintage",
    style_steampunk: "Steampunk",
    style_minimalist: "Minimalistisch",
    style_vaporwave: "Vaporwave",
    style_pixel_art: "Pixel-Art",
    style_low_poly: "Low-Poly",
    style_3d_render: "3D-Rendering",
    style_gradient: "Verlauf",
    style_glitch: "Glitch-Art",
    style_ukiyo_e: "Ukiyo-e",
    style_stained_glass: "Buntglas",
    style_paper_cut: "Papierschnitt",
    style_gothic: "Gothic",
    style_art_nouveau: "Art Nouveau",
    style_cyberpunk: "Cyberpunk",
    style_fantasy: "Fantasystil"
  },

  // ====== 西班牙语 (es) ======
  es: {
    // Navegación
    nav_gen: "🎨 Generar imagen",
    nav_his: "📚 Historial",
    nav_nano: "🍌 Nano",
    
    // Configuración
    settings_title: "⚙️ Configuración de generación",
    provider_label: "Proveedor de API",
    model_label: "Selección de modelo",
    size_label: "Tamaño de imagen",
    style_label: "Estilo artístico 🎨",
    quality_label: "Modo de calidad",
    seed_label: "Valor de semilla",
    seed_random: "🎲 Aleatorio",
    seed_lock: "🔒 Bloquear",
    auto_opt_label: "✨ Optimización automática",
    auto_opt_desc: "Ajustar automáticamente pasos y guía",
    adv_settings: "🛠️ Configuración avanzada",
    steps_label: "Pasos de generación",
    guidance_label: "Escala de guía",
    
    // Botones
    gen_btn: "🎨 Comenzar generación",
    btn_export: "📥 Exportar",
    btn_clear: "🗑️ Limpiar todo",
    btn_reuse: "🔄 Reutilizar configuración",
    btn_dl: "💾 Descargar",
    
    // Indicaciones
    pos_prompt: "Indicación positiva",
    neg_prompt: "Indicación negativa (Opcional)",
    ref_img: "Imagen de referencia (Img2Img) 📸",
    
    // Mensajes de estado
    empty_title: "Aún no se han generado imágenes",
    no_history: "No se encontraron registros históricos",
    cooldown_msg: "⏳ Espere el tiempo de enfriamiento...",
    generating: "Generando...",
    
    // Estadísticas
    stat_total: "📊 Total de registros",
    stat_storage: "💾 Espacio de almacenamiento (Permanente)",
    
    // Versión Nano
    nano_title: "🍌 NanoBanana Pro - Consola",
    nano_prompt: "Indicación",
    nano_canvas_ratio: "Relación del lienzo",
    nano_style_settings: "Estilo y configuración",
    nano_exclude: "Excluir",
    nano_energy_per_hour: "Energía por hora",
    nano_consume_energy: "Consumir 1 Energía de plátano",
    nano_energy_recharging: "Recarga de energía",
    nano_injecting_energy: "Inyectando energía de IA...",
    nano_generating: "Generando",
    nano_uploading_image: "Subiendo imagen",
    nano_energy_depleted: "Energía agotada esta hora",
    nano_come_back_later: "Por favor, regrese más tarde",
    nano_dice: "🎲 Dado de inspiración",
    
    // Generador de indicaciones
    prompt_generator_title: "Generador de indicaciones profesional",
    prompt_generator_upload_ref: "Subir imagen de referencia (Opcional)",
    prompt_generator_select_image: "Seleccionar imagen",
    prompt_generator_simple_desc: "Describa simplemente la imagen que desea",
    prompt_generator_generate: "Generar indicación profesional",
    prompt_generator_apply: "Aplicar a la indicación",
    prompt_generator_generated: "Indicación profesional generada",
    prompt_generator_tip: "💡 Consejo: Después de seleccionar un 'Estilo artístico' a la izquierda, el generador fusionará automáticamente ese estilo (por ejemplo, ciberpunk, acuarela) en su indicación para resultados más artísticos!",
    
    // Modos de calidad
    quality_economy: "Económico",
    quality_standard: "Estándar",
    quality_ultra: "Ultra HD",
    quality_economy_desc: "Generación rápida",
    quality_standard_desc: "Equilibrio calidad y velocidad",
    quality_ultra_desc: "Calidad máxima",
    
    // Proveedores
    provider_pollinations: "Pollinations.ai (Gratis)",
    provider_infip: "Ghostbot (Infip) 🌟",
    
    // Clave API
    api_key_label: "Clave API",
    api_key_desc: "Almacenada localmente",
    api_key_placeholder: "Pegue su clave API aquí",
    api_key_get_key: "Obtener clave gratuita de",
    
    // NSFW
    nsfw_label: "🔞 Desactivar filtro NSFW",
    nsfw_desc: "Habilite esta opción para permitir la generación de contenido para adultos (solo Infip)",
    
    // Generación por lotes
    batch_label: "🖼️ Generación por lotes",
    batch_size_label: "Tamaño del lote",
    
    // Mensajes de error
    error_no_prompt: "⚠️ Por favor ingrese una indicación",
    error_energy_depleted: "🚫 Energía agotada esta hora, ¡por favor regrese más tarde!",
    error_image_too_large: "¡Imagen demasiado grande! Tamaño máximo 32 MB",
    error_invalid_file: "Por favor seleccione un archivo de imagen",
    error_upload_failed: "Error al subir",
    
    // Cambio de idioma
    lang_switch: "EN / 简中",
    lang_zh: "简体中文",
    lang_en: "English",
    lang_ja: "日本語",
    lang_ko: "한국어",
    lang_ar: "العربية",
    lang_auto_detect: "🌐 Detectar automáticamente idioma del sistema",
    lang_auto_detect_desc: "Cambiar automáticamente el idioma de la interfaz según el idioma del navegador",
    
    // Categorías de estilo
    style_category_basic: "Básico",
    style_category_illustration: "Ilustración y animación",
    style_category_manga: "Estilo manga",
    style_category_monochrome: "Monocromo",
    style_category_realistic: "Fotorrealista",
    style_category_painting: "Estilo de pintura",
    style_category_art_movement: "Movimiento artístico",
    style_category_visual: "Estilo visual",
    style_category_digital: "Estilo digital",
    style_category_traditional: "Arte tradicional",
    style_category_aesthetic: "Estilo estético",
    style_category_scifi: "Ciencia ficción",
    style_category_fantasy: "Fantasía",
    
    // Nombres de estilo
    style_none: "Sin estilo",
    style_anime: "Estilo anime",
    style_ghibli: "Ghibli",
    style_manga: "Manga japonés",
    style_manga_color: "Manga coloreado",
    style_american_comic: "Cómic americano",
    style_korean_webtoon: "Webtoon coreano",
    style_chibi: "Chibi",
    style_black_white: "Blanco y negro",
    style_sketch: "Boceto",
    style_ink_drawing: "Acuarela",
    style_silhouette: "Silueta",
    style_charcoal: "Carbón",
    style_photorealistic: "Fotorrealista",
    style_oil_painting: "Pintura al óleo",
    style_watercolor: "Acuarela",
    style_impressionism: "Impresionismo",
    style_abstract: "Abstracto",
    style_cubism: "Cubismo",
    style_surrealism: "Surrealismo",
    style_pop_art: "Arte pop",
    style_neon: "Neón",
    style_vintage: "Vintage",
    style_steampunk: "Steampunk",
    style_minimalist: "Minimalista",
    style_vaporwave: "Vaporwave",
    style_pixel_art: "Arte de píxeles",
    style_low_poly: "Baja poligonización",
    style_3d_render: "Renderizado 3D",
    style_gradient: "Gradiente",
    style_glitch: "Arte glitch",
    style_ukiyo_e: "Ukiyo-e",
    style_stained_glass: "Vitral",
    style_paper_cut: "Corte de papel",
    style_gothic: "Gótico",
    style_art_nouveau: "Art nouveau",
    style_cyberpunk: "Cyberpunk",
    style_fantasy: "Estilo fantástico"
  },

  // ====== 俄语 (ru) ======
  ru: {
    // Навигация
    nav_gen: "🎨 Создать изображение",
    nav_his: "📚 История",
    nav_nano: "🍌 Nano",
    
    // Настройки
    settings_title: "⚙️ Параметры генерации",
    provider_label: "Поставщик API",
    model_label: "Выбор модели",
    size_label: "Размер изображения",
    style_label: "Художественный стиль 🎨",
    quality_label: "Режим качества",
    seed_label: "Значение зерна",
    seed_random: "🎲 Случайно",
    seed_lock: "🔒 Заблокировать",
    auto_opt_label: "✨ Автооптимизация",
    auto_opt_desc: "Автоматическая настройка шагов и указаний",
    adv_settings: "🛠️ Расширенные настройки",
    steps_label: "Шаги генерации",
    guidance_label: "Масштаб указаний",
    
    // Кнопки
    gen_btn: "🎨 Начать генерацию",
    btn_export: "📥 Экспорт",
    btn_clear: "🗑️ Очистить все",
    btn_reuse: "🔄 Повторное использование настроек",
    btn_dl: "💾 Скачать",
    
    // Подсказки
    pos_prompt: "Позитивная подсказка",
    neg_prompt: "Негативная подсказка (Необязательно)",
    ref_img: "Опорное изображение (Img2Img) 📸",
    
    // Сообщения о статусе
    empty_title: "Изображения еще не созданы",
    no_history: "История не найдена",
    cooldown_msg: "⏳ Подождите время охлаждения...",
    generating: "Создание...",
    
    // Статистика
    stat_total: "📊 Всего записей",
    stat_storage: "💾 Место хранения (Постоянное)",
    
    // Версия Nano
    nano_title: "🍌 NanoBanana Pro - Консоль",
    nano_prompt: "Подсказка",
    nano_canvas_ratio: "Соотношение сторон холста",
    nano_style_settings: "Стиль и настройки",
    nano_exclude: "Исключить",
    nano_energy_per_hour: "Энергия в час",
    nano_consume_energy: "Потребить 1 Банановую энергию",
    nano_energy_recharging: "Перезарядка энергии",
    nano_injecting_energy: "Впрыскивание ИИ-энергии...",
    nano_generating: "Создание",
    nano_uploading_image: "Загрузка изображения",
    nano_energy_depleted: "Энергия исчерпана за этот час",
    nano_come_back_later: "Пожалуйста, зайдите позже",
    nano_dice: "🎲 Кость вдохновения",
    
    // Генератор подсказок
    prompt_generator_title: "Профессиональный генератор подсказок",
    prompt_generator_upload_ref: "Загрузить опорное изображение (Необязательно)",
    prompt_generator_select_image: "Выбрать изображение",
    prompt_generator_simple_desc: "Просто опишите нужное изображение",
    prompt_generator_generate: "Сгенерировать профессиональную подсказку",
    prompt_generator_apply: "Применить к подсказке",
    prompt_generator_generated: "Сгенерированная профессиональная подсказка",
    prompt_generator_tip: "💡 Совет: После выбора 'Художественного стиля' слева, генератор автоматически смешает этот стиль (например, киберпанк, акварель) с вашей подсказкой для получения более художественных результатов!",
    
    // Режимы качества
    quality_economy: "Экономичный",
    quality_standard: "Стандартный",
    quality_ultra: "Ультра HD",
    quality_economy_desc: "Быстрое создание",
    quality_standard_desc: "Баланс качества и скорости",
    quality_ultra_desc: "Максимальное качество",
    
    // Поставщики
    provider_pollinations: "Pollinations.ai (Бесплатно)",
    provider_infip: "Ghostbot (Infip) 🌟",
    
    // Ключ API
    api_key_label: "Ключ API",
    api_key_desc: "Хранится локально",
    api_key_placeholder: "Вставьте свой ключ API здесь",
    api_key_get_key: "Получить бесплатный ключ от",
    
    // NSFW
    nsfw_label: "🔞 Отключить фильтр NSFW",
    nsfw_desc: "Включите эту опцию, чтобы разрешить генерацию контента для взрослых (только Infip)",
    
    // Пакетное создание
    batch_label: "🖼️ Пакетное создание",
    batch_size_label: "Размер пакета",
    
    // Сообщения об ошибках
    error_no_prompt: "⚠️ Пожалуйста, введите подсказку",
    error_energy_depleted: "🚫 Энергия исчерпана за этот час, пожалуйста, зайдите позже!",
    error_image_too_large: "Изображение слишком большое! Макс. размер 32 МБ",
    error_invalid_file: "Пожалуйста, выберите файл изображения",
    error_upload_failed: "Ошибка загрузки",
    
    // Переключение языка
    lang_switch: "EN / 简中",
    lang_zh: "简体中文",
    lang_en: "English",
    lang_ja: "日本語",
    lang_ko: "한국어",
    lang_ar: "العربية",
    lang_auto_detect: "🌐 Автоопределение системного языка",
    lang_auto_detect_desc: "Автоматическое переключение языка интерфейса в зависимости от языка браузера",
    
    // Категории стилей
    style_category_basic: "Базовый",
    style_category_illustration: "Иллюстрация и анимация",
    style_category_manga: "Стиль манги",
    style_category_monochrome: "Монохром",
    style_category_realistic: "Фотореалистичный",
    style_category_painting: "Стиль живописи",
    style_category_art_movement: "Художественное движение",
    style_category_visual: "Визуальный стиль",
    style_category_digital: "Цифровой стиль",
    style_category_traditional: "Традиционное искусство",
    style_category_aesthetic: "Эстетический стиль",
    style_category_scifi: "Научная фантастика",
    style_category_fantasy: "Фэнтези",
    
    // Названия стилей
    style_none: "Без стиля",
    style_anime: "Аниме-стиль",
    style_ghibli: "Гибли",
    style_manga: "Японская манга",
    style_manga_color: "Цветная манга",
    style_american_comic: "Американский комикс",
    style_korean_webtoon: "Корейский вебтун",
    style_chibi: "Чиби",
    style_black_white: "Черно-белый",
    style_sketch: "Эскиз",
    style_ink_drawing: "Тушь",
    style_silhouette: "Силуэт",
    style_charcoal: "Уголь",
    style_photorealistic: "Фотореалистичный",
    style_oil_painting: "Масляная живопись",
    style_watercolor: "Акварель",
    style_impressionism: "Импрессионизм",
    style_abstract: "Абстрактный",
    style_cubism: "Кубизм",
    style_surrealism: "Сюрреализм",
    style_pop_art: "Поп-арт",
    style_neon: "Неон",
    style_vintage: "Винтаж",
    style_steampunk: "Стимпанк",
    style_minimalist: "Минимализм",
    style_vaporwave: "Вейпорвейв",
    style_pixel_art: "Пиксель-арт",
    style_low_poly: "Низкополигональный",
    style_3d_render: "3D-рендеринг",
    style_gradient: "Градиент",
    style_glitch: "Глитч-арт",
    style_ukiyo_e: "Укиё-э",
    style_stained_glass: "Витраж",
    style_paper_cut: "Бумажная резьба",
    style_gothic: "Готика",
    style_art_nouveau: "Модерн",
    style_cyberpunk: "Киберпанк",
    style_fantasy: "Фэнтезийный стиль"
  },

  // ====== 葡萄牙语 (pt) ======
  pt: {
    // Navegação
    nav_gen: "🎨 Gerar imagem",
    nav_his: "📚 Histórico",
    nav_nano: "🍌 Nano",
    
    // Configurações
    settings_title: "⚙️ Configurações de geração",
    provider_label: "Provedor de API",
    model_label: "Seleção de modelo",
    size_label: "Tamanho da imagem",
    style_label: "Estilo artístico 🎨",
    quality_label: "Modo de qualidade",
    seed_label: "Valor semente",
    seed_random: "🎲 Aleatório",
    seed_lock: "🔒 Bloquear",
    auto_opt_label: "✨ Otimização automática",
    auto_opt_desc: "Ajustar automaticamente etapas e orientação",
    adv_settings: "🛠️ Configurações avançadas",
    steps_label: "Etapas de geração",
    guidance_label: "Escala de orientação",
    
    // Botões
    gen_btn: "🎨 Iniciar geração",
    btn_export: "📥 Exportar",
    btn_clear: "🗑️ Limpar tudo",
    btn_reuse: "🔄 Reutilizar configurações",
    btn_dl: "💾 Baixar",
    
    // Prompts
    pos_prompt: "Prompt positivo",
    neg_prompt: "Prompt negativo (Opcional)",
    ref_img: "Imagem de referência (Img2Img) 📸",
    
    // Mensagens de status
    empty_title: "Nenhuma imagem gerada ainda",
    no_history: "Nenhum registro histórico encontrado",
    cooldown_msg: "⏳ Aguarde o tempo de espera...",
    generating: "Gerando...",
    
    // Estatísticas
    stat_total: "📊 Total de registros",
    stat_storage: "💾 Espaço de armazenamento (Permanente)",
    
    // Versão Nano
    nano_title: "🍌 NanoBanana Pro - Console",
    nano_prompt: "Prompt",
    nano_canvas_ratio: "Proporção da tela",
    nano_style_settings: "Estilo e configurações",
    nano_exclude: "Excluir",
    nano_energy_per_hour: "Energia por hora",
    nano_consume_energy: "Consumir 1 Energia de banana",
    nano_energy_recharging: "Recarga de energia",
    nano_injecting_energy: "Injetando energia de IA...",
    nano_generating: "Gerando",
    nano_uploading_image: "Fazendo upload da imagem",
    nano_energy_depleted: "Energia esgotada nesta hora",
    nano_come_back_later: "Por favor, volte mais tarde",
    nano_dice: "🎲 Dado de inspiração",
    
    // Gerador de prompts
    prompt_generator_title: "Gerador profissional de prompts",
    prompt_generator_upload_ref: "Fazer upload de imagem de referência (Opcional)",
    prompt_generator_select_image: "Selecionar imagem",
    prompt_generator_simple_desc: "Descreva simplesmente a imagem que deseja",
    prompt_generator_generate: "Gerar prompt profissional",
    prompt_generator_apply: "Aplicar ao prompt",
    prompt_generator_generated: "Prompt profissional gerado",
    prompt_generator_tip: "💡 Dica: Após selecionar um 'Estilo artístico' à esquerda, o gerador irá automaticamente misturar esse estilo (por exemplo, cyberpunk, aquarela) ao seu prompt para resultados mais artísticos!",
    
    // Modos de qualidade
    quality_economy: "Econômico",
    quality_standard: "Padrão",
    quality_ultra: "Ultra HD",
    quality_economy_desc: "Geração rápida",
    quality_standard_desc: "Equilíbrio entre qualidade e velocidade",
    quality_ultra_desc: "Qualidade máxima",
    
    // Provedores
    provider_pollinations: "Pollinations.ai (Grátis)",
    provider_infip: "Ghostbot (Infip) 🌟",
    
    // Chave API
    api_key_label: "Chave API",
    api_key_desc: "Armazenada localmente",
    api_key_placeholder: "Cole sua chave API aqui",
    api_key_get_key: "Obter chave gratuita de",
    
    // NSFW
    nsfw_label: "🔞 Desativar filtro NSFW",
    nsfw_desc: "Ative esta opção para permitir a geração de conteúdo adulto (somente Infip)",
    
    // Geração em lote
    batch_label: "🖼️ Geração em lote",
    batch_size_label: "Tamanho do lote",
    
    // Mensagens de erro
    error_no_prompt: "⚠️ Por favor, insira um prompt",
    error_energy_depleted: "🚫 Energia esgotada nesta hora, por favor volte mais tarde!",
    error_image_too_large: "Imagem muito grande! Tamanho máx. 32 MB",
    error_invalid_file: "Por favor, selecione um arquivo de imagem",
    error_upload_failed: "Falha no upload",
    
    // Alternância de idioma
    lang_switch: "EN / 简中",
    lang_zh: "简体中文",
    lang_en: "English",
    lang_ja: "日本語",
    lang_ko: "한국어",
    lang_ar: "العربية",
    lang_auto_detect: "🌐 Detectar automaticamente idioma do sistema",
    lang_auto_detect_desc: "Alternar automaticamente o idioma da interface com base no idioma do navegador",
    
    // Categorias de estilo
    style_category_basic: "Básico",
    style_category_illustration: "Ilustração e animação",
    style_category_manga: "Estilo mangá",
    style_category_monochrome: "Monocromático",
    style_category_realistic: "Fotorrealista",
    style_category_painting: "Estilo de pintura",
    style_category_art_movement: "Movimento artístico",
    style_category_visual: "Estilo visual",
    style_category_digital: "Estilo digital",
    style_category_traditional: "Arte tradicional",
    style_category_aesthetic: "Estilo estético",
    style_category_scifi: "Ficção científica",
    style_category_fantasy: "Fantasia",
    
    // Nomes de estilo
    style_none: "Sem estilo",
    style_anime: "Estilo anime",
    style_ghibli: "Ghibli",
    style_manga: "Mangá japonês",
    style_manga_color: "Mangá colorido",
    style_american_comic: "Quadrinhos americanos",
    style_korean_webtoon: "Webtoon coreano",
    style_chibi: "Chibi",
    style_black_white: "Preto e branco",
    style_sketch: "Esboço",
    style_ink_drawing: "Tinta da China",
    style_silhouette: "Silhueta",
    style_charcoal: "Carvão",
    style_photorealistic: "Fotorrealista",
    style_oil_painting: "Pintura a óleo",
    style_watercolor: "Aquarela",
    style_impressionism: "Impressionismo",
    style_abstract: "Abstrato",
    style_cubism: "Cubismo",
    style_surrealism: "Surrealismo",
    style_pop_art: "Arte pop",
    style_neon: "Neon",
    style_vintage: "Vintage",
    style_steampunk: "Steampunk",
    style_minimalist: "Minimalista",
    style_vaporwave: "Vaporwave",
    style_pixel_art: "Arte pixel",
    style_low_poly: "Baixa poligonal",
    style_3d_render: "Renderização 3D",
    style_gradient: "Gradiente",
    style_glitch: "Arte glitch",
    style_ukiyo_e: "Ukiyo-e",
    style_stained_glass: "Vitral",
    style_paper_cut: "Recorte de papel",
    style_gothic: "Gótico",
    style_art_nouveau: "Art nouveau",
    style_cyberpunk: "Cyberpunk",
    style_fantasy: "Estilo fantasia"
  },

  // ====== 意大利语 (it) ======
  it: {
    // Navigazione
    nav_gen: "🎨 Genera immagine",
    nav_his: "📚 Cronologia",
    nav_nano: "🍌 Nano",
    
    // Impostazioni
    settings_title: "⚙️ Impostazioni di generazione",
    provider_label: "Provider API",
    model_label: "Selezione modello",
    size_label: "Dimensione immagine",
    style_label: "Stile artistico 🎨",
    quality_label: "Modalità qualità",
    seed_label: "Valore seed",
    seed_random: "🎲 Casuale",
    seed_lock: "🔒 Blocca",
    auto_opt_label: "✨ Ottimizzazione automatica",
    auto_opt_desc: "Regolazione automatica di passaggi e guida",
    adv_settings: "🛠️ Impostazioni avanzate",
    steps_label: "Passaggi di generazione",
    guidance_label: "Scala della guida",
    
    // Pulsanti
    gen_btn: "🎨 Avvia generazione",
    btn_export: "📥 Esporta",
    btn_clear: "🗑️ Cancella tutto",
    btn_reuse: "🔄 Riusa impostazioni",
    btn_dl: "💾 Scarica",
    
    // Prompt
    pos_prompt: "Prompt positivo",
    neg_prompt: "Prompt negativo (Opzionale)",
    ref_img: "Immagine di riferimento (Img2Img) 📸",
    
    // Messaggi di stato
    empty_title: "Ancora nessuna immagine generata",
    no_history: "Nessuna cronologia trovata",
    cooldown_msg: "⏳ Attendere il tempo di riposo...",
    generating: "Generazione in corso...",
    
    // Statistiche
    stat_total: "📊 Totale record",
    stat_storage: "💾 Spazio di archiviazione (Permanente)",
    
    // Versione Nano
    nano_title: "🍌 NanoBanana Pro - Console",
    nano_prompt: "Prompt",
    nano_canvas_ratio: "Rapporto del canvas",
    nano_style_settings: "Stile e impostazioni",
    nano_exclude: "Escludi",
    nano_energy_per_hour: "Energia per ora",
    nano_consume_energy: "Consuma 1 Energia Banana",
    nano_energy_recharging: "Ricarica energia",
    nano_injecting_energy: "Iniezione energia AI...",
    nano_generating: "Generazione",
    nano_uploading_image: "Caricamento immagine",
    nano_energy_depleted: "Energia esaurita questa ora",
    nano_come_back_later: "Si prega di tornare più tardi",
    nano_dice: "🎲 Dado ispirazione",
    
    // Generatore di prompt
    prompt_generator_title: "Generatore di prompt professionale",
    prompt_generator_upload_ref: "Carica immagine di riferimento (Opzionale)",
    prompt_generator_select_image: "Seleziona immagine",
    prompt_generator_simple_desc: "Descrivi semplicemente l'immagine che vuoi",
    prompt_generator_generate: "Genera prompt professionale",
    prompt_generator_apply: "Applica al prompt",
    prompt_generator_generated: "Prompt professionale generato",
    prompt_generator_tip: "💡 Suggerimento: Dopo aver selezionato uno 'Stile artistico' a sinistra, il generatore mescolerà automaticamente quello stile (ad esempio cyberpunk, acquerello) nel tuo prompt per risultati più artistici!",
    
    // Modalità qualità
    quality_economy: "Economico",
    quality_standard: "Standard",
    quality_ultra: "Ultra HD",
    quality_economy_desc: "Generazione veloce",
    quality_standard_desc: "Bilanciamento qualità e velocità",
    quality_ultra_desc: "Massima qualità",
    
    // Provider
    provider_pollinations: "Pollinations.ai (Gratis)",
    provider_infip: "Ghostbot (Infip) 🌟",
    
    // Chiave API
    api_key_label: "Chiave API",
    api_key_desc: "Memorizzata localmente",
    api_key_placeholder: "Incolla qui la tua chiave API",
    api_key_get_key: "Ottieni chiave gratuita da",
    
    // NSFW
    nsfw_label: "🔞 Disabilita filtro NSFW",
    nsfw_desc: "Abilita questa opzione per consentire la generazione di contenuti per adulti (solo Infip)",
    
    // Generazione batch
    batch_label: "🖼️ Generazione batch",
    batch_size_label: "Dimensione batch",
    
    // Messaggi di errore
    error_no_prompt: "⚠️ Si prega di inserire un prompt",
    error_energy_depleted: "🚫 Energia esaurita questa ora, si prega di tornare più tardi!",
    error_image_too_large: "Immagine troppo grande! Max 32 MB",
    error_invalid_file: "Si prega di selezionare un file immagine",
    error_upload_failed: "Caricamento fallito",
    
    // Cambio lingua
    lang_switch: "EN / 简中",
    lang_zh: "简体中文",
    lang_en: "English",
    lang_ja: "日本語",
    lang_ko: "한국어",
    lang_ar: "العربية",
    lang_auto_detect: "🌐 Rileva automaticamente lingua di sistema",
    lang_auto_detect_desc: "Cambia automaticamente la lingua dell'interfaccia in base alla lingua del browser",
    
    // Categorie stile
    style_category_basic: "Base",
    style_category_illustration: "Illustrazione e animazione",
    style_category_manga: "Stile manga",
    style_category_monochrome: "Monocromatico",
    style_category_realistic: "Fotorrealistico",
    style_category_painting: "Stile pittorico",
    style_category_art_movement: "Movimento artistico",
    style_category_visual: "Stile visivo",
    style_category_digital: "Stile digitale",
    style_category_traditional: "Arte tradizionale",
    style_category_aesthetic: "Stile estetico",
    style_category_scifi: "Fantascienza",
    style_category_fantasy: "Fantasia",
    
    // Nomi stile
  style_none: "Nessuno stile",
  style_anime: "Stile anime",
  style_ghibli: "Ghibli",
  style_manga: "Manga giapponese",
  style_manga_color: "Manga colorato",
  style_american_comic: "Fumetto americano",
  style_korean_webtoon: "Webtoon coreano",
  style_chibi: "Chibi",
  style_black_white: "Bianco e nero",
  style_sketch: "Schizzo",
  style_ink_drawing: "Inchiostro",
  style_silhouette: "Silhouette",
  style_charcoal: "Carboncino",
  style_photorealistic: "Fotorrealistico",
  style_oil_painting: "Pittura a olio",
  style_watercolor: "Acquerello",
  style_impressionism: "Impressionismo",
  style_abstract: "Astratto",
  style_cubism: "Cubismo",
  style_surrealism: "Surrealismo",
  style_pop_art: "Pop art",
  style_neon: "Neon",
  style_vintage: "Vintage",
  style_steampunk: "Steampunk",
  style_minimalist: "Minimalista",
  style_vaporwave: "Vaporwave",
  style_pixel_art: "Pixel art",
  style_low_poly: "Low poly",
  style_3d_render: "Rendering 3D",
  style_gradient: "Gradiente",
  style_glitch: "Glitch art",
  style_ukiyo_e: "Ukiyo-e",
  style_stained_glass: "Vetro colorato",
  style_paper_cut: "Taglio carta",
  style_gothic: "Gotico",
  style_art_nouveau: "Art nouveau",
  style_cyberpunk: "Cyberpunk",
  style_fantasy: "Stile fantasy"
  }
};

// Language configuration
export const LANGUAGE_CONFIG = {
  zh: { name: { zh: "简体中文", en: "Simplified Chinese" }, flag: "🇨🇳", direction: "ltr", dateFormat: "zh-CN" },
  en: { name: { zh: "英语", en: "English" }, flag: "🇺🇸", direction: "ltr", dateFormat: "en-US" },
  ja: { name: { zh: "日语", en: "Japanese" }, flag: "🇯🇵", direction: "ltr", dateFormat: "ja-JP" },
  ko: { name: { zh: "韩语", en: "Korean" }, flag: "🇰🇷", direction: "ltr", dateFormat: "ko-KR" },
  ar: { name: { zh: "阿拉伯语", en: "Arabic" }, flag: "🇸🇦", direction: "rtl", dateFormat: "ar-SA" },
  fr: { name: { zh: "法语", en: "French" }, flag: "🇫🇷", direction: "ltr", dateFormat: "fr-FR" },
  de: { name: { zh: "德语", en: "German" }, flag: "🇩🇪", direction: "ltr", dateFormat: "de-DE" },
  es: { name: { zh: "西班牙语", en: "Spanish" }, flag: "🇪🇸", direction: "ltr", dateFormat: "es-ES" },
  ru: { name: { zh: "俄语", en: "Russian" }, flag: "🇷🇺", direction: "ltr", dateFormat: "ru-RU" },
  pt: { name: { zh: "葡萄牙语", en: "Portuguese" }, flag: "🇵🇹", direction: "ltr", dateFormat: "pt-PT" },
  it: { name: { zh: "意大利语", en: "Italian" }, flag: "🇮🇹", direction: "ltr", dateFormat: "it-IT" }
};

// Supported languages
export const SUPPORTED_LANGUAGES = [
  'zh', 'en', 'ja', 'ko', 'ar', 'fr', 'de', 'es', 'ru', 'pt', 'it'
];

// Default language
export const DEFAULT_LANGUAGE = 'zh';

// Helper functions
export function getTranslation(lang, key) {
  const translations = TRANSLATIONS[lang];
  if (!translations) return key;
  return translations[key] || key;
}

export function getTranslations(lang) {
  return TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANGUAGE] || {};
}

export function isLanguageSupported(lang) {
  return SUPPORTED_LANGUAGES.includes(lang);
}

export function getLanguageConfig(lang) {
  return LANGUAGE_CONFIG[lang] || LANGUAGE_CONFIG[DEFAULT_LANGUAGE];
}
