import { TestCategory, Test, TestDimension, TestQuestion, TestOption, TestResult } from './types';

export const testCategories: TestCategory[] = [
  // 1. 自我认知类 - 帮助用户了解"我是什么样的人"
  {
    id: 'cat-1',
    name: '自我认知',
    slug: 'self-awareness',
    description: '探索你的人格特质与行为模式，了解真实的自己',
    icon: '🧠',
    color: 'from-violet-500 to-purple-600',
  },
  // 2. 情感关系类 - 了解自己在人际、亲密关系中的风格
  {
    id: 'cat-2',
    name: '情感关系',
    slug: 'relationship',
    description: '了解你在亲密关系中的风格，建立更健康的连结',
    icon: '💕',
    color: 'from-pink-500 to-rose-600',
  },
  // 3. 职业发展类 - 了解自己的工作方式和职业偏好
  {
    id: 'cat-3',
    name: '职业发展',
    slug: 'career',
    description: '发现你的职业优势与潜在方向，规划职业成长',
    icon: '🎯',
    color: 'from-blue-500 to-cyan-600',
  },
  // 4. 情绪与压力类 - 了解情绪反应模式和压力应对方式
  {
    id: 'cat-4',
    name: '情绪与压力',
    slug: 'emotion-stress',
    description: '认识你的情绪反应模式，学会更好地应对压力',
    icon: '🌊',
    color: 'from-teal-500 to-emerald-600',
  },
  // 5. 社交互动类 - 了解自己在社交中的表现方式
  {
    id: 'cat-5',
    name: '社交互动',
    slug: 'social',
    description: '了解你在社交中的表现方式，提升人际互动质量',
    icon: '🤝',
    color: 'from-amber-500 to-orange-600',
  },
  // 6. 趣味延伸类 - 轻量娱乐化，用于拉新和传播
  {
    id: 'cat-6',
    name: '趣味延伸',
    slug: 'fun',
    description: '轻松有趣的个性测试，发现你的隐藏人格',
    icon: '✨',
    color: 'from-fuchsia-500 to-pink-600',
  },
];

export const tests: Test[] = [
  // ===== 1. 自我认知类 =====
  {
    id: 'test-mbti',
    title: '16型人格风格测试',
    slug: 'personality-16-types',
    description: '基于心理偏好理论，探索你在能量来源、信息感知、决策方式和生活态度四个维度上的独特风格，揭示你是哪种类型的人。',
    shortDescription: '探索你的16种人格类型，了解你独特的思维与行为模式',
    categoryId: 'cat-1',
    questionCount: 30,
    estimatedMinutes: 10,
    tags: ['人格', '经典', '热门'],
    completionCount: 128463,
    isPopular: true,
    isFeatured: true,
    coverGradient: 'from-violet-600 via-purple-600 to-indigo-700',
    createdAt: '2024-01-01',
  },
  {
    id: 'test-bigfive',
    title: '大五人格测试',
    slug: 'big-five',
    description: '大五人格模型（OCEAN）是心理学中最具科学基础的人格模型之一，通过五个核心维度全面描绘你的人格图谱。',
    shortDescription: '通过开放性、责任心等五大维度，绘制你的人格全貌',
    categoryId: 'cat-1',
    questionCount: 25,
    estimatedMinutes: 8,
    tags: ['人格', '科学', '深度'],
    completionCount: 87234,
    isPopular: true,
    isFeatured: true,
    coverGradient: 'from-blue-600 via-indigo-600 to-violet-700',
    createdAt: '2024-01-15',
  },
  {
    id: 'test-enneagram',
    title: '九型人格测试',
    slug: 'enneagram',
    description: '九型人格是一套古老而深刻的人格系统，揭示我们内心最深处的动机、恐惧与渴望，帮助我们走向真正的自我整合。',
    shortDescription: '探索你的核心动机与内心渴望，发现真实的自我',
    categoryId: 'cat-1',
    questionCount: 36,
    estimatedMinutes: 12,
    tags: ['人格', '深度', '成长'],
    completionCount: 38965,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-amber-500 via-orange-500 to-rose-600',
    createdAt: '2024-03-15',
  },
  {
    id: 'test-temperament',
    title: '气质类型测试',
    slug: 'temperament',
    description: '气质是与生俱来的心理特征，决定了你情绪反应的速度、强度和灵活性。了解你的气质类型，能帮助你更好地理解自己。',
    shortDescription: '发现你的天生气质：多血质、胆汁质、粘液质还是抑郁质？',
    categoryId: 'cat-1',
    questionCount: 20,
    estimatedMinutes: 7,
    tags: ['人格', '经典', '基础'],
    completionCount: 45678,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-cyan-500 via-teal-500 to-emerald-600',
    createdAt: '2024-02-20',
  },
  {
    id: 'test-introversion',
    title: '内向/外向倾向测试',
    slug: 'introversion-extroversion',
    description: '你从哪里获得能量？你更享受独处还是社交？这个测试帮你了解自己在内向-外向维度上的真实倾向。',
    shortDescription: '深入了解你的能量来源与社交偏好',
    categoryId: 'cat-1',
    questionCount: 15,
    estimatedMinutes: 5,
    tags: ['人格', '社交', '入门'],
    completionCount: 67890,
    isPopular: true,
    isFeatured: false,
    coverGradient: 'from-purple-500 via-indigo-500 to-blue-600',
    createdAt: '2024-04-01',
  },

  // ===== 2. 情感关系类 =====
  {
    id: 'test-attachment',
    title: '依恋类型测试',
    slug: 'attachment-style',
    description: '探索你在亲密关系中的依恋模式——你是安全型、焦虑型还是回避型？了解你的关系风格，能帮助你建立更健康的连结。',
    shortDescription: '了解你的依恋风格，让亲密关系更深入、更安全',
    categoryId: 'cat-2',
    questionCount: 20,
    estimatedMinutes: 7,
    tags: ['关系', '依恋', '情感'],
    completionCount: 54327,
    isPopular: true,
    isFeatured: true,
    coverGradient: 'from-rose-500 via-pink-500 to-purple-600',
    createdAt: '2024-02-15',
  },
  {
    id: 'test-love-style',
    title: '恋爱风格测试',
    slug: 'love-style',
    description: '你在爱情中是什么风格？是热情奔放型、温柔体贴型，还是理性独立型？发现你的爱情表达方式，更好地理解自己在感情中的表现。',
    shortDescription: '发现你在爱情中的独特风格与表达方式',
    categoryId: 'cat-2',
    questionCount: 18,
    estimatedMinutes: 6,
    tags: ['恋爱', '关系', '情感'],
    completionCount: 34567,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-pink-400 via-rose-400 to-red-500',
    createdAt: '2024-03-10',
  },
  {
    id: 'test-communication',
    title: '沟通风格测试',
    slug: 'communication-style',
    description: '你在沟通中是直接表达型、委婉暗示型，还是回避冲突型？了解你的沟通模式，让交流更顺畅。',
    shortDescription: '了解你的沟通习惯，提升表达与倾听能力',
    categoryId: 'cat-2',
    questionCount: 18,
    estimatedMinutes: 6,
    tags: ['沟通', '关系', '成长'],
    completionCount: 28945,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-sky-400 via-blue-400 to-indigo-500',
    createdAt: '2024-04-05',
  },
  {
    id: 'test-conflict',
    title: '冲突处理风格测试',
    slug: 'conflict-style',
    description: '面对冲突时，你是直面问题、回避退让，还是寻求妥协？了解你的冲突处理模式，学会更建设性地化解分歧。',
    shortDescription: '发现你在冲突中的应对模式与成长方向',
    categoryId: 'cat-2',
    questionCount: 16,
    estimatedMinutes: 5,
    tags: ['关系', '沟通', '成长'],
    completionCount: 21345,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-orange-400 via-amber-400 to-yellow-500',
    createdAt: '2024-04-10',
  },
  {
    id: 'test-empathy',
    title: '共情力测试',
    slug: 'empathy',
    description: '你能准确感知他人的情绪吗？你善于换位思考吗？这个测试帮你了解自己的共情能力水平。',
    shortDescription: '测量你的情感理解与共鸣能力',
    categoryId: 'cat-2',
    questionCount: 15,
    estimatedMinutes: 5,
    tags: ['情感', '关系', '能力'],
    completionCount: 32456,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-emerald-400 via-teal-400 to-cyan-500',
    createdAt: '2024-04-15',
  },

  // ===== 3. 职业发展类 =====
  {
    id: 'test-career',
    title: '职业倾向测试',
    slug: 'career-tendency',
    description: '基于职业兴趣与能力倾向理论，帮助你发现最适合自己天赋与热情的职业方向，为职业规划提供洞见。',
    shortDescription: '发现你的职业天赋，找到最适合你的工作方向',
    categoryId: 'cat-3',
    questionCount: 28,
    estimatedMinutes: 10,
    tags: ['职业', '规划', '实用'],
    completionCount: 65891,
    isPopular: true,
    isFeatured: false,
    coverGradient: 'from-cyan-600 via-blue-600 to-indigo-600',
    createdAt: '2024-02-01',
  },
  {
    id: 'test-teamwork',
    title: '团队协作风格测试',
    slug: 'teamwork-style',
    description: '你在团队中扮演什么角色？是领导推动型、协调支持型，还是独立贡献型？发现你的团队协作优势。',
    shortDescription: '了解你在团队中的角色定位与协作方式',
    categoryId: 'cat-3',
    questionCount: 18,
    estimatedMinutes: 6,
    tags: ['职场', '团队', '协作'],
    completionCount: 29876,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-blue-500 via-cyan-500 to-teal-500',
    createdAt: '2024-04-20',
  },
  {
    id: 'test-leadership',
    title: '领导力风格测试',
    slug: 'leadership-style',
    description: '你的领导风格是民主型、指令型，还是教练型？了解你的领导力特点，发挥优势、弥补不足。',
    shortDescription: '发现你的领导风格与提升空间',
    categoryId: 'cat-3',
    questionCount: 20,
    estimatedMinutes: 7,
    tags: ['职场', '领导力', '成长'],
    completionCount: 25678,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-indigo-500 via-violet-500 to-purple-600',
    createdAt: '2024-04-25',
  },
  {
    id: 'test-decision',
    title: '决策风格测试',
    slug: 'decision-style',
    description: '做决定时，你更依赖直觉还是数据？你倾向于快速决断还是反复权衡？了解你的决策模式，提升决策效率。',
    shortDescription: '了解你的决策习惯与优化方向',
    categoryId: 'cat-3',
    questionCount: 15,
    estimatedMinutes: 5,
    tags: ['职场', '能力', '成长'],
    completionCount: 19876,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-slate-500 via-gray-500 to-zinc-600',
    createdAt: '2024-05-01',
  },
  {
    id: 'test-execution',
    title: '执行力/规划力测试',
    slug: 'execution-planning',
    description: '你的执行力和规划能力处于什么水平？你更擅长制定计划还是落地执行？发现自己的行动力优势。',
    shortDescription: '测量你的行动力与规划能力',
    categoryId: 'cat-3',
    questionCount: 18,
    estimatedMinutes: 6,
    tags: ['职场', '能力', '实用'],
    completionCount: 23456,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-emerald-500 via-green-500 to-lime-500',
    createdAt: '2024-05-05',
  },

  // ===== 4. 情绪与压力类 =====
  {
    id: 'test-stress',
    title: '压力应对风格测试',
    slug: 'stress-style',
    description: '你面对压力时是战斗、逃跑还是冻结？本测试帮助你了解自己的压力应对机制，以及如何更有效地管理压力。',
    shortDescription: '发现你在压力下的真实反应模式与应对策略',
    categoryId: 'cat-4',
    questionCount: 22,
    estimatedMinutes: 8,
    tags: ['压力', '情绪', '成长'],
    completionCount: 43218,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-teal-500 via-emerald-500 to-cyan-600',
    createdAt: '2024-03-01',
  },
  {
    id: 'test-emotion-sensitivity',
    title: '情绪敏感度测试',
    slug: 'emotion-sensitivity',
    description: '你对情绪的感知有多敏锐？你是否容易受他人情绪影响？了解自己的情绪敏感度，学会保护自己。',
    shortDescription: '了解你对情绪的感知与反应敏感程度',
    categoryId: 'cat-4',
    questionCount: 18,
    estimatedMinutes: 6,
    tags: ['情绪', '心理', '成长'],
    completionCount: 31234,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-violet-400 via-purple-400 to-fuchsia-500',
    createdAt: '2024-05-10',
  },
  {
    id: 'test-resilience',
    title: '抗压能力测试',
    slug: 'resilience',
    description: '面对逆境时，你能多快恢复？你的心理韧性有多强？这个测试帮你了解自己的抗压能力。',
    shortDescription: '测量你的心理韧性与逆境恢复能力',
    categoryId: 'cat-4',
    questionCount: 18,
    estimatedMinutes: 6,
    tags: ['压力', '心理', '成长'],
    completionCount: 28765,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-amber-500 via-yellow-500 to-orange-500',
    createdAt: '2024-05-15',
  },
  {
    id: 'test-emotion-recovery',
    title: '情绪恢复力测试',
    slug: 'emotion-recovery',
    description: '经历负面情绪后，你需要多久才能恢复？你是否有有效的情绪调节策略？了解你的情绪恢复能力。',
    shortDescription: '了解你从负面情绪中恢复的速度与方式',
    categoryId: 'cat-4',
    questionCount: 15,
    estimatedMinutes: 5,
    tags: ['情绪', '心理', '成长'],
    completionCount: 19876,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-cyan-400 via-sky-400 to-blue-500',
    createdAt: '2024-05-20',
  },
  {
    id: 'test-security',
    title: '安全感来源测试',
    slug: 'security-source',
    description: '你的安全感来自哪里？是外部认可、物质保障，还是内心笃定？了解自己的安全感来源，建立更稳定的内心。',
    shortDescription: '发现你的安全感构建方式与提升方向',
    categoryId: 'cat-4',
    questionCount: 16,
    estimatedMinutes: 5,
    tags: ['心理', '情绪', '成长'],
    completionCount: 24567,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-rose-400 via-pink-400 to-fuchsia-500',
    createdAt: '2024-05-25',
  },

  // ===== 5. 社交互动类 =====
  {
    id: 'test-social-energy',
    title: '社交能量测试',
    slug: 'social-energy',
    description: '社交对你来说是充电还是消耗？你能从社交中获得多少能量？了解你的社交能量特点，合理安排社交生活。',
    shortDescription: '了解社交对你的能量影响与最佳社交模式',
    categoryId: 'cat-5',
    questionCount: 15,
    estimatedMinutes: 5,
    tags: ['社交', '人际', '能量'],
    completionCount: 34567,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-orange-400 via-amber-400 to-yellow-500',
    createdAt: '2024-06-01',
  },
  {
    id: 'test-boundary',
    title: '人际边界感测试',
    slug: 'boundary',
    description: '你的人际边界清晰吗？你能清楚区分自己与他人的责任吗？了解自己的边界感水平，建立健康的人际关系。',
    shortDescription: '测量你的人际边界清晰度与健康程度',
    categoryId: 'cat-5',
    questionCount: 18,
    estimatedMinutes: 6,
    tags: ['社交', '人际', '成长'],
    completionCount: 28765,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-lime-400 via-green-400 to-emerald-500',
    createdAt: '2024-06-05',
  },
  {
    id: 'test-expression',
    title: '表达风格测试',
    slug: 'expression-style',
    description: '你在表达时是直抒胸臆还是委婉含蓄？你更擅长文字还是口语表达？了解自己的表达风格优势。',
    shortDescription: '发现你的表达习惯与优化方向',
    categoryId: 'cat-5',
    questionCount: 15,
    estimatedMinutes: 5,
    tags: ['社交', '沟通', '能力'],
    completionCount: 21345,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-sky-400 via-blue-400 to-indigo-500',
    createdAt: '2024-06-10',
  },
  {
    id: 'test-pleasing',
    title: '讨好型/主见型倾向测试',
    slug: 'pleasing-tendency',
    description: '你是习惯讨好他人，还是坚持自己的主见？这个测试帮你了解自己在人际互动中的倾向，找到平衡点。',
    shortDescription: '了解你在人际中的取悦与自主倾向',
    categoryId: 'cat-5',
    questionCount: 16,
    estimatedMinutes: 5,
    tags: ['社交', '人际', '成长'],
    completionCount: 38976,
    isPopular: true,
    isFeatured: false,
    coverGradient: 'from-fuchsia-400 via-pink-400 to-rose-500',
    createdAt: '2024-06-15',
  },
  {
    id: 'test-trust',
    title: '信任模式测试',
    slug: 'trust-pattern',
    description: '你容易信任他人吗？你对人的信任是基于什么？了解自己的信任模式，建立更健康的人际判断。',
    shortDescription: '了解你的信任建立方式与特点',
    categoryId: 'cat-5',
    questionCount: 15,
    estimatedMinutes: 5,
    tags: ['社交', '人际', '心理'],
    completionCount: 17654,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-teal-400 via-cyan-400 to-sky-500',
    createdAt: '2024-06-20',
  },

  // ===== 6. 趣味延伸类 =====
  {
    id: 'test-sbti',
    title: 'SBTI 人格测试',
    slug: 'sbti',
    description: '2026年4月爆火全网的神奇人格测试，全称"Silly Big Personality Test（傻乎乎的大人格测试）"。31道荒诞接地气的题目，测出你最真实的"阴暗面"与生存姿态。仅供娱乐，别当诊断。',
    shortDescription: '全网爆火的魔性测试，31道题揭秘你最真实的生存姿态',
    categoryId: 'cat-6',
    questionCount: 31,
    estimatedMinutes: 5,
    tags: ['爆火', '娱乐', '自嘲'],
    completionCount: 892314,
    isPopular: true,
    isFeatured: true,
    coverGradient: 'from-yellow-500 via-orange-500 to-red-600',
    createdAt: '2026-04-10',
  },
  {
    id: 'test-hidden-personality',
    title: '你的隐藏人格是什么',
    slug: 'hidden-personality',
    description: '表面之下，你还有一个不为人知的自己。这个轻量测试帮你发现那些被日常掩藏的性格面向。',
    shortDescription: '发现那个不为人知的自己',
    categoryId: 'cat-6',
    questionCount: 12,
    estimatedMinutes: 4,
    tags: ['趣味', '发现', '轻松'],
    completionCount: 156789,
    isPopular: true,
    isFeatured: false,
    coverGradient: 'from-purple-500 via-violet-500 to-indigo-600',
    createdAt: '2024-07-01',
  },
  {
    id: 'test-animal-personality',
    title: '你像哪种动物人格',
    slug: 'animal-personality',
    description: '如果用一种动物来形容你的人格，你会是什么？忠诚的狗狗、独立的猫咪、还是自由的鸟儿？',
    shortDescription: '发现你的动物人格原型',
    categoryId: 'cat-6',
    questionCount: 10,
    estimatedMinutes: 3,
    tags: ['趣味', '动物', '轻松'],
    completionCount: 234567,
    isPopular: true,
    isFeatured: false,
    coverGradient: 'from-amber-400 via-orange-400 to-red-500',
    createdAt: '2024-07-10',
  },
  {
    id: 'test-love-brain',
    title: '你的爱情脑类型',
    slug: 'love-brain',
    description: '你在爱情里是什么"脑型"？理性分析型、感性投入型，还是随缘佛系型？发现你的爱情思维模式。',
    shortDescription: '了解你在爱情里的思维方式',
    categoryId: 'cat-6',
    questionCount: 12,
    estimatedMinutes: 4,
    tags: ['恋爱', '趣味', '轻松'],
    completionCount: 178456,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-pink-400 via-rose-400 to-red-500',
    createdAt: '2024-07-15',
  },
  {
    id: 'test-friend-type',
    title: '你是哪种朋友类型',
    slug: 'friend-type',
    description: '在朋友圈里，你是倾听者、组织者、开心果还是智囊团？发现你作为朋友的独特价值。',
    shortDescription: '发现你在友情中的角色定位',
    categoryId: 'cat-6',
    questionCount: 12,
    estimatedMinutes: 4,
    tags: ['友情', '趣味', '轻松'],
    completionCount: 145678,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-cyan-400 via-teal-400 to-emerald-500',
    createdAt: '2024-07-20',
  },
  {
    id: 'test-group-role',
    title: '你在群体里扮演什么角色',
    slug: 'group-role',
    description: '每个群体都有自己的生态。你是领导者、协调者、执行者，还是那个独特的存在？',
    shortDescription: '发现你在群体中的自然定位',
    categoryId: 'cat-6',
    questionCount: 10,
    estimatedMinutes: 3,
    tags: ['群体', '趣味', '轻松'],
    completionCount: 98765,
    isPopular: false,
    isFeatured: false,
    coverGradient: 'from-indigo-400 via-violet-400 to-purple-500',
    createdAt: '2024-07-25',
  },
];

// ==== 16-Type Personality Test Data ====
export const mbtiDimensions: TestDimension[] = [
  { id: 'dim-ei', testId: 'test-mbti', name: '能量来源', description: '你从哪里获得能量', minLabel: '内倾 (I)', maxLabel: '外倾 (E)', color: '#8b5cf6' },
  { id: 'dim-sn', testId: 'test-mbti', name: '信息感知', description: '你如何接收和处理信息', minLabel: '实感 (S)', maxLabel: '直觉 (N)', color: '#06b6d4' },
  { id: 'dim-tf', testId: 'test-mbti', name: '决策方式', description: '你如何做出决策', minLabel: '情感 (F)', maxLabel: '思考 (T)', color: '#10b981' },
  { id: 'dim-jp', testId: 'test-mbti', name: '生活态度', description: '你如何安排自己的生活', minLabel: '知觉 (P)', maxLabel: '判断 (J)', color: '#f59e0b' },
];

export const mbtiQuestions: TestQuestion[] = [
  { id: 'q1', testId: 'test-mbti', text: '在社交聚会之后，你通常感到…', order: 1, dimensionId: 'dim-ei' },
  { id: 'q2', testId: 'test-mbti', text: '当需要做重要决定时，你更倾向于…', order: 2, dimensionId: 'dim-tf' },
  { id: 'q3', testId: 'test-mbti', text: '面对新项目，你更喜欢先了解…', order: 3, dimensionId: 'dim-sn' },
  { id: 'q4', testId: 'test-mbti', text: '你的日程安排通常是…', order: 4, dimensionId: 'dim-jp' },
  { id: 'q5', testId: 'test-mbti', text: '和陌生人交谈，你感觉…', order: 5, dimensionId: 'dim-ei' },
  { id: 'q6', testId: 'test-mbti', text: '处理问题时，你更看重…', order: 6, dimensionId: 'dim-tf' },
  { id: 'q7', testId: 'test-mbti', text: '你更容易被哪种信息吸引…', order: 7, dimensionId: 'dim-sn' },
  { id: 'q8', testId: 'test-mbti', text: '对于截止日期，你通常…', order: 8, dimensionId: 'dim-jp' },
  { id: 'q9', testId: 'test-mbti', text: '独处的时间对你来说…', order: 9, dimensionId: 'dim-ei' },
  { id: 'q10', testId: 'test-mbti', text: '在冲突中，你更倾向于…', order: 10, dimensionId: 'dim-tf' },
  { id: 'q11', testId: 'test-mbti', text: '你更信任哪种判断方式…', order: 11, dimensionId: 'dim-sn' },
  { id: 'q12', testId: 'test-mbti', text: '在工作或学习中，你喜欢…', order: 12, dimensionId: 'dim-jp' },
  { id: 'q13', testId: 'test-mbti', text: '一个理想的周末，你更可能…', order: 13, dimensionId: 'dim-ei' },
  { id: 'q14', testId: 'test-mbti', text: '当朋友倾诉烦恼时，你更倾向于…', order: 14, dimensionId: 'dim-tf' },
  { id: 'q15', testId: 'test-mbti', text: '你对未来的规划通常是…', order: 15, dimensionId: 'dim-sn' },
  { id: 'q16', testId: 'test-mbti', text: '对于计划被临时打乱，你的感受是…', order: 16, dimensionId: 'dim-jp' },
  { id: 'q17', testId: 'test-mbti', text: '结识新朋友，你通常…', order: 17, dimensionId: 'dim-ei' },
  { id: 'q18', testId: 'test-mbti', text: '评价一件事好不好，你更看重…', order: 18, dimensionId: 'dim-tf' },
  { id: 'q19', testId: 'test-mbti', text: '你更喜欢哪种工作方式…', order: 19, dimensionId: 'dim-sn' },
  { id: 'q20', testId: 'test-mbti', text: '面对开放式结局，你感到…', order: 20, dimensionId: 'dim-jp' },
  { id: 'q21', testId: 'test-mbti', text: '在团队中，你更喜欢的角色是…', order: 21, dimensionId: 'dim-ei' },
  { id: 'q22', testId: 'test-mbti', text: '当看到别人哭泣时，你的第一反应是…', order: 22, dimensionId: 'dim-tf' },
  { id: 'q23', testId: 'test-mbti', text: '你更容易被哪类内容打动…', order: 23, dimensionId: 'dim-sn' },
  { id: 'q24', testId: 'test-mbti', text: '做决定时，你倾向于…', order: 24, dimensionId: 'dim-jp' },
  { id: 'q25', testId: 'test-mbti', text: '在熟悉的环境里，你会…', order: 25, dimensionId: 'dim-ei' },
  { id: 'q26', testId: 'test-mbti', text: '争论时，你更在乎的是…', order: 26, dimensionId: 'dim-tf' },
  { id: 'q27', testId: 'test-mbti', text: '你更擅长哪种思维方式…', order: 27, dimensionId: 'dim-sn' },
  { id: 'q28', testId: 'test-mbti', text: '对于"即兴"活动，你的感受是…', order: 28, dimensionId: 'dim-jp' },
  { id: 'q29', testId: 'test-mbti', text: '当处于人群中时，你…', order: 29, dimensionId: 'dim-ei' },
  { id: 'q30', testId: 'test-mbti', text: '你如何看待"规则"这件事…', order: 30, dimensionId: 'dim-jp' },
];

type OptionsMap = Record<string, TestOption[]>;

export const mbtiOptions: OptionsMap = {
  q1: [
    { id: 'q1-a', questionId: 'q1', text: '精力充沛，享受社交带来的活力', value: 2, dimensionScores: { 'dim-ei': 2 } },
    { id: 'q1-b', questionId: 'q1', text: '还好，需要一点时间恢复', value: 1, dimensionScores: { 'dim-ei': 0 } },
    { id: 'q1-c', questionId: 'q1', text: '有些疲惫，更想一个人待着', value: 0, dimensionScores: { 'dim-ei': -2 } },
  ],
  q2: [
    { id: 'q2-a', questionId: 'q2', text: '仔细分析利弊，依据逻辑推断', value: 2, dimensionScores: { 'dim-tf': 2 } },
    { id: 'q2-b', questionId: 'q2', text: '结合逻辑与感受综合考量', value: 1, dimensionScores: { 'dim-tf': 0 } },
    { id: 'q2-c', questionId: 'q2', text: '更多依赖内心感受与价值观', value: 0, dimensionScores: { 'dim-tf': -2 } },
  ],
  q3: [
    { id: 'q3-a', questionId: 'q3', text: '整体方向和大局构想', value: 2, dimensionScores: { 'dim-sn': 2 } },
    { id: 'q3-b', questionId: 'q3', text: '两者兼顾，既看细节也看方向', value: 1, dimensionScores: { 'dim-sn': 0 } },
    { id: 'q3-c', questionId: 'q3', text: '具体的步骤和可操作细节', value: 0, dimensionScores: { 'dim-sn': -2 } },
  ],
  q4: [
    { id: 'q4-a', questionId: 'q4', text: '有清晰的计划，按部就班执行', value: 2, dimensionScores: { 'dim-jp': 2 } },
    { id: 'q4-b', questionId: 'q4', text: '有大致方向，但保持弹性', value: 1, dimensionScores: { 'dim-jp': 0 } },
    { id: 'q4-c', questionId: 'q4', text: '随机应变，顺其自然', value: 0, dimensionScores: { 'dim-jp': -2 } },
  ],
  q5: [
    { id: 'q5-a', questionId: 'q5', text: '轻松自然，我很享受', value: 2, dimensionScores: { 'dim-ei': 2 } },
    { id: 'q5-b', questionId: 'q5', text: '有点紧张，但可以应对', value: 1, dimensionScores: { 'dim-ei': 0 } },
    { id: 'q5-c', questionId: 'q5', text: '有些不适，更喜欢和熟人在一起', value: 0, dimensionScores: { 'dim-ei': -2 } },
  ],
  q6: [
    { id: 'q6-a', questionId: 'q6', text: '客观公正，符合逻辑', value: 2, dimensionScores: { 'dim-tf': 2 } },
    { id: 'q6-b', questionId: 'q6', text: '兼顾情理，两者都重要', value: 1, dimensionScores: { 'dim-tf': 0 } },
    { id: 'q6-c', questionId: 'q6', text: '顾及他人感受，保持和谐', value: 0, dimensionScores: { 'dim-tf': -2 } },
  ],
  q7: [
    { id: 'q7-a', questionId: 'q7', text: '充满想象力的可能性与未来展望', value: 2, dimensionScores: { 'dim-sn': 2 } },
    { id: 'q7-b', questionId: 'q7', text: '两种都喜欢', value: 1, dimensionScores: { 'dim-sn': 0 } },
    { id: 'q7-c', questionId: 'q7', text: '具体、可靠、可验证的事实', value: 0, dimensionScores: { 'dim-sn': -2 } },
  ],
  q8: [
    { id: 'q8-a', questionId: 'q8', text: '提前完成，不喜欢最后时刻的压力', value: 2, dimensionScores: { 'dim-jp': 2 } },
    { id: 'q8-b', questionId: 'q8', text: '尽量按时，但也不过度焦虑', value: 1, dimensionScores: { 'dim-jp': 0 } },
    { id: 'q8-c', questionId: 'q8', text: '临近截止时效率更高', value: 0, dimensionScores: { 'dim-jp': -2 } },
  ],
  q9: [
    { id: 'q9-a', questionId: 'q9', text: '有时会感到无聊，想找人聊天', value: 2, dimensionScores: { 'dim-ei': 2 } },
    { id: 'q9-b', questionId: 'q9', text: '适量独处很好，但不喜欢太长', value: 1, dimensionScores: { 'dim-ei': 0 } },
    { id: 'q9-c', questionId: 'q9', text: '非常必要，独处让我充电恢复', value: 0, dimensionScores: { 'dim-ei': -2 } },
  ],
  q10: [
    { id: 'q10-a', questionId: 'q10', text: '坚持自己认为正确的立场', value: 2, dimensionScores: { 'dim-tf': 2 } },
    { id: 'q10-b', questionId: 'q10', text: '寻找平衡，兼顾各方', value: 1, dimensionScores: { 'dim-tf': 0 } },
    { id: 'q10-c', questionId: 'q10', text: '照顾所有人的感受，避免伤害', value: 0, dimensionScores: { 'dim-tf': -2 } },
  ],
  q11: [
    { id: 'q11-a', questionId: 'q11', text: '关于未来可能发生什么的预感', value: 2, dimensionScores: { 'dim-sn': 2 } },
    { id: 'q11-b', questionId: 'q11', text: '两种都有参考价值', value: 1, dimensionScores: { 'dim-sn': 0 } },
    { id: 'q11-c', questionId: 'q11', text: '基于过去经验的现实判断', value: 0, dimensionScores: { 'dim-sn': -2 } },
  ],
  q12: [
    { id: 'q12-a', questionId: 'q12', text: '有明确目标，按计划推进', value: 2, dimensionScores: { 'dim-jp': 2 } },
    { id: 'q12-b', questionId: 'q12', text: '方向清晰，方式灵活', value: 1, dimensionScores: { 'dim-jp': 0 } },
    { id: 'q12-c', questionId: 'q12', text: '边做边看，保持开放', value: 0, dimensionScores: { 'dim-jp': -2 } },
  ],
  q13: [
    { id: 'q13-a', questionId: 'q13', text: '约上朋友，出去活动', value: 2, dimensionScores: { 'dim-ei': 2 } },
    { id: 'q13-b', questionId: 'q13', text: '视心情，两种都可以', value: 1, dimensionScores: { 'dim-ei': 0 } },
    { id: 'q13-c', questionId: 'q13', text: '一个人待着，做自己喜欢的事', value: 0, dimensionScores: { 'dim-ei': -2 } },
  ],
  q14: [
    { id: 'q14-a', questionId: 'q14', text: '帮他们分析问题，提供解决方案', value: 2, dimensionScores: { 'dim-tf': 2 } },
    { id: 'q14-b', questionId: 'q14', text: '先共情再分析', value: 1, dimensionScores: { 'dim-tf': 0 } },
    { id: 'q14-c', questionId: 'q14', text: '认真倾听，陪伴他们感受', value: 0, dimensionScores: { 'dim-tf': -2 } },
  ],
  q15: [
    { id: 'q15-a', questionId: 'q15', text: '充满各种可能性，还没确定方向', value: 2, dimensionScores: { 'dim-sn': 2 } },
    { id: 'q15-b', questionId: 'q15', text: '有大方向，保持弹性', value: 1, dimensionScores: { 'dim-sn': 0 } },
    { id: 'q15-c', questionId: 'q15', text: '有具体可行的步骤计划', value: 0, dimensionScores: { 'dim-sn': -2 } },
  ],
  q16: [
    { id: 'q16-a', questionId: 'q16', text: '令人沮丧，我喜欢按计划进行', value: 2, dimensionScores: { 'dim-jp': 2 } },
    { id: 'q16-b', questionId: 'q16', text: '有点烦但能接受', value: 1, dimensionScores: { 'dim-jp': 0 } },
    { id: 'q16-c', questionId: 'q16', text: '其实挺好的，灵活才有趣', value: 0, dimensionScores: { 'dim-jp': -2 } },
  ],
  q17: [
    { id: 'q17-a', questionId: 'q17', text: '很快就能打开话匣子，主动交谈', value: 2, dimensionScores: { 'dim-ei': 2 } },
    { id: 'q17-b', questionId: 'q17', text: '需要一点时间，但还好', value: 1, dimensionScores: { 'dim-ei': 0 } },
    { id: 'q17-c', questionId: 'q17', text: '比较谨慎，需要熟悉才会打开', value: 0, dimensionScores: { 'dim-ei': -2 } },
  ],
  q18: [
    { id: 'q18-a', questionId: 'q18', text: '是否高效、有逻辑', value: 2, dimensionScores: { 'dim-tf': 2 } },
    { id: 'q18-b', questionId: 'q18', text: '效果与感受都重要', value: 1, dimensionScores: { 'dim-tf': 0 } },
    { id: 'q18-c', questionId: 'q18', text: '是否让大家都感到满意', value: 0, dimensionScores: { 'dim-tf': -2 } },
  ],
  q19: [
    { id: 'q19-a', questionId: 'q19', text: '探索全新的领域和创意', value: 2, dimensionScores: { 'dim-sn': 2 } },
    { id: 'q19-b', questionId: 'q19', text: '创新与稳定结合', value: 1, dimensionScores: { 'dim-sn': 0 } },
    { id: 'q19-c', questionId: 'q19', text: '沿用已有的成熟方法', value: 0, dimensionScores: { 'dim-sn': -2 } },
  ],
  q20: [
    { id: 'q20-a', questionId: 'q20', text: '不舒服，希望能有个明确答案', value: 2, dimensionScores: { 'dim-jp': 2 } },
    { id: 'q20-b', questionId: 'q20', text: '视情况而定', value: 1, dimensionScores: { 'dim-jp': 0 } },
    { id: 'q20-c', questionId: 'q20', text: '还好，开放结局更有想象空间', value: 0, dimensionScores: { 'dim-jp': -2 } },
  ],
  q21: [
    { id: 'q21-a', questionId: 'q21', text: '活跃的讨论者和推动者', value: 2, dimensionScores: { 'dim-ei': 2 } },
    { id: 'q21-b', questionId: 'q21', text: '视需要调整角色', value: 1, dimensionScores: { 'dim-ei': 0 } },
    { id: 'q21-c', questionId: 'q21', text: '深度思考者和幕后贡献者', value: 0, dimensionScores: { 'dim-ei': -2 } },
  ],
  q22: [
    { id: 'q22-a', questionId: 'q22', text: '想帮他们找到解决问题的方法', value: 2, dimensionScores: { 'dim-tf': 2 } },
    { id: 'q22-b', questionId: 'q22', text: '先安慰，再看是否需要建议', value: 1, dimensionScores: { 'dim-tf': 0 } },
    { id: 'q22-c', questionId: 'q22', text: '感同身受，想陪在他们身边', value: 0, dimensionScores: { 'dim-tf': -2 } },
  ],
  q23: [
    { id: 'q23-a', questionId: 'q23', text: '充满隐喻与哲理的深度内容', value: 2, dimensionScores: { 'dim-sn': 2 } },
    { id: 'q23-b', questionId: 'q23', text: '两种类型都喜欢', value: 1, dimensionScores: { 'dim-sn': 0 } },
    { id: 'q23-c', questionId: 'q23', text: '有实用价值、贴近生活的内容', value: 0, dimensionScores: { 'dim-sn': -2 } },
  ],
  q24: [
    { id: 'q24-a', questionId: 'q24', text: '尽快做决定，减少不确定感', value: 2, dimensionScores: { 'dim-jp': 2 } },
    { id: 'q24-b', questionId: 'q24', text: '根据时间压力调整', value: 1, dimensionScores: { 'dim-jp': 0 } },
    { id: 'q24-c', questionId: 'q24', text: '尽量保持开放，等有更多信息再决定', value: 0, dimensionScores: { 'dim-jp': -2 } },
  ],
  q25: [
    { id: 'q25-a', questionId: 'q25', text: '更活跃，喜欢和人互动', value: 2, dimensionScores: { 'dim-ei': 2 } },
    { id: 'q25-b', questionId: 'q25', text: '视心情而定', value: 1, dimensionScores: { 'dim-ei': 0 } },
    { id: 'q25-c', questionId: 'q25', text: '更放松，享受安静', value: 0, dimensionScores: { 'dim-ei': -2 } },
  ],
  q26: [
    { id: 'q26-a', questionId: 'q26', text: '道理是否正确，逻辑是否自洽', value: 2, dimensionScores: { 'dim-tf': 2 } },
    { id: 'q26-b', questionId: 'q26', text: '道理和关系都重要', value: 1, dimensionScores: { 'dim-tf': 0 } },
    { id: 'q26-c', questionId: 'q26', text: '双方关系是否受损', value: 0, dimensionScores: { 'dim-tf': -2 } },
  ],
  q27: [
    { id: 'q27-a', questionId: 'q27', text: '发散思维，联想各种可能', value: 2, dimensionScores: { 'dim-sn': 2 } },
    { id: 'q27-b', questionId: 'q27', text: '两种都会用', value: 1, dimensionScores: { 'dim-sn': 0 } },
    { id: 'q27-c', questionId: 'q27', text: '聚焦分析，关注具体细节', value: 0, dimensionScores: { 'dim-sn': -2 } },
  ],
  q28: [
    { id: 'q28-a', questionId: 'q28', text: '喜欢！有时最好的体验都是即兴的', value: 2, dimensionScores: { 'dim-jp': -2 } },
    { id: 'q28-b', questionId: 'q28', text: '偶尔还好，但不是常态', value: 1, dimensionScores: { 'dim-jp': 0 } },
    { id: 'q28-c', questionId: 'q28', text: '不太喜欢，更偏好有准备', value: 0, dimensionScores: { 'dim-jp': 2 } },
  ],
  q29: [
    { id: 'q29-a', questionId: 'q29', text: '感到活跃，充满能量', value: 2, dimensionScores: { 'dim-ei': 2 } },
    { id: 'q29-b', questionId: 'q29', text: '还好，视情境而定', value: 1, dimensionScores: { 'dim-ei': 0 } },
    { id: 'q29-c', questionId: 'q29', text: '有点消耗，想找个安静的角落', value: 0, dimensionScores: { 'dim-ei': -2 } },
  ],
  q30: [
    { id: 'q30-a', questionId: 'q30', text: '规则存在是有原因的，应该遵守', value: 2, dimensionScores: { 'dim-jp': 2 } },
    { id: 'q30-b', questionId: 'q30', text: '合理的规则值得遵守，不合理的可以灵活', value: 1, dimensionScores: { 'dim-jp': 0 } },
    { id: 'q30-c', questionId: 'q30', text: '规则有时会限制创造力，我倾向灵活处理', value: 0, dimensionScores: { 'dim-jp': -2 } },
  ],
};

export const mbtiResults: TestResult[] = [
  {
    id: 'res-intj',
    testId: 'test-mbti',
    typeCode: 'INTJ',
    typeName: '建筑师',
    summary: '独立、战略性的思考者，以深刻的洞察力和长远的眼光见长',
    description: '你是内心世界极为丰富的战略家。你喜欢独立思考，善于发现事物背后的规律与联系。你的目标感极强，一旦决定了方向，便会以惊人的专注和效率推进，不轻易被外界干扰。你对低效和缺乏逻辑的事情容忍度低，但对你真正在乎的领域，会投入无穷的热情与深度。',
    strengths: ['战略思维清晰', '独立自主，不依赖他人认可', '追求卓越，标准高', '善于长期规划', '逻辑分析能力强'],
    weaknesses: ['有时过于理性，忽视他人情感', '对自己和他人要求过高', '不擅长表达情感', '有时显得过于自信或固执'],
    relationships: '你在关系中重视深度而非广度。你不轻易开放自己，但一旦信任某人，会是极为忠诚的伴侣或朋友。你可能需要有意识地练习表达情感，让亲近的人感受到你真实的温度。',
    career: '适合需要战略思维和独立工作的领域：科研、工程、战略咨询、软件架构、学术研究、创业。',
    growth: '试着允许自己偶尔的不完美。练习用语言表达你内心的关怀，你不需要变得更"感性"，但让人感受到你的在乎，会让关系更圆满。',
    minScore: 0,
    maxScore: 100,
  },
  {
    id: 'res-intp',
    testId: 'test-mbti',
    typeCode: 'INTP',
    typeName: '逻辑学家',
    summary: '富有创造力的思考者，对世界充满好奇和探究欲望',
    description: '你是一个喜欢探索思想边界的人。你对几乎所有领域都充满好奇，善于发现别人没有注意到的规律和联系。你的思维跳跃而灵活，在复杂的理论世界里如鱼得水。你重视真理多于和谐，宁愿说出让人不舒服的真相，也不愿维护一个虚假的共识。',
    strengths: ['极强的分析和推理能力', '创新思维，善于发现新视角', '客观公正，不受情绪左右', '知识面广，学习能力强', '思想开放，拥抱复杂性'],
    weaknesses: ['可能忽视日常事务和实际执行', '有时过于追求理论完美而迟迟不行动', '在情感表达上较为内敛', '容易在各种想法中迷失方向'],
    relationships: '你需要一个能和你深入交流思想的伴侣。表面的寒暄对你意义不大，但当你遇到真正理解你的人，你会成为极为珍贵的存在。',
    career: '适合科学研究、软件开发、哲学、数学、数据分析、写作、系统设计等领域。',
    growth: '把你的想法付诸行动吧。一个"大概可以做"的计划，不如一个"正在做中"的行动。',
    minScore: 0,
    maxScore: 100,
  },
  {
    id: 'res-entj',
    testId: 'test-mbti',
    typeCode: 'ENTJ',
    typeName: '指挥官',
    summary: '天生的领导者，以远见和果断行动将愿景变为现实',
    description: '你是一个充满能量的行动派领导者。你善于快速识别机遇，制定清晰战略，并带领团队向目标前进。你对低效深感厌恶，总是在寻找更好的方式做事。你的自信和果断激励着周围的人，但你也需要记住——最好的计划需要人心的支持才能真正落地。',
    strengths: ['强大的领导力和执行力', '战略眼光远', '高效率，善于整合资源', '充满自信，感染力强', '勇于承担责任'],
    weaknesses: ['有时缺乏耐心', '可能忽视他人情感需求', '对"不够高效"的人缺乏包容', '工作与生活的平衡是挑战'],
    relationships: '你在关系中是主导者，你需要一个能与你并肩作战的伴侣，而不只是跟随者。学会放慢脚步，聆听身边人的感受，会让你的关系更加稳固。',
    career: '适合管理咨询、企业战略、创业、法律、政治、高管职位等需要领导力的领域。',
    growth: '最伟大的领导者不只靠智慧和效率，还靠真正理解和关怀他人。允许自己偶尔慢下来，倾听。',
    minScore: 0,
    maxScore: 100,
  },
  {
    id: 'res-entp',
    testId: 'test-mbti',
    typeCode: 'ENTP',
    typeName: '辩论家',
    summary: '充满活力的创新者，喜欢挑战常规，探索无限可能',
    description: '你的思维就像永动机——总在产生新想法，总在挑战已有的结论。你享受智识的碰撞，喜欢辩论，不是为了赢，而是为了找到更接近真相的答案。你有一种天然的魅力，能快速把握情境，用机智和幽默让对话更有活力。',
    strengths: ['创新能力强，思维活跃', '机智幽默，社交魅力强', '善于发现机遇', '适应变化，灵活性高', '能快速建立联系和关系'],
    weaknesses: ['可能三分钟热度，难以坚持到底', '争论欲强，有时显得咄咄逼人', '不喜欢细节和执行层面', '过于发散，目标不够聚焦'],
    relationships: '你需要一个能和你斗嘴、辩论，同时又不会因此受伤的伴侣。你的关系充满活力，但也需要更多的稳定性和情感连接。',
    career: '适合创业、市场营销、媒体、咨询、创意行业、产品设计等需要创新思维的领域。',
    growth: '选择一件事，坚持做完。你的想法价值无穷，但只有落地才能产生真正的影响力。',
    minScore: 0,
    maxScore: 100,
  },
  {
    id: 'res-infj',
    testId: 'test-mbti',
    typeCode: 'INFJ',
    typeName: '提倡者',
    summary: '富有洞察力的理想主义者，以深刻的共情力和远见引领变革',
    description: '你是一个内心世界极为丰富的人。你对人有着天然的洞察力，能感受到他人没有说出口的情绪。你有强烈的价值观和理想，希望世界因为自己的存在而变得更好。你既有内向的深度，又有对人类连结的渴望，这种矛盾让你独一无二。',
    strengths: ['深度共情，理解他人', '富有远见和理想', '价值观坚定', '善于洞察人心', '创造力强，有独特视角'],
    weaknesses: ['容易过度承担他人情绪', '完美主义倾向', '有时过于敏感', '难以划定健康的边界', '容易精力耗尽'],
    relationships: '你在关系中是深度的给予者。你需要的不只是陪伴，而是真正被理解。学会照顾自己，才能持续照顾他人。',
    career: '适合心理咨询、写作、教育、社会工作、艺术、人力资源、非营利组织等领域。',
    growth: '你不需要拯救所有人。先照顾好自己，你的光才能持续照亮他人。',
    minScore: 0,
    maxScore: 100,
  },
  {
    id: 'res-infp',
    testId: 'test-mbti',
    typeCode: 'INFP',
    typeName: '调停者',
    summary: '充满理想的诗人，以内心的价值观为罗盘探索生命意义',
    description: '你的内心是一个充满色彩的世界。你对人类的情感有着敏锐的感知，你的善意和同理心让周围的人感到被接纳。你有自己独特的价值观，不轻易妥协，哪怕这意味着走一条少有人走的路。你是天生的理想主义者，相信美好，也在追求美好。',
    strengths: ['深度的同理心', '创造力和想象力丰富', '对价值观的坚守', '善于倾听', '真诚，内外一致'],
    weaknesses: ['容易过于理想化', '回避冲突', '不擅长处理批评', '可能拖延决策', '容易过度内省'],
    relationships: '你渴望深度的精神连结。你是一个极为忠诚的伴侣，但也需要对方理解你偶尔需要独处的空间。',
    career: '适合写作、艺术、心理学、教育、音乐、社会工作等充满意义感的领域。',
    growth: '允许自己不完美，也允许世界不完美。行动比完美的计划更能改变现实。',
    minScore: 0,
    maxScore: 100,
  },
  {
    id: 'res-enfj',
    testId: 'test-mbti',
    typeCode: 'ENFJ',
    typeName: '主人公',
    summary: '富有感召力的领导者，天生擅长激励他人，推动集体成长',
    description: '你是一个温暖而有力量的人。你对他人的需求极为敏感，总能找到激励他人的方式。你相信每个人都有成长的潜力，并愿意用自己的能量去点燃他人的火焰。你的存在本身就是一种正能量，让团队和关系更加有活力。',
    strengths: ['强大的感召力和影响力', '善于沟通，情商高', '关心他人成长', '有责任感', '善于处理人际关系'],
    weaknesses: ['容易忽视自己的需求', '对批评过于敏感', '可能过度控制结果', '难以说"不"'],
    relationships: '你在关系中是给予者，但记得，健康的关系是双向的。允许自己也被照顾。',
    career: '适合教育、心理咨询、公共关系、非营利机构、人力资源、销售和领导岗位。',
    growth: '你的价值不仅在于你为他人做了什么，也在于你是谁。给自己一些不付出、只是存在的时间。',
    minScore: 0,
    maxScore: 100,
  },
  {
    id: 'res-enfp',
    testId: 'test-mbti',
    typeCode: 'ENFP',
    typeName: '活动家',
    summary: '充满热情的探索者，以无限的创意和感染力拥抱每一种可能',
    description: '你的生命里充满了"可能性"。你对生活充满热情，善于发现事物有趣的一面，并将这种热情传递给周围的人。你是天生的联结者，能快速与他人建立真诚的连接。你相信每个人都值得被理解，每件事都有其深层的意义。',
    strengths: ['充满创意和热情', '善于激励他人', '适应能力强', '真诚，有感染力', '对人充满好奇和善意'],
    weaknesses: ['容易分心，注意力难以持续', '可能承诺过多，执行不足', '对批评较敏感', '有时过于理想化'],
    relationships: '你在关系中充满活力和温度，但也需要一段稳定、深度的连接。找到那个能接住你热情的人。',
    career: '适合创意产业、营销、咨询、教育、心理学、公关等充满人际互动和创新的领域。',
    growth: '聚焦是你最大的挑战，也是你最大的机遇。选择你真正在乎的，然后坚持下去。',
    minScore: 0,
    maxScore: 100,
  },
  {
    id: 'res-istj',
    testId: 'test-mbti',
    typeCode: 'ISTJ',
    typeName: '物流师',
    summary: '可靠、负责任的实践者，以踏实和专注构筑稳固的生活',
    description: '你是周围人可以依赖的那个人。你有着惊人的耐力和责任感，一旦承诺就会全力履行。你重视传统和经验，相信用久经考验的方法能得到稳定的结果。你的价值不在于声张，而在于默默的坚守与付出。',
    strengths: ['极强的责任感', '踏实可靠，言出必行', '组织和执行能力强', '注重细节', '不轻易放弃'],
    weaknesses: ['有时抗拒变化', '可能过于死板', '不擅长表达情感', '有时显得过于严肃'],
    relationships: '你是一个忠诚、稳定的伴侣。你的爱体现在行动中——为对方安排好一切，解决每一个问题。',
    career: '适合会计、法律、管理、工程、军队、政府等需要严谨和责任心的领域。',
    growth: '允许自己尝试新事物。有时候，打破惯例会带来意想不到的收获。',
    minScore: 0,
    maxScore: 100,
  },
  {
    id: 'res-isfj',
    testId: 'test-mbti',
    typeCode: 'ISFJ',
    typeName: '守卫者',
    summary: '温柔细心的保护者，以无声的关爱守护身边的每一个人',
    description: '你是那种让周围人感到温暖和安全的存在。你天生善于观察他人的需求，并在不声不响中给予关怀。你重视归属感和稳定，对家人和朋友有着深深的责任感。你的付出往往默默无闻，但却是最真实的存在。',
    strengths: ['细心体贴，善解人意', '极强的责任感', '忠诚可靠', '实际能力强', '记忆力好，记得每个细节'],
    weaknesses: ['容易忽视自己的需求', '不善于拒绝', '回避冲突', '变化时容易焦虑'],
    relationships: '你用行动表达爱，细节中充满了你的用心。记得，你的需求同样值得被满足。',
    career: '适合医疗、护理、教育、行政、社会服务等以人为本的领域。',
    growth: '学会把自己放在首位。照顾好自己，才能更好地照顾他人。',
    minScore: 0,
    maxScore: 100,
  },
  {
    id: 'res-estj',
    testId: 'test-mbti',
    typeCode: 'ESTJ',
    typeName: '总经理',
    summary: '高效果断的管理者，以实际行动和清晰规则构建秩序',
    description: '你是一个天生的组织者。你相信通过明确的规则和有效的执行，任何目标都可以实现。你有强烈的责任感，不喜欢模糊和混乱。你用行动和结果说话，是团队中可以信赖的定心石。',
    strengths: ['组织能力强', '果断高效', '责任感强', '擅长执行和推动', '可靠稳定'],
    weaknesses: ['可能过于强硬', '不够灵活', '对他人情感关注不足', '有时缺乏创新性'],
    relationships: '你用行动表达对家人的爱。学习倾听和表达情感，会让你的关系更加丰富。',
    career: '适合管理、法律、金融、军队、行政等需要执行力和组织力的领域。',
    growth: '规则是工具，不是目的。偶尔允许弹性，能让你走得更远。',
    minScore: 0,
    maxScore: 100,
  },
  {
    id: 'res-esfj',
    testId: 'test-mbti',
    typeCode: 'ESFJ',
    typeName: '执政官',
    summary: '热心周到的社交者，以关怀与组织能力维系和谐的关系网络',
    description: '你天生善于照顾人。你的存在让周围的环境变得更温暖、更有序。你享受与他人的深度连接，并在帮助他人中找到价值感。你对社交关系的记忆力惊人，总能记住每个人的喜好和重要日期。',
    strengths: ['出色的社交能力', '关心他人，体贴入微', '有责任感', '善于维系关系', '组织能力好'],
    weaknesses: ['过于在意他人看法', '不善于处理冲突', '容易忽视自己', '有时过于渴望认可'],
    relationships: '你是关系中的黏合剂。但别忘了，你自己的感受也值得被关注和照顾。',
    career: '适合教育、医疗、人力资源、社区工作、活动策划等以人际关系为核心的领域。',
    growth: '你不需要所有人的认可才能知道自己是有价值的。',
    minScore: 0,
    maxScore: 100,
  },
  {
    id: 'res-istp',
    testId: 'test-mbti',
    typeCode: 'ISTP',
    typeName: '鉴赏家',
    summary: '冷静独立的实践家，以精准观察和动手能力解决一切难题',
    description: '你是一个观察者，也是一个行动者。你善于快速理解事物的运作方式，并在需要时以最高效的方式解决问题。你不依赖规则，而是依赖自己的直接经验和判断。你享受独立，不喜欢被束缚。',
    strengths: ['冷静理性，危机应对能力强', '实践能力强，心灵手巧', '独立自主', '观察力敏锐', '灵活适应'],
    weaknesses: ['不擅长表达情感', '有时显得冷漠', '对长期规划缺乏耐心', '可能有些神秘难以捉摸'],
    relationships: '你需要一个尊重你独立性的伴侣。你的爱不在言语中，而在行动里——你会默默解决所有问题。',
    career: '适合工程、机械、运动、法证、飞行员、技术员等需要实践技能的领域。',
    growth: '开口说出你的感受。你的伴侣和朋友需要的不只是你的帮助，还有你的存在感。',
    minScore: 0,
    maxScore: 100,
  },
  {
    id: 'res-isfp',
    testId: 'test-mbti',
    typeCode: 'ISFP',
    typeName: '探险家',
    summary: '温柔感性的艺术家，以开放的心感受生命中每一个细微之美',
    description: '你有一颗极为敏感的心，能感受到生活中细微的美和温度。你活在当下，不喜欢被规划束缚，享受顺其自然的生活节奏。你有强烈的个人风格，对自己的价值观有着安静的坚守，即使不会大声说出来。',
    strengths: ['艺术感和审美力强', '随和、不强加于人', '善良、有同理心', '灵活，享受当下', '真实，不做作'],
    weaknesses: ['容易回避冲突', '不善于长期规划', '对批评敏感', '可能过于被动'],
    relationships: '你用陪伴和细节表达爱。你需要一个能理解你安静，不强迫你言语表达的伴侣。',
    career: '适合艺术、设计、音乐、摄影、时尚、护理等需要感知力和创造力的领域。',
    growth: '你的感受和想法值得被听见。学会表达，不只是为了他人，也是为了自己。',
    minScore: 0,
    maxScore: 100,
  },
  {
    id: 'res-estp',
    testId: 'test-mbti',
    typeCode: 'ESTP',
    typeName: '企业家',
    summary: '精力充沛的实干家，以敏锐的洞察和行动力把握每一个机会',
    description: '你是一个活在当下的人。你有着过人的行动力和应变能力，能快速读懂场合和他人，并以机智和魅力赢得局面。你享受刺激和变化，是那种在混乱中反而最冷静的人。',
    strengths: ['反应敏捷，应变能力强', '魅力十足，善于交际', '实际，善于解决眼前问题', '精力充沛', '勇敢，不怕挑战'],
    weaknesses: ['可能缺乏长期规划', '容易冒险', '对细节和理论缺乏耐心', '可能显得过于冲动'],
    relationships: '你在关系中充满活力，但需要注意，稳定和深度同样重要。',
    career: '适合销售、创业、市场营销、急救、运动、娱乐等高能量领域。',
    growth: '慢下来，想想五年后。你的行动力是宝贵的资产，配合长远眼光，才能发挥最大价值。',
    minScore: 0,
    maxScore: 100,
  },
  {
    id: 'res-esfp',
    testId: 'test-mbti',
    typeCode: 'ESFP',
    typeName: '表演者',
    summary: '热情洋溢的表演家，把生命变成一场充满欢乐的演出',
    description: '你是天生的表演者，不是在舞台上，而是在生活里。你的热情和开朗有一种感染力，让身边的人不由自主地被你带动。你活在当下，享受每一个时刻，不想把时间浪费在担忧和计划上。',
    strengths: ['开朗热情，感染力强', '善于享受当下', '高度社交能力', '实际，行动力强', '灵活随和'],
    weaknesses: ['可能回避长期规划', '对批评敏感', '容易受情绪影响', '有时冲动行事'],
    relationships: '你的爱是热烈而真实的。你需要一个能接住你热情的伴侣，也需要偶尔沉淀下来，建立更深的连接。',
    career: '适合娱乐、活动策划、销售、服务业、教育等需要人际互动的领域。',
    growth: '你的快乐是真实的，但偶尔的沉淀，也会让你更了解自己真正想要什么。',
    minScore: 0,
    maxScore: 100,
  },
];

// ==== Big Five Test Data ====
export const bigFiveDimensions: TestDimension[] = [
  { id: 'bf-o', testId: 'test-bigfive', name: '开放性', description: '对新体验和创造力的接受程度', minLabel: '保守稳定', maxLabel: '开放创意', color: '#8b5cf6' },
  { id: 'bf-c', testId: 'test-bigfive', name: '责任心', description: '自律性和目标导向程度', minLabel: '随性灵活', maxLabel: '严谨自律', color: '#06b6d4' },
  { id: 'bf-e', testId: 'test-bigfive', name: '外向性', description: '社交能量和积极情绪水平', minLabel: '内敛安静', maxLabel: '活跃外向', color: '#10b981' },
  { id: 'bf-a', testId: 'test-bigfive', name: '宜人性', description: '对他人的合作与信任倾向', minLabel: '独立直接', maxLabel: '温和体贴', color: '#f59e0b' },
  { id: 'bf-n', testId: 'test-bigfive', name: '神经质', description: '情绪稳定性与压力应对', minLabel: '情绪稳定', maxLabel: '情绪敏感', color: '#ef4444' },
];

export const bigFiveQuestions: TestQuestion[] = [
  { id: 'bf-q1', testId: 'test-bigfive', text: '你喜欢尝试新事物和新体验', order: 1, dimensionId: 'bf-o' },
  { id: 'bf-q2', testId: 'test-bigfive', text: '你在开始工作前会做详细计划', order: 2, dimensionId: 'bf-c' },
  { id: 'bf-q3', testId: 'test-bigfive', text: '你喜欢参加聚会和社交活动', order: 3, dimensionId: 'bf-e' },
  { id: 'bf-q4', testId: 'test-bigfive', text: '你容易体谅他人的立场', order: 4, dimensionId: 'bf-a' },
  { id: 'bf-q5', testId: 'test-bigfive', text: '你容易感到担忧或紧张', order: 5, dimensionId: 'bf-n' },
  { id: 'bf-q6', testId: 'test-bigfive', text: '你喜欢思考抽象概念和理论', order: 6, dimensionId: 'bf-o' },
  { id: 'bf-q7', testId: 'test-bigfive', text: '你会按时完成任务和承诺', order: 7, dimensionId: 'bf-c' },
  { id: 'bf-q8', testId: 'test-bigfive', text: '你在与人交谈时感到充满活力', order: 8, dimensionId: 'bf-e' },
  { id: 'bf-q9', testId: 'test-bigfive', text: '你会主动帮助有困难的人', order: 9, dimensionId: 'bf-a' },
  { id: 'bf-q10', testId: 'test-bigfive', text: '你情绪波动比较明显', order: 10, dimensionId: 'bf-n' },
  { id: 'bf-q11', testId: 'test-bigfive', text: '你喜欢艺术、音乐或文学', order: 11, dimensionId: 'bf-o' },
  { id: 'bf-q12', testId: 'test-bigfive', text: '你注重做事的方式和规范', order: 12, dimensionId: 'bf-c' },
  { id: 'bf-q13', testId: 'test-bigfive', text: '你容易成为团队中的活跃分子', order: 13, dimensionId: 'bf-e' },
  { id: 'bf-q14', testId: 'test-bigfive', text: '你很少与人发生争执', order: 14, dimensionId: 'bf-a' },
  { id: 'bf-q15', testId: 'test-bigfive', text: '你有时会无缘无故地感到难过', order: 15, dimensionId: 'bf-n' },
  { id: 'bf-q16', testId: 'test-bigfive', text: '你对不同文化和思想充满好奇', order: 16, dimensionId: 'bf-o' },
  { id: 'bf-q17', testId: 'test-bigfive', text: '你会努力把每件事做到最好', order: 17, dimensionId: 'bf-c' },
  { id: 'bf-q18', testId: 'test-bigfive', text: '你在人群中感到自信和自在', order: 18, dimensionId: 'bf-e' },
  { id: 'bf-q19', testId: 'test-bigfive', text: '你相信大多数人都是善意的', order: 19, dimensionId: 'bf-a' },
  { id: 'bf-q20', testId: 'test-bigfive', text: '压力大时你容易感到不安', order: 20, dimensionId: 'bf-n' },
  { id: 'bf-q21', testId: 'test-bigfive', text: '你喜欢富有创意地解决问题', order: 21, dimensionId: 'bf-o' },
  { id: 'bf-q22', testId: 'test-bigfive', text: '你很少拖延，喜欢按时完成', order: 22, dimensionId: 'bf-c' },
  { id: 'bf-q23', testId: 'test-bigfive', text: '你喜欢主导对话和分享想法', order: 23, dimensionId: 'bf-e' },
  { id: 'bf-q24', testId: 'test-bigfive', text: '你容易受到他人情绪的影响', order: 24, dimensionId: 'bf-a' },
  { id: 'bf-q25', testId: 'test-bigfive', text: '你有时会过度担心小事', order: 25, dimensionId: 'bf-n' },
];

export const bigFiveOptionsTemplate: TestOption[] = [
  { id: 'scale-1', questionId: '', text: '完全不符合', value: 1, dimensionScores: {} },
  { id: 'scale-2', questionId: '', text: '比较不符合', value: 2, dimensionScores: {} },
  { id: 'scale-3', questionId: '', text: '不确定', value: 3, dimensionScores: {} },
  { id: 'scale-4', questionId: '', text: '比较符合', value: 4, dimensionScores: {} },
  { id: 'scale-5', questionId: '', text: '完全符合', value: 5, dimensionScores: {} },
];

// ==== Career Tendency Test Data ====
export const careerDimensions: TestDimension[] = [
  { id: 'car-r', testId: 'test-career', name: '实践型', description: '动手操作和技术能力', minLabel: '低', maxLabel: '高', color: '#f59e0b' },
  { id: 'car-i', testId: 'test-career', name: '研究型', description: '分析思考和学术倾向', minLabel: '低', maxLabel: '高', color: '#8b5cf6' },
  { id: 'car-a', testId: 'test-career', name: '艺术型', description: '创造力和美学表达', minLabel: '低', maxLabel: '高', color: '#ec4899' },
  { id: 'car-s', testId: 'test-career', name: '社会型', description: '帮助他人和人际互动', minLabel: '低', maxLabel: '高', color: '#10b981' },
  { id: 'car-e', testId: 'test-career', name: '管理型', description: '领导力和商业能力', minLabel: '低', maxLabel: '高', color: '#06b6d4' },
  { id: 'car-c', testId: 'test-career', name: '事务型', description: '细节处理和规范执行', minLabel: '低', maxLabel: '高', color: '#64748b' },
];

// Helper to get test questions and options
export function getTestData(testId: string) {
  switch (testId) {
    case 'test-mbti':
      return {
        test: tests.find(t => t.id === testId),
        dimensions: mbtiDimensions,
        questions: mbtiQuestions,
        options: mbtiOptions,
        results: mbtiResults,
      };
    case 'test-bigfive':
      return {
        test: tests.find(t => t.id === testId),
        dimensions: bigFiveDimensions,
        questions: bigFiveQuestions,
        options: {},
        results: [],
      };
    case 'test-temperament':
      return {
        test: tests.find(t => t.id === testId),
        dimensions: temperamentDimensions,
        questions: temperamentQuestions,
        options: temperamentOptions,
        results: temperamentResults,
      };
    case 'test-introversion':
      return {
        test: tests.find(t => t.id === testId),
        dimensions: introversionDimensions,
        questions: introversionQuestions,
        options: introversionOptions,
        results: introversionResults,
      };
    case 'test-love-style':
      return {
        test: tests.find(t => t.id === testId),
        dimensions: loveStyleDimensions,
        questions: loveStyleQuestions,
        options: loveStyleOptions,
        results: loveStyleResults,
      };
    case 'test-sbti':
      return {
        test: tests.find(t => t.id === testId),
        dimensions: [],
        questions: sbtiQuestions,
        options: {},
        results: sbtiResults,
      };
    default:
      // 对于其他测试，尝试找到对应的问题和结果
      return {
        test: tests.find(t => t.id === testId),
        dimensions: [],
        questions: [],
        options: {},
        results: [],
      };
  }
}

export function calculateMbtiResult(answers: Record<string, string>): {
  typeCode: string;
  dimensionScores: Record<string, number>;
  result: TestResult;
} {
  const dimScores: Record<string, number> = {
    'dim-ei': 0,
    'dim-sn': 0,
    'dim-tf': 0,
    'dim-jp': 0,
  };

  mbtiQuestions.forEach((q) => {
    const answeredOptionId = answers[q.id];
    if (!answeredOptionId) return;
    const opts = mbtiOptions[q.id];
    if (!opts) return;
    const opt = opts.find(o => o.id === String(answeredOptionId));
    if (!opt) return;
    Object.entries(opt.dimensionScores).forEach(([dim, score]) => {
      dimScores[dim] = (dimScores[dim] || 0) + score;
    });
  });

  const e = dimScores['dim-ei'] > 0 ? 'E' : 'I';
  const n = dimScores['dim-sn'] > 0 ? 'N' : 'S';
  const t = dimScores['dim-tf'] > 0 ? 'T' : 'F';
  const j = dimScores['dim-jp'] > 0 ? 'J' : 'P';
  const typeCode = `${e}${n}${t}${j}`;

  const result = mbtiResults.find(r => r.typeCode === typeCode) || mbtiResults[0];
  return { typeCode, dimensionScores: dimScores, result };
}


// ==== SBTI 人格测试 ====
// Silly Big Personality Test —— 2026年4月爆火的娱乐向人格测试
// 机制：31道题，每题A/B/C，选项对应27种人格类型得分，最终取最高分对应类型

export const sbtiQuestions = [
  {
    id: 'sb-q1', testId: 'test-sbti', order: 1,
    text: '一个萌萌的小女孩向你走来，递给你一颗棒棒糖，你第一反应是…',
    options: [
      { id: 'sb-q1-a', text: '哇好可爱，接过来谢谢她😊', scores: { HHHH: 3, MUM: 2, LOVR: 1 } },
      { id: 'sb-q1-b', text: '这孩子是来干嘛的，会不会有什么企图', scores: { SHIT: 2, IMSB: 1, THIN: 2 } },
      { id: 'sb-q1-c', text: '（内心一片空白，接过来，保持微笑）', scores: { FAKE: 3, ZZZZ: 2, OJBK: 1 } },
    ],
  },
  {
    id: 'sb-q2', testId: 'test-sbti', order: 2,
    text: '今天计划休息一天，但朋友突然叫你出去玩，你会…',
    options: [
      { id: 'sb-q2-a', text: '立刻换装出门，生命在于运动！', scores: { GOGO: 3, CTRL: 1, BOSS: 1 } },
      { id: 'sb-q2-b', text: '找借口说身体不舒服，继续躺着', scores: { ZZZZ: 3, MALO: 2, DEAD: 1 } },
      { id: 'sb-q2-c', text: '"好啊"（内心：我的休息日…）', scores: { FAKE: 2, MUM: 2, SOLO: 1 } },
    ],
  },
  {
    id: 'sb-q3', testId: 'test-sbti', order: 3,
    text: '在饭桌上，亲戚问你"工资多少"，你会…',
    options: [
      { id: 'sb-q3-a', text: '直接报数字，有什么不好说的', scores: { BOSS: 2, CTRL: 1, GOGO: 1 } },
      { id: 'sb-q3-b', text: '"还行吧"然后低头扒饭', scores: { SOLO: 2, MALO: 2, OJBK: 1 } },
      { id: 'sb-q3-c', text: '（在心里说了很多脏话）"不多不多"', scores: { FUCK: 3, SHIT: 2, IMSB: 1 } },
    ],
  },
  {
    id: 'sb-q4', testId: 'test-sbti', order: 4,
    text: '你被便秘困在马桶上30分钟了，你会…',
    options: [
      { id: 'sb-q4-a', text: '刷手机，当厕所是第二个家', scores: { EAT: 2, HHHH: 2, MALO: 2 } },
      { id: 'sb-q4-b', text: '陷入存在主义危机，开始思考人生', scores: { THIN: 3, MONK: 2, IMSB: 1 } },
      { id: 'sb-q4-c', text: '（内心狂骂，表情平静）坐着等', scores: { ZZZZ: 3, OJBK: 2, FUCK: 1 } },
    ],
  },
  {
    id: 'sb-q5', testId: 'test-sbti', order: 5,
    text: '发现同事在背后说自己坏话，你会…',
    options: [
      { id: 'sb-q5-a', text: '直接找他对质，今天必须说清楚', scores: { BOSS: 3, CTRL: 2, FUCK: 2 } },
      { id: 'sb-q5-b', text: '假装不知道，继续表面和平', scores: { FAKE: 3, OJBK: 2, ZZZZ: 1 } },
      { id: 'sb-q5-c', text: '独自消化，又开始反省是不是自己的问题', scores: { IMSB: 3, THIN: 2, SOLO: 2 } },
    ],
  },
  {
    id: 'sb-q6', testId: 'test-sbti', order: 6,
    text: '朋友突然哭着给你发消息说失恋了，你会…',
    options: [
      { id: 'sb-q6-a', text: '立刻打电话，全程陪伴安慰', scores: { MUM: 3, LOVR: 3, THANK: 1 } },
      { id: 'sb-q6-b', text: '发个拥抱表情，等她说完再回', scores: { OJBK: 2, FAKE: 1, HHHH: 1 } },
      { id: 'sb-q6-c', text: '"又失恋了？"然后开始提建议', scores: { CTRL: 2, BOSS: 2, THIN: 1 } },
    ],
  },
  {
    id: 'sb-q7', testId: 'test-sbti', order: 7,
    text: '一觉醒来发现今天不需要上班，你的第一反应是…',
    options: [
      { id: 'sb-q7-a', text: '！！！立刻开始规划今天怎么玩', scores: { GOGO: 3, HHHH: 2, EAT: 2 } },
      { id: 'sb-q7-b', text: '继续睡，睡到自然醒再说', scores: { DEAD: 3, ZZZZ: 3, MALO: 2 } },
      { id: 'sb-q7-c', text: '焦虑——有什么事情还没做完吗', scores: { IMSB: 2, CTRL: 2, THIN: 2 } },
    ],
  },
  {
    id: 'sb-q8', testId: 'test-sbti', order: 8,
    text: '有人突然问你借钱，你会…',
    options: [
      { id: 'sb-q8-a', text: '借！朋友有难怎么能不帮', scores: { ATM: 3, MUM: 2, LOVR: 1 } },
      { id: 'sb-q8-b', text: '"最近手头也紧"（其实没有）', scores: { POOR: 2, SOLO: 2, FAKE: 2 } },
      { id: 'sb-q8-c', text: '看情况，问清楚原因再决定', scores: { CTRL: 2, BOSS: 2, THIN: 1 } },
    ],
  },
  {
    id: 'sb-q9', testId: 'test-sbti', order: 9,
    text: '下面这句话，哪个最像你对朋友说的…',
    options: [
      { id: 'sb-q9-a', text: '"你这样做不对，应该这样……"（说了很久）', scores: { BOSS: 2, CTRL: 3, MUM: 1 } },
      { id: 'sb-q9-b', text: '"你开心就好"（然后继续摸鱼）', scores: { MALO: 3, OJBK: 3, DEAD: 1 } },
      { id: 'sb-q9-c', text: '"你好可怜哦"（内心也在哭）', scores: { LOVR: 2, THANK: 2, IMSB: 2 } },
    ],
  },
  {
    id: 'sb-q10', testId: 'test-sbti', order: 10,
    text: '你看见路边有人摔倒了，你会…',
    options: [
      { id: 'sb-q10-a', text: '立刻跑过去扶，询问是否需要帮助', scores: { MUM: 3, GOGO: 1, THANK: 2 } },
      { id: 'sb-q10-b', text: '停了一下，观察一下，再过去', scores: { THIN: 2, CTRL: 1, FAKE: 1 } },
      { id: 'sb-q10-c', text: '（哦不）拿出手机……', scores: { WOC: 3, HHHH: 1, OJBK: 2 } },
    ],
  },
  {
    id: 'sb-q11', testId: 'test-sbti', order: 11,
    text: '参加一个全是陌生人的聚会，你会…',
    options: [
      { id: 'sb-q11-a', text: '全场认识一遍，笑容挂全程', scores: { SEXY: 3, BOSS: 2, GOGO: 1 } },
      { id: 'sb-q11-b', text: '找个角落，看手机或假装喝饮料', scores: { SOLO: 3, DEAD: 2, ZZZZ: 1 } },
      { id: 'sb-q11-c', text: '表面活跃，内心如木', scores: { FAKE: 3, JOKR: 2, IMSB: 1 } },
    ],
  },
  {
    id: 'sb-q12', testId: 'test-sbti', order: 12,
    text: '你最近最大的烦恼是…',
    options: [
      { id: 'sb-q12-a', text: '没钱', scores: { POOR: 4, ATM: 2, MALO: 1 } },
      { id: 'sb-q12-b', text: '没意思，对什么都提不起劲', scores: { DEAD: 4, MONK: 2, ZZZZ: 1 } },
      { id: 'sb-q12-c', text: '想太多，脑子停不下来', scores: { THIN: 4, IMSB: 2, JOKR: 1 } },
    ],
  },
  {
    id: 'sb-q13', testId: 'test-sbti', order: 13,
    text: '和别人争论时，你通常是…',
    options: [
      { id: 'sb-q13-a', text: '我必须说清楚，不然难受', scores: { BOSS: 3, CTRL: 2, FUCK: 2 } },
      { id: 'sb-q13-b', text: '"随便"（然后在心里继续骂）', scores: { FUCK: 3, IMSB: 2, OJBK: 1 } },
      { id: 'sb-q13-c', text: '逃离现场或沉默', scores: { SOLO: 3, DEAD: 2, MONK: 2 } },
    ],
  },
  {
    id: 'sb-q14', testId: 'test-sbti', order: 14,
    text: '（没有问题）',
    options: [
      { id: 'sb-q14-a', text: 'A', scores: { LUCK: 3, HHHH: 1, OJBK: 1 } },
      { id: 'sb-q14-b', text: 'B', scores: { THIN: 2, IMSB: 2, MONK: 1 } },
      { id: 'sb-q14-c', text: 'C', scores: { WOC: 3, FUCK: 1, DEAD: 1 } },
    ],
  },
  {
    id: 'sb-q15', testId: 'test-sbti', order: 15,
    text: '你最常用来解压的方式是…',
    options: [
      { id: 'sb-q15-a', text: '吃！吃完什么都好了', scores: { EAT: 4, HHHH: 2, POOR: 1 } },
      { id: 'sb-q15-b', text: '睡觉，睡到忘记烦恼', scores: { ZZZZ: 4, DEAD: 2, MALO: 2 } },
      { id: 'sb-q15-c', text: '喝酒，微醺的时候最自由', scores: { DRNK: 4, JOKR: 1, LOVR: 1 } },
    ],
  },
  {
    id: 'sb-q16', testId: 'test-sbti', order: 16,
    text: '别人说"你变了"，你的反应是…',
    options: [
      { id: 'sb-q16-a', text: '是吗？变好了还是变坏了？（认真分析）', scores: { THIN: 3, CTRL: 1, BOSS: 1 } },
      { id: 'sb-q16-b', text: '我从来没有变过，本来就这样', scores: { MONK: 2, OJBK: 2, SEXY: 1 } },
      { id: 'sb-q16-c', text: '（我本来是什么样的？越想越迷茫）', scores: { FAKE: 3, IMSB: 2, THIN: 1 } },
    ],
  },
  {
    id: 'sb-q17', testId: 'test-sbti', order: 17,
    text: '你对"内卷"这件事的态度是…',
    options: [
      { id: 'sb-q17-a', text: '卷！不卷怎么能赢', scores: { BOSS: 2, GOGO: 3, CTRL: 1 } },
      { id: 'sb-q17-b', text: '躺平！卷有什么意思', scores: { MALO: 4, DEAD: 2, ZZZZ: 1 } },
      { id: 'sb-q17-c', text: '（想卷，但卷不动）', scores: { IMSB: 3, POOR: 1, SHIT: 2 } },
    ],
  },
  {
    id: 'sb-q18', testId: 'test-sbti', order: 18,
    text: '你最近一次哭，是因为…',
    options: [
      { id: 'sb-q18-a', text: '被人说了两句好话，绷不住了', scores: { THANK: 4, LOVR: 2, IMSB: 1 } },
      { id: 'sb-q18-b', text: '想到了某件很久以前的事', scores: { THIN: 3, LOVR: 2, SOLO: 1 } },
      { id: 'sb-q18-c', text: '我不哭，忘了上次哭是什么时候了', scores: { DEAD: 3, MONK: 2, SHIT: 2 } },
    ],
  },
  {
    id: 'sb-q19', testId: 'test-sbti', order: 19,
    text: '你对"他人的评价"的态度是…',
    options: [
      { id: 'sb-q19-a', text: '无所谓，你们随便说', scores: { OJBK: 3, MONK: 2, MALO: 1 } },
      { id: 'sb-q19-b', text: '（表面无所谓，实际记了一百年）', scores: { FAKE: 2, IMSB: 3, THANK: 1 } },
      { id: 'sb-q19-c', text: '挺在意的，我承认', scores: { LOVR: 2, CTRL: 1, IMSB: 2 } },
    ],
  },
  {
    id: 'sb-q20', testId: 'test-sbti', order: 20,
    text: '如果可以拥有一种超能力，你会选…',
    options: [
      { id: 'sb-q20-a', text: '瞬间移动，随时逃离任何场合', scores: { SOLO: 3, DEAD: 1, ZZZZ: 1 } },
      { id: 'sb-q20-b', text: '读心术，知道别人在想什么', scores: { CTRL: 3, THIN: 2, BOSS: 1 } },
      { id: 'sb-q20-c', text: '永远不需要钱，花不完', scores: { POOR: 4, ATM: 1, HHHH: 2 } },
    ],
  },
  {
    id: 'sb-q21', testId: 'test-sbti', order: 21,
    text: '你最不想听到的一句话是…',
    options: [
      { id: 'sb-q21-a', text: '"你能不能振作一点"', scores: { DEAD: 3, MALO: 2, ZZZZ: 1 } },
      { id: 'sb-q21-b', text: '"我需要跟你认真谈谈"', scores: { WOC: 3, IMSB: 2, THIN: 1 } },
      { id: 'sb-q21-c', text: '"下次你来请客"', scores: { POOR: 4, ATM: 2, FUCK: 1 } },
    ],
  },
  {
    id: 'sb-q22', testId: 'test-sbti', order: 22,
    text: '深夜3点，你在干嘛…',
    options: [
      { id: 'sb-q22-a', text: '睡觉，我作息规律', scores: { MONK: 3, CTRL: 2, BOSS: 1 } },
      { id: 'sb-q22-b', text: '刷手机或看剧，根本睡不着', scores: { THIN: 2, DRNK: 1, MALO: 2 } },
      { id: 'sb-q22-c', text: '喝酒或瞎想人生', scores: { DRNK: 4, SHIT: 2, JOKR: 1 } },
    ],
  },
  {
    id: 'sb-q23', testId: 'test-sbti', order: 23,
    text: '有人突然夸你"你今天好漂亮/帅"，你会…',
    options: [
      { id: 'sb-q23-a', text: '谢谢！我知道的😏', scores: { SEXY: 4, BOSS: 1, HHHH: 1 } },
      { id: 'sb-q23-b', text: '（内心雀跃，表面镇定）"没有啦"', scores: { THANK: 3, FAKE: 2, LOVR: 1 } },
      { id: 'sb-q23-c', text: '他在讽刺我吗……', scores: { IMSB: 3, SHIT: 2, THIN: 1 } },
    ],
  },
  {
    id: 'sb-q24', testId: 'test-sbti', order: 24,
    text: '你最常对自己说的话是…',
    options: [
      { id: 'sb-q24-a', text: '"算了，反正也无所谓"', scores: { OJBK: 4, MALO: 2, DEAD: 1 } },
      { id: 'sb-q24-b', text: '"怎么又是我的问题"', scores: { IMSB: 4, SHIT: 1, THIN: 1 } },
      { id: 'sb-q24-c', text: '"我行的，再撑一下"', scores: { GOGO: 3, BOSS: 2, THANK: 1 } },
    ],
  },
  {
    id: 'sb-q25', testId: 'test-sbti', order: 25,
    text: '有一天你意外得到了一笔钱，你会…',
    options: [
      { id: 'sb-q25-a', text: '立刻去吃最贵的那家餐厅！', scores: { EAT: 4, HHHH: 2, GOGO: 1 } },
      { id: 'sb-q25-b', text: '存起来，以后用', scores: { CTRL: 2, BOSS: 1, THIN: 2 } },
      { id: 'sb-q25-c', text: '借给朋友……（然后要不回来）', scores: { ATM: 4, MUM: 2, POOR: 1 } },
    ],
  },
  {
    id: 'sb-q26', testId: 'test-sbti', order: 26,
    text: '你觉得自己最大的问题是…',
    options: [
      { id: 'sb-q26-a', text: '太懒，什么都不想动', scores: { MALO: 3, DEAD: 3, ZZZZ: 2 } },
      { id: 'sb-q26-b', text: '太软，总是帮别人吃亏', scores: { ATM: 3, MUM: 2, THANK: 1 } },
      { id: 'sb-q26-c', text: '太作，喜欢自己折腾自己', scores: { IMSB: 4, THIN: 2, WOC: 1 } },
    ],
  },
  {
    id: 'sb-q27', testId: 'test-sbti', order: 27,
    text: '你的朋友圈/社交媒体通常发…',
    options: [
      { id: 'sb-q27-a', text: '美食、日常、快乐碎片', scores: { EAT: 2, HHHH: 3, GOGO: 1 } },
      { id: 'sb-q27-b', text: '很少发，发了也很快删掉', scores: { SOLO: 3, FAKE: 2, IMSB: 1 } },
      { id: 'sb-q27-c', text: '深夜感悟或让人看不懂的句子', scores: { JOKR: 2, THIN: 3, DRNK: 1 } },
    ],
  },
  {
    id: 'sb-q28', testId: 'test-sbti', order: 28,
    text: '你觉得"幸运"这件事…',
    options: [
      { id: 'sb-q28-a', text: '跟我无关，倒霉的总是我', scores: { SHIT: 3, OHNO: 4, POOR: 1 } },
      { id: 'sb-q28-b', text: '时好时坏，看心情', scores: { LUCK: 4, OJBK: 2, HHHH: 1 } },
      { id: 'sb-q28-c', text: '我总体还是比较走运的', scores: { LUCK: 2, SEXY: 2, BOSS: 1 } },
    ],
  },
  {
    id: 'sb-q29', testId: 'test-sbti', order: 29,
    text: '下班路上你在想…',
    options: [
      { id: 'sb-q29-a', text: '今天吃什么！！！', scores: { EAT: 4, HHHH: 2, GOGO: 1 } },
      { id: 'sb-q29-b', text: '今天哪里出了错，明天还能改吗', scores: { IMSB: 3, THIN: 3, CTRL: 1 } },
      { id: 'sb-q29-c', text: '什么都没想，已经进入省电模式', scores: { DEAD: 3, MALO: 2, ZZZZ: 2 } },
    ],
  },
  {
    id: 'sb-q30', testId: 'test-sbti', order: 30,
    text: '别人跟你说"我最近很累"，你的回复是…',
    options: [
      { id: 'sb-q30-a', text: '"我也是！我们一起累吧"', scores: { JOKR: 3, HHHH: 2, MALO: 1 } },
      { id: 'sb-q30-b', text: '"要不要聊聊？我陪着你"', scores: { MUM: 3, LOVR: 2, THANK: 2 } },
      { id: 'sb-q30-c', text: '"嗯"（因为我也没力气安慰人了）', scores: { DEAD: 3, OJBK: 2, ZZZZ: 1 } },
    ],
  },
  {
    id: 'sb-q31', testId: 'test-sbti', order: 31,
    text: '最后一道题：你现在感觉怎么样？',
    options: [
      { id: 'sb-q31-a', text: '还好，正常活着', scores: { MALO: 2, OJBK: 2, HHHH: 2 } },
      { id: 'sb-q31-b', text: '累，但撑着', scores: { GOGO: 2, IMSB: 2, THANK: 2 } },
      { id: 'sb-q31-c', text: '不知道，空白状态', scores: { DEAD: 3, MONK: 2, THIN: 1 } },
    ],
  },
];

export const sbtiResults = [
  {
    id: 'sb-malo', testId: 'test-sbti', typeCode: 'MALO',
    typeName: '吗喽',
    summary: '佛系打工人，拒绝内卷，只想安稳摸鱼',
    description: '你是当代社会的清醒旁观者。"吗喽"本是对打工人的自嘲，你深知内卷的荒诞，选择以低耗能的方式应对高压世界。你不是真的懒——只是懒得演。你的智慧在于：知道什么事值得努力，什么事不值得。',
    strengths: ['心态稳健，不轻易焦虑', '不争不抢，内心自有标准', '善于保留能量给真正重要的事'],
    weaknesses: ['有时会错失机会', '容易被误认为不上进', '偶尔会后悔当时没拼一把'],
    relationships: '你在关系里不爱主动，但一旦开始就很稳定。你不喜欢戏精，欣赏同样懂得"差不多就行"的人。',
    career: '适合节奏稳定、不靠"激情"驱动的工作。你能把普通的岗位做得扎实，是靠谱的执行者。',
    growth: '偶尔允许自己认真一次——不是为了赢，而是看看自己到底能走多远。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-dead', testId: 'test-sbti', typeCode: 'DEAD',
    typeName: '死者',
    summary: '心已躺平，无欲无求，对啥都没兴趣',
    description: '你抵达了一种极致的"平静"——不是冥想出来的，而是被生活耗尽之后的副产品。你并非真的不在乎，只是在乎过太多次、失望过太多次，最后选择了"情感节能模式"。你是深藏功与名的人。',
    strengths: ['超强抗压能力，已无可击败', '不会被情绪绑架', '内心其实有很深的感受，只是不说'],
    weaknesses: ['很难被激励起来', '可能错过真正有意义的连结', '对自己和他人的期望都很低'],
    relationships: '很少主动，但若有人真的走进来，你会比谁都真诚。你需要一个不逼你"振作"的伴侣。',
    career: '最适合稳定的、不需要热情驱动的工作。你的优势是：不会因情绪波动影响输出质量。',
    growth: '找一件让你愿意"多看一眼"的事。不用是热情，只要有一点点好奇就够了。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-zzzz', testId: 'test-sbti', typeCode: 'ZZZZ',
    typeName: '装死者',
    summary: '表面摆烂，用睡觉逃避，遇事就装死',
    description: '你是人类进化的最新成果：在任何困难面前，你都能以惊人的速度进入"系统休眠"状态。睡觉是你的盾牌，摆烂是你的武器，但你其实比任何人都清楚问题在哪里——只是暂时选择不面对。',
    strengths: ['极强的自我保护能力', '知道何时该"关机"修复', '清醒时效率其实不低'],
    weaknesses: ['拖延症晚期', '重要的事总被睡眠打断', '清醒后会有一波强烈的罪恶感'],
    relationships: '感情里很被动，但睡醒了真的很好。你需要一个懂得让你"充电"的人，而不是不停催你起床的人。',
    career: '灵活时间或项目制工作很适合你。集中爆发的能量，加上充分的休息，你能产出不错的结果。',
    growth: '下次遇到难题，先睡一觉没问题——但记得醒来之后给自己一个小时，真的去面对它。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-fake', testId: 'test-sbti', typeCode: 'FAKE',
    typeName: '伪人',
    summary: '社交面具人，人前一套人后一套，活很累',
    description: '你在社交场合永远表现良好，但那个"你"和真实的你之间隔着一面镜子。你不是坏人——你只是太懂得如何适应每一个场合，久而久之连自己都分不清哪个才是本体。累，但停不下来。',
    strengths: ['极强的社交适应能力', '善于照顾他人感受', '在任何场合都能圆场'],
    weaknesses: ['自我认知模糊', '内心疲惫', '偶尔想要"做自己"却不知道自己是谁'],
    relationships: '你善于维系表面和谐，但真正的亲密关系需要你拿掉面具。找那个让你可以"休息"的人。',
    career: '销售、公关、服务业……所有需要"得体"的场合，你都如鱼得水。但内心需要有一个属于自己的出口。',
    growth: '每天给自己留10分钟，做一件完全不用表演的事。哪怕只是一个人发发呆。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-imsb', testId: 'test-sbti', typeCode: 'IMSB',
    typeName: '自我攻击者',
    summary: '总怪自己，爱内耗，一边努力一边否定',
    description: '你是自己最苛刻的批评者。任何事情出了差错，第一个怀疑的总是自己；别人一个眼神，你能解读出一篇论文。你很努力，但那份努力里有一半是在和自己的声音博弈。',
    strengths: ['高度自省，不断成长', '做事认真细致', '有强烈的责任感'],
    weaknesses: ['内耗严重', '容易陷入自我怀疑的死循环', '对自己的要求远高于他人'],
    relationships: '你爱得很深，但也需要对方不断确认你的价值。找一个懂得及时给你反馈的人。',
    career: '适合需要精益求精的工作。但记得设定"够好了"的边界，不然你会把自己耗空。',
    growth: '今天试着对一件做得还可以的事说："这已经够好了。"',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-boss', testId: 'test-sbti', typeCode: 'BOSS',
    typeName: '领导者',
    summary: '气场强，爱掌控，天生带队、爱决策',
    description: '你走进一个房间，空气会感受到你。你有天然的决策欲和号召力，习惯站在局面的中心，把事情推进。你不是非要出风头，只是你的大脑就是为"解决问题、推动结果"而运转的。',
    strengths: ['执行力强，说到做到', '善于把控全局', '在混乱中能迅速找到方向'],
    weaknesses: ['有时控制欲过强', '不善于让别人慢下来', '对"不效率"的人缺乏耐心'],
    relationships: '你在关系里会自然承担更多，但也要允许对方有自己的节奏。真正的连结不是管理，是理解。',
    career: '管理、创业、项目负责、团队带领……有决策权的位置都是你的主场。',
    growth: '学会把一件事的控制权完全交出去，然后观察别人如何处理——你会发现新的角度。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-mum', testId: 'test-sbti', typeCode: 'MUM',
    typeName: '妈妈型',
    summary: '爱操心、会照顾人，温柔包容、总付出',
    description: '你是朋友圈里的"妈妈"。不论你实际年龄多大，你总是那个准备好纸巾、记得所有人饮食禁忌、第一个发现有人不对劲的人。你的爱是实质性的，体现在每一个细节的照顾里。',
    strengths: ['高度共情，善于照顾他人', '记忆细节能力超强', '让身边人感到安全'],
    weaknesses: ['习惯把他人需求放在自己之前', '很难开口说"我也需要帮助"', '容易被消耗'],
    relationships: '你是最好的伴侣候选人之一，但你也需要一个会反过来照顾你的人。',
    career: '教育、医护、社工、咨询……所有需要真心照料他人的领域，你都能做得出色。',
    growth: '今天做一件只为自己的事，不要带任何"有没有帮到别人"的考量。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-ctrl', testId: 'test-sbti', typeCode: 'CTRL',
    typeName: '拿捏者',
    summary: '控制欲强，擅长拿捏，凡事要自己掌控',
    description: '你是行走的任务管理器。你的大脑随时在运行多个进程：跟踪当前状态、预判下一步、排查风险。你不是不信任别人，只是"交给别人"这件事对你来说本身就是一种压力。',
    strengths: ['极强的计划和组织能力', '对细节敏感，不容易出错', '稳定可靠，是团队的安全感来源'],
    weaknesses: ['难以放权', '在不确定中会焦虑', '对"失控感"极度不适'],
    relationships: '你善于把关系打理得井井有条，但感情不是项目，允许一些"不确定"发生。',
    career: '项目管理、运营、财务、质控……所有需要严谨掌控的岗位都是你的位置。',
    growth: '今天故意做一件没有计划的事，看看会发生什么——大概率没有你想的那么糟。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-fuck', testId: 'test-sbti', typeCode: 'FUCK',
    typeName: '草者',
    summary: '嘴硬暴躁爱吐槽，内心却默默扛事',
    description: '你说话直，脾气冲，嘴上永远是"草""日""算了我去"，但真遇到事，你是第一个默默冲上去的人。你的暴躁是面具，里面包的是一颗比谁都认真的心。',
    strengths: ['真实，不装', '关键时刻冲得上', '吐槽准确，直击本质'],
    weaknesses: ['第一反应容易吓到别人', '语气让人感到被攻击', '事后会后悔说太重了'],
    relationships: '你爱得粗糙但真实。找一个不怕你"嘴臭"、知道你在乎的人。',
    career: '任何需要直接反馈的岗位都很适合你。设计、评审、运营……你的"嘴毒"是一种才能。',
    growth: '下次在吐槽之前，先深呼吸一口——不是为了憋回去，而是让那句话落地更稳。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-shit', testId: 'test-sbti', typeCode: 'SHIT',
    typeName: '狗屎人',
    summary: '愤世嫉俗，觉得世界很烂，却仍认真生活',
    description: '你对世界保持着清醒的悲观，但你没有因此躺下——你选择了带着"这一切都是坨屎"的认知继续认真活着。这反而是一种罕见的清醒：你不需要幻觉来支撑自己前行。',
    strengths: ['对现实有清醒认知', '不被虚假的乐观所迷惑', '在逆境中也能维持行动'],
    weaknesses: ['容易陷入愤世嫉俗的低落', '很难和"积极人"相处', '偶尔会把自己的悲观传染给周围人'],
    relationships: '你需要一个同样清醒、但不会一起往下坠的人。能和你一起吐槽，也能在你最低落时拉你一把的人。',
    career: '媒体、评论、产品测试……所有需要"挑毛病"能力的领域，你是天才。',
    growth: '找一件你认为"这个是真的好"的事。不管多小，写下来。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-solo', testId: 'test-sbti', typeCode: 'SOLO',
    typeName: '孤儿',
    summary: '习惯独处，不爱麻烦人，也不想被麻烦',
    description: '你高度自给自足。你不是孤独，你只是非常擅长独处。你解决自己的问题，消化自己的情绪，偶尔也会羡慕那种"随时有人在"的生活，但一旦真的有人靠太近，你又会感到窒息。',
    strengths: ['高度自律和独立', '不依赖他人，内心稳定', '独处时高效且有创造力'],
    weaknesses: ['有时孤立感很强', '不擅长主动求助', '关系维系上容易断线'],
    relationships: '你需要的不是黏人的伴侣，而是那种"即使不说话也能陪着你"的存在感。',
    career: '远程工作、独立研究、写作、技术……给你空间，你能做出最好的东西。',
    growth: '今天主动联系一个许久没联系的人，哪怕只说一句"你最近怎样"。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-ojbk', testId: 'test-sbti', typeCode: 'OJBK',
    typeName: '无所谓人',
    summary: '怎么都行，没主见，佛系到近乎冷漠',
    description: '"去哪都行""吃什么都可""你决定吧"——你是人类世界里最不挑剔的存在。你不是没有想法，只是觉得表达出来要耗费太多能量，而且结果往往也不差。这是一种超级省力的生存哲学。',
    strengths: ['适应性极强', '很少和人产生冲突', '内心平静稳定'],
    weaknesses: ['关键时刻缺乏立场', '容易被别人的决定牵着走', '有时会后悔没坚持自己的想法'],
    relationships: '你是最好相处的伴侣之一，但偶尔表达一下你的偏好——对方其实很想知道。',
    career: '配合型、支持型的岗位很适合你。你是团队里的润滑剂。',
    growth: '下次有人问你"去哪吃"，说出你真正想去的那个地方。就这一次。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-jokr', testId: 'test-sbti', typeCode: 'JOKR',
    typeName: '小丑',
    summary: '用搞笑掩饰孤独，热闹里最孤单',
    description: '你是聚会的灵魂，段子库最丰富的那个，总能活跃气氛。但当所有人都笑了，有时候你会感觉自己是最孤单的人。你用幽默把自己和他人之间的距离维持得恰到好处——既够近，又不太近。',
    strengths: ['天才的幽默感', '让身边人感到轻松', '化解尴尬的高手'],
    weaknesses: ['很少被认真对待', '自己受伤时很难开口', '有时用笑声掩盖了真实需求'],
    relationships: '你需要一个愿意在大家都笑的时候，注意到你眼角那点点不一样的人。',
    career: '内容创作、喜剧、主持、社群运营……你的幽默是真正的才能。',
    growth: '和你最信任的人说一次不是玩笑的话——哪怕很短，哪怕很普通。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-sexy', testId: 'test-sbti', typeCode: 'SEXY',
    typeName: '尤物',
    summary: '自带魅力气场，自信亮眼，人群吸睛',
    description: '你走进一个房间，整个房间的空气都会微微流动。你不需要努力"表现"，你的存在本身就有磁场。你对自己很清楚，知道自己的价值，不需要他人的认可来完整自己。',
    strengths: ['高度自信，气场强大', '人际吸引力强', '内心稳定，不轻易被动摇'],
    weaknesses: ['有时被误解为傲慢', '容易让他人产生压力', '对不如自己的人有时缺乏耐心'],
    relationships: '你需要一个能够"配得上"你的人——不是地位上的，而是内心同样稳定的人。',
    career: '任何有展示性的工作都适合你：销售、媒体、公关、表演……你是天生的前台人。',
    growth: '允许自己偶尔不那么"在状态"，脆弱也是真实的一部分。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-gogo', testId: 'test-sbti', typeCode: 'GOGO',
    typeName: '行者',
    summary: '永动机行动派，闲不住，一生奔波劳碌',
    description: '你是人类当中的永动机。你的默认状态是"动着"，停下来反而让你焦虑。你不一定知道终点在哪里，但你就是停不下来。有时候你羡慕那些能闲着的人，但只要5分钟，你就会开始想"再去做点什么"。',
    strengths: ['行动力极强，说干就干', '抗压能力好，擅长高负荷运转', '在奔波中找到意义感'],
    weaknesses: ['停不下来，难以休息', '有时忙着忙着忘了方向', '身体会先于意志崩溃'],
    relationships: '你需要一个能跟上你节奏，或者愿意成为你"加油站"的伴侣。',
    career: '销售、运营、创业、旅行相关……所有能动起来、看到结果的工作都让你如鱼得水。',
    growth: '给自己安排一个什么都不做的下午——不是休息，是练习和自己待在一起。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-drnk', testId: 'test-sbti', typeCode: 'DRNK',
    typeName: '酒鬼',
    summary: '借酒解压，清醒就焦虑，情绪靠酒精平复',
    description: '你在清醒状态下背负着太多，而酒精是那个帮你卸下盔甲的东西。微醺的你更真实、更放松、更像你自己。你不是酗酒，你只是需要一个出口——只是你目前选的这个出口是液体的。',
    strengths: ['真实，不加掩饰', '社交时很有感染力', '对生活有强烈的感受力'],
    weaknesses: ['情绪依赖外部工具调节', '清醒时的焦虑是根本问题', '长期对身体不友好'],
    relationships: '你需要一个让你在清醒状态下也觉得安全的人——那才是真正的解压。',
    career: '创意、表演、文字……感受力强的你在需要情感输出的领域能创作出真实打动人的东西。',
    growth: '下次想开酒之前，先给自己5分钟，问问：我现在真正需要的是什么？',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-woc', testId: 'test-sbti', typeCode: 'WOC',
    typeName: '握草人',
    summary: '一惊一乍，吃瓜前线，情绪全写脸上',
    description: '你是世界上最诚实的人之一——因为你根本不会隐藏情绪。你的脸是一个实时弹幕屏，任何事情发生，你的"卧槽/握草/哦我去"都会第一时间出现。你活得很真实，也很有活力。',
    strengths: ['情绪真实、感染力强', '第一时间捕捉到有趣的事', '让身边人觉得有趣'],
    weaknesses: ['有时反应过激', '可能让不了解你的人感到累', '容易被情绪带着走'],
    relationships: '你需要一个不怕你"激"的人，以及偶尔能帮你降降温的伴侣。',
    career: '内容、直播、评论、采编……你的真实反应就是内容本身。',
    growth: '下次在"握草"之前，给自己3秒，看看这件事值不值得消耗你这么多能量。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-hhhh', testId: 'test-sbti', typeCode: 'HHHH',
    typeName: '傻乐者',
    summary: '没心没肺，爱笑乐观，烦恼少、易满足',
    description: '你是稀缺物种。你不是没有问题，你只是莫名觉得问题没那么严重。你笑点低，满足感高，别人觉得烦的事你觉得还好，别人觉得无聊的事你觉得挺有趣。你天生自带"轻"的质感。',
    strengths: ['极强的韧性和恢复力', '不容易陷入负面情绪', '带给身边人轻松感'],
    weaknesses: ['有时对严肃问题反应不足', '可能被认为"不靠谱"或"不认真"', '偶尔会在需要共情时显得冷漠'],
    relationships: '你是最好相处的伴侣之一，只要对方能接受你在他们最崩溃的时候笑出来。',
    career: '任何需要维持正向氛围的岗位都适合你：用户运营、品牌、儿童教育……',
    growth: '试着在一件事上真正"认真"一次，不是为了结果，而是感受一下专注的感觉。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-lovr', testId: 'test-sbti', typeCode: 'LOVR',
    typeName: '多情者',
    summary: '爱意太满，容易动心，真诚却总受伤',
    description: '你的爱意是真实的，真实到有时候让你自己都害怕。你很容易动心，很容易全情投入，也很容易在对方没有相同反应时独自落空。你不需要"修好"这份情感，只需要找到同样有勇气去爱的人。',
    strengths: ['深情，真诚', '高度共情，善于理解他人', '敢于先付出'],
    weaknesses: ['容易受伤', '有时爱意浓度高到让对方有压力', '反复受伤后可能走向另一个极端'],
    relationships: '你需要的不是完美的人，而是一个同样愿意主动的人。',
    career: '教育、创作、心理咨询……需要真情感投入的工作，你能做出最感动人的东西。',
    growth: '在下次全情投入之前，问自己一句：对方有没有同样程度地在乎我？',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-eat', testId: 'test-sbti', typeCode: 'EAT',
    typeName: '干饭人',
    summary: '美食至上，干饭第一，靠吃治愈一切',
    description: '你是真正的美食信徒。难过了？吃。高兴了？吃。无聊了？想吃什么。你的人生大事有很大一部分都和食物有关——下顿吃什么，和谁吃，去哪吃。食物是你最稳定的情绪锚点。',
    strengths: ['幸福感来源稳定', '对生活的热情总能通过吃找回来', '是聚餐的灵魂人物'],
    weaknesses: ['有时用吃来回避情绪', '钱包……你懂的', '选不出来吃什么的时候比任何事都痛苦'],
    relationships: '最好找一个同样爱吃的人，一起探店就是最好的约会。',
    career: '美食博主、餐饮、食品研发……或者你只要找到一个离好吃的地方近的公司就满足了。',
    growth: '下次在情绪低落时，先问问自己真正需要的是什么——不一定是食物，但食物也没问题。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-thank', testId: 'test-sbti', typeCode: 'THANK',
    typeName: '感恩者',
    summary: '别人对自己好一点就记很久，心软记恩',
    description: '你是一个轻易被善意感动的人。别人帮你一个小忙，你可能记上半年；一句温柔的话，能让你暖好几天。你不觉得这是软弱——这是真实的感受力。你比很多人都懂得珍惜。',
    strengths: ['高度感受力，懂得珍惜', '在关系里真诚温柔', '容易被打动，也容易打动别人'],
    weaknesses: ['有时付出远大于回报', '容易被感动而降低判断力', '对"无情"的人很难理解'],
    relationships: '你是最好的伴侣候选之一。只是，记得观察对方是不是同样用心在对待你。',
    career: '教育、社工、NGO、客服……所有需要真心连结的工作，你都能做出温度。',
    growth: '今天，把那份感谢说出来——无论是对某人，还是对今天还不错的天气。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-poor', testId: 'test-sbti', typeCode: 'POOR',
    typeName: '贫穷者',
    summary: '钱包空空，精神富有，永远在吃土',
    description: '你的精神状态和钱包状态形成了鲜明对比：精神上富足甚至溢出，但钱包总是莫名其妙地比你想象中扁。你不是不努力，你只是很擅长把钱花在"值得的地方"——只是那个地方往往不是银行账户。',
    strengths: ['对物质的执念低，活得轻松', '懂得享受当下', '非常擅长用最少的钱获得最大的快乐'],
    weaknesses: ['财务规划能力堪忧', '有时因为穷焦虑', '面对"你怎么还不存钱"的质问无力回答'],
    relationships: '你需要一个不在意钱包的人，或者一个能帮你存钱的人——二选一。',
    career: '你擅长在资源有限的情况下创造价值。创业、创意、独立工作者……都是可能的路。',
    growth: '今天记录一下自己花了多少钱。不是为了控制，只是先看清楚。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-ohno', testId: 'test-sbti', typeCode: 'OHNO',
    typeName: '哦不人',
    summary: '自带倒霉buff，遇事第一反应"完了"',
    description: '你不是真的比别人倒霉，你只是对"可能出问题"的感知度极高。任何事情还没发生，你已经把坏的可能性预判了个遍，然后有时候它真的发生了——"我就说嘛！"这既是你的诅咒，也是你的超能力。',
    strengths: ['风险意识极强', '在灾难真的来临时比别人镇定（因为你已经预演过了）', '谨慎不冒进'],
    weaknesses: ['先被自己的预想吓到', '好事还没到就先担心', '有时把焦虑传染给身边人'],
    relationships: '你需要一个能帮你"那应该不会这么倒霉"的人，而不是和你一起崩溃的人。',
    career: '风险管理、审计、质检……所有需要"先想到最坏情况"的工作，你是天生的人才。',
    growth: '下次"哦不"之后，想一想：如果它真的发生了，我最可能怎么应对？你会发现自己比你以为的更能搞定。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-monk', testId: 'test-sbti', typeCode: 'MONK',
    typeName: '僧人',
    summary: '四大皆空，无欲无求，看破红尘',
    description: '你活在一种淡然里。不是因为看不透，恰恰相反，是因为看得太透了——看透了之后，发现大多数事情其实不值得那么大动干戈。你不冷漠，只是你的情绪频率和世界的噪音不在一个频段。',
    strengths: ['内心平静，极难被外界干扰', '不争不抢，自有格局', '在混乱中是最稳定的存在'],
    weaknesses: ['有时被认为"格格不入"或"没人情味"', '在需要激情和热情的场合很难配合', '和执着于世俗目标的人容易产生隔阂'],
    relationships: '你需要一个同样安静的人，或者一个愿意跟着你慢下来的人。',
    career: '研究、艺术、写作、独立工作……给你一个人的空间，你能做出很深的东西。',
    growth: '找一件你愿意"在乎"的小事，让自己感受一下"执着"是什么感觉。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-atm', testId: 'test-sbti', typeCode: 'ATM',
    typeName: '送钱者',
    summary: '人形提款机，只出不进，总在吃亏',
    description: '你的善良和大方是真实的，但结果是：你总是那个"借钱不还的朋友"的提款机，那个"不好意思拒绝"的人，那个最后发现自己付了全单的人。你不是笨，你只是把别人看得比自己重。',
    strengths: ['真诚慷慨，无私', '被信任、被依赖的能力强', '在需要的时候永远到场'],
    weaknesses: ['边界感弱，容易被消耗', '难以开口说不', '反复吃亏后积累的委屈不知道往哪放'],
    relationships: '你需要一个会主动说"这次我来"的伴侣，而不是一个习惯接受你付出的人。',
    career: '适合有价值对等的工作环境，学会在职场里把自己的付出清晰定价。',
    growth: '今天练习说一次"不"——不加解释，不加道歉。就这一个字。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-thin', testId: 'test-sbti', typeCode: 'THIN',
    typeName: '思考者',
    summary: '想太多内耗王者，一件事复盘八百遍',
    description: '你的大脑永远在线，从不下班。一句话说出去了，你能在接下来的三天里分析它的每一种可能的解读方式。你不是在自寻烦恼，你只是有一个超高性能的"人际关系处理器"，只是它耗电量太大。',
    strengths: ['思维深度，洞察力强', '善于发现别人忽视的细节', '做决定前已经想得很周全'],
    weaknesses: ['停不下来，睡眠质量差', '把小事想成大事', '有时想了很久却什么都没做'],
    relationships: '你需要一个让你觉得"不需要想那么多"的人——一种让你放松的存在。',
    career: '研究、分析、策划、咨询……你的脑子就是你最好的工具。',
    growth: '试着做一件不需要"想通了再做"的事：先做，再复盘。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sb-luck', testId: 'test-sbti', typeCode: 'LUCK',
    typeName: '幸运者',
    summary: '运气飘忽，时好时坏，天选或倒霉',
    description: '你的运气就像一枚硬币，永远不知道哪面朝上。有时你会在不经意间得到意外之喜，有时又会在最不该倒霉的时候踩到那个坑。你活在一种"不确定性"里，但你已经习惯了——甚至觉得这挺有趣的。',
    strengths: ['接受不确定性的能力强', '不会把运气当理所当然', '在好运来临时充分享受'],
    weaknesses: ['很难预测和规划', '有时被"也许会好"拖住了该行动的时机', '对运气的依赖偶尔让努力打折扣'],
    relationships: '你需要一个能在你倒霉时陪你笑的人，而不是一个怪你"怎么又这样"的人。',
    career: '创意、自由职业、投资……接受高不确定性的领域，你反而游刃有余。',
    growth: '下次"运气不好"时，问自己：除了运气，我有没有什么可以改变的地方？',
    minScore: 0, maxScore: 100,
  },
];

// ==== 职业发展类测试 ====

// 团队协作风格测试
export const teamworkQuestions = [
  {
    id: 'team-q1', testId: 'test-teamwork', order: 1,
    text: '在团队项目中，你更倾向于...',
    options: [
      { id: 'team-q1-a', text: '主动分工，推动进度', scores: { LEADER: 3, DRIVER: 2 } },
      { id: 'team-q1-b', text: '贡献想法，参与讨论', scores: { CONTRIBUTOR: 3, COLLABORATOR: 1 } },
      { id: 'team-q1-c', text: '执行分配的任务', scores: { EXECUTOR: 3, SUPPORTER: 1 } },
      { id: 'team-q1-d', text: '默默支持，随叫随到', scores: { SUPPORTER: 3 } },
    ],
  },
  {
    id: 'team-q2', testId: 'test-teamwork', order: 2,
    text: '团队中有人意见不合时，你通常会...',
    options: [
      { id: 'team-q2-a', text: '站出来协调', scores: { LEADER: 2, MEDIATOR: 2 } },
      { id: 'team-q2-b', text: '提出解决方案', scores: { DRIVER: 2, CONTRIBUTOR: 1 } },
      { id: 'team-q2-c', text: '等待别人处理', scores: { SUPPORTER: 2, EXECUTOR: 1 } },
      { id: 'team-q2-d', text: '居中调解矛盾', scores: { MEDIATOR: 3, COLLABORATOR: 1 } },
    ],
  },
  {
    id: 'team-q3', testId: 'test-teamwork', order: 3,
    text: '你在团队中最大的价值是...',
    options: [
      { id: 'team-q3-a', text: '把控方向和节奏', scores: { LEADER: 3, DRIVER: 1 } },
      { id: 'team-q3-b', text: '贡献专业想法', scores: { CONTRIBUTOR: 3 } },
      { id: 'team-q3-c', text: '高效完成工作', scores: { EXECUTOR: 3, DRIVER: 1 } },
      { id: 'team-q3-d', text: '维护团队和谐', scores: { MEDIATOR: 2, SUPPORTER: 2 } },
    ],
  },
];

export const teamworkResults = [
  {
    id: 'team-leader', testId: 'test-teamwork', typeCode: 'LEADER',
    typeName: '领导者',
    summary: '善于把控方向，带领团队前进',
    description: '你在团队中是天生的领导者，能够把控方向、分配任务、推动进度。',
    strengths: ['领导力强', '决策果断', '善于激励'],
    weaknesses: ['可能过于强势', '有时忽视细节'],
    relationships: '你是团队核心，需要学会倾听和授权。',
    career: '管理岗位、项目负责人、创业者。',
    growth: '更多信任团队成员，学会放权。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'team-contributor', testId: 'test-teamwork', typeCode: 'CONTRIBUTOR',
    typeName: '贡献者',
    summary: '善于提供专业想法和建议',
    description: '你是团队中的智囊，善于提出想法、分析问题、贡献专业见解。',
    strengths: ['创意丰富', '分析能力强', '专业深度'],
    weaknesses: ['有时过于理想化', '可能不够行动导向'],
    relationships: '你是团队的思考者，需要与执行者配合。',
    career: '咨询、研发、策划、设计。',
    growth: '把想法转化为可执行的计划。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'team-executor', testId: 'test-teamwork', typeCode: 'EXECUTOR',
    typeName: '执行者',
    summary: '高效完成分配的任务，可靠可信',
    description: '你是团队中的执行力量，能够高效完成工作，是可靠的团队成员。',
    strengths: ['执行力强', '认真负责', '结果导向'],
    weaknesses: ['可能缺乏主动性', '有时缺乏全局观'],
    relationships: '你是团队最可靠的存在，让想法落地。',
    career: '运营、技术、财务、执行岗。',
    growth: '尝试主动提出想法，不只是等待分配。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'team-mediator', testId: 'test-teamwork', typeCode: 'MEDIATOR',
    typeName: '协调者',
    summary: '善于调和矛盾，维护团队和谐',
    description: '你是团队的润滑剂，善于化解矛盾、促进沟通、维护团队氛围。',
    strengths: ['人际关系好', '善于沟通', '情商高'],
    weaknesses: ['可能回避冲突', '有时难以做决定'],
    relationships: '你是团队的粘合剂，让合作更顺畅。',
    career: '人力资源、客户服务、项目管理。',
    growth: '学会在和谐中坚持原则。',
    minScore: 0, maxScore: 100,
  },
];

// 领导力风格测试
export const leadershipQuestions = [
  {
    id: 'lead-q1', testId: 'test-leadership', order: 1,
    text: '你更倾向于哪种领导方式？',
    options: [
      { id: 'lead-q1-a', text: '明确指示，期望成员执行', scores: { DIRECTIVE: 3 } },
      { id: 'lead-q1-b', text: '给予方向，鼓励自主发挥', scores: { COACHING: 2, SUPPORTIVE: 1 } },
      { id: 'lead-q1-c', text: '关心成员，创造良好氛围', scores: { SUPPORTIVE: 3 } },
      { id: 'lead-q1-d', text: '激发思考，引导找到答案', scores: { COACHING: 3 } },
    ],
  },
  {
    id: 'lead-q2', testId: 'test-leadership', order: 2,
    text: '面对成员的错误，你会...',
    options: [
      { id: 'lead-q2-a', text: '指出问题，要求立即改正', scores: { DIRECTIVE: 2, ACHIEVEMENT: 1 } },
      { id: 'lead-q2-b', text: '了解原因，一起讨论改进', scores: { COACHING: 2, SUPPORTIVE: 1 } },
      { id: 'lead-q2-c', text: '给予鼓励，帮助TA建立信心', scores: { SUPPORTIVE: 3 } },
      { id: 'lead-q2-d', text: '设定标准，期待下次达标', scores: { ACHIEVEMENT: 3 } },
    ],
  },
];

export const leadershipResults = [
  {
    id: 'lead-directive', testId: 'test-leadership', typeCode: 'DIRECTIVE',
    typeName: '指令型领导',
    summary: '明确指示，高效执行',
    description: '你善于给出明确方向和指令，追求效率和结果，适合带领需要明确指导的团队。',
    strengths: ['决策果断', '目标明确', '执行高效'],
    weaknesses: ['可能缺乏灵活性', '有时显得过于强硬'],
    growth: '学习倾听成员的想法，增加参与感。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'lead-coaching', testId: 'test-leadership', typeCode: 'COACHING',
    typeName: '教练型领导',
    summary: '引导成长，激发潜能',
    description: '你善于通过提问引导成员找到答案，帮助他们成长，适合培养人才。',
    strengths: ['善于培养人才', '激发潜能', '长期价值'],
    weaknesses: ['需要较长时间', '有时不够直接'],
    growth: '在紧急情况下也可以更直接一些。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'lead-supportive', testId: 'test-leadership', typeCode: 'SUPPORTIVE',
    typeName: '支持型领导',
    summary: '关心成员，营造氛围',
    description: '你关心成员的需求和感受，善于创造支持性的团队环境，适合需要协作的团队。',
    strengths: ['团队关系好', '氛围和谐', '成员满意度高'],
    weaknesses: ['有时难以推动业绩', '可能过于迁就'],
    growth: '在关心的同时也坚持目标。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'lead-achievement', testId: 'test-leadership', typeCode: 'ACHIEVEMENT',
    typeName: '成就导向型领导',
    summary: '设定高标准，追求卓越',
    description: '你设定高标准，追求卓越成果，激励团队不断超越自己。',
    strengths: ['结果导向', '激励性强', '追求卓越'],
    weaknesses: ['可能给成员过大压力', '有时不够包容'],
    growth: '学会庆祝过程，而不只是结果。',
    minScore: 0, maxScore: 100,
  },
];

// 决策风格测试
export const decisionQuestions = [
  {
    id: 'dec-q1', testId: 'test-decision', order: 1,
    text: '做重要决定时，你更依赖...',
    options: [
      { id: 'dec-q1-a', text: '直觉和感觉', scores: { INTUITIVE: 3 } },
      { id: 'dec-q1-b', text: '数据和分析', scores: { ANALYTICAL: 3 } },
      { id: 'dec-q1-c', text: '他人建议', scores: { CONSULTATIVE: 2, DEPENDENT: 1 } },
      { id: 'dec-q1-d', text: '尽量避免决定', scores: { AVOIDANT: 3 } },
    ],
  },
  {
    id: 'dec-q2', testId: 'test-decision', order: 2,
    text: '面对信息不完整的情况，你会...',
    options: [
      { id: 'dec-q2-a', text: '凭感觉先行动', scores: { INTUITIVE: 2, SPONTANEOUS: 1 } },
      { id: 'dec-q2-b', text: '尽可能收集更多信息', scores: { ANALYTICAL: 2, DELIBERATE: 1 } },
      { id: 'dec-q2-c', text: '征求多方意见', scores: { CONSULTATIVE: 3 } },
      { id: 'dec-q2-d', text: '能不做就不做', scores: { AVOIDANT: 3 } },
    ],
  },
];

export const decisionResults = [
  {
    id: 'dec-intuitive', testId: 'test-decision', typeCode: 'INTUITIVE',
    typeName: '直觉型',
    summary: '相信直觉，快速决策',
    description: '你相信自己的直觉，能在信息不足时快速做出决定，行动力强。',
    strengths: ['决策快速', '适应变化', '把握机会'],
    weaknesses: ['可能过于冲动', '有时忽略数据'],
    growth: '在做重大决定时，也看看数据支持。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'dec-analytical', testId: 'test-decision', typeCode: 'ANALYTICAL',
    typeName: '分析型',
    summary: '基于数据，深思熟虑',
    description: '你依赖数据和逻辑分析，追求最优解，决策质量高。',
    strengths: ['决策质量高', '逻辑清晰', '减少错误'],
    weaknesses: ['决策时间较长', '可能过度分析'],
    growth: '有时接受"足够好"的决定。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'dec-consultative', testId: 'test-decision', typeCode: 'CONSULTATIVE',
    typeName: '咨询型',
    summary: '征求意见，集体决策',
    description: '你善于听取多方意见，通过讨论达成决策，建立共识。',
    strengths: ['决策有支持', '考虑全面', '关系维护好'],
    weaknesses: ['可能效率低', '有时难以整合不同意见'],
    growth: '有时也需要独立做出决定。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'dec-avoidant', testId: 'test-decision', typeCode: 'AVOIDANT',
    typeName: '回避型',
    summary: '拖延决策，避免责任',
    description: '你倾向于推迟或回避做决定，担心做错选择。',
    strengths: ['避免错误', '给自己更多时间'],
    weaknesses: ['错失机会', '积累压力', '问题拖延'],
    growth: '从小决定开始练习，建立决策信心。',
    minScore: 0, maxScore: 100,
  },
];

// 执行力测试
export const executionQuestions = [
  {
    id: 'exec-q1', testId: 'test-execution', order: 1,
    text: '有了计划后，你通常会...',
    options: [
      { id: 'exec-q1-a', text: '立即开始行动', scores: { ACTION: 3, FOCUS: 1 } },
      { id: 'exec-q1-b', text: '先做充分准备', scores: { PLANNING: 2, DISCIPLINE: 1 } },
      { id: 'exec-q1-c', text: '等等看，再决定', scores: { LOW: 2, DISTRACTED: 1 } },
      { id: 'exec-q1-d', text: '可能拖到最后一刻', scores: { LOW: 3 } },
    ],
  },
  {
    id: 'exec-q2', testId: 'test-execution', order: 2,
    text: '面对长期任务，你...',
    options: [
      { id: 'exec-q2-a', text: '制定详细计划，持续推进', scores: { DISCIPLINE: 3, PLANNING: 1 } },
      { id: 'exec-q2-b', text: '设定里程碑，阶段性完成', scores: { FOCUS: 2, DISCIPLINE: 1 } },
      { id: 'exec-q2-c', text: '有热情时做，没有时放', scores: { DISTRACTED: 2, LOW: 1 } },
      { id: 'exec-q2-d', text: '很难坚持到完成', scores: { LOW: 3, DISTRACTED: 1 } },
    ],
  },
];

export const executionResults = [
  {
    id: 'exec-high', testId: 'test-execution', typeCode: 'HIGH',
    typeName: '高执行力',
    summary: '说到做到，持续行动',
    description: '你有很强的执行力，能够将计划转化为行动并坚持完成。',
    strengths: ['行动力强', '目标达成', '可靠可信'],
    weaknesses: ['可能过于匆忙', '有时忽略调整'],
    growth: '保持行动力，同时给自己反思的时间。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'exec-moderate', testId: 'test-execution', typeCode: 'MODERATE',
    typeName: '中等执行力',
    summary: '有计划有行动，偶有波动',
    description: '你有一定的执行力，大部分时间能按计划推进，偶尔会拖延。',
    strengths: ['能完成任务', '有一定自律'],
    weaknesses: ['有时效率不高', '可能拖延'],
    growth: '建立习惯和提醒系统，提升稳定性。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'exec-low', testId: 'test-execution', typeCode: 'LOW',
    typeName: '待提升执行力',
    summary: '计划多行动少，需要改变',
    description: '你的执行力有待提升，常常停留在计划阶段，难以持续行动。',
    strengths: ['可能有创意想法', '有时能爆发完成'],
    weaknesses: ['容易拖延', '难以坚持', '错失机会'],
    growth: '从最小行动开始，每次只做一个微小的步骤。',
    minScore: 0, maxScore: 100,
  },
];

// ==== 情绪与压力类测试 ====

// 情绪敏感度测试
export const emotionSensitivityQuestions = [
  {
    id: 'es-q1', testId: 'test-emotion-sensitivity', order: 1,
    text: '你能感知到微小的情绪变化吗？',
    options: [
      { id: 'es-q1-a', text: '非常敏锐，细微变化都能感知', scores: { HIGH: 3 } },
      { id: 'es-q1-b', text: '较敏感，能感知明显变化', scores: { MODERATE: 2 } },
      { id: 'es-q1-c', text: '一般，需要比较明显', scores: { LOW: 2 } },
      { id: 'es-q1-d', text: '不太敏感，常常察觉不到', scores: { LOW: 3 } },
    ],
  },
  {
    id: 'es-q2', testId: 'test-emotion-sensitivity', order: 2,
    text: '别人的情绪容易影响你吗？',
    options: [
      { id: 'es-q2-a', text: '很容易，我会被深深影响', scores: { HIGH: 3, ABSORBENT: 2 } },
      { id: 'es-q2-b', text: '会受影响，但能保持一定距离', scores: { MODERATE: 2, BALANCED: 1 } },
      { id: 'es-q2-c', text: '影响有限，能保持独立', scores: { LOW: 1, PROTECTED: 2 } },
      { id: 'es-q2-d', text: '基本不会被影响', scores: { LOW: 3, PROTECTED: 2 } },
    ],
  },
];

export const emotionSensitivityResults = [
  {
    id: 'es-high', testId: 'test-emotion-sensitivity', typeCode: 'HIGH',
    typeName: '高敏感型',
    summary: '情绪感知敏锐，容易被影响',
    description: '你对情绪变化非常敏感，能感知细微的氛围变化。这是一种天赋，但也需要保护自己。',
    strengths: ['深度共情', '察言观色', '细腻感受'],
    weaknesses: ['容易情绪疲劳', '可能过度承担', '需要更多独处'],
    growth: '建立情绪边界，学会保护自己的能量。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'es-moderate', testId: 'test-emotion-sensitivity', typeCode: 'MODERATE',
    typeName: '中度敏感型',
    summary: '有一定敏感度，平衡感受',
    description: '你对情绪有一定的敏感度，能感知重要变化，也能保持一定距离。',
    strengths: ['适度共情', '平衡感受', '适应性'],
    growth: '保持这种平衡，在需要时可以更深入。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'es-low', testId: 'test-emotion-sensitivity', typeCode: 'LOW',
    typeName: '低敏感型',
    summary: '情绪感知较钝，不易被影响',
    description: '你对情绪变化的感知相对较弱，不太容易被他人情绪影响。这让你稳定，但也可能错过一些信号。',
    strengths: ['情绪稳定', '不受干扰', '理性行动'],
    weaknesses: ['可能错过情感信号', '有时显得不够敏感'],
    growth: '尝试更主动地关注他人的情绪需求。',
    minScore: 0, maxScore: 100,
  },
];

// 抗压能力测试
export const resilienceQuestions = [
  {
    id: 'res-q1', testId: 'test-resilience', order: 1,
    text: '遇到挫折时，你多久能恢复？',
    options: [
      { id: 'res-q1-a', text: '很快，转眼就能调整', scores: { HIGH: 3 } },
      { id: 'res-q1-b', text: '需要一些时间，但能恢复', scores: { MODERATE: 2 } },
      { id: 'res-q1-c', text: '需要较长时间', scores: { LOW: 2 } },
      { id: 'res-q1-d', text: '很难从挫折中恢复', scores: { LOW: 3 } },
    ],
  },
  {
    id: 'res-q2', testId: 'test-resilience', order: 2,
    text: '面对压力，你的应对方式是...',
    options: [
      { id: 'res-q2-a', text: '把它当成挑战，积极应对', scores: { HIGH: 3, GROWTH: 2 } },
      { id: 'res-q2-b', text: '分析问题，寻找方法', scores: { MODERATE: 2, PROBLEM: 1 } },
      { id: 'res-q2-c', text: '感到焦虑，但会硬撑', scores: { LOW: 1, AVOID: 1 } },
      { id: 'res-q2-d', text: '想要逃避或崩溃', scores: { LOW: 3, AVOID: 2 } },
    ],
  },
];

export const resilienceResults = [
  {
    id: 'res-high', testId: 'test-resilience', typeCode: 'HIGH',
    typeName: '高韧性',
    summary: '快速恢复，积极应对',
    description: '你有很强的心理韧性，能在逆境中快速恢复并积极应对挑战。',
    strengths: ['恢复力强', '乐观积极', '成长型思维'],
    growth: '保持这种韧性，同时学会适时求助。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'res-moderate', testId: 'test-resilience', typeCode: 'MODERATE',
    typeName: '中等韧性',
    summary: '有恢复力，需要时间',
    description: '你有一定的心理韧性，能在挫折中恢复，但需要一些时间和支持。',
    strengths: ['能逐步恢复', '有一定应对能力'],
    growth: '建立更积极的自我对话，加速恢复过程。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'res-low', testId: 'test-resilience', typeCode: 'LOW',
    typeName: '韧性待提升',
    summary: '恢复较慢，需要支持',
    description: '你的心理韧性有待提升，面对挫折时需要更多时间和支持来恢复。',
    strengths: ['可能更谨慎', '会在安全后恢复'],
    growth: '学习正念和自我关怀，建立恢复的习惯。',
    minScore: 0, maxScore: 100,
  },
];

// 安全感来源测试
export const securityQuestions = [
  {
    id: 'sec-q1', testId: 'test-security', order: 1,
    text: '你的安全感主要来自哪里？',
    options: [
      { id: 'sec-q1-a', text: '他人的认可和陪伴', scores: { EXTERNAL: 2, RELATIONAL: 3 } },
      { id: 'sec-q1-b', text: '物质保障和稳定收入', scores: { EXTERNAL: 3, MATERIAL: 2 } },
      { id: 'sec-q1-c', text: '自己的能力和成长', scores: { INTERNAL: 2, COMPETENCE: 2 } },
      { id: 'sec-q1-d', text: '内心的平静和自我接纳', scores: { INTERNAL: 3, SELF: 2 } },
    ],
  },
  {
    id: 'sec-q2', testId: 'test-security', order: 2,
    text: '当感到不安时，你会...',
    options: [
      { id: 'sec-q2-a', text: '寻求他人的安慰和陪伴', scores: { RELATIONAL: 3, EXTERNAL: 1 } },
      { id: 'sec-q2-b', text: '努力工作赚更多钱', scores: { MATERIAL: 2, EXTERNAL: 1 } },
      { id: 'sec-q2-c', text: '学习和提升自己', scores: { COMPETENCE: 2, INTERNAL: 1 } },
      { id: 'sec-q2-d', text: '冥想、独处或自我对话', scores: { SELF: 3, INTERNAL: 2 } },
    ],
  },
];

export const securityResults = [
  {
    id: 'sec-external', testId: 'test-security', typeCode: 'EXTERNAL',
    typeName: '外部依赖型',
    summary: '安全感来自外部条件',
    description: '你的安全感很大程度上依赖外部因素，如他人、金钱或地位。这很正常，但也容易受这些因素影响。',
    growth: '同时培养内在的安全感，让自己更稳定。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sec-internal', testId: 'test-security', typeCode: 'INTERNAL',
    typeName: '内在稳定型',
    summary: '安全感来自内心',
    description: '你的安全感主要来自内在，相对稳定，不太受外部因素影响。',
    growth: '保持内在稳定的同时，也可以接纳外在的支持。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sec-relational', testId: 'test-security', typeCode: 'RELATIONAL',
    typeName: '关系依赖型',
    summary: '安全感来自关系',
    description: '你的安全感主要来自重要关系的稳定和亲密。',
    growth: '在关系中培养信任的同时，也建立自己的内在力量。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'sec-self', testId: 'test-security', typeCode: 'SELF',
    typeName: '自我接纳型',
    summary: '安全感来自自我接纳',
    description: '你的安全感来自对自己的接纳和内心的平静。',
    growth: '这是最稳定的安全感来源，继续保持。',
    minScore: 0, maxScore: 100,
  },
];

// ==== 社交互动类测试 ====

// 社交能量测试
export const socialEnergyQuestions = [
  {
    id: 'se-q1', testId: 'test-social-energy', order: 1,
    text: '社交活动对你来说...',
    options: [
      { id: 'se-q1-a', text: '充满能量，越社交越有活力', scores: { HIGH: 3 } },
      { id: 'se-q1-b', text: '还好，适度社交没问题', scores: { MODERATE: 2 } },
      { id: 'se-q1-c', text: '消耗能量，需要时间恢复', scores: { LOW: 2, INTROVERT: 1 } },
      { id: 'se-q1-d', text: '非常疲惫，尽量避免', scores: { LOW: 3, INTROVERT: 2 } },
    ],
  },
  {
    id: 'se-q2', testId: 'test-social-energy', order: 2,
    text: '你理想的社交频率是...',
    options: [
      { id: 'se-q2-a', text: '每天都想见朋友', scores: { HIGH: 3, EXTROVERT: 2 } },
      { id: 'se-q2-b', text: '每周几次社交活动', scores: { MODERATE: 2, BALANCED: 1 } },
      { id: 'se-q2-c', text: '偶尔见见朋友就好', scores: { LOW: 2 } },
      { id: 'se-q2-d', text: '尽量减少社交', scores: { LOW: 3, INTROVERT: 2 } },
    ],
  },
];

export const socialEnergyResults = [
  {
    id: 'se-high', testId: 'test-social-energy', typeCode: 'HIGH',
    typeName: '高社交能量',
    summary: '从社交中获得能量，喜欢人际互动',
    description: '你有很高的社交能量，从与人互动中获得满足和活力。',
    strengths: ['人脉广', '沟通能力强', '适应性'],
    growth: '记得给自己独处的时间来沉淀。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'se-moderate', testId: 'test-social-energy', typeCode: 'MODERATE',
    typeName: '中等社交能量',
    summary: '适度社交，平衡内外',
    description: '你能在社交和独处之间保持平衡，适应不同场合。',
    growth: '保持这种平衡感。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'se-low', testId: 'test-social-energy', typeCode: 'LOW',
    typeName: '低社交能量',
    summary: '社交消耗能量，需要独处恢复',
    description: '你的社交能量有限，需要独处来恢复。',
    strengths: ['深度思考', '独立性', '专注力'],
    growth: '安排适合自己能量水平的社交，不强求。',
    minScore: 0, maxScore: 100,
  },
];

// 人际边界感测试
export const boundaryQuestions = [
  {
    id: 'bnd-q1', testId: 'test-boundary', order: 1,
    text: '当别人要求你帮忙时，你...',
    options: [
      { id: 'bnd-q1-a', text: '很难拒绝，几乎都会答应', scores: { POROUS: 3, PEOPLE_PLEASER: 2 } },
      { id: 'bnd-q1-b', text: '会考虑自己的情况再决定', scores: { BALANCED: 3 } },
      { id: 'bnd-q1-c', text: '明确判断后再回应', scores: { FIRM: 2, BALANCED: 1 } },
      { id: 'bnd-q1-d', text: '经常拒绝，保护自己的时间', scores: { FIRM: 3, RIGID: 1 } },
    ],
  },
  {
    id: 'bnd-q2', testId: 'test-boundary', order: 2,
    text: '对于他人的情绪和问题...',
    options: [
      { id: 'bnd-q2-a', text: '经常感到自己也卷入其中', scores: { POROUS: 3, EMPATH: 2 } },
      { id: 'bnd-q2-b', text: '能关心但保持一定距离', scores: { BALANCED: 3 } },
      { id: 'bnd-q2-c', text: '给出建议但不会太投入', scores: { FIRM: 2, BALANCED: 1 } },
      { id: 'bnd-q2-d', text: '尽量保持距离，不想卷入', scores: { RIGID: 2, FIRM: 1 } },
    ],
  },
];

export const boundaryResults = [
  {
    id: 'bnd-porous', testId: 'test-boundary', typeCode: 'POROUS',
    typeName: '边界渗透型',
    summary: '边界较模糊，容易卷入他人',
    description: '你的人际边界相对模糊，容易被他人的情绪和需求影响。',
    strengths: ['高度共情', '善解人意', '乐于助人'],
    weaknesses: ['可能过度付出', '难以保护自己', '容易疲劳'],
    growth: '学会说"不"，你的边界保护你也保护关系。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'bnd-balanced', testId: 'test-boundary', typeCode: 'BALANCED',
    typeName: '边界健康型',
    summary: '边界清晰适度，关系健康',
    description: '你有清晰但适度的人际边界，既能关心他人也能保护自己。',
    growth: '保持这种健康的边界感。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'bnd-firm', testId: 'test-boundary', typeCode: 'FIRM',
    typeName: '边界坚固型',
    summary: '边界明确，保护自己',
    description: '你有很明确的人际边界，善于保护自己的时间和空间。',
    strengths: ['独立性', '自我保护', '界限清晰'],
    weaknesses: ['可能显得疏离', '有时错过深度连接'],
    growth: '在保护自己的同时，也尝试更开放一些。',
    minScore: 0, maxScore: 100,
  },
];

// 讨好型倾向测试
export const pleasingQuestions = [
  {
    id: 'pls-q1', testId: 'test-pleasing', order: 1,
    text: '当别人对你不满意时，你会...',
    options: [
      { id: 'pls-q1-a', text: '非常焦虑，想要马上解决', scores: { HIGH: 3 } },
      { id: 'pls-q1-b', text: '有点在意，但能接受', scores: { MODERATE: 2 } },
      { id: 'pls-q1-c', text: '会思考是否自己的问题', scores: { MODERATE: 2, REFLECTIVE: 1 } },
      { id: 'pls-q1-d', text: '不太在意，做好自己就行', scores: { LOW: 3, ASSERTIVE: 1 } },
    ],
  },
  {
    id: 'pls-q2', testId: 'test-pleasing', order: 2,
    text: '你在关系中更像是...',
    options: [
      { id: 'pls-q2-a', text: '总是先满足对方需求', scores: { HIGH: 3, CARETAKER: 2 } },
      { id: 'pls-q2-b', text: '会平衡双方的需求', scores: { MODERATE: 2, BALANCED: 1 } },
      { id: 'pls-q2-c', text: '有时坚持自己，有时迁就', scores: { MODERATE: 2 } },
      { id: 'pls-q2-d', text: '更多关注自己的需求', scores: { LOW: 2, ASSERTIVE: 2 } },
    ],
  },
];

export const pleasingResults = [
  {
    id: 'pls-high', testId: 'test-pleasing', typeCode: 'HIGH',
    typeName: '讨好型倾向强',
    summary: '习惯性优先考虑他人',
    description: '你有较强的讨好型倾向，习惯性地优先考虑他人，忽视自己的需求。',
    strengths: ['善解人意', '考虑周到', '人缘好'],
    weaknesses: ['难以表达需求', '容易委屈自己', '关系不平等'],
    growth: '你的需求同样重要。学会表达真实的自己。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'pls-moderate', testId: 'test-pleasing', typeCode: 'MODERATE',
    typeName: '讨好型倾向中等',
    summary: '有时迁就，有时坚持',
    description: '你有中等的讨好型倾向，有时会迁就他人，有时也能坚持自己。',
    growth: '练习更多自我表达，找到平衡。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'pls-low', testId: 'test-pleasing', typeCode: 'LOW',
    typeName: '讨好型倾向低',
    summary: '善于表达自己的需求',
    description: '你的讨好型倾向较低，能较好地表达和坚持自己的需求。',
    strengths: ['自我表达', '边界清晰', '需求明确'],
    growth: '在坚持自己的同时，也保持对他人的关注。',
    minScore: 0, maxScore: 100,
  },
];

// ==== 趣味延伸类测试 ====

// 隐藏人格测试
export const hiddenPersonalityQuestions = [
  {
    id: 'hp-q1', testId: 'test-hidden-personality', order: 1,
    text: '朋友最可能用什么词形容你？',
    options: [
      { id: 'hp-q1-a', text: '搞笑幽默', scores: { JOKER: 3, ENTERTAINER: 1 } },
      { id: 'hp-q1-b', text: '安静深沉', scores: { THINKER: 3, MYSTERY: 1 } },
      { id: 'hp-q1-c', text: '温暖可靠', scores: { CARETAKER: 2, GUARDIAN: 2 } },
      { id: 'hp-q1-d', text: '有主见独立', scores: { REBEL: 2, LEADER: 2 } },
    ],
  },
  {
    id: 'hp-q2', testId: 'test-hidden-personality', order: 2,
    text: '一个人的时候，你更可能...',
    options: [
      { id: 'hp-q2-a', text: '刷手机、看剧、追综艺', scores: { ESCAPIST: 2, ENTERTAINER: 1 } },
      { id: 'hp-q2-b', text: '看书、写作、思考人生', scores: { THINKER: 2, PHILOSOPHER: 1 } },
      { id: 'hp-q2-c', text: '整理房间、规划未来', scores: { ORGANIZER: 2, PLANNER: 1 } },
      { id: 'hp-q2-d', text: '发呆、睡大觉', scores: { DREAMER: 2, LAZY: 1 } },
    ],
  },
];

export const hiddenPersonalityResults = [
  {
    id: 'hp-joker', testId: 'test-hidden-personality', typeCode: 'JOKER',
    typeName: '幽默小丑型',
    summary: '用幽默掩饰孤独',
    description: '你的隐藏人格是"小丑"——外表总是能让别人笑，内心却有一个安静的角落。你用幽默保护自己，同时也给世界带来快乐。',
    growth: '偶尔也让别人看到不搞笑的那个你。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'hp-thinker', testId: 'test-hidden-personality', typeCode: 'THINKER',
    typeName: '深度思考型',
    summary: '表面平静，内心风暴',
    description: '你的隐藏人格是"思想家"——外表安静，内心世界丰富。你总是在思考，在感受，在创造。',
    growth: '把内心的世界分享给值得信任的人。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'hp-caretaker', testId: 'test-hidden-personality', typeCode: 'CARETAKER',
    typeName: '默默守护型',
    summary: '总是在照顾别人',
    description: '你的隐藏人格是"守护者"——总是默默付出，让周围的人感到温暖。但别忘了，你也需要被守护。',
    growth: '学会让也被守护。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'hp-rebel', testId: 'test-hidden-personality', typeCode: 'REBEL',
    typeName: '叛逆自由型',
    summary: '表面随和，内心叛逆',
    description: '你的隐藏人格是"叛逆者"——表面可能很配合规则，内心却在悄悄挑战一切。',
    growth: '找到健康的叛逆出口。',
    minScore: 0, maxScore: 100,
  },
];

// 动物人格测试
export const animalPersonalityQuestions = [
  {
    id: 'ap-q1', testId: 'test-animal-personality', order: 1,
    text: '在群体中，你更像是...',
    options: [
      { id: 'ap-q1-a', text: '领导者，带领大家前进', scores: { LION: 3, WOLF: 1 } },
      { id: 'ap-q1-b', text: '协作者，默默贡献', scores: { DOG: 2, ELEPHANT: 2 } },
      { id: 'ap-q1-c', text: '独立行动，按自己节奏', scores: { CAT: 3, OWL: 1 } },
      { id: 'ap-q1-d', text: '观察者，静静旁观', scores: { OWL: 3, CAT: 1 } },
    ],
  },
  {
    id: 'ap-q2', testId: 'test-animal-personality', order: 2,
    text: '遇到困难时，你倾向于...',
    options: [
      { id: 'ap-q2-a', text: '正面迎战，保护自己人', scores: { LION: 3, WOLF: 1 } },
      { id: 'ap-q2-b', text: '寻求帮助，依靠团队', scores: { WOLF: 2, DOG: 2 } },
      { id: 'ap-q2-c', text: '独立解决，默默处理', scores: { CAT: 3, OWL: 1 } },
      { id: 'ap-q2-d', text: '冷静观察，寻找最佳时机', scores: { OWL: 3, CAT: 1 } },
    ],
  },
];

export const animalPersonalityResults = [
  {
    id: 'ap-lion', testId: 'test-animal-personality', typeCode: 'LION',
    typeName: '狮子',
    summary: '勇敢果决，天生的领导者',
    description: '你的动物人格是狮子！你勇敢、果决、有天生的领导力。你保护自己在乎的人，勇于面对挑战。',
    strengths: ['领导力', '勇气', '保护欲'],
    growth: '偶尔也学会柔软和倾听。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'ap-dog', testId: 'test-animal-personality', typeCode: 'DOG',
    typeName: '狗狗',
    summary: '忠诚可靠，最好的朋友',
    description: '你的动物人格是狗狗！你忠诚、可靠、永远支持朋友。你是最值得信赖的存在。',
    strengths: ['忠诚', '可靠', '热心'],
    growth: '记得也照顾好自己。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'ap-cat', testId: 'test-animal-personality', typeCode: 'CAT',
    typeName: '猫咪',
    summary: '独立优雅，神秘的独行者',
    description: '你的动物人格是猫咪！你独立、优雅、有自己的节奏。你有自己的世界，但也懂得给爱的人温暖。',
    strengths: ['独立', '直觉', '自由'],
    growth: '偶尔也让别人进入你的世界。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'ap-owl', testId: 'test-animal-personality', typeCode: 'OWL',
    typeName: '猫头鹰',
    summary: '智慧深邃，安静的观察者',
    description: '你的动物人格是猫头鹰！你智慧、深邃、善于观察。你用冷静的眼睛看待世界，给人深刻见解。',
    strengths: ['智慧', '观察力', '深度'],
    growth: '有时候也要把智慧分享出来。',
    minScore: 0, maxScore: 100,
  },
];

// 爱情脑类型测试
export const loveBrainQuestions = [
  {
    id: 'lb-q1', testId: 'test-love-brain', order: 1,
    text: '爱上一个人后，你的状态是...',
    options: [
      { id: 'lb-q1-a', text: '全心投入，对方就是全世界', scores: { ROMANTIC: 3, DEVOTED: 1 } },
      { id: 'lb-q1-b', text: '保持理性，爱也要有边界', scores: { RATIONAL: 3, INDEPENDENT: 1 } },
      { id: 'lb-q1-c', text: '患得患失，常常胡思乱想', scores: { ANXIOUS: 3, SENSITIVE: 1 } },
      { id: 'lb-q1-d', text: '佛系对待，随缘就好', scores: { CASUAL: 3, CHILL: 1 } },
    ],
  },
  {
    id: 'lb-q2', testId: 'test-love-brain', order: 2,
    text: '关于爱情，你更相信...',
    options: [
      { id: 'lb-q2-a', text: '真爱可以战胜一切', scores: { ROMANTIC: 3, IDEALIST: 1 } },
      { id: 'lb-q2-b', text: '爱情需要经营和智慧', scores: { RATIONAL: 2, PRACTICAL: 2 } },
      { id: 'lb-q2-c', text: '爱情总是让人患得患失', scores: { ANXIOUS: 2, SENSITIVE: 2 } },
      { id: 'lb-q2-d', text: '缘分到了自然就来了', scores: { CASUAL: 3, CHILL: 1 } },
    ],
  },
];

export const loveBrainResults = [
  {
    id: 'lb-romantic', testId: 'test-love-brain', typeCode: 'ROMANTIC',
    typeName: '浪漫理想型',
    summary: '相信爱情，全身心投入',
    description: '你的爱情脑是浪漫理想型！你相信爱情，愿意为爱付出，追求浪漫的感情体验。',
    growth: '保持浪漫的同时，也要脚踏实地。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'lb-rational', testId: 'test-love-brain', typeCode: 'RATIONAL',
    typeName: '理性分析型',
    summary: '理性看待爱情，保持清醒',
    description: '你的爱情脑是理性分析型！你用智慧经营感情，保持自我，追求平等关系。',
    growth: '偶尔也允许自己感性一些。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'lb-anxious', testId: 'test-love-brain', typeCode: 'ANXIOUS',
    typeName: '焦虑敏感型',
    summary: '容易患得患失，需要安全感',
    description: '你的爱情脑是焦虑敏感型！你对感情非常在意，容易胡思乱想，需要更多安全感。',
    growth: '建立内在的安全感，相信自己也相信对方。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'lb-casual', testId: 'test-love-brain', typeCode: 'CASUAL',
    typeName: '佛系随缘型',
    summary: '对爱情持开放态度，不急不躁',
    description: '你的爱情脑是佛系随缘型！你对爱情的态度比较轻松，不急不躁，顺其自然。',
    growth: '遇到对的人时，也可以更主动一些。',
    minScore: 0, maxScore: 100,
  },
];

// 朋友类型测试
export const friendTypeQuestions = [
  {
    id: 'ft-q1', testId: 'test-friend-type', order: 1,
    text: '在朋友圈里，你更像是...',
    options: [
      { id: 'ft-q1-a', text: '倾听者，大家都来找你聊天', scores: { LISTENER: 3, THERAPIST: 1 } },
      { id: 'ft-q1-b', text: '开心果，总能活跃气氛', scores: { ENTERTAINER: 3, JOY: 1 } },
      { id: 'ft-q1-c', text: '智囊团，大家有问题找你', scores: { ADVISOR: 3, WISE: 1 } },
      { id: 'ft-q1-d', text: '组织者，总是约大家出来', scores: { ORGANIZER: 3, LEADER: 1 } },
    ],
  },
  {
    id: 'ft-q2', testId: 'test-friend-type', order: 2,
    text: '当朋友遇到问题时，你通常会...',
    options: [
      { id: 'ft-q2-a', text: '安静陪伴，给情感支持', scores: { LISTENER: 2, SUPPORTER: 2 } },
      { id: 'ft-q2-b', text: '讲笑话，让气氛轻松下来', scores: { ENTERTAINER: 3, JOY: 1 } },
      { id: 'ft-q2-c', text: '分析问题，给具体建议', scores: { ADVISOR: 3, PROBLEM_SOLVER: 1 } },
      { id: 'ft-q2-d', text: '召集大家，一起帮忙', scores: { ORGANIZER: 2, LEADER: 2 } },
    ],
  },
];

export const friendTypeResults = [
  {
    id: 'ft-listener', testId: 'test-friend-type', typeCode: 'LISTENER',
    typeName: '倾听者',
    summary: '最好的树洞，永远愿意听',
    description: '你是朋友圈的倾听者！大家都愿意向你倾诉，因为你知道如何让一个人感到被理解。',
    growth: '也记得分享你自己的感受。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'ft-entertainer', testId: 'test-friend-type', typeCode: 'ENTERTAINER',
    typeName: '开心果',
    summary: '永远的气氛担当',
    description: '你是朋友圈的开心果！哪里有你在，哪里就有笑声。',
    growth: '偶尔也展现深沉的一面。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'ft-advisor', testId: 'test-friend-type', typeCode: 'ADVISOR',
    typeName: '智囊团',
    summary: '有问题就找你',
    description: '你是朋友圈的智囊团！大家都来找你寻求建议，你的见解总是很有价值。',
    growth: '有时候倾听比建议更重要。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'ft-organizer', testId: 'test-friend-type', typeCode: 'ORGANIZER',
    typeName: '组织者',
    summary: '永远的活动发起人',
    description: '你是朋友圈的组织者！每次聚会都是你发起的，你是让朋友圈运转的人。',
    growth: '有时候也可以让别人来组织。',
    minScore: 0, maxScore: 100,
  },
];

// 群体角色测试
export const groupRoleQuestions = [
  {
    id: 'gr-q1', testId: 'test-group-role', order: 1,
    text: '在群体中，你更倾向于...',
    options: [
      { id: 'gr-q1-a', text: '提出想法，引导方向', scores: { LEADER: 3, INITIATOR: 1 } },
      { id: 'gr-q1-b', text: '支持他人的想法', scores: { SUPPORTER: 3, COLLABORATOR: 1 } },
      { id: 'gr-q1-c', text: '默默观察和贡献', scores: { OBSERVER: 3, CONTRIBUTOR: 1 } },
      { id: 'gr-q1-d', text: '调和矛盾，维持和谐', scores: { MEDIATOR: 3, HARMONIZER: 1 } },
    ],
  },
];

export const groupRoleResults = [
  {
    id: 'gr-leader', testId: 'test-group-role', typeCode: 'LEADER',
    typeName: '领导者',
    summary: '善于把控方向',
    description: '你在群体中是天然的领导者，能够提出方向、整合资源、推动前进。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'gr-supporter', testId: 'test-group-role', typeCode: 'SUPPORTER',
    typeName: '支持者',
    summary: '总是支持团队',
    description: '你是群体中最可靠的支持者，让想法能够落地。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'gr-observer', testId: 'test-group-role', typeCode: 'OBSERVER',
    typeName: '观察者',
    summary: '善于观察分析',
    description: '你是群体中的观察者，能看到别人忽略的细节。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'gr-mediator', testId: 'test-group-role', typeCode: 'MEDIATOR',
    typeName: '协调者',
    summary: '善于调和矛盾',
    description: '你是群体中的协调者，让每个人都能被听到。',
    minScore: 0, maxScore: 100,
  },
];

export function calculateSbtiResult(answers: Record<string, string>): {
  typeCode: string;
  dimensionScores: Record<string, number>;
  result: (typeof sbtiResults)[0];
} {
  const scores: Record<string, number> = {};

  sbtiQuestions.forEach((q) => {
    const optionId = answers[q.id];
    if (!optionId) return;
    const opt = q.options.find(o => o.id === optionId);
    if (!opt) return;
    Object.entries(opt.scores).forEach(([type, score]) => {
      scores[type] = (scores[type] || 0) + (score as number);
    });
  });

  // Find the type with the highest score
  let topType = 'MALO';
  let topScore = -1;
  Object.entries(scores).forEach(([type, score]) => {
    if (score > topScore) {
      topScore = score;
      topType = type;
    }
  });

  const result = sbtiResults.find(r => r.typeCode === topType) || sbtiResults[0];
  return { typeCode: topType, dimensionScores: scores, result };
}

// ==== 气质类型测试 ====
export const temperamentDimensions: TestDimension[] = [
  { id: 'temp-s', testId: 'test-temperament', name: '稳定性', description: '情绪的稳定与波动程度', minLabel: '稳定', maxLabel: '波动', color: '#8b5cf6' },
  { id: 'temp-a', testId: 'test-temperament', name: '活动性', description: '行为的活跃与安静程度', minLabel: '安静', maxLabel: '活跃', color: '#06b6d4' },
];

export const temperamentQuestions: TestQuestion[] = [
  { id: 'temp-q1', testId: 'test-temperament', text: '面对突发事件时，你通常会...', order: 1 },
  { id: 'temp-q2', testId: 'test-temperament', text: '在社交场合，你的表现是...', order: 2 },
  { id: 'temp-q3', testId: 'test-temperament', text: '当你感到不开心时，情绪会...', order: 3 },
  { id: 'temp-q4', testId: 'test-temperament', text: '对于新环境或新任务，你倾向于...', order: 4 },
  { id: 'temp-q5', testId: 'test-temperament', text: '别人通常觉得你是一个...', order: 5 },
  { id: 'temp-q6', testId: 'test-temperament', text: '在做决定时，你更...', order: 6 },
  { id: 'temp-q7', testId: 'test-temperament', text: '遇到困难时，你的第一反应是...', order: 7 },
  { id: 'temp-q8', testId: 'test-temperament', text: '你的日常说话速度通常是...', order: 8 },
  { id: 'temp-q9', testId: 'test-temperament', text: '面对批评时，你会...', order: 9 },
  { id: 'temp-q10', testId: 'test-temperament', text: '当你生气时，你会...', order: 10 },
  { id: 'temp-q11', testId: 'test-temperament', text: '在团队工作中，你更像是...', order: 11 },
  { id: 'temp-q12', testId: 'test-temperament', text: '对于计划和变化，你的态度是...', order: 12 },
  { id: 'temp-q13', testId: 'test-temperament', text: '你更容易对以下哪种情况产生反应...', order: 13 },
  { id: 'temp-q14', testId: 'test-temperament', text: '在压力下，你倾向于...', order: 14 },
  { id: 'temp-q15', testId: 'test-temperament', text: '你的注意力通常...', order: 15 },
  { id: 'temp-q16', testId: 'test-temperament', text: '对于重复性的工作，你的感受是...', order: 16 },
  { id: 'temp-q17', testId: 'test-temperament', text: '当需要表达观点时，你...', order: 17 },
  { id: 'temp-q18', testId: 'test-temperament', text: '你更倾向于相信...', order: 18 },
  { id: 'temp-q19', testId: 'test-temperament', text: '在冲突中，你更可能...', order: 19 },
  { id: 'temp-q20', testId: 'test-temperament', text: '总的来说，你认为自己是...', order: 20 },
];

export const temperamentOptions: OptionsMap = {
  'temp-q1': [
    { id: 'temp-q1-a', questionId: 'temp-q1', text: '迅速做出反应，立即行动', value: 2, dimensionScores: { 'temp-s': 1, 'temp-a': 2 } },
    { id: 'temp-q1-b', questionId: 'temp-q1', text: '冷静分析后再行动', value: 1, dimensionScores: { 'temp-s': -1, 'temp-a': 0 } },
    { id: 'temp-q1-c', questionId: 'temp-q1', text: '有些慌张，需要时间调整', value: 0, dimensionScores: { 'temp-s': 1, 'temp-a': -1 } },
    { id: 'temp-q1-d', questionId: 'temp-q1', text: '保持冷静，按部就班', value: -1, dimensionScores: { 'temp-s': -2, 'temp-a': -1 } },
  ],
  'temp-q2': [
    { id: 'temp-q2-a', questionId: 'temp-q2', text: '非常活跃，主动与人交流', value: 2, dimensionScores: { 'temp-s': 0, 'temp-a': 2 } },
    { id: 'temp-q2-b', questionId: 'temp-q2', text: '适度参与，表现自然', value: 1, dimensionScores: { 'temp-s': -1, 'temp-a': 1 } },
    { id: 'temp-q2-c', questionId: 'temp-q2', text: '安静观察，较少主动', value: 0, dimensionScores: { 'temp-s': -1, 'temp-a': -1 } },
    { id: 'temp-q2-d', questionId: 'temp-q2', text: '容易紧张，想尽快离开', value: -1, dimensionScores: { 'temp-s': 2, 'temp-a': -2 } },
  ],
  'temp-q3': [
    { id: 'temp-q3-a', questionId: 'temp-q3', text: '很快过去，转眼就忘了', value: 2, dimensionScores: { 'temp-s': -2, 'temp-a': 1 } },
    { id: 'temp-q3-b', questionId: 'temp-q3', text: '持续一阵子，但能自我调节', value: 1, dimensionScores: { 'temp-s': -1, 'temp-a': 0 } },
    { id: 'temp-q3-c', questionId: 'temp-q3', text: '会持续较长时间', value: 0, dimensionScores: { 'temp-s': 1, 'temp-a': -1 } },
    { id: 'temp-q3-d', questionId: 'temp-q3', text: '容易陷入情绪，难以自拔', value: -1, dimensionScores: { 'temp-s': 2, 'temp-a': -2 } },
  ],
  'temp-q4': [
    { id: 'temp-q4-a', questionId: 'temp-q4', text: '充满热情，立刻投入', value: 2, dimensionScores: { 'temp-s': 1, 'temp-a': 2 } },
    { id: 'temp-q4-b', questionId: 'temp-q4', text: '有兴趣，但会先了解', value: 1, dimensionScores: { 'temp-s': -1, 'temp-a': 1 } },
    { id: 'temp-q4-c', questionId: 'temp-q4', text: '需要时间适应和准备', value: 0, dimensionScores: { 'temp-s': 0, 'temp-a': -1 } },
    { id: 'temp-q4-d', questionId: 'temp-q4', text: '有些抗拒，想要逃避', value: -1, dimensionScores: { 'temp-s': 1, 'temp-a': -2 } },
  ],
  'temp-q5': [
    { id: 'temp-q5-a', questionId: 'temp-q5', text: '开朗外向，充满活力', value: 2, dimensionScores: { 'temp-s': -1, 'temp-a': 2 } },
    { id: 'temp-q5-b', questionId: 'temp-q5', text: '稳重踏实，可靠可信', value: 1, dimensionScores: { 'temp-s': -2, 'temp-a': 0 } },
    { id: 'temp-q5-c', questionId: 'temp-q5', text: '温和细致，有耐心', value: 0, dimensionScores: { 'temp-s': 0, 'temp-a': -1 } },
    { id: 'temp-q5-d', questionId: 'temp-q5', text: '敏感细腻，容易情绪化', value: -1, dimensionScores: { 'temp-s': 2, 'temp-a': -2 } },
  ],
  'temp-q6': [
    { id: 'temp-q6-a', questionId: 'temp-q6', text: '快速决定，不喜欢拖延', value: 2, dimensionScores: { 'temp-s': 1, 'temp-a': 2 } },
    { id: 'temp-q6-b', questionId: 'temp-q6', text: '权衡利弊后理性决定', value: 1, dimensionScores: { 'temp-s': -2, 'temp-a': 0 } },
    { id: 'temp-q6-c', questionId: 'temp-q6', text: '考虑他人感受', value: 0, dimensionScores: { 'temp-s': 1, 'temp-a': -1 } },
    { id: 'temp-q6-d', questionId: 'temp-q6', text: '反复犹豫，难以抉择', value: -1, dimensionScores: { 'temp-s': 1, 'temp-a': -2 } },
  ],
  'temp-q7': [
    { id: 'temp-q7-a', questionId: 'temp-q7', text: '立刻采取行动解决', value: 2, dimensionScores: { 'temp-s': 1, 'temp-a': 2 } },
    { id: 'temp-q7-b', questionId: 'temp-q7', text: '冷静思考对策', value: 1, dimensionScores: { 'temp-s': -2, 'temp-a': 0 } },
    { id: 'temp-q7-c', questionId: 'temp-q7', text: '寻求他人帮助', value: 0, dimensionScores: { 'temp-s': 0, 'temp-a': -1 } },
    { id: 'temp-q7-d', questionId: 'temp-q7', text: '感到沮丧，想退缩', value: -1, dimensionScores: { 'temp-s': 2, 'temp-a': -2 } },
  ],
  'temp-q8': [
    { id: 'temp-q8-a', questionId: 'temp-q8', text: '语速快，话多', value: 2, dimensionScores: { 'temp-s': 0, 'temp-a': 2 } },
    { id: 'temp-q8-b', questionId: 'temp-q8', text: '语速适中，表达清晰', value: 1, dimensionScores: { 'temp-s': -1, 'temp-a': 1 } },
    { id: 'temp-q8-c', questionId: 'temp-q8', text: '语速较慢，说话少', value: 0, dimensionScores: { 'temp-s': 0, 'temp-a': -1 } },
    { id: 'temp-q8-d', questionId: 'temp-q8', text: '有时语无伦次', value: -1, dimensionScores: { 'temp-s': 1, 'temp-a': -1 } },
  ],
  'temp-q9': [
    { id: 'temp-q9-a', questionId: 'temp-q9', text: '坦然接受，有则改之', value: 2, dimensionScores: { 'temp-s': -2, 'temp-a': 1 } },
    { id: 'temp-q9-b', questionId: 'temp-q9', text: '冷静反思，理性对待', value: 1, dimensionScores: { 'temp-s': -1, 'temp-a': 0 } },
    { id: 'temp-q9-c', questionId: 'temp-q9', text: '会辩解或解释', value: 0, dimensionScores: { 'temp-s': 0, 'temp-a': 1 } },
    { id: 'temp-q9-d', questionId: 'temp-q9', text: '内心受伤，难以释怀', value: -1, dimensionScores: { 'temp-s': 2, 'temp-a': -2 } },
  ],
  'temp-q10': [
    { id: 'temp-q10-a', questionId: 'temp-q10', text: '直接表达，很快过去', value: 2, dimensionScores: { 'temp-s': -1, 'temp-a': 2 } },
    { id: 'temp-q10-b', questionId: 'temp-q10', text: '控制情绪，冷静处理', value: 1, dimensionScores: { 'temp-s': -2, 'temp-a': 0 } },
    { id: 'temp-q10-c', questionId: 'temp-q10', text: '压抑情绪，不表现出来', value: 0, dimensionScores: { 'temp-s': 1, 'temp-a': -1 } },
    { id: 'temp-q10-d', questionId: 'temp-q10', text: '情绪波动大，难以控制', value: -1, dimensionScores: { 'temp-s': 2, 'temp-a': -1 } },
  ],
  'temp-q11': [
    { id: 'temp-q11-a', questionId: 'temp-q11', text: '领导者或组织者', value: 2, dimensionScores: { 'temp-s': 0, 'temp-a': 2 } },
    { id: 'temp-q11-b', questionId: 'temp-q11', text: '执行者，可靠完成任务', value: 1, dimensionScores: { 'temp-s': -2, 'temp-a': 0 } },
    { id: 'temp-q11-c', questionId: 'temp-q11', text: '协调者，促进和谐', value: 0, dimensionScores: { 'temp-s': 1, 'temp-a': -1 } },
    { id: 'temp-q11-d', questionId: 'temp-q11', text: '创意贡献者，但不喜欢出头', value: -1, dimensionScores: { 'temp-s': 1, 'temp-a': -2 } },
  ],
  'temp-q12': [
    { id: 'temp-q12-a', questionId: 'temp-q12', text: '喜欢变化，灵活调整', value: 2, dimensionScores: { 'temp-s': 1, 'temp-a': 2 } },
    { id: 'temp-q12-b', questionId: 'temp-q12', text: '有计划，但接受合理变化', value: 1, dimensionScores: { 'temp-s': -1, 'temp-a': 0 } },
    { id: 'temp-q12-c', questionId: 'temp-q12', text: '按计划行事，变化让我不安', value: 0, dimensionScores: { 'temp-s': 0, 'temp-a': -1 } },
    { id: 'temp-q12-d', questionId: 'temp-q12', text: '计划变化都让我焦虑', value: -1, dimensionScores: { 'temp-s': 2, 'temp-a': -2 } },
  ],
  'temp-q13': [
    { id: 'temp-q13-a', questionId: 'temp-q13', text: '新鲜有趣的事物', value: 2, dimensionScores: { 'temp-s': 0, 'temp-a': 2 } },
    { id: 'temp-q13-b', questionId: 'temp-q13', text: '逻辑和分析', value: 1, dimensionScores: { 'temp-s': -1, 'temp-a': 0 } },
    { id: 'temp-q13-c', questionId: 'temp-q13', text: '他人的情绪和态度', value: 0, dimensionScores: { 'temp-s': 1, 'temp-a': -1 } },
    { id: 'temp-q13-d', questionId: 'temp-q13', text: '潜在的负面后果', value: -1, dimensionScores: { 'temp-s': 2, 'temp-a': -2 } },
  ],
  'temp-q14': [
    { id: 'temp-q14-a', questionId: 'temp-q14', text: '更加活跃，高效应对', value: 2, dimensionScores: { 'temp-s': 1, 'temp-a': 2 } },
    { id: 'temp-q14-b', questionId: 'temp-q14', text: '保持冷静，系统解决', value: 1, dimensionScores: { 'temp-s': -2, 'temp-a': 0 } },
    { id: 'temp-q14-c', questionId: 'temp-q14', text: '变得沉默，独自承受', value: 0, dimensionScores: { 'temp-s': 1, 'temp-a': -2 } },
    { id: 'temp-q14-d', questionId: 'temp-q14', text: '容易崩溃，难以应付', value: -1, dimensionScores: { 'temp-s': 2, 'temp-a': -1 } },
  ],
  'temp-q15': [
    { id: 'temp-q15-a', questionId: 'temp-q15', text: '容易转移，对新事物感兴趣', value: 2, dimensionScores: { 'temp-s': -1, 'temp-a': 2 } },
    { id: 'temp-q15-b', questionId: 'temp-q15', text: '能够集中，适时调整', value: 1, dimensionScores: { 'temp-s': -1, 'temp-a': 0 } },
    { id: 'temp-q15-c', questionId: 'temp-q15', text: '相对稳定，变化较慢', value: 0, dimensionScores: { 'temp-s': 0, 'temp-a': -1 } },
    { id: 'temp-q15-d', questionId: 'temp-q15', text: '容易钻牛角尖', value: -1, dimensionScores: { 'temp-s': 2, 'temp-a': -1 } },
  ],
  'temp-q16': [
    { id: 'temp-q16-a', questionId: 'temp-q16', text: '很快感到无聊', value: 2, dimensionScores: { 'temp-s': 1, 'temp-a': 2 } },
    { id: 'temp-q16-b', questionId: 'temp-q16', text: '能专注完成', value: 1, dimensionScores: { 'temp-s': -2, 'temp-a': 0 } },
    { id: 'temp-q16-c', questionId: 'temp-q16', text: '慢慢完成，细致认真', value: 0, dimensionScores: { 'temp-s': 0, 'temp-a': -1 } },
    { id: 'temp-q16-d', questionId: 'temp-q16', text: '容易烦躁出错', value: -1, dimensionScores: { 'temp-s': 2, 'temp-a': -1 } },
  ],
  'temp-q17': [
    { id: 'temp-q17-a', questionId: 'temp-q17', text: '直截了当，毫不犹豫', value: 2, dimensionScores: { 'temp-s': 0, 'temp-a': 2 } },
    { id: 'temp-q17-b', questionId: 'temp-q17', text: '考虑周全，有理有据', value: 1, dimensionScores: { 'temp-s': -1, 'temp-a': 0 } },
    { id: 'temp-q17-c', questionId: 'temp-q17', text: '委婉表达，顾全大局', value: 0, dimensionScores: { 'temp-s': 0, 'temp-a': -1 } },
    { id: 'temp-q17-d', questionId: 'temp-q17', text: '犹豫不决，担心后果', value: -1, dimensionScores: { 'temp-s': 1, 'temp-a': -2 } },
  ],
  'temp-q18': [
    { id: 'temp-q18-a', questionId: 'temp-q18', text: '直觉和经验', value: 2, dimensionScores: { 'temp-s': 0, 'temp-a': 1 } },
    { id: 'temp-q18-b', questionId: 'temp-q18', text: '事实和逻辑', value: 1, dimensionScores: { 'temp-s': -1, 'temp-a': 0 } },
    { id: 'temp-q18-c', questionId: 'temp-q18', text: '多数人的意见', value: 0, dimensionScores: { 'temp-s': 1, 'temp-a': -1 } },
    { id: 'temp-q18-d', questionId: 'temp-q18', text: '内心的担忧', value: -1, dimensionScores: { 'temp-s': 2, 'temp-a': -2 } },
  ],
  'temp-q19': [
    { id: 'temp-q19-a', questionId: 'temp-q19', text: '据理力争', value: 2, dimensionScores: { 'temp-s': 1, 'temp-a': 2 } },
    { id: 'temp-q19-b', questionId: 'temp-q19', text: '冷静讲理', value: 1, dimensionScores: { 'temp-s': -2, 'temp-a': 0 } },
    { id: 'temp-q19-c', questionId: 'temp-q19', text: '退让妥协', value: 0, dimensionScores: { 'temp-s': 0, 'temp-a': -1 } },
    { id: 'temp-q19-d', questionId: 'temp-q19', text: '回避退缩', value: -1, dimensionScores: { 'temp-s': 1, 'temp-a': -2 } },
  ],
  'temp-q20': [
    { id: 'temp-q20-a', questionId: 'temp-q20', text: '外向开朗的人', value: 2, dimensionScores: { 'temp-s': -1, 'temp-a': 2 } },
    { id: 'temp-q20-b', questionId: 'temp-q20', text: '稳重可靠的人', value: 1, dimensionScores: { 'temp-s': -2, 'temp-a': 0 } },
    { id: 'temp-q20-c', questionId: 'temp-q20', text: '温和稳重的人', value: 0, dimensionScores: { 'temp-s': 0, 'temp-a': -1 } },
    { id: 'temp-q20-d', questionId: 'temp-q20', text: '敏感细腻的人', value: -1, dimensionScores: { 'temp-s': 1, 'temp-a': -2 } },
  ],
};

export const temperamentResults: TestResult[] = [
  {
    id: 'temp-sanguine',
    testId: 'test-temperament',
    typeCode: 'SANGUINE',
    typeName: '多血质',
    summary: '活泼开朗，善于交际，适应性强，情绪外露',
    description: '你是典型的多血质气质。你热情活泼，反应迅速，善于与人交往。你喜欢新鲜事物，适应能力强，但可能缺乏耐心，兴趣容易转移。',
    strengths: ['热情开朗，人缘好', '反应敏捷，适应力强', '善于表达和沟通', '乐观积极，充满活力'],
    weaknesses: ['注意力容易分散', '做事可能缺乏恒心', '情绪波动较大', '有时过于浮躁'],
    relationships: '你在关系中轻松愉快，善于活跃气氛。需要注意的是，有时候会显得不够深入或稳定。',
    career: '适合需要人际交往的工作：销售、公关、主持、教育、市场推广等。',
    growth: '培养专注力和坚持力。选择一件重要的事，设定目标，持续深入地完成它。',
    minScore: 0,
    maxScore: 100,
    dimensionRanges: { 'temp-s': [-20, 0], 'temp-a': [0, 40] },
  },
  {
    id: 'temp-choleric',
    testId: 'test-temperament',
    typeCode: 'CHOLERIC',
    typeName: '胆汁质',
    summary: '精力充沛，行动力强，意志坚定，情绪强烈',
    description: '你是典型的胆汁质气质。你精力充沛，行动力强，具有领导才能。你意志坚定，目标明确，但可能过于强势，情绪反应强烈。',
    strengths: ['意志坚强，目标明确', '行动力强，执行力高', '领导能力强', '直率坦诚'],
    weaknesses: ['可能过于强势', '情绪反应强烈', '有时缺乏耐心', '容易冲动'],
    relationships: '你在关系中是主导者，需要学会倾听和包容。找一个能和你互补的伴侣会更好。',
    career: '适合需要决断和领导的工作：管理、创业、法律、军事、项目管理等。',
    growth: '学会放慢节奏，倾听他人。控制情绪，在行动前多思考一步。',
    minScore: 0,
    maxScore: 100,
    dimensionRanges: { 'temp-s': [0, 20], 'temp-a': [0, 40] },
  },
  {
    id: 'temp-phlegmatic',
    testId: 'test-temperament',
    typeCode: 'PHLEGMATIC',
    typeName: '粘液质',
    summary: '沉稳冷静，耐心细致，情绪稳定，节奏较慢',
    description: '你是典型的粘液质气质。你沉稳冷静，耐心细致，情绪非常稳定。你做事有条不紊，但可能反应较慢，不够灵活。',
    strengths: ['情绪稳定，心态平和', '做事有条理，细致耐心', '可靠稳定', '善于倾听'],
    weaknesses: ['反应相对较慢', '可能缺乏主动性', '不喜欢变化', '有时显得冷淡'],
    relationships: '你在关系中是稳定的存在。你需要一个能理解你节奏，同时也能带动你更积极的伴侣。',
    career: '适合需要稳定和细致的工作：财务、行政、科研、技术、医疗等。',
    growth: '尝试主动一些。定期给自己设定小挑战，逐步走出舒适区。',
    minScore: 0,
    maxScore: 100,
    dimensionRanges: { 'temp-s': [-40, -10], 'temp-a': [-40, 0] },
  },
  {
    id: 'temp-melancholic',
    testId: 'test-temperament',
    typeCode: 'MELANCHOLIC',
    typeName: '抑郁质',
    summary: '敏感细腻，感受深刻，内向稳重，容易多虑',
    description: '你是典型的抑郁质气质。你敏感细腻，感受力强，内心世界丰富。你做事认真，责任心强，但可能容易焦虑，情绪波动大。',
    strengths: ['感受力强，敏感细腻', '责任心强，做事认真', '内心丰富，有深度', '善于观察和理解'],
    weaknesses: ['容易过度担忧', '情绪容易低落', '可能过于敏感', '有时缺乏自信'],
    relationships: '你在关系中深情而敏感。你需要一个能给你安全感，同时也理解你情绪波动的伴侣。',
    career: '适合需要深度和细致的工作：艺术、写作、心理咨询、研究、设计等。',
    growth: '学会自我关怀，建立内在的安全感。记录每天的小成就，培养自我肯定的习惯。',
    minScore: 0,
    maxScore: 100,
    dimensionRanges: { 'temp-s': [10, 40], 'temp-a': [-40, 0] },
  },
];

// 气质类型计算函数
export function calculateTemperamentResult(answers: Record<string, string>): {
  typeCode: string;
  dimensionScores: Record<string, number>;
  result: TestResult;
} {
  const dimScores: Record<string, number> = {
    'temp-s': 0,
    'temp-a': 0,
  };

  temperamentQuestions.forEach((q) => {
    const answeredOptionId = answers[q.id];
    if (!answeredOptionId) return;
    const opts = temperamentOptions[q.id];
    if (!opts) return;
    const opt = opts.find(o => o.id === String(answeredOptionId));
    if (!opt) return;
    Object.entries(opt.dimensionScores).forEach(([dim, score]) => {
      dimScores[dim] = (dimScores[dim] || 0) + score;
    });
  });

  // 根据维度分数判断气质类型
  const stability = dimScores['temp-s'];
  const activity = dimScores['temp-a'];

  let typeCode = 'SANGUINE';
  if (stability < 0 && activity > 0) {
    typeCode = 'SANGUINE'; // 多血质：稳定、活跃
  } else if (stability >= 0 && activity > 0) {
    typeCode = 'CHOLERIC'; // 胆汁质：不稳定、活跃
  } else if (stability < 0 && activity <= 0) {
    typeCode = 'PHLEGMATIC'; // 粘液质：稳定、不活跃
  } else if (stability >= 0 && activity <= 0) {
    typeCode = 'MELANCHOLIC'; // 抑郁质：不稳定、不活跃
  }

  const result = temperamentResults.find(r => r.typeCode === typeCode) || temperamentResults[0];
  return { typeCode, dimensionScores: dimScores, result };
}

// ==== 内向/外向倾向测试 ====
export const introversionDimensions: TestDimension[] = [
  { id: 'intro-ie', testId: 'test-introversion', name: '能量来源', description: '你从哪里获得能量', minLabel: '内向', maxLabel: '外向', color: '#8b5cf6' },
];

export const introversionQuestions: TestQuestion[] = [
  { id: 'intro-q1', testId: 'test-introversion', text: '在繁忙的社交聚会后，你通常感觉如何？', order: 1 },
  { id: 'intro-q2', testId: 'test-introversion', text: '周末时，你更倾向于...', order: 2 },
  { id: 'intro-q3', testId: 'test-introversion', text: '当你需要思考重要问题时，你更喜欢...', order: 3 },
  { id: 'intro-q4', testId: 'test-introversion', text: '在小组讨论中，你通常...', order: 4 },
  { id: 'intro-q5', testId: 'test-introversion', text: '你更喜欢哪种沟通方式？', order: 5 },
  { id: 'intro-q6', testId: 'test-introversion', text: '对于陌生的新环境，你的反应是...', order: 6 },
  { id: 'intro-q7', testId: 'test-introversion', text: '你觉得怎样的周末最理想？', order: 7 },
  { id: 'intro-q8', testId: 'test-introversion', text: '遇到问题需要解决时，你更可能...', order: 8 },
  { id: 'intro-q9', testId: 'test-introversion', text: '在人群中，你通常...', order: 9 },
  { id: 'intro-q10', testId: 'test-introversion', text: '你对"社交"这个概念的感受是...', order: 10 },
  { id: 'intro-q11', testId: 'test-introversion', text: '如果可以自由选择工作环境...', order: 11 },
  { id: 'intro-q12', testId: 'test-introversion', text: '面对冲突时，你更可能...', order: 12 },
  { id: 'intro-q13', testId: 'test-introversion', text: '你更喜欢的休息方式是...', order: 13 },
  { id: 'intro-q14', testId: 'test-introversion', text: '当朋友想介绍新朋友给你认识...', order: 14 },
  { id: 'intro-q15', testId: 'test-introversion', text: '总体上，你认为自己...', order: 15 },
];

export const introversionOptions: OptionsMap = {
  'intro-q1': [
    { id: 'intro-q1-a', questionId: 'intro-q1', text: '精力充沛，想要更多', value: 3, dimensionScores: { 'intro-ie': 3 } },
    { id: 'intro-q1-b', questionId: 'intro-q1', text: '还好，但需要休息', value: 1, dimensionScores: { 'intro-ie': 0 } },
    { id: 'intro-q1-c', questionId: 'intro-q1', text: '有些疲惫，需要独处充电', value: 0, dimensionScores: { 'intro-ie': -2 } },
    { id: 'intro-q1-d', questionId: 'intro-q1', text: '非常疲惫，想一个人待着', value: -1, dimensionScores: { 'intro-ie': -3 } },
  ],
  'intro-q2': [
    { id: 'intro-q2-a', questionId: 'intro-q2', text: '约朋友出门活动', value: 3, dimensionScores: { 'intro-ie': 3 } },
    { id: 'intro-q2-b', questionId: 'intro-q2', text: '可能出门也可能待在家', value: 1, dimensionScores: { 'intro-ie': 0 } },
    { id: 'intro-q2-c', questionId: 'intro-q2', text: '在家看书或追剧', value: 0, dimensionScores: { 'intro-ie': -1 } },
    { id: 'intro-q2-d', questionId: 'intro-q2', text: '一个人做自己喜欢的事', value: -1, dimensionScores: { 'intro-ie': -3 } },
  ],
  'intro-q3': [
    { id: 'intro-q3-a', questionId: 'intro-q3', text: '边走边和他人讨论', value: 3, dimensionScores: { 'intro-ie': 3 } },
    { id: 'intro-q3-b', questionId: 'intro-q3', text: '先简单讨论再自己思考', value: 1, dimensionScores: { 'intro-ie': 0 } },
    { id: 'intro-q3-c', questionId: 'intro-q3', text: '先独自思考', value: 0, dimensionScores: { 'intro-ie': -1 } },
    { id: 'intro-q3-d', questionId: 'intro-q3', text: '完全独自思考', value: -1, dimensionScores: { 'intro-ie': -3 } },
  ],
  'intro-q4': [
    { id: 'intro-q4-a', questionId: 'intro-q4', text: '积极发言，主导讨论', value: 3, dimensionScores: { 'intro-ie': 3 } },
    { id: 'intro-q4-b', questionId: 'intro-q4', text: '适时发言，参与讨论', value: 1, dimensionScores: { 'intro-ie': 1 } },
    { id: 'intro-q4-c', questionId: 'intro-q4', text: '倾听为主，偶尔发言', value: 0, dimensionScores: { 'intro-ie': -1 } },
    { id: 'intro-q4-d', questionId: 'intro-q4', text: '很少发言，默默观察', value: -1, dimensionScores: { 'intro-ie': -3 } },
  ],
  'intro-q5': [
    { id: 'intro-q5-a', questionId: 'intro-q5', text: '面对面或电话交谈', value: 3, dimensionScores: { 'intro-ie': 3 } },
    { id: 'intro-q5-b', questionId: 'intro-q5', text: '根据情况选择', value: 1, dimensionScores: { 'intro-ie': 0 } },
    { id: 'intro-q5-c', questionId: 'intro-q5', text: '短信或文字消息', value: 0, dimensionScores: { 'intro-ie': -1 } },
    { id: 'intro-q5-d', questionId: 'intro-q5', text: '能不发消息就不发', value: -1, dimensionScores: { 'intro-ie': -3 } },
  ],
  'intro-q6': [
    { id: 'intro-q6-a', questionId: 'intro-q6', text: '兴奋好奇，主动探索', value: 3, dimensionScores: { 'intro-ie': 3 } },
    { id: 'intro-q6-b', questionId: 'intro-q6', text: '有些期待，逐渐适应', value: 1, dimensionScores: { 'intro-ie': 0 } },
    { id: 'intro-q6-c', questionId: 'intro-q6', text: '有点紧张，谨慎观察', value: 0, dimensionScores: { 'intro-ie': -1 } },
    { id: 'intro-q6-d', questionId: 'intro-q6', text: '很不自在，想离开', value: -1, dimensionScores: { 'intro-ie': -3 } },
  ],
  'intro-q7': [
    { id: 'intro-q7-a', questionId: 'intro-q7', text: '和朋友一起活动', value: 3, dimensionScores: { 'intro-ie': 3 } },
    { id: 'intro-q7-b', questionId: 'intro-q7', text: '视情况而定', value: 1, dimensionScores: { 'intro-ie': 0 } },
    { id: 'intro-q7-c', questionId: 'intro-q7', text: '和少数好友安静相处', value: 0, dimensionScores: { 'intro-ie': -1 } },
    { id: 'intro-q7-d', questionId: 'intro-q7', text: '一个人独处放松', value: -1, dimensionScores: { 'intro-ie': -3 } },
  ],
  'intro-q8': [
    { id: 'intro-q8-a', questionId: 'intro-q8', text: '直接找人商量', value: 3, dimensionScores: { 'intro-ie': 3 } },
    { id: 'intro-q8-b', questionId: 'intro-q8', text: '先查资料再讨论', value: 1, dimensionScores: { 'intro-ie': 0 } },
    { id: 'intro-q8-c', questionId: 'intro-q8', text: '先自己思考', value: 0, dimensionScores: { 'intro-ie': -1 } },
    { id: 'intro-q8-d', questionId: 'intro-q8', text: '完全独立解决', value: -1, dimensionScores: { 'intro-ie': -3 } },
  ],
  'intro-q9': [
    { id: 'intro-q9-a', questionId: 'intro-q9', text: '感到充满能量', value: 3, dimensionScores: { 'intro-ie': 3 } },
    { id: 'intro-q9-b', questionId: 'intro-q9', text: '相对自在', value: 1, dimensionScores: { 'intro-ie': 0 } },
    { id: 'intro-q9-c', questionId: 'intro-q9', text: '有点消耗能量', value: 0, dimensionScores: { 'intro-ie': -1 } },
    { id: 'intro-q9-d', questionId: 'intro-q9', text: '非常疲惫', value: -1, dimensionScores: { 'intro-ie': -3 } },
  ],
  'intro-q10': [
    { id: 'intro-q10-a', questionId: 'intro-q10', text: '喜欢，是能量的来源', value: 3, dimensionScores: { 'intro-ie': 3 } },
    { id: 'intro-q10-b', questionId: 'intro-q10', text: '还行，看具体情况', value: 1, dimensionScores: { 'intro-ie': 0 } },
    { id: 'intro-q10-c', questionId: 'intro-q10', text: '有点累但能应付', value: 0, dimensionScores: { 'intro-ie': -1 } },
    { id: 'intro-q10-d', questionId: 'intro-q10', text: '尽量减少社交', value: -1, dimensionScores: { 'intro-ie': -3 } },
  ],
  'intro-q11': [
    { id: 'intro-q11-a', questionId: 'intro-q11', text: '开放式办公室或共享空间', value: 3, dimensionScores: { 'intro-ie': 3 } },
    { id: 'intro-q11-b', questionId: 'intro-q11', text: '两者都可以', value: 1, dimensionScores: { 'intro-ie': 0 } },
    { id: 'intro-q11-c', questionId: 'intro-q11', text: '小隔间或安静角落', value: 0, dimensionScores: { 'intro-ie': -1 } },
    { id: 'intro-q11-d', questionId: 'intro-q11', text: '独立的私人办公室', value: -1, dimensionScores: { 'intro-ie': -3 } },
  ],
  'intro-q12': [
    { id: 'intro-q12-a', questionId: 'intro-q12', text: '直接表达观点', value: 3, dimensionScores: { 'intro-ie': 3 } },
    { id: 'intro-q12-b', questionId: 'intro-q12', text: '适度表达', value: 1, dimensionScores: { 'intro-ie': 0 } },
    { id: 'intro-q12-c', questionId: 'intro-q12', text: '内心有想法但不说', value: 0, dimensionScores: { 'intro-ie': -1 } },
    { id: 'intro-q12-d', questionId: 'intro-q12', text: '避免冲突，退让', value: -1, dimensionScores: { 'intro-ie': -3 } },
  ],
  'intro-q13': [
    { id: 'intro-q13-a', questionId: 'intro-q13', text: '和朋友聚会聊天', value: 3, dimensionScores: { 'intro-ie': 3 } },
    { id: 'intro-q13-b', questionId: 'intro-q13', text: '外出散步或运动', value: 1, dimensionScores: { 'intro-ie': 0 } },
    { id: 'intro-q13-c', questionId: 'intro-q13', text: '看书或追剧', value: 0, dimensionScores: { 'intro-ie': -1 } },
    { id: 'intro-q13-d', questionId: 'intro-q13', text: '独自安静发呆或思考', value: -1, dimensionScores: { 'intro-ie': -3 } },
  ],
  'intro-q14': [
    { id: 'intro-q14-a', questionId: 'intro-q14', text: '很期待，喜欢认识新朋友', value: 3, dimensionScores: { 'intro-ie': 3 } },
    { id: 'intro-q14-b', questionId: 'intro-q14', text: '看心情决定', value: 1, dimensionScores: { 'intro-ie': 0 } },
    { id: 'intro-q14-c', questionId: 'intro-q14', text: '有点压力', value: 0, dimensionScores: { 'intro-ie': -1 } },
    { id: 'intro-q14-d', questionId: 'intro-q14', text: '不太想认识新人', value: -1, dimensionScores: { 'intro-ie': -3 } },
  ],
  'intro-q15': [
    { id: 'intro-q15-a', questionId: 'intro-q15', text: '外向，喜欢社交', value: 3, dimensionScores: { 'intro-ie': 3 } },
    { id: 'intro-q15-b', questionId: 'intro-q15', text: '比较外向，适应性好', value: 2, dimensionScores: { 'intro-ie': 1 } },
    { id: 'intro-q15-c', questionId: 'intro-q15', text: '内向和外向之间', value: 1, dimensionScores: { 'intro-ie': 0 } },
    { id: 'intro-q15-d', questionId: 'intro-q15', text: '比较内向，喜欢独处', value: 0, dimensionScores: { 'intro-ie': -1 } },
    { id: 'intro-q15-e', questionId: 'intro-q15', text: '内向，需要大量独处时间', value: -1, dimensionScores: { 'intro-ie': -3 } },
  ],
};

export const introversionResults: TestResult[] = [
  {
    id: 'intro-extrovert',
    testId: 'test-introversion',
    typeCode: 'EXTROVERT',
    typeName: '外向型',
    summary: '从社交中获得能量，喜欢与人互动',
    description: '你是典型的外向型人格。你从社交互动中获得能量，喜欢与人交流。你在人群中如鱼得水，独处时间过长会让你感到无聊和焦虑。',
    strengths: ['善于社交，人缘好', '表达能力强', '适应力强，反应快', '乐观积极，充满活力'],
    weaknesses: ['可能过于依赖外界反馈', '独处时会感到不安', '有时缺乏深度思考', '可能过于冲动'],
    relationships: '你在关系中是活跃的参与者，能快速建立联系。需要注意给内向伴侣空间。',
    career: '适合需要人际互动的工作：销售、公关、管理、主持、教育等。',
    growth: '尝试培养独处的能力，学会在安静中获得能量。',
    minScore: 15,
    maxScore: 45,
  },
  {
    id: 'intro-moderate-extro',
    testId: 'test-introversion',
    typeCode: 'MODERATE_EXTRO',
    typeName: '偏外向型',
    summary: '总体外向，但也享受适度独处',
    description: '你偏向外向，但也能享受独处时光。你从社交中获得能量，但也需要一定的独处来平衡。你能适应不同的社交场合。',
    strengths: ['社交能力强', '有良好的平衡感', '适应不同场合', '既能社交也能独处'],
    weaknesses: ['有时难以确定真正需求', '可能在两者间摇摆', '能量管理需要觉察'],
    relationships: '你在关系中灵活有度，既能参与社交也能给予空间。',
    career: '适合需要适度社交的工作：项目管理、协调类、中高交互岗位。',
    growth: '更清晰地觉察自己的能量需求，在社交与独处间找到最佳平衡。',
    minScore: 5,
    maxScore: 14,
  },
  {
    id: 'intro-ambivert',
    testId: 'test-introversion',
    typeCode: 'AMBIVERT',
    typeName: '中间型',
    summary: '内外向平衡，能适应不同情境',
    description: '你是典型的中间型（双重型）人格。你在外向和内向之间保持平衡，能根据情境调整自己的状态。你既有社交能力，也有独处的深度。',
    strengths: ['适应性强', '理解内外向两种需求', '灵活调整', '既有深度又有广度'],
    weaknesses: ['有时难以确定自己的倾向', '可能在选择时犹豫', '需要更多自我觉察'],
    relationships: '你能理解不同类型的人，在关系中灵活应对。',
    career: '适合需要灵活性的工作：咨询、项目管理、创意类工作。',
    growth: '接纳自己的灵活性，这是优势而非矛盾。',
    minScore: -4,
    maxScore: 4,
  },
  {
    id: 'intro-moderate-intro',
    testId: 'test-introversion',
    typeCode: 'MODERATE_INTRO',
    typeName: '偏内向型',
    summary: '总体内向，但具备必要社交能力',
    description: '你偏内向，但也具备必要的社交能力。你需要独处来充电，但不会完全回避社交。你在熟悉的环境中表现自然。',
    strengths: ['有深度思考能力', '独立自主', '善于倾听和观察', '做事专注认真'],
    weaknesses: ['可能错过一些社交机会', '有时过度回避社交', '需要管理社交能量'],
    relationships: '你在关系中是温暖的倾听者，建立深度连接后非常真诚。',
    career: '适合需要深度的工作：研究、写作、技术、设计、财务等。',
    growth: '有意识地走出舒适区，同时保护自己的独处时间。',
    minScore: -14,
    maxScore: -5,
  },
  {
    id: 'intro-introvert',
    testId: 'test-introversion',
    typeCode: 'INTROVERT',
    typeName: '内向型',
    summary: '从独处中获得能量，深度思考型',
    description: '你是典型的内向型人格。你从独处中获得能量，深度思考是你的优势。你更喜欢小范围、深度的互动，大型社交场合会消耗你的能量。',
    strengths: ['深度思考能力强', '独立自主，不依赖外界', '专注力强', '感受力敏锐'],
    weaknesses: ['社交能量有限', '可能过于内向', '有时错失社交机会', '可能显得疏离'],
    relationships: '你建立关系慢但深。一旦信任某人，是非常忠诚和真诚的伴侣或朋友。',
    career: '适合独立工作的岗位：研究、写作、编程、设计、数据分析等。',
    growth: '逐步扩大社交舒适区，同时接纳自己的内向特质——这是优势而非弱点。',
    minScore: -45,
    maxScore: -15,
  },
];

// 内向/外向计算函数
export function calculateIntroversionResult(answers: Record<string, string>): {
  typeCode: string;
  dimensionScores: Record<string, number>;
  result: TestResult;
} {
  const dimScores: Record<string, number> = {
    'intro-ie': 0,
  };

  introversionQuestions.forEach((q) => {
    const answeredOptionId = answers[q.id];
    if (!answeredOptionId) return;
    const opts = introversionOptions[q.id];
    if (!opts) return;
    const opt = opts.find(o => o.id === String(answeredOptionId));
    if (!opt) return;
    Object.entries(opt.dimensionScores).forEach(([dim, score]) => {
      dimScores[dim] = (dimScores[dim] || 0) + score;
    });
  });

  const score = dimScores['intro-ie'];
  const result = introversionResults.find(r => score >= r.minScore && score <= r.maxScore) || introversionResults[2];
  return { typeCode: result.typeCode, dimensionScores: dimScores, result };
}

// ==== 恋爱风格测试 ====
export const loveStyleDimensions: TestDimension[] = [
  { id: 'love-p', testId: 'test-love-style', name: '激情型', description: '热情奔放的爱', minLabel: '低', maxLabel: '高', color: '#ef4444' },
  { id: 'love-c', testId: 'test-love-style', name: '关怀型', description: '温柔体贴的爱', minLabel: '低', maxLabel: '高', color: '#ec4899' },
  { id: 'love-r', testId: 'test-love-style', name: '理性型', description: '冷静理性的爱', minLabel: '低', maxLabel: '高', color: '#8b5cf6' },
  { id: 'love-i', testId: 'test-love-style', name: '独立型', description: '保持自我的爱', minLabel: '低', maxLabel: '高', color: '#06b6d4' },
];

export const loveStyleQuestions: TestQuestion[] = [
  { id: 'love-q1', testId: 'test-love-style', text: '当遇到心仪的人时，你倾向于...', order: 1 },
  { id: 'love-q2', testId: 'test-love-style', text: '你认为爱情中最重要的是...', order: 2 },
  { id: 'love-q3', testId: 'test-love-style', text: '在恋爱中，你更看重...', order: 3 },
  { id: 'love-q4', testId: 'test-love-style', text: '对于"浪漫"，你的态度是...', order: 4 },
  { id: 'love-q5', testId: 'test-love-style', text: '当伴侣需要安慰时，你会...', order: 5 },
  { id: 'love-q6', testId: 'test-love-style', text: '关于"为爱情付出"，你觉得...', order: 6 },
  { id: 'love-q7', testId: 'test-love-style', text: '在感情中，你更像是...', order: 7 },
  { id: 'love-q8', testId: 'test-love-style', text: '对于伴侣的缺点，你会...', order: 8 },
  { id: 'love-q9', testId: 'test-love-style', text: '关于"一起度过时间"，你觉得...', order: 9 },
  { id: 'love-q10', testId: 'test-love-style', text: '当感情出现问题时，你更可能...', order: 10 },
  { id: 'love-q11', testId: 'test-love-style', text: '对于伴侣的社交活动，你的态度是...', order: 11 },
  { id: 'love-q12', testId: 'test-love-style', text: '在表达爱意时，你更倾向于...', order: 12 },
  { id: 'love-q13', testId: 'test-love-style', text: '对于未来的规划，你认为...', order: 13 },
  { id: 'love-q14', testId: 'test-love-style', text: '当伴侣做了让你不开心的事...', order: 14 },
  { id: 'love-q15', testId: 'test-love-style', text: '关于"个人空间"，你觉得...', order: 15 },
  { id: 'love-q16', testId: 'test-love-style', text: '在关系中，你更在意...', order: 16 },
  { id: 'love-q17', testId: 'test-love-style', text: '面对感情的选择，你更可能...', order: 17 },
  { id: 'love-q18', testId: 'test-love-style', text: '总的来说，你的爱情观是...', order: 18 },
];

export const loveStyleOptions: OptionsMap = {
  'love-q1': [
    { id: 'love-q1-a', questionId: 'love-q1', text: '主动接近，表达好感', value: 2, dimensionScores: { 'love-p': 2, 'love-c': 0, 'love-r': -1, 'love-i': -1 } },
    { id: 'love-q1-b', questionId: 'love-q1', text: '默默关心，等待时机', value: 1, dimensionScores: { 'love-p': 0, 'love-c': 2, 'love-r': 0, 'love-i': 1 } },
    { id: 'love-q1-c', questionId: 'love-q1', text: '先观察分析再行动', value: 0, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 2, 'love-i': 0 } },
    { id: 'love-q1-d', questionId: 'love-q1', text: '保持距离，顺其自然', value: -1, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 0, 'love-i': 2 } },
  ],
  'love-q2': [
    { id: 'love-q2-a', questionId: 'love-q2', text: '激情和心动的感觉', value: 2, dimensionScores: { 'love-p': 2, 'love-c': -1, 'love-r': -1, 'love-i': 0 } },
    { id: 'love-q2-b', questionId: 'love-q2', text: '彼此关心和照顾', value: 1, dimensionScores: { 'love-p': 0, 'love-c': 2, 'love-r': 0, 'love-i': -1 } },
    { id: 'love-q2-c', questionId: 'love-q2', text: '三观一致，目标相同', value: 0, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 2, 'love-i': 1 } },
    { id: 'love-q2-d', questionId: 'love-q2', text: '保持自我，互相尊重', value: -1, dimensionScores: { 'love-p': -1, 'love-c': 1, 'love-r': 0, 'love-i': 2 } },
  ],
  'love-q3': [
    { id: 'love-q3-a', questionId: 'love-q3', text: '浪漫和激情', value: 2, dimensionScores: { 'love-p': 2, 'love-c': 0, 'love-r': -1, 'love-i': -1 } },
    { id: 'love-q3-b', questionId: 'love-q3', text: '陪伴和照顾', value: 1, dimensionScores: { 'love-p': 0, 'love-c': 2, 'love-r': 0, 'love-i': -1 } },
    { id: 'love-q3-c', questionId: 'love-q3', text: '沟通和理解', value: 0, dimensionScores: { 'love-p': 0, 'love-c': 1, 'love-r': 2, 'love-i': 0 } },
    { id: 'love-q3-d', questionId: 'love-q3', text: '信任和独立空间', value: -1, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 1, 'love-i': 2 } },
  ],
  'love-q4': [
    { id: 'love-q4-a', questionId: 'love-q4', text: '非常重要，爱情必须有浪漫', value: 2, dimensionScores: { 'love-p': 2, 'love-c': 1, 'love-r': -1, 'love-i': -1 } },
    { id: 'love-q4-b', questionId: 'love-q4', text: '重要，但更重要的是日常生活', value: 1, dimensionScores: { 'love-p': 0, 'love-c': 2, 'love-r': 1, 'love-i': 0 } },
    { id: 'love-q4-c', questionId: 'love-q4', text: '适度就好，不需要太刻意', value: 0, dimensionScores: { 'love-p': 0, 'love-c': 0, 'love-r': 2, 'love-i': 1 } },
    { id: 'love-q4-d', questionId: 'love-q4', text: '可有可无，真实的相处更重要', value: -1, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 1, 'love-i': 2 } },
  ],
  'love-q5': [
    { id: 'love-q5-a', questionId: 'love-q5', text: '给一个大大的拥抱，说"有我在"', value: 2, dimensionScores: { 'love-p': 1, 'love-c': 2, 'love-r': -1, 'love-i': -1 } },
    { id: 'love-q5-b', questionId: 'love-q5', text: '安静陪伴，递纸递水', value: 1, dimensionScores: { 'love-p': 0, 'love-c': 2, 'love-r': 0, 'love-i': 0 } },
    { id: 'love-q5-c', questionId: 'love-q5', text: '问清楚发生了什么，一起分析', value: 0, dimensionScores: { 'love-p': 0, 'love-c': 1, 'love-r': 2, 'love-i': 0 } },
    { id: 'love-q5-d', questionId: 'love-q5', text: '表示理解，但不过度干涉', value: -1, dimensionScores: { 'love-p': -1, 'love-c': 1, 'love-r': 1, 'love-i': 2 } },
  ],
  'love-q6': [
    { id: 'love-q6-a', questionId: 'love-q6', text: '愿意付出一切', value: 2, dimensionScores: { 'love-p': 2, 'love-c': 2, 'love-r': -2, 'love-i': -2 } },
    { id: 'love-q6-b', questionId: 'love-q6', text: '愿意适度付出', value: 1, dimensionScores: { 'love-p': 0, 'love-c': 1, 'love-r': 1, 'love-i': 0 } },
    { id: 'love-q6-c', questionId: 'love-q6', text: '付出和回报要平衡', value: 0, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 2, 'love-i': 1 } },
    { id: 'love-q6-d', questionId: 'love-q6', text: '不能为了爱情失去自我', value: -1, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 0, 'love-i': 2 } },
  ],
  'love-q7': [
    { id: 'love-q7-a', questionId: 'love-q7', text: '情感的主动表达者', value: 2, dimensionScores: { 'love-p': 2, 'love-c': 1, 'love-r': -1, 'love-i': -1 } },
    { id: 'love-q7-b', questionId: 'love-q7', text: '默默付出的守护者', value: 1, dimensionScores: { 'love-p': 0, 'love-c': 2, 'love-r': 0, 'love-i': 0 } },
    { id: 'love-q7-c', questionId: 'love-q7', text: '理性沟通的协商者', value: 0, dimensionScores: { 'love-p': -1, 'love-c': 1, 'love-r': 2, 'love-i': 1 } },
    { id: 'love-q7-d', questionId: 'love-q7', text: '保持边界的陪伴者', value: -1, dimensionScores: { 'love-p': -1, 'love-c': 1, 'love-r': 1, 'love-i': 2 } },
  ],
  'love-q8': [
    { id: 'love-q8-a', questionId: 'love-q8', text: '觉得可爱，这是TA的一部分', value: 2, dimensionScores: { 'love-p': 1, 'love-c': 2, 'love-r': 0, 'love-i': 0 } },
    { id: 'love-q8-b', questionId: 'love-q8', text: '尝试理解背后的原因', value: 1, dimensionScores: { 'love-p': 0, 'love-c': 1, 'love-r': 2, 'love-i': 0 } },
    { id: 'love-q8-c', questionId: 'love-q8', text: '坦诚沟通，讨论如何改善', value: 0, dimensionScores: { 'love-p': 0, 'love-c': 1, 'love-r': 2, 'love-i': 1 } },
    { id: 'love-q8-d', questionId: 'love-q8', text: '尊重TA的个性，只要不越界', value: -1, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 1, 'love-i': 2 } },
  ],
  'love-q9': [
    { id: 'love-q9-a', questionId: 'love-q9', text: '越多越好，恨不得24小时在一起', value: 2, dimensionScores: { 'love-p': 2, 'love-c': 1, 'love-r': -1, 'love-i': -2 } },
    { id: 'love-q9-b', questionId: 'love-q9', text: '高质量的陪伴最重要', value: 1, dimensionScores: { 'love-p': 0, 'love-c': 2, 'love-r': 1, 'love-i': 0 } },
    { id: 'love-q9-c', questionId: 'love-q9', text: '需要平衡个人时间和二人世界', value: 0, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 2, 'love-i': 1 } },
    { id: 'love-q9-d', questionId: 'love-q9', text: '各自独立也很重要', value: -1, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 1, 'love-i': 2 } },
  ],
  'love-q10': [
    { id: 'love-q10-a', questionId: 'love-q10', text: '情绪化地表达不满', value: 2, dimensionScores: { 'love-p': 2, 'love-c': 0, 'love-r': -2, 'love-i': -1 } },
    { id: 'love-q10-b', questionId: 'love-q10', text: '担心失去对方，先道歉', value: 1, dimensionScores: { 'love-p': 0, 'love-c': 1, 'love-r': -1, 'love-i': -1 } },
    { id: 'love-q10-c', questionId: 'love-q10', text: '冷静沟通，找出问题根源', value: 0, dimensionScores: { 'love-p': -1, 'love-c': 1, 'love-r': 2, 'love-i': 0 } },
    { id: 'love-q10-d', questionId: 'love-q10', text: '给彼此空间，等情绪稳定再说', value: -1, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 1, 'love-i': 2 } },
  ],
  'love-q11': [
    { id: 'love-q11-a', questionId: 'love-q11', text: '支持并一起参与', value: 2, dimensionScores: { 'love-p': 1, 'love-c': 2, 'love-r': 0, 'love-i': -1 } },
    { id: 'love-q11-b', questionId: 'love-q11', text: '表示理解和支持', value: 1, dimensionScores: { 'love-p': 0, 'love-c': 1, 'love-r': 1, 'love-i': 0 } },
    { id: 'love-q11-c', questionId: 'love-q11', text: '确认不会影响两人的关系', value: 0, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 2, 'love-i': 1 } },
    { id: 'love-q11-d', questionId: 'love-q11', text: '很高兴TA有自己的圈子', value: -1, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 0, 'love-i': 2 } },
  ],
  'love-q12': [
    { id: 'love-q12-a', questionId: 'love-q12', text: '经常说"我爱你"，制造惊喜', value: 2, dimensionScores: { 'love-p': 2, 'love-c': 1, 'love-r': -1, 'love-i': -1 } },
    { id: 'love-q12-b', questionId: 'love-q12', text: '用行动照顾，关心日常', value: 1, dimensionScores: { 'love-p': 0, 'love-c': 2, 'love-r': 1, 'love-i': 0 } },
    { id: 'love-q12-c', questionId: 'love-q12', text: '分享想法，进行深度对话', value: 0, dimensionScores: { 'love-p': 0, 'love-c': 1, 'love-r': 2, 'love-i': 1 } },
    { id: 'love-q12-d', questionId: 'love-q12', text: '尊重边界，给予自由', value: -1, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 1, 'love-i': 2 } },
  ],
  'love-q13': [
    { id: 'love-q13-a', questionId: 'love-q13', text: '两个人的未来要一起规划', value: 2, dimensionScores: { 'love-p': 1, 'love-c': 2, 'love-r': 1, 'love-i': -1 } },
    { id: 'love-q13-b', questionId: 'love-q13', text: '可以讨论，但不用太具体', value: 1, dimensionScores: { 'love-p': 0, 'love-c': 1, 'love-r': 1, 'love-i': 1 } },
    { id: 'love-q13-c', questionId: 'love-q13', text: '有共同方向即可，细节各自规划', value: 0, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 2, 'love-i': 1 } },
    { id: 'love-q13-d', questionId: 'love-q13', text: '各自规划，相互支持', value: -1, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 0, 'love-i': 2 } },
  ],
  'love-q14': [
    { id: 'love-q14-a', questionId: 'love-q14', text: '直接表达不开心', value: 2, dimensionScores: { 'love-p': 2, 'love-c': 0, 'love-r': 0, 'love-i': 0 } },
    { id: 'love-q14-b', questionId: 'love-q14', text: '有些受伤，但选择理解', value: 1, dimensionScores: { 'love-p': 0, 'love-c': 2, 'love-r': 0, 'love-i': -1 } },
    { id: 'love-q14-c', questionId: 'love-q14', text: '等合适时机沟通', value: 0, dimensionScores: { 'love-p': -1, 'love-c': 1, 'love-r': 2, 'love-i': 1 } },
    { id: 'love-q14-d', questionId: 'love-q14', text: '自己消化，不想计较', value: -1, dimensionScores: { 'love-p': -1, 'love-c': 1, 'love-r': 0, 'love-i': 2 } },
  ],
  'love-q15': [
    { id: 'love-q15-a', questionId: 'love-q15', text: '可以适当有，但不能太多', value: 2, dimensionScores: { 'love-p': 1, 'love-c': 1, 'love-r': 0, 'love-i': -1 } },
    { id: 'love-q15-b', questionId: 'love-q15', text: '需要一定的相处时间', value: 1, dimensionScores: { 'love-p': 0, 'love-c': 2, 'love-r': 1, 'love-i': 0 } },
    { id: 'love-q15-c', questionId: 'love-q15', text: '非常必要，这样才能保持健康', value: 0, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 2, 'love-i': 2 } },
    { id: 'love-q15-d', questionId: 'love-q15', text: '必须有足够的个人空间', value: -1, dimensionScores: { 'love-p': -2, 'love-c': 0, 'love-r': 0, 'love-i': 2 } },
  ],
  'love-q16': [
    { id: 'love-q16-a', questionId: 'love-q16', text: '激情和心动的感觉', value: 2, dimensionScores: { 'love-p': 2, 'love-c': 0, 'love-r': -1, 'love-i': -1 } },
    { id: 'love-q16-b', questionId: 'love-q16', text: '对方开心我就开心', value: 1, dimensionScores: { 'love-p': 0, 'love-c': 2, 'love-r': 0, 'love-i': -1 } },
    { id: 'love-q16-c', questionId: 'love-q16', text: '彼此理解和成长', value: 0, dimensionScores: { 'love-p': 0, 'love-c': 1, 'love-r': 2, 'love-i': 1 } },
    { id: 'love-q16-d', questionId: 'love-q16', text: '保持独立但互相支持', value: -1, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 1, 'love-i': 2 } },
  ],
  'love-q17': [
    { id: 'love-q17-a', questionId: 'love-q17', text: '跟着感觉走', value: 2, dimensionScores: { 'love-p': 2, 'love-c': 1, 'love-r': -2, 'love-i': -1 } },
    { id: 'love-q17-b', questionId: 'love-q17', text: '考虑对方的感受', value: 1, dimensionScores: { 'love-p': 0, 'love-c': 2, 'love-r': 0, 'love-i': 0 } },
    { id: 'love-q17-c', questionId: 'love-q17', text: '权衡利弊后决定', value: 0, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 2, 'love-i': 1 } },
    { id: 'love-q17-d', questionId: 'love-q17', text: '尊重自己的内心', value: -1, dimensionScores: { 'love-p': 0, 'love-c': 0, 'love-r': 1, 'love-i': 2 } },
  ],
  'love-q18': [
    { id: 'love-q18-a', questionId: 'love-q18', text: '爱就要热烈，不留遗憾', value: 2, dimensionScores: { 'love-p': 2, 'love-c': 1, 'love-r': -1, 'love-i': -1 } },
    { id: 'love-q18-b', questionId: 'love-q18', text: '爱是细水长流的陪伴', value: 1, dimensionScores: { 'love-p': 0, 'love-c': 2, 'love-r': 1, 'love-i': 0 } },
    { id: 'love-q18-c', questionId: 'love-q18', text: '爱需要理性经营', value: 0, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 2, 'love-i': 1 } },
    { id: 'love-q18-d', questionId: 'love-q18', text: '爱是在一起也要做最好的自己', value: -1, dimensionScores: { 'love-p': -1, 'love-c': 0, 'love-r': 1, 'love-i': 2 } },
  ],
};

export const loveStyleResults: TestResult[] = [
  {
    id: 'love-passionate',
    testId: 'test-love-style',
    typeCode: 'PASSIONATE',
    typeName: '热情奔放型',
    summary: '爱就要轰轰烈烈，全身心投入',
    description: '你在爱情中充满激情，敢于表达，追求热烈的感情体验。你享受心动的感觉，愿意为爱付出，但有时可能过于情绪化。',
    strengths: ['表达直接热情', '敢爱敢恨', '让对方感受到强烈的爱意', '善于制造浪漫'],
    weaknesses: ['可能过于冲动', '情绪波动较大', '有时忽略理性考量', '容易受伤'],
    relationships: '你需要一个能回应你热情的伴侣，同时也需要学会在激情中保持一些理性。',
    career: '适合需要热情和创意的领域：艺术、表演、营销等。',
    growth: '学会在激情中保持一点冷静，给感情成长的时间。',
    minScore: 0,
    maxScore: 100,
  },
  {
    id: 'love-caring',
    testId: 'test-love-style',
    typeCode: 'CARING',
    typeName: '温柔体贴型',
    summary: '爱是细水长流的陪伴和照顾',
    description: '你在爱情中温柔体贴，善于照顾对方。你的爱体现在日常的细节中，是细水长流式的深情。',
    strengths: ['细心体贴', '善于照顾他人', '感情稳定持久', '让对方有安全感'],
    weaknesses: ['有时过度付出', '可能忽略自己的需求', '不够表达自己的感受', '容易委屈自己'],
    relationships: '你是理想伴侣的人选，但需要找一个也能照顾你的人。',
    career: '适合需要关怀和耐心的领域：教育、医疗、社工等。',
    growth: '学会表达自己的需求，你的感受同样重要。',
    minScore: 0,
    maxScore: 100,
  },
  {
    id: 'love-rational',
    testId: 'test-love-style',
    typeCode: 'RATIONAL',
    typeName: '理性冷静型',
    summary: '爱需要智慧经营，保持平衡',
    description: '你在爱情中保持理性，善于沟通和解决问题。你追求平等、互相尊重的关系，能够冷静处理感情问题。',
    strengths: ['善于沟通', '处理问题理性', '尊重边界', '保持平衡'],
    weaknesses: ['可能显得不够浪漫', '有时过度分析', '情感表达可能不够热烈', '显得有些疏离'],
    relationships: '你需要一个能和你进行深度交流、理解你的理性方式的伴侣。',
    career: '适合需要分析和沟通的领域：咨询、管理、法律等。',
    growth: '允许自己偶尔感性一些，浪漫不等于不理性。',
    minScore: 0,
    maxScore: 100,
  },
  {
    id: 'love-independent',
    testId: 'test-love-style',
    typeCode: 'INDEPENDENT',
    typeName: '独立自主型',
    summary: '爱是两个独立的人选择在一起',
    description: '你在爱情中保持独立，重视个人空间。你认为最好的爱情是两个人各自完整，选择在一起而不是因为需要。',
    strengths: ['保持自我', '尊重边界', '不依赖对方', '关系健康平衡'],
    weaknesses: ['可能显得不够亲密', '有时让对方感到距离感', '情感表达不够', '需要更多连接感'],
    relationships: '你需要一个同样独立、理解个人空间重要性的伴侣。',
    career: '适合需要独立性的领域：创业、自由职业、研究等。',
    growth: '学会在保持独立的同时，更深入地连接和表达爱。',
    minScore: 0,
    maxScore: 100,
  },
];

// 恋爱风格计算函数
export function calculateLoveStyleResult(answers: Record<string, string>): {
  typeCode: string;
  dimensionScores: Record<string, number>;
  result: TestResult;
} {
  const dimScores: Record<string, number> = {
    'love-p': 0,
    'love-c': 0,
    'love-r': 0,
    'love-i': 0,
  };

  loveStyleQuestions.forEach((q) => {
    const answeredOptionId = answers[q.id];
    if (!answeredOptionId) return;
    const opts = loveStyleOptions[q.id];
    if (!opts) return;
    const opt = opts.find(o => o.id === String(answeredOptionId));
    if (!opt) return;
    Object.entries(opt.dimensionScores).forEach(([dim, score]) => {
      dimScores[dim] = (dimScores[dim] || 0) + score;
    });
  });

  // 找出得分最高的风格
  let topType = 'PASSIONATE';
  let topScore = dimScores['love-p'];
  if (dimScores['love-c'] > topScore) {
    topScore = dimScores['love-c'];
    topType = 'CARING';
  }
  if (dimScores['love-r'] > topScore) {
    topScore = dimScores['love-r'];
    topType = 'RATIONAL';
  }
  if (dimScores['love-i'] > topScore) {
    topType = 'INDEPENDENT';
  }

  const result = loveStyleResults.find(r => r.typeCode === topType) || loveStyleResults[0];
  return { typeCode: topType, dimensionScores: dimScores, result };
}

// ==== 沟通风格测试 ====
export const communicationQuestions = [
  {
    id: 'comm-q1', testId: 'test-communication', order: 1,
    text: '当你有不同意见时，你倾向于...',
    options: [
      { id: 'comm-q1-a', text: '直接说出来，不留情面', scores: { DIRECT: 3, ASSERTIVE: 2 } },
      { id: 'comm-q1-b', text: '委婉表达，顾及感受', scores: { GENTLE: 3, INDIRECT: 1 } },
      { id: 'comm-q1-c', text: '先听对方说完', scores: { GENTLE: 1, PASSIVE: 2 } },
      { id: 'comm-q1-d', text: '不说，自己消化', scores: { PASSIVE: 3, INDIRECT: 2 } },
    ],
  },
  {
    id: 'comm-q2', testId: 'test-communication', order: 2,
    text: '别人说话时，你通常会...',
    options: [
      { id: 'comm-q2-a', text: '积极回应，保持互动', scores: { DIRECT: 2, ASSERTIVE: 1 } },
      { id: 'comm-q2-b', text: '认真倾听，适时插话', scores: { GENTLE: 2, INDIRECT: 0 } },
      { id: 'comm-q2-c', text: '听的同时思考自己要说什么', scores: { INDIRECT: 2, DIRECT: 1 } },
      { id: 'comm-q2-d', text: '容易走神或不知如何回应', scores: { PASSIVE: 2, GENTLE: 0 } },
    ],
  },
  {
    id: 'comm-q3', testId: 'test-communication', order: 3,
    text: '面对冲突时，你的沟通方式是...',
    options: [
      { id: 'comm-q3-a', text: '直面问题，说清楚', scores: { DIRECT: 3, ASSERTIVE: 2 } },
      { id: 'comm-q3-b', text: '先缓和情绪，再谈问题', scores: { GENTLE: 3, INDIRECT: 1 } },
      { id: 'comm-q3-c', text: '选择性表达', scores: { INDIRECT: 2, PASSIVE: 1 } },
      { id: 'comm-q3-d', text: '回避或沉默', scores: { PASSIVE: 3, GENTLE: 1 } },
    ],
  },
  {
    id: 'comm-q4', testId: 'test-communication', order: 4,
    text: '你需要拒绝别人时，你会...',
    options: [
      { id: 'comm-q4-a', text: '直接说"不"，给明确理由', scores: { DIRECT: 3, ASSERTIVE: 2 } },
      { id: 'comm-q4-b', text: '委婉拒绝，尽量不伤感情', scores: { GENTLE: 2, INDIRECT: 2 } },
      { id: 'comm-q4-c', text: '找借口推脱', scores: { INDIRECT: 3, PASSIVE: 1 } },
      { id: 'comm-q4-d', text: '很难拒绝，最后可能答应', scores: { PASSIVE: 3, GENTLE: 2 } },
    ],
  },
  {
    id: 'comm-q5', testId: 'test-communication', order: 5,
    text: '你更喜欢哪种沟通环境？',
    options: [
      { id: 'comm-q5-a', text: '可以直言不讳的环境', scores: { DIRECT: 2, ASSERTIVE: 2 } },
      { id: 'comm-q5-b', text: '大家互相尊重的氛围', scores: { GENTLE: 2, ASSERTIVE: 1 } },
      { id: 'comm-q5-c', text: '不用直接面对的情境', scores: { INDIRECT: 2, PASSIVE: 1 } },
      { id: 'comm-q5-d', text: '不用主动发言的环境', scores: { PASSIVE: 2, INDIRECT: 1 } },
    ],
  },
];

export const communicationResults = [
  {
    id: 'comm-direct', testId: 'test-communication', typeCode: 'DIRECT',
    typeName: '直接表达型',
    summary: '说话直截了当，不喜欢绕弯子',
    description: '你的沟通风格直接明确，喜欢有话直说。你重视效率和真实性，但有时可能让对方感到被冒犯。',
    strengths: ['表达清晰', '效率高', '不会让人猜', '问题解决快'],
    weaknesses: ['可能显得不够圆滑', '有时语气过硬', '可能忽略对方感受'],
    relationships: '你需要一个能接受直接沟通的伴侣，同时可以学习稍微柔和的表达方式。',
    career: '适合需要明确表达的岗位：项目管理、技术负责、法务等。',
    growth: '在直截了当的同时，加入一点点温度，效果会更好。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'comm-gentle', testId: 'test-communication', typeCode: 'GENTLE',
    typeName: '温和体贴型',
    summary: '善于照顾他人感受，表达委婉',
    description: '你的沟通风格温和体贴，善于在表达自我的同时顾及他人感受。你创造和谐的沟通氛围。',
    strengths: ['善于照顾感受', '人际和谐', '有同理心', '让人舒服'],
    weaknesses: ['有时不够明确', '可能过于顾虑', '有时难以表达真实想法'],
    relationships: '你是很好的倾听者，但也需要练习表达自己的真实需求。',
    career: '适合需要人际协调的岗位：人力资源、客户服务、心理咨询等。',
    growth: '在照顾他人感受的同时，记得自己的需求也值得表达。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'comm-indirect', testId: 'test-communication', typeCode: 'INDIRECT',
    typeName: '委婉暗示型',
    summary: '习惯暗示和间接表达',
    description: '你习惯用委婉和暗示的方式表达，担心直接表达会伤害关系。你内心有很多想法，但表达出来时会加工。',
    strengths: ['细腻敏感', '考虑周全', '不轻易冒犯', '善于察言观色'],
    weaknesses: ['表达不够明确', '可能被误解', '自己想法难以传达', '容易累积情绪'],
    relationships: '在关系中你可能期待对方读懂你的暗示，但这会让沟通变复杂。',
    career: '适合需要敏感性理解的工作：创意、策划、人际关系密集型岗位。',
    growth: '尝试更直接表达一次，你会发现事情往往没有想象的那么糟。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'comm-passive', testId: 'test-communication', typeCode: 'PASSIVE',
    typeName: '回避沉默型',
    summary: '倾向于回避或沉默，不主动表达',
    description: '你在沟通中倾向于回避或沉默，害怕表达会带来冲突或被拒绝。你内心有很多话，但很难说出口。',
    strengths: ['不轻易伤害他人', '善于倾听', '内心感受深刻'],
    weaknesses: ['需求难以被满足', '可能积累怨恨', '关系中的沉默者', '容易被动接受'],
    relationships: '你在关系中是安静的观察者，但沉默也会让对方感到隔阂。',
    career: '适合不需要太多表达的岗位：研究、数据分析、后台支持等。',
    growth: '从小事开始表达，每一次开口都是对自己的信任。',
    minScore: 0, maxScore: 100,
  },
];

// ==== 冲突处理测试 ====
export const conflictQuestions = [
  {
    id: 'conf-q1', testId: 'test-conflict', order: 1,
    text: '当冲突发生时，你的第一反应是...',
    options: [
      { id: 'conf-q1-a', text: '直接面对，必须说清楚', scores: { COMPETE: 3, COLLABORATE: 1 } },
      { id: 'conf-q1-b', text: '寻求双方都能接受的方案', scores: { COLLABORATE: 3, COMPROMISE: 1 } },
      { id: 'conf-q1-c', text: '各让一步', scores: { COMPROMISE: 3, ACCOMMODATE: 1 } },
      { id: 'conf-q1-d', text: '退一步，维持和平', scores: { ACCOMMODATE: 2, AVOID: 2 } },
      { id: 'conf-q1-e', text: '暂时离开，等冷静再说', scores: { AVOID: 3 } },
    ],
  },
  {
    id: 'conf-q2', testId: 'test-conflict', order: 2,
    text: '你更在意冲突中的...',
    options: [
      { id: 'conf-q2-a', text: '自己的立场被理解', scores: { COMPETE: 2, COLLABORATE: 1 } },
      { id: 'conf-q2-b', text: '双方都满意', scores: { COLLABORATE: 2, COMPROMISE: 1 } },
      { id: 'conf-q2-c', text: '快速结束冲突', scores: { COMPROMISE: 2, AVOID: 1 } },
      { id: 'conf-q2-d', text: '对方开心就好', scores: { ACCOMMODATE: 3 } },
      { id: 'conf-q2-e', text: '不发生正面冲突', scores: { AVOID: 3 } },
    ],
  },
  {
    id: 'conf-q3', testId: 'test-conflict', order: 3,
    text: '冲突后，你通常会...',
    options: [
      { id: 'conf-q3-a', text: '反思自己哪里做得不好', scores: { ACCOMMODATE: 2, COLLABORATE: 1 } },
      { id: 'conf-q3-b', text: '思考双方的问题', scores: { COLLABORATE: 2, COMPROMISE: 1 } },
      { id: 'conf-q3-c', text: '分析自己的得失', scores: { COMPETE: 2, COMPROMISE: 1 } },
      { id: 'conf-q3-d', text: '想快点翻篇', scores: { AVOID: 2, ACCOMMODATE: 1 } },
      { id: 'conf-q3-e', text: '假装没发生过', scores: { AVOID: 3 } },
    ],
  },
];

export const conflictResults = [
  {
    id: 'conf-compete', testId: 'test-conflict', typeCode: 'COMPETE',
    typeName: '竞争型',
    summary: '追求自己的目标，强调立场',
    description: '你在冲突中追求自己的目标，强调自己的立场。你相信直接面对是解决问题的最好方式。',
    strengths: ['立场明确', '目标坚定', '行动果断'],
    weaknesses: ['可能显得过于强势', '忽略他人感受', '关系受损'],
    relationships: '需要学习在冲突中保持对关系的在意，胜利不等于失去连接。',
    career: '适合需要决断力的岗位：领导、销售、谈判。',
    growth: '有时退一步，关系比胜负更重要。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'conf-collaborate', testId: 'test-conflict', typeCode: 'COLLABORATE',
    typeName: '协作型',
    summary: '寻求双方都满意的方案',
    description: '你在冲突中追求双赢，相信通过深度沟通可以找到双方都满意的解决方案。',
    strengths: ['寻求共赢', '深度沟通', '关系维护好'],
    weaknesses: ['耗时较多', '有时难以实现', '可能过度理想化'],
    relationships: '你是理想的关系维护者，但也需要接受不是所有冲突都能完美解决。',
    career: '适合需要协调多方利益的岗位：项目管理、咨询、HR。',
    growth: '有时接受不完美也是一种智慧。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'conf-compromise', testId: 'test-conflict', typeCode: 'COMPROMISE',
    typeName: '妥协型',
    summary: '各让一步，快速解决',
    description: '你在冲突中愿意各让一步，追求快速解决问题的中间方案。',
    strengths: ['效率高', '实用主义', '灵活性'],
    weaknesses: ['可能双方都不完全满意', '有时牺牲过多'],
    relationships: '你是务实的冲突处理者，关系能快速恢复。',
    career: '适合需要快速决策的岗位：运营、执行、协调。',
    growth: '有时候值得花更多时间追求更好的解决方案。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'conf-accommodate', testId: 'test-conflict', typeCode: 'ACCOMMODATE',
    typeName: '迁就型',
    summary: '为关系让步，维持和谐',
    description: '你在冲突中愿意让步，优先考虑关系和对方的感受。',
    strengths: ['关系导向', '善解人意', '维护和谐'],
    weaknesses: ['自己的需求被忽略', '可能积累委屈'],
    relationships: '你是温和的伴侣，但也需要练习表达自己的真实想法。',
    career: '适合服务导向的岗位：客服、支持、行政。',
    growth: '你的需求同样重要，学会平衡。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'conf-avoid', testId: 'test-conflict', typeCode: 'AVOID',
    typeName: '回避型',
    summary: '暂时或永久回避冲突',
    description: '你倾向于回避冲突，通过推迟、转移或完全回避来处理矛盾。',
    strengths: ['避免冲突升级', '给自己时间冷静', '有时确实有用'],
    weaknesses: ['问题可能积累', '关系中的沉默者', '可能错过解决机会'],
    relationships: '回避可以暂时保护你，但长期会让关系疏离。',
    career: '适合不需要频繁应对冲突的岗位。',
    growth: '有些事情不解决会一直存在，尝试面对一次。',
    minScore: 0, maxScore: 100,
  },
];

// ==== 共情力测试 ====
export const empathyQuestions = [
  {
    id: 'emp-q1', testId: 'test-empathy', order: 1,
    text: '当朋友情绪低落时，你能准确感受到TA的感受吗？',
    options: [
      { id: 'emp-q1-a', text: '能，甚至会被情绪感染', scores: { AFFECTIVE: 3, COGNITIVE: 1 } },
      { id: 'emp-q1-b', text: '能理解，但不会被影响', scores: { COGNITIVE: 3, AFFECTIVE: 0 } },
      { id: 'emp-q1-c', text: '有时能，有时不能', scores: { BALANCED: 2 } },
      { id: 'emp-q1-d', text: '较难感知', scores: { LOW: 2 } },
    ],
  },
  {
    id: 'emp-q2', testId: 'test-empathy', order: 2,
    text: '在群体中，你能快速识别出谁的情绪不太对吗？',
    options: [
      { id: 'emp-q2-a', text: '很快就能发现', scores: { AFFECTIVE: 2, COGNITIVE: 1 } },
      { id: 'emp-q2-b', text: '需要一些观察', scores: { COGNITIVE: 2, BALANCED: 1 } },
      { id: 'emp-q2-c', text: '需要明显信号才能发现', scores: { BALANCED: 1, LOW: 1 } },
      { id: 'emp-q2-d', text: '往往发现不了', scores: { LOW: 2 } },
    ],
  },
  {
    id: 'emp-q3', testId: 'test-empathy', order: 3,
    text: '当看到电影中的角色哭泣时，你会...',
    options: [
      { id: 'emp-q3-a', text: '跟着难过，甚至也会哭', scores: { AFFECTIVE: 3 } },
      { id: 'emp-q3-b', text: '理解TA的处境和情绪', scores: { COGNITIVE: 2, BALANCED: 1 } },
      { id: 'emp-q3-c', text: '被触动，但不会持续', scores: { BALANCED: 2 } },
      { id: 'emp-q3-d', text: '只是看剧情，不太会被影响', scores: { LOW: 2 } },
    ],
  },
];

export const empathyResults = [
  {
    id: 'emp-affective', testId: 'test-empathy', typeCode: 'AFFECTIVE',
    typeName: '情感共鸣型',
    summary: '能深度感受到他人的情绪',
    description: '你有很强的情感共鸣能力，能直接感受到他人的情绪。这是一种天赋，但也可能让你在情绪上容易疲惫。',
    strengths: ['深度共情', '让他人感到被理解', '真诚的关怀'],
    weaknesses: ['容易情绪疲劳', '边界可能模糊', '可能过度承担'],
    relationships: '你是最好的倾听者，但也需要保护自己的能量。',
    career: '适合需要深度关怀的岗位：心理咨询、医疗、社工。',
    growth: '建立情绪边界，共情不等于承担。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'emp-cognitive', testId: 'test-empathy', typeCode: 'COGNITIVE',
    typeName: '认知理解型',
    summary: '善于理解他人的处境和想法',
    description: '你通过理解他人的处境和想法来共情，能够保持一定的情感距离，同时给予适当的关怀。',
    strengths: ['理性共情', '不被情绪淹没', '有效帮助'],
    weaknesses: ['可能显得不够热情', '有时被误解为冷淡'],
    relationships: '你能提供稳定的支持，同时也需要让对方感受到你的关心。',
    career: '适合需要理性理解的岗位：咨询、管理、教育。',
    growth: '偶尔表达一些情感温度，会让关系更紧密。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'emp-balanced', testId: 'test-empathy', typeCode: 'BALANCED',
    typeName: '平衡型',
    summary: '在情感和理性之间保持平衡',
    description: '你能在情感共鸣和理性理解之间保持平衡，能共情但不会被淹没。',
    strengths: ['平衡共情', '适应性强', '灵活应对'],
    weaknesses: ['有时难以确定自己的风格'],
    relationships: '你是灵活的倾听者，能根据情况调整共情方式。',
    career: '适合需要多面共情的岗位。',
    growth: '继续保持这种平衡。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'emp-low', testId: 'test-empathy', typeCode: 'LOW',
    typeName: '共情待提升型',
    summary: '共情能力有提升空间',
    description: '你可能不太容易感知他人的情绪，但这不意味着你不在乎。共情是可以练习的能力。',
    strengths: ['理性独立', '不容易被情绪影响'],
    weaknesses: ['可能误解他人', '关系中的疏离感'],
    relationships: '可以尝试更多主动询问对方的感受。',
    career: '适合需要理性判断的岗位：技术、分析、逻辑密集型。',
    growth: '尝试每周练习一次"站在对方角度思考"。',
    minScore: 0, maxScore: 100,
  },
];

// ==== 表达风格测试 ====
export const expressionQuestions = [
  {
    id: 'expr-q1', testId: 'test-expression', order: 1,
    text: '当你有不同意见时，你倾向于...',
    options: [
      { id: 'expr-q1-a', text: '直接说出来，不留情面', scores: { DIRECT: 3, ASSERTIVE: 2 } },
      { id: 'expr-q1-b', text: '委婉表达，顾及感受', scores: { GENTLE: 3, INDIRECT: 1 } },
      { id: 'expr-q1-c', text: '先听对方说完再表达', scores: { GENTLE: 1, PASSIVE: 2 } },
      { id: 'expr-q1-d', text: '不说，自己消化', scores: { PASSIVE: 3, INDIRECT: 2 } },
    ],
  },
  {
    id: 'expr-q2', testId: 'test-expression', order: 2,
    text: '在表达观点时，你更注重...',
    options: [
      { id: 'expr-q2-a', text: '准确传达意思', scores: { DIRECT: 2, VERBAL: 1 } },
      { id: 'expr-q2-b', text: '照顾对方感受', scores: { GENTLE: 2, INDIRECT: 1 } },
      { id: 'expr-q2-c', text: '不引起冲突', scores: { PASSIVE: 2, GENTLE: 1 } },
      { id: 'expr-q2-d', text: '选择合适的时机', scores: { INDIRECT: 2, GENTLE: 1 } },
    ],
  },
  {
    id: 'expr-q3', testId: 'test-expression', order: 3,
    text: '你更擅长哪种表达方式？',
    options: [
      { id: 'expr-q3-a', text: '口头表达，即兴发言', scores: { VERBAL: 3, DIRECT: 1 } },
      { id: 'expr-q3-b', text: '书面表达，深思熟虑', scores: { WRITTEN: 3, INDIRECT: 1 } },
      { id: 'expr-q3-c', text: '两者都可以', scores: { BALANCED: 2 } },
      { id: 'expr-q3-d', text: '都不太擅长', scores: { PASSIVE: 2 } },
    ],
  },
  {
    id: 'expr-q4', testId: 'test-expression', order: 4,
    text: '当需要拒绝别人时，你会...',
    options: [
      { id: 'expr-q4-a', text: '直接说"不"', scores: { DIRECT: 3, ASSERTIVE: 2 } },
      { id: 'expr-q4-b', text: '委婉拒绝', scores: { GENTLE: 2, INDIRECT: 2 } },
      { id: 'expr-q4-c', text: '找借口推脱', scores: { INDIRECT: 3, PASSIVE: 1 } },
      { id: 'expr-q4-d', text: '很难拒绝', scores: { PASSIVE: 3, GENTLE: 1 } },
    ],
  },
  {
    id: 'expr-q5', testId: 'test-expression', order: 5,
    text: '你更喜欢的人际沟通环境是...',
    options: [
      { id: 'expr-q5-a', text: '可以直言不讳', scores: { DIRECT: 2, ASSERTIVE: 2 } },
      { id: 'expr-q5-b', text: '大家互相尊重', scores: { GENTLE: 2, ASSERTIVE: 1 } },
      { id: 'expr-q5-c', text: '不用直接面对', scores: { WRITTEN: 2, INDIRECT: 1 } },
      { id: 'expr-q5-d', text: '不用主动发言', scores: { PASSIVE: 2 } },
    ],
  },
  {
    id: 'expr-q6', testId: 'test-expression', order: 6,
    text: '当你开心时，你会...',
    options: [
      { id: 'expr-q6-a', text: '立即分享给身边人', scores: { VERBAL: 2, DIRECT: 2 } },
      { id: 'expr-q6-b', text: '发朋友圈或社交平台', scores: { WRITTEN: 2, INDIRECT: 1 } },
      { id: 'expr-q6-c', text: '告诉最亲近的人', scores: { GENTLE: 1, VERBAL: 1 } },
      { id: 'expr-q6-d', text: '自己默默开心', scores: { PASSIVE: 2, INDIRECT: 1 } },
    ],
  },
  {
    id: 'expr-q7', testId: 'test-expression', order: 7,
    text: '当你不满时，你更可能...',
    options: [
      { id: 'expr-q7-a', text: '直接说出来', scores: { DIRECT: 3, ASSERTIVE: 1 } },
      { id: 'expr-q7-b', text: '委婉暗示', scores: { INDIRECT: 2, GENTLE: 1 } },
      { id: 'expr-q7-c', text: '写在日记或社交媒体', scores: { WRITTEN: 2, INDIRECT: 1 } },
      { id: 'expr-q7-d', text: '憋在心里', scores: { PASSIVE: 3 } },
    ],
  },
  {
    id: 'expr-q8', testId: 'test-expression', order: 8,
    text: '写长篇消息时，你会...',
    options: [
      { id: 'expr-q8-a', text: '直接写核心内容', scores: { DIRECT: 2, WRITTEN: 1 } },
      { id: 'expr-q8-b', text: '先铺垫背景', scores: { INDIRECT: 2, WRITTEN: 1 } },
      { id: 'expr-q8-c', text: '反复修改', scores: { WRITTEN: 3, GENTLE: 1 } },
      { id: 'expr-q8-d', text: '能不发就不发', scores: { PASSIVE: 2 } },
    ],
  },
  {
    id: 'expr-q9', testId: 'test-expression', order: 9,
    text: '面对冲突时，你的表达方式是...',
    options: [
      { id: 'expr-q9-a', text: '直面问题，说清楚', scores: { DIRECT: 3, ASSERTIVE: 2 } },
      { id: 'expr-q9-b', text: '先缓和情绪再谈', scores: { GENTLE: 3, INDIRECT: 1 } },
      { id: 'expr-q9-c', text: '选择性表达', scores: { INDIRECT: 2, PASSIVE: 1 } },
      { id: 'expr-q9-d', text: '回避沉默', scores: { PASSIVE: 3, GENTLE: 1 } },
    ],
  },
  {
    id: 'expr-q10', testId: 'test-expression', order: 10,
    text: '你在表达感情时更倾向于...',
    options: [
      { id: 'expr-q10-a', text: '直接说"我爱你"', scores: { DIRECT: 3, VERBAL: 1 } },
      { id: 'expr-q10-b', text: '用行动表示', scores: { INDIRECT: 2, GENTLE: 1 } },
      { id: 'expr-q10-c', text: '写情书或信息', scores: { WRITTEN: 2, GENTLE: 1 } },
      { id: 'expr-q10-d', text: '不太好意思说', scores: { PASSIVE: 2, INDIRECT: 1 } },
    ],
  },
  {
    id: 'expr-q11', testId: 'test-expression', order: 11,
    text: '公开演讲时，你的状态是...',
    options: [
      { id: 'expr-q11-a', text: '很享受，能发挥好', scores: { VERBAL: 3, DIRECT: 1 } },
      { id: 'expr-q11-b', text: '紧张但能完成', scores: { VERBAL: 1, ASSERTIVE: 1 } },
      { id: 'expr-q11-c', text: '需要充分准备', scores: { WRITTEN: 1, INDIRECT: 1 } },
      { id: 'expr-q11-d', text: '尽量避免', scores: { PASSIVE: 2 } },
    ],
  },
  {
    id: 'expr-q12', testId: 'test-expression', order: 12,
    text: '你的幽默风格倾向于...',
    options: [
      { id: 'expr-q12-a', text: '直接开玩笑，活跃气氛', scores: { DIRECT: 2, VERBAL: 2 } },
      { id: 'expr-q12-b', text: '机智幽默，点到为止', scores: { GENTLE: 2, INDIRECT: 1 } },
      { id: 'expr-q12-c', text: '文字段子或表情包', scores: { WRITTEN: 2, INDIRECT: 1 } },
      { id: 'expr-q12-d', text: '较少开玩笑', scores: { PASSIVE: 2 } },
    ],
  },
  {
    id: 'expr-q13', testId: 'test-expression', order: 13,
    text: '当你需要帮助时，你会...',
    options: [
      { id: 'expr-q13-a', text: '直接开口请求', scores: { DIRECT: 3, ASSERTIVE: 1 } },
      { id: 'expr-q13-b', text: '委婉暗示', scores: { INDIRECT: 2, GENTLE: 1 } },
      { id: 'expr-q13-c', text: '先写好怎么说', scores: { WRITTEN: 1, INDIRECT: 1 } },
      { id: 'expr-q13-d', text: '尽量自己解决', scores: { PASSIVE: 2 } },
    ],
  },
  {
    id: 'expr-q14', testId: 'test-expression', order: 14,
    text: '你更喜欢哪种反馈方式？',
    options: [
      { id: 'expr-q14-a', text: '当面直接说', scores: { DIRECT: 2, VERBAL: 2 } },
      { id: 'expr-q14-b', text: '私下委婉提', scores: { GENTLE: 2, INDIRECT: 1 } },
      { id: 'expr-q14-c', text: '写邮件或消息', scores: { WRITTEN: 2, INDIRECT: 1 } },
      { id: 'expr-q14-d', text: '不太想给负面反馈', scores: { PASSIVE: 2, GENTLE: 1 } },
    ],
  },
  {
    id: 'expr-q15', testId: 'test-expression', order: 15,
    text: '总体上，你认为自己的表达风格是...',
    options: [
      { id: 'expr-q15-a', text: '直截了当型', scores: { DIRECT: 3, ASSERTIVE: 2 } },
      { id: 'expr-q15-b', text: '委婉含蓄型', scores: { INDIRECT: 2, GENTLE: 2 } },
      { id: 'expr-q15-c', text: '善于倾听型', scores: { GENTLE: 2, PASSIVE: 1 } },
      { id: 'expr-q15-d', text: '不善表达型', scores: { PASSIVE: 3 } },
    ],
  },
];

export const expressionResults = [
  {
    id: 'expr-direct', testId: 'test-expression', typeCode: 'DIRECT',
    typeName: '直截了当型',
    summary: '说话直截了当，不喜欢绕弯子',
    description: '你的表达风格直接明确，喜欢有话直说。你重视效率和真实性，但有时可能让对方感到被冒犯。',
    strengths: ['表达清晰', '效率高', '不会让人猜', '问题解决快'],
    weaknesses: ['可能显得不够圆滑', '有时语气过硬', '可能忽略对方感受'],
    relationships: '你需要一个能接受直接沟通的伴侣，同时可以学习稍微柔和的表达方式。',
    career: '适合需要明确表达的岗位：项目管理、技术负责、法务等。',
    growth: '在直截了当的同时，加入一点温度，效果会更好。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'expr-gentle', testId: 'test-expression', typeCode: 'GENTLE',
    typeName: '温和体贴型',
    summary: '善于照顾他人感受，表达委婉',
    description: '你的表达风格温和体贴，善于在表达自我的同时顾及他人感受。你创造和谐的沟通氛围。',
    strengths: ['善于照顾感受', '人际和谐', '有同理心', '让人舒服'],
    weaknesses: ['有时不够明确', '可能过于顾虑', '有时难以表达真实想法'],
    relationships: '你是很好的倾听者，但也需要练习表达自己的真实需求。',
    career: '适合需要人际协调的岗位：人力资源、客户服务、心理咨询等。',
    growth: '在照顾他人感受的同时，记得自己的需求也值得表达。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'expr-indirect', testId: 'test-expression', typeCode: 'INDIRECT',
    typeName: '委婉含蓄型',
    summary: '习惯暗示和间接表达',
    description: '你习惯用委婉和暗示的方式表达，担心直接表达会伤害关系。你内心有很多想法，但表达出来时会加工。',
    strengths: ['细腻敏感', '考虑周全', '不轻易冒犯', '善于察言观色'],
    weaknesses: ['表达不够明确', '可能被误解', '自己想法难以传达', '容易累积情绪'],
    relationships: '在关系中你可能期待对方读懂你的暗示，但这会让沟通变复杂。',
    career: '适合需要敏感性理解的工作：创意、策划、人际关系密集型岗位。',
    growth: '尝试更直接表达一次，你会发现事情往往没有想象的那么糟。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'expr-passive', testId: 'test-expression', typeCode: 'PASSIVE',
    typeName: '回避沉默型',
    summary: '倾向于回避或沉默，不主动表达',
    description: '你在沟通中倾向于回避或沉默，害怕表达会带来冲突或被拒绝。你内心有很多话，但很难说出口。',
    strengths: ['不轻易伤害他人', '善于倾听', '内心感受深刻'],
    weaknesses: ['需求难以被满足', '可能积累怨恨', '关系中的沉默者', '容易被动接受'],
    relationships: '你在关系中是安静的观察者，但沉默也会让对方感到隔阂。',
    career: '适合不需要太多表达的岗位：研究、数据分析、后台支持等。',
    growth: '从小事开始表达，每一次开口都是对自己的信任。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'expr-verbal', testId: 'test-expression', typeCode: 'VERBAL',
    typeName: '口语表达型',
    summary: '擅长口头表达，即兴发言能力强',
    description: '你擅长口语表达，能够清晰地口头传达自己的想法。你在对话中反应快，善于即时回应。',
    strengths: ['口头表达能力强', '反应敏捷', '善于互动', '临场发挥好'],
    weaknesses: ['可能不够深思熟虑', '有时说得太多', '书面表达可能较弱'],
    relationships: '你是活跃的交流者，在关系中能够快速回应。',
    career: '适合需要口语表达的岗位：销售、演讲、主持、培训。',
    growth: '偶尔慢下来，给自己思考的空间，表达会更精准。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'expr-written', testId: 'test-expression', typeCode: 'WRITTEN',
    typeName: '文字表达型',
    summary: '擅长书面表达，文字组织能力强',
    description: '你擅长书面表达，能够通过文字清晰地传达想法。你善于组织和表达复杂的内容。',
    strengths: ['文字表达清晰', '逻辑性强', '深度思考', '表达完整'],
    weaknesses: ['即时表达可能紧张', '对演讲可能不适', '需要时间准备'],
    relationships: '你通过文字更能表达真实的自己，可以多使用写信或消息。',
    career: '适合需要文字表达的岗位：写作、编辑、文案、策划。',
    growth: '尝试更多口头表达的机会，你可以做得很好。',
    minScore: 0, maxScore: 100,
  },
];

// ==== 信任模式测试 ====
export const trustQuestions = [
  {
    id: 'trust-q1', testId: 'test-trust', order: 1,
    text: '当有人对你表示友好时，你的第一反应是...',
    options: [
      { id: 'trust-q1-a', text: '相信对方是真诚的', scores: { TRUSTING: 3 } },
      { id: 'trust-q1-b', text: '先观察再判断', scores: { CAUTIOUS: 2, BALANCED: 1 } },
      { id: 'trust-q1-c', text: '怀疑对方有目的', scores: { GUARDED: 2, SKEPTICAL: 1 } },
      { id: 'trust-q1-d', text: '难以相信他人', scores: { GUARDED: 3 } },
    ],
  },
  {
    id: 'trust-q2', testId: 'test-trust', order: 2,
    text: '你对"信任需要时间建立"的看法是...',
    options: [
      { id: 'trust-q2-a', text: '同意，但愿意给机会', scores: { TRUSTING: 1, BALANCED: 1 } },
      { id: 'trust-q2-b', text: '完全同意，很谨慎', scores: { CAUTIOUS: 2 } },
      { id: 'trust-q2-c', text: '看情况，因人而异', scores: { BALANCED: 2 } },
      { id: 'trust-q2-d', text: '信任很难建立', scores: { GUARDED: 2, SKEPTICAL: 1 } },
    ],
  },
  {
    id: 'trust-q3', testId: 'test-trust', order: 3,
    text: '在新的关系中，你通常...',
    options: [
      { id: 'trust-q3-a', text: '先给予信任', scores: { TRUSTING: 3 } },
      { id: 'trust-q3-b', text: '慢慢了解再信任', scores: { CAUTIOUS: 2, BALANCED: 1 } },
      { id: 'trust-q3-c', text: '保持适当距离', scores: { GUARDED: 2 } },
      { id: 'trust-q3-d', text: '很难主动信任', scores: { SKEPTICAL: 2, GUARDED: 1 } },
    ],
  },
  {
    id: 'trust-q4', testId: 'test-trust', order: 4,
    text: '当别人让你失望时，你会...',
    options: [
      { id: 'trust-q4-a', text: '愿意给第二次机会', scores: { TRUSTING: 2, FORGIVING: 1 } },
      { id: 'trust-q4-b', text: '看情况决定', scores: { BALANCED: 2, CAUTIOUS: 1 } },
      { id: 'trust-q4-c', text: '很难再信任', scores: { GUARDED: 2, SKEPTICAL: 1 } },
      { id: 'trust-q4-d', text: '基本不再信任', scores: { GUARDED: 3 } },
    ],
  },
  {
    id: 'trust-q5', testId: 'test-trust', order: 5,
    text: '你对"人性本善"的看法是...',
    options: [
      { id: 'trust-q5-a', text: '基本相信', scores: { TRUSTING: 3 } },
      { id: 'trust-q5-b', text: '部分相信', scores: { BALANCED: 2 } },
      { id: 'trust-q5-c', text: '不太确定', scores: { CAUTIOUS: 1, SKEPTICAL: 1 } },
      { id: 'trust-q5-d', text: '不相信', scores: { SKEPTICAL: 2, GUARDED: 1 } },
    ],
  },
  {
    id: 'trust-q6', testId: 'test-trust', order: 6,
    text: '分享秘密时，你会...',
    options: [
      { id: 'trust-q6-a', text: '相对容易信任朋友', scores: { TRUSTING: 2 } },
      { id: 'trust-q6-b', text: '只告诉很亲近的人', scores: { CAUTIOUS: 2, BALANCED: 1 } },
      { id: 'trust-q6-c', text: '非常谨慎选择', scores: { GUARDED: 2 } },
      { id: 'trust-q6-d', text: '几乎不分享秘密', scores: { GUARDED: 3 } },
    ],
  },
  {
    id: 'trust-q7', testId: 'test-trust', order: 7,
    text: '当你需要帮助时，你会...',
    options: [
      { id: 'trust-q7-a', text: '愿意寻求帮助', scores: { TRUSTING: 2, BALANCED: 1 } },
      { id: 'trust-q7-b', text: '考虑后才开口', scores: { CAUTIOUS: 1, BALANCED: 1 } },
      { id: 'trust-q7-c', text: '尽量自己解决', scores: { GUARDED: 1, SKEPTICAL: 1 } },
      { id: 'trust-q7-d', text: '不喜欢求助', scores: { GUARDED: 2, SKEPTICAL: 1 } },
    ],
  },
  {
    id: 'trust-q8', testId: 'test-trust', order: 8,
    text: '你对伴侣/朋友的社交活动...',
    options: [
      { id: 'trust-q8-a', text: '完全信任', scores: { TRUSTING: 3 } },
      { id: 'trust-q8-b', text: '基本信任但了解情况', scores: { BALANCED: 2 } },
      { id: 'trust-q8-c', text: '有些担心', scores: { CAUTIOUS: 2, SKEPTICAL: 1 } },
      { id: 'trust-q8-d', text: '容易怀疑', scores: { SKEPTICAL: 2, GUARDED: 1 } },
    ],
  },
  {
    id: 'trust-q9', testId: 'test-trust', order: 9,
    text: '当别人夸奖你时，你倾向于...',
    options: [
      { id: 'trust-q9-a', text: '相信并接受', scores: { TRUSTING: 2, BALANCED: 1 } },
      { id: 'trust-q9-b', text: '怀疑是否有目的', scores: { SKEPTICAL: 2, CAUTIOUS: 1 } },
      { id: 'trust-q9-c', text: '不确定是否真诚', scores: { SKEPTICAL: 2, GUARDED: 1 } },
      { id: 'trust-q9-d', text: '不太相信', scores: { GUARDED: 2, SKEPTICAL: 1 } },
    ],
  },
  {
    id: 'trust-q10', testId: 'test-trust', order: 10,
    text: '你过去的信任经历...',
    options: [
      { id: 'trust-q10-a', text: '大多是正面的', scores: { TRUSTING: 3 } },
      { id: 'trust-q10-b', text: '好坏参半', scores: { BALANCED: 2, CAUTIOUS: 1 } },
      { id: 'trust-q10-c', text: '有些负面经历', scores: { CAUTIOUS: 2, SKEPTICAL: 1 } },
      { id: 'trust-q10-d', text: '较多被辜负', scores: { GUARDED: 3, SKEPTICAL: 1 } },
    ],
  },
  {
    id: 'trust-q11', testId: 'test-trust', order: 11,
    text: '对于他人的承诺，你...',
    options: [
      { id: 'trust-q11-a', text: '通常相信会兑现', scores: { TRUSTING: 2 } },
      { id: 'trust-q11-b', text: '听其言观其行', scores: { BALANCED: 2, CAUTIOUS: 1 } },
      { id: 'trust-q11-c', text: '持保留态度', scores: { CAUTIOUS: 1, SKEPTICAL: 2 } },
      { id: 'trust-q11-d', text: '不太相信承诺', scores: { SKEPTICAL: 3, GUARDED: 1 } },
    ],
  },
  {
    id: 'trust-q12', testId: 'test-trust', order: 12,
    text: '在工作中，你对同事的态度是...',
    options: [
      { id: 'trust-q12-a', text: '愿意合作信任', scores: { TRUSTING: 2, BALANCED: 1 } },
      { id: 'trust-q12-b', text: '保持专业关系', scores: { BALANCED: 2, CAUTIOUS: 1 } },
      { id: 'trust-q12-c', text: '保持一定距离', scores: { CAUTIOUS: 2, GUARDED: 1 } },
      { id: 'trust-q12-d', text: '不太信任', scores: { GUARDED: 2, SKEPTICAL: 1 } },
    ],
  },
];

export const trustResults = [
  {
    id: 'trust-trusting', testId: 'test-trust', typeCode: 'TRUSTING',
    typeName: '开放信任型',
    summary: '容易信任他人，相信人性本善',
    description: '你天生倾向于信任他人，相信大多数人是善良的。你愿意给予他人机会，但有时可能过于天真。',
    strengths: ['人际关系和谐', '容易建立连接', '开放包容', '减少心理负担'],
    weaknesses: ['可能过于轻信', '容易受伤害', '有时缺乏警惕'],
    relationships: '你在关系中是开放的存在，但也需要学习设立适当的边界。',
    career: '适合需要信任合作的岗位：团队协作、客户服务、教育。',
    growth: '信任是美好的品质，但也需要学会保护自己。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'trust-balanced', testId: 'test-trust', typeCode: 'BALANCED',
    typeName: '平衡信任型',
    summary: '根据情况给予不同程度的信任',
    description: '你能够根据情境和对象调整信任程度。你既不过于天真，也不过于怀疑，是理想的信任风格。',
    strengths: ['判断准确', '适应性强', '关系健康', '既有信任又有边界'],
    weaknesses: ['有时需要更多时间做判断'],
    relationships: '你在关系中能够保持健康平衡。',
    career: '适合大多数岗位。',
    growth: '继续保持这种健康的信任风格。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'trust-cautious', testId: 'test-trust', typeCode: 'CAUTIOUS',
    typeName: '谨慎观察型',
    summary: '需要时间观察才会信任',
    description: '你倾向于谨慎地观察他人，再决定是否信任。你不会轻易给予信任，但一旦信任就很稳固。',
    strengths: ['判断力强', '不容易受骗', '信任稳固'],
    weaknesses: ['建立关系较慢', '可能错过一些机会', '有时显得疏离'],
    relationships: '你需要时间才能完全信任，找到一个有耐心的人很重要。',
    career: '适合需要审慎判断的岗位：风控、审计、法务。',
    growth: '尝试稍微开放一些，有些信任是需要冒险的。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'trust-skeptical', testId: 'test-trust', typeCode: 'SKEPTICAL',
    typeName: '怀疑审慎型',
    summary: '经常怀疑他人动机',
    description: '你倾向于怀疑他人的动机，很难完全信任。这可能源于过去的负面经历。',
    strengths: ['不容易被骗', '洞察力强', '保持警觉'],
    weaknesses: ['关系难以深入', '心理负担重', '可能过度怀疑'],
    relationships: '你的怀疑可能让关系变得紧张，需要学习区分何时该信任。',
    career: '适合需要审慎的岗位：风控、安全、审查。',
    growth: '不是所有好意都有目的，给自己和他人一个机会。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'trust-guarded', testId: 'test-trust', typeCode: 'GUARDED',
    typeName: '防御保护型',
    summary: '几乎不信任他人，自我保护强',
    description: '你很少完全信任他人，这可能源于过去的创伤。你通过不信任来保护自己。',
    strengths: ['自我保护强', '不容易受伤'],
    weaknesses: ['关系难以建立', '可能孤独', '错失深度连接'],
    relationships: '你可能在关系中感到孤独，建议逐步尝试开放。',
    career: '适合独立性强的岗位。',
    growth: '信任有风险，但完全隔绝也有代价。可以尝试一点点开放。',
    minScore: 0, maxScore: 100,
  },
];

// ==== 依恋类型测试 ====
export const attachmentQuestions = [
  { id: 'attach-q1', testId: 'test-attachment', order: 1, text: '当伴侣没有及时回复消息时，你的第一反应是...', options: [
    { id: 'attach-q1-a', text: '相信TA在忙，等会儿回复', scores: { SECURE: 3 } },
    { id: 'attach-q1-b', text: '有点焦虑，忍不住想再发一条', scores: { ANXIOUS: 3 } },
    { id: 'attach-q1-c', text: '无所谓，不回就不回', scores: { AVOIDANT: 2 } },
    { id: 'attach-q1-d', text: '开始胡思乱想，担心TA不在乎我', scores: { ANXIOUS: 2, FEARFUL: 1 } },
  ]},
  { id: 'attach-q2', testId: 'test-attachment', order: 2, text: '在亲密关系中，你更倾向于...', options: [
    { id: 'attach-q2-a', text: '保持适当的亲密和独立', scores: { SECURE: 3 } },
    { id: 'attach-q2-b', text: '希望更亲密，有时会黏人', scores: { ANXIOUS: 3 } },
    { id: 'attach-q2-c', text: '保持距离，不喜欢太黏', scores: { AVOIDANT: 3 } },
    { id: 'attach-q2-d', text: '渴望亲密但又害怕受伤', scores: { FEARFUL: 3 } },
  ]},
  { id: 'attach-q3', testId: 'test-attachment', order: 3, text: '当伴侣想要更多亲密时，你会...', options: [
    { id: 'attach-q3-a', text: '感到开心，愿意配合', scores: { SECURE: 3 } },
    { id: 'attach-q3-b', text: '觉得终于被需要了', scores: { ANXIOUS: 2 } },
    { id: 'attach-q3-c', text: '有点压力，想要空间', scores: { AVOIDANT: 3 } },
    { id: 'attach-q3-d', text: '矛盾，既想亲近又想逃跑', scores: { FEARFUL: 3 } },
  ]},
  { id: 'attach-q4', testId: 'test-attachment', order: 4, text: '分手后，你通常会...', options: [
    { id: 'attach-q4-a', text: '难过但能自我调节', scores: { SECURE: 3 } },
    { id: 'attach-q4-b', text: '很难接受，试图挽回', scores: { ANXIOUS: 3 } },
    { id: 'attach-q4-c', text: '快速走出来，不愿多想', scores: { AVOIDANT: 3 } },
    { id: 'attach-q4-d', text: '既痛苦又不敢再开始', scores: { FEARFUL: 3 } },
  ]},
  { id: 'attach-q5', testId: 'test-attachment', order: 5, text: '你觉得在关系中依赖对方...', options: [
    { id: 'attach-q5-a', text: '是正常且健康的', scores: { SECURE: 3 } },
    { id: 'attach-q5-b', text: '必须的，否则没有安全感', scores: { ANXIOUS: 3 } },
    { id: 'attach-q5-c', text: '不太安全，要保持独立', scores: { AVOIDANT: 3 } },
    { id: 'attach-q5-d', text: '很危险，会受伤', scores: { FEARFUL: 3 } },
  ]},
  { id: 'attach-q6', testId: 'test-attachment', order: 6, text: '当对方表达爱意时，你的感受是...', options: [
    { id: 'attach-q6-a', text: '开心，自然地回应', scores: { SECURE: 3 } },
    { id: 'attach-q6-b', text: '开心但担心不够', scores: { ANXIOUS: 2 } },
    { id: 'attach-q6-c', text: '有点不自在', scores: { AVOIDANT: 2 } },
    { id: 'attach-q6-d', text: '怀疑是否真诚', scores: { FEARFUL: 2 } },
  ]},
  { id: 'attach-q7', testId: 'test-attachment', order: 7, text: '你如何看待伴侣的缺点？', options: [
    { id: 'attach-q7-a', text: '接受并包容', scores: { SECURE: 3 } },
    { id: 'attach-q7-b', text: '担心TA会因此离开我', scores: { ANXIOUS: 2 } },
    { id: 'attach-q7-c', text: '保持理性，不过度在意', scores: { AVOIDANT: 2 } },
    { id: 'attach-q7-d', text: '担心这些缺点会伤害我', scores: { FEARFUL: 2 } },
  ]},
  { id: 'attach-q8', testId: 'test-attachment', order: 8, text: '当你们发生冲突时，你会...', options: [
    { id: 'attach-q8-a', text: '冷静沟通，寻求解决', scores: { SECURE: 3 } },
    { id: 'attach-q8-b', text: '担心关系会破裂', scores: { ANXIOUS: 3 } },
    { id: 'attach-q8-c', text: '回避冲突，沉默应对', scores: { AVOIDANT: 3 } },
    { id: 'attach-q8-d', text: '既想解决又害怕面对', scores: { FEARFUL: 3 } },
  ]},
  { id: 'attach-q9', testId: 'test-attachment', order: 9, text: '你对"承诺"的态度是...', options: [
    { id: 'attach-q9-a', text: '愿意承诺并努力维持', scores: { SECURE: 3 } },
    { id: 'attach-q9-b', text: '渴望承诺但担心被辜负', scores: { ANXIOUS: 2 } },
    { id: 'attach-q9-c', text: '对承诺有压力', scores: { AVOIDANT: 2 } },
    { id: 'attach-q9-d', text: '害怕承诺带来的风险', scores: { FEARFUL: 2 } },
  ]},
  { id: 'attach-q10', testId: 'test-attachment', order: 10, text: '你更希望在关系中获得...', options: [
    { id: 'attach-q10-a', text: '互相支持和尊重', scores: { SECURE: 3 } },
    { id: 'attach-q10-b', text: '确定的安全感和回应', scores: { ANXIOUS: 3 } },
    { id: 'attach-q10-c', text: '足够的个人空间', scores: { AVOIDANT: 3 } },
    { id: 'attach-q10-d', text: '既亲密又安全的平衡', scores: { FEARFUL: 2 } },
  ]},
  { id: 'attach-q11', testId: 'test-attachment', order: 11, text: '当伴侣需要独处时，你会...', options: [
    { id: 'attach-q11-a', text: '理解并尊重', scores: { SECURE: 3 } },
    { id: 'attach-q11-b', text: '担心是否我做错了什么', scores: { ANXIOUS: 3 } },
    { id: 'attach-q11-c', text: '正好，我也需要空间', scores: { AVOIDANT: 2 } },
    { id: 'attach-q11-d', text: '感到不安但不敢问', scores: { FEARFUL: 2 } },
  ]},
  { id: 'attach-q12', testId: 'test-attachment', order: 12, text: '你觉得最舒服的关系状态是...', options: [
    { id: 'attach-q12-a', text: '亲密但各有空间', scores: { SECURE: 3 } },
    { id: 'attach-q12-b', text: '非常亲密，24小时在一起', scores: { ANXIOUS: 3 } },
    { id: 'attach-q12-c', text: '各自独立，偶尔联系', scores: { AVOIDANT: 3 } },
    { id: 'attach-q12-d', text: '不确定，矛盾纠结', scores: { FEARFUL: 3 } },
  ]},
  { id: 'attach-q13', testId: 'test-attachment', order: 13, text: '当关系变得稳定后，你会...', options: [
    { id: 'attach-q13-a', text: '享受稳定，继续付出', scores: { SECURE: 3 } },
    { id: 'attach-q13-b', text: '担心TA会离开', scores: { ANXIOUS: 3 } },
    { id: 'attach-q13-c', text: '有点无聊，想要新鲜感', scores: { AVOIDANT: 2 } },
    { id: 'attach-q13-d', text: '担心稳定意味着受伤风险', scores: { FEARFUL: 2 } },
  ]},
  { id: 'attach-q14', testId: 'test-attachment', order: 14, text: '你如何看待对方的社交活动？', options: [
    { id: 'attach-q14-a', text: '支持，信任TA', scores: { SECURE: 3 } },
    { id: 'attach-q14-b', text: '有点担心，想知道细节', scores: { ANXIOUS: 2 } },
    { id: 'attach-q14-c', text: '无所谓，我也忙自己的', scores: { AVOIDANT: 2 } },
    { id: 'attach-q14-d', text: '担心TA会认识更好的人', scores: { FEARFUL: 2, ANXIOUS: 1 } },
  ]},
  { id: 'attach-q15', testId: 'test-attachment', order: 15, text: '当对方情绪低落时，你会...', options: [
    { id: 'attach-q15-a', text: '陪伴和支持', scores: { SECURE: 3 } },
    { id: 'attach-q15-b', text: '担心是不是我的问题', scores: { ANXIOUS: 2 } },
    { id: 'attach-q15-c', text: '给TA空间自己处理', scores: { AVOIDANT: 2 } },
    { id: 'attach-q15-d', text: '想帮忙但不知怎么做', scores: { FEARFUL: 2 } },
  ]},
  { id: 'attach-q16', testId: 'test-attachment', order: 16, text: '你觉得"被爱"意味着...', options: [
    { id: 'attach-q16-a', text: '相互关心和尊重', scores: { SECURE: 3 } },
    { id: 'attach-q16-b', text: '时刻关注和回应', scores: { ANXIOUS: 3 } },
    { id: 'attach-q16-c', text: '不过度干涉', scores: { AVOIDANT: 2 } },
    { id: 'attach-q16-d', text: '很难真正相信', scores: { FEARFUL: 3 } },
  ]},
  { id: 'attach-q17', testId: 'test-attachment', order: 17, text: '对于"我爱你"这句话...', options: [
    { id: 'attach-q17-a', text: '自然表达和接受', scores: { SECURE: 3 } },
    { id: 'attach-q17-b', text: '需要经常听到', scores: { ANXIOUS: 3 } },
    { id: 'attach-q17-c', text: '不太习惯说', scores: { AVOIDANT: 2 } },
    { id: 'attach-q17-d', text: '说了也不一定信', scores: { FEARFUL: 3 } },
  ]},
  { id: 'attach-q18', testId: 'test-attachment', order: 18, text: '当对方提出不同意见时，你会...', options: [
    { id: 'attach-q18-a', text: '尊重并讨论', scores: { SECURE: 3 } },
    { id: 'attach-q18-b', text: '担心TA是否不爱我了', scores: { ANXIOUS: 2 } },
    { id: 'attach-q18-c', text: '避免争论', scores: { AVOIDANT: 2 } },
    { id: 'attach-q18-d', text: '担心冲突升级', scores: { FEARFUL: 2 } },
  ]},
  { id: 'attach-q19', testId: 'test-attachment', order: 19, text: '你对"未来的规划"的态度是...', options: [
    { id: 'attach-q19-a', text: '愿意一起规划', scores: { SECURE: 3 } },
    { id: 'attach-q19-b', text: '需要TA的承诺', scores: { ANXIOUS: 2 } },
    { id: 'attach-q19-c', text: '不喜欢想太远', scores: { AVOIDANT: 2 } },
    { id: 'attach-q19-d', text: '担心计划会落空', scores: { FEARFUL: 2 } },
  ]},
  { id: 'attach-q20', testId: 'test-attachment', order: 20, text: '总体上，你认为亲密关系...', options: [
    { id: 'attach-q20-a', text: '值得信任和付出', scores: { SECURE: 3 } },
    { id: 'attach-q20-b', text: '需要努力维系', scores: { ANXIOUS: 3 } },
    { id: 'attach-q20-c', text: '保持距离更安全', scores: { AVOIDANT: 3 } },
    { id: 'attach-q20-d', text: '既渴望又害怕', scores: { FEARFUL: 3 } },
  ]},
];

export const attachmentResults = [
  { id: 'attach-secure', testId: 'test-attachment', typeCode: 'SECURE', typeName: '安全型',
    summary: '能够建立健康的亲密关系，信任他人',
    description: '你拥有安全的依恋风格。你能与他人建立健康的亲密关系，既能依赖他人也能让他人依赖你。你对关系有信心，不怕亲密也不怕被抛弃。',
    strengths: ['信任他人', '表达情感', '独立又亲密', '关系稳定'],
    weaknesses: ['可能过于乐观', '有时忽略风险'],
    relationships: '你在关系中是理想的伴侣，能给予安全感也能接受爱。',
    career: '适合需要信任和合作的岗位。',
    growth: '继续保持，同时也要保持一定的警觉性。',
    minScore: 0, maxScore: 100 },
  { id: 'attach-anxious', testId: 'test-attachment', typeCode: 'ANXIOUS', typeName: '焦虑型',
    summary: '渴望亲密但担心被抛弃，需要持续确认',
    description: '你有焦虑型依恋风格。你渴望亲密但总担心被抛弃，需要持续获得确认和保证。你对他人的情绪很敏感，但也容易过度解读。',
    strengths: ['敏感细腻', '重视关系', '愿意付出', '有同理心'],
    weaknesses: ['过度担心', '需要频繁确认', '可能黏人', '容易情绪化'],
    relationships: '你需要一个能给你安全感、愿意表达爱的伴侣。',
    career: '适合需要关怀的岗位：护理、教育、服务。',
    growth: '学会自我确认，建立内在的安全感。',
    minScore: 0, maxScore: 100 },
  { id: 'attach-avoidant', testId: 'test-attachment', typeCode: 'AVOIDANT', typeName: '回避型',
    summary: '保持距离，独立性强，不太需要亲密',
    description: '你有回避型依恋风格。你倾向于保持距离，不太需要或想要亲密关系。你重视独立，但对依赖他人有不适感。',
    strengths: ['独立自主', '不依赖他人', '冷静理性', '不会过度黏人'],
    weaknesses: ['难以表达情感', '可能显得冷漠', '关系不够深入', '回避亲密'],
    relationships: '你需要一个理解你独立需求的伴侣，同时尝试更多表达情感。',
    career: '适合独立工作的岗位：研究、技术、创作。',
    growth: '尝试表达更多情感，亲密关系并不意味着失去自我。',
    minScore: 0, maxScore: 100 },
  { id: 'attach-fearful', testId: 'test-attachment', typeCode: 'FEARFUL', typeName: '恐惧型',
    summary: '渴望亲密但又害怕受伤，矛盾纠结',
    description: '你有恐惧型依恋风格。你既渴望亲密又害怕受伤，处于矛盾的状态。你可能有过负面经历，让你对关系既期待又害怕。',
    strengths: ['深刻理解复杂情感', '能感知他人痛苦'],
    weaknesses: ['矛盾纠结', '难以信任', '可能自我破坏关系'],
    relationships: '你需要一个非常有耐心、能给你稳定安全感的伴侣。',
    career: '适合敏感性工作：咨询、艺术创作。',
    growth: '找到安全的入口，慢慢建立信任。',
    minScore: 0, maxScore: 100 },
];

// ==== 压力应对风格测试 ====
export const stressQuestions = [
  { id: 'stress-q1', testId: 'test-stress', order: 1, text: '面对重大压力时，你的第一反应是？', options: [
    { id: 'stress-q1-a', text: '立即采取行动解决问题', scores: { FIGHT: 3 } },
    { id: 'stress-q1-b', text: '先分析情况再决定', scores: { ADAPT: 2 } },
    { id: 'stress-q1-c', text: '想要逃离这种情境', scores: { FLIGHT: 3 } },
    { id: 'stress-q1-d', text: '感觉动弹不得', scores: { FREEZE: 3 } },
  ]},
  { id: 'stress-q2', testId: 'test-stress', order: 2, text: '当工作压力很大时，你通常会？', options: [
    { id: 'stress-q2-a', text: '更加努力工作', scores: { FIGHT: 2 } },
    { id: 'stress-q2-b', text: '调整优先级和期望', scores: { ADAPT: 3 } },
    { id: 'stress-q2-c', text: '拖延或回避任务', scores: { FLIGHT: 2 } },
    { id: 'stress-q2-d', text: '感觉被压垮，无法行动', scores: { FREEZE: 2 } },
  ]},
  { id: 'stress-q3', testId: 'test-stress', order: 3, text: '遇到人际冲突时，你会？', options: [
    { id: 'stress-q3-a', text: '直接面对，把问题说清楚', scores: { FIGHT: 3 } },
    { id: 'stress-q3-b', text: '尝试理解各方立场', scores: { ADAPT: 3 } },
    { id: 'stress-q3-c', text: '避免正面冲突', scores: { FLIGHT: 2 } },
    { id: 'stress-q3-d', text: '不知所措', scores: { FREEZE: 2 } },
  ]},
  { id: 'stress-q4', testId: 'test-stress', order: 4, text: '压力下的情绪状态通常是？', options: [
    { id: 'stress-q4-a', text: '愤怒或激动', scores: { FIGHT: 2 } },
    { id: 'stress-q4-b', text: '焦虑但可控', scores: { ADAPT: 2 } },
    { id: 'stress-q4-c', text: '想要逃避', scores: { FLIGHT: 2 } },
    { id: 'stress-q4-d', text: '麻木或空洞', scores: { FREEZE: 2 } },
  ]},
  { id: 'stress-q5', testId: 'test-stress', order: 5, text: '你如何处理压力后的恢复？', options: [
    { id: 'stress-q5-a', text: '通过运动或活动释放', scores: { FIGHT: 1 } },
    { id: 'stress-q5-b', text: '反思并调整策略', scores: { ADAPT: 3 } },
    { id: 'stress-q5-c', text: '独处或转移注意力', scores: { FLIGHT: 2 } },
    { id: 'stress-q5-d', text: '需要很长时间恢复', scores: { FREEZE: 2 } },
  ]},
  { id: 'stress-q6', testId: 'test-stress', order: 6, text: '面对批评时，你会？', options: [
    { id: 'stress-q6-a', text: '反驳或解释自己的立场', scores: { FIGHT: 2 } },
    { id: 'stress-q6-b', text: '理性分析批评的合理性', scores: { ADAPT: 3 } },
    { id: 'stress-q6-c', text: '尽量避免冲突', scores: { FLIGHT: 2 } },
    { id: 'stress-q6-d', text: '沉默不语', scores: { FREEZE: 2 } },
  ]},
  { id: 'stress-q7', testId: 'test-stress', order: 7, text: '在紧迫的截止日期前，你？', options: [
    { id: 'stress-q7-a', text: '加紧工作，全力以赴', scores: { FIGHT: 2 } },
    { id: 'stress-q7-b', text: '制定计划，分配时间', scores: { ADAPT: 3 } },
    { id: 'stress-q7-c', text: '拖延到最后一刻', scores: { FLIGHT: 2 } },
    { id: 'stress-q7-d', text: '感到瘫痪无法开始', scores: { FREEZE: 2 } },
  ]},
  { id: 'stress-q8', testId: 'test-stress', order: 8, text: '面对不确定的未来，你会？', options: [
    { id: 'stress-q8-a', text: '主动掌控能掌控的', scores: { FIGHT: 2 } },
    { id: 'stress-q8-b', text: '做好多种准备', scores: { ADAPT: 3 } },
    { id: 'stress-q8-c', text: '尽量不去想它', scores: { FLIGHT: 2 } },
    { id: 'stress-q8-d', text: '担心却无法行动', scores: { FREEZE: 2 } },
  ]},
  { id: 'stress-q9', testId: 'test-stress', order: 9, text: '你的社交应对风格是？', options: [
    { id: 'stress-q9-a', text: '主动表达需求', scores: { FIGHT: 2 } },
    { id: 'stress-q9-b', text: '根据情况调整', scores: { ADAPT: 3 } },
    { id: 'stress-q9-c', text: '回避社交场合', scores: { FLIGHT: 2 } },
    { id: 'stress-q9-d', text: '社交场合感到僵硬', scores: { FREEZE: 2 } },
  ]},
  { id: 'stress-q10', testId: 'test-stress', order: 10, text: '当感到压力时，你的睡眠状态？', options: [
    { id: 'stress-q10-a', text: '可能睡眠减少但精力旺盛', scores: { FIGHT: 1 } },
    { id: 'stress-q10-b', text: '努力保持规律作息', scores: { ADAPT: 2 } },
    { id: 'stress-q10-c', text: '用睡眠逃避问题', scores: { FLIGHT: 2 } },
    { id: 'stress-q10-d', text: '失眠或做噩梦', scores: { FREEZE: 2 } },
  ]},
  { id: 'stress-q11', testId: 'test-stress', order: 11, text: '面对困难时，你最常说？', options: [
    { id: 'stress-q11-a', text: '"我一定能搞定"', scores: { FIGHT: 3 } },
    { id: 'stress-q11-b', text: '"让我想想办法"', scores: { ADAPT: 3 } },
    { id: 'stress-q11-c', text: '"这事太麻烦了"', scores: { FLIGHT: 2 } },
    { id: 'stress-q11-d', text: '"我不知道该怎么办"', scores: { FREEZE: 2 } },
  ]},
  { id: 'stress-q12', testId: 'test-stress', order: 12, text: '你的身体对压力的反应是？', options: [
    { id: 'stress-q12-a', text: '肌肉紧张，准备行动', scores: { FIGHT: 2 } },
    { id: 'stress-q12-b', text: '有时紧张有时放松', scores: { ADAPT: 2 } },
    { id: 'stress-q12-c', text: '想要离开或躲藏', scores: { FLIGHT: 2 } },
    { id: 'stress-q12-d', text: '感到沉重或无力', scores: { FREEZE: 2 } },
  ]},
  { id: 'stress-q13', testId: 'test-stress', order: 13, text: '压力下的决策风格？', options: [
    { id: 'stress-q13-a', text: '快速决定并行动', scores: { FIGHT: 2 } },
    { id: 'stress-q13-b', text: '权衡利弊后决定', scores: { ADAPT: 3 } },
    { id: 'stress-q13-c', text: '延迟决定', scores: { FLIGHT: 2 } },
    { id: 'stress-q13-d', text: '无法做出决定', scores: { FREEZE: 2 } },
  ]},
  { id: 'stress-q14', testId: 'test-stress', order: 14, text: '面对改变时，你会？', options: [
    { id: 'stress-q14-a', text: '主动迎接改变', scores: { FIGHT: 2 } },
    { id: 'stress-q14-b', text: '适应并调整', scores: { ADAPT: 3 } },
    { id: 'stress-q14-c', text: '回避改变', scores: { FLIGHT: 2 } },
    { id: 'stress-q14-d', text: '感到无所适从', scores: { FREEZE: 2 } },
  ]},
  { id: 'stress-q15', testId: 'test-stress', order: 15, text: '你寻求支持的方式？', options: [
    { id: 'stress-q15-a', text: '直接表达需求', scores: { FIGHT: 1 } },
    { id: 'stress-q15-b', text: '选择合适的方式求助', scores: { ADAPT: 3 } },
    { id: 'stress-q15-c', text: '独自处理', scores: { FLIGHT: 2 } },
    { id: 'stress-q15-d', text: '不知道如何求助', scores: { FREEZE: 2 } },
  ]},
  { id: 'stress-q16', testId: 'test-stress', order: 16, text: '面对失败时，你的反应？', options: [
    { id: 'stress-q16-a', text: '立即重新尝试', scores: { FIGHT: 2 } },
    { id: 'stress-q16-b', text: '总结教训后再试', scores: { ADAPT: 3 } },
    { id: 'stress-q16-c', text: '回避类似的挑战', scores: { FLIGHT: 2 } },
    { id: 'stress-q16-d', text: '陷入自我怀疑', scores: { FREEZE: 2 } },
  ]},
  { id: 'stress-q17', testId: 'test-stress', order: 17, text: '当你感到压力时，思维状态？', options: [
    { id: 'stress-q17-a', text: '高度集中但可能偏激', scores: { FIGHT: 2 } },
    { id: 'stress-q17-b', text: '保持冷静思考', scores: { ADAPT: 3 } },
    { id: 'stress-q17-c', text: '想要放空', scores: { FLIGHT: 2 } },
    { id: 'stress-q17-d', text: '思维卡住', scores: { FREEZE: 2 } },
  ]},
  { id: 'stress-q18', testId: 'test-stress', order: 18, text: '压力过后的恢复方式？', options: [
    { id: 'stress-q18-a', text: '继续做事转移注意力', scores: { FIGHT: 1 } },
    { id: 'stress-q18-b', text: '反思和调整', scores: { ADAPT: 2 } },
    { id: 'stress-q18-c', text: '休息或娱乐', scores: { FLIGHT: 2 } },
    { id: 'stress-q18-d', text: '需要很长时间恢复', scores: { FREEZE: 2 } },
  ]},
  { id: 'stress-q19', testId: 'test-stress', order: 19, text: '你更倾向的压力预警信号？', options: [
    { id: 'stress-q19-a', text: '易怒或焦躁', scores: { FIGHT: 2 } },
    { id: 'stress-q19-b', text: '效率下降', scores: { ADAPT: 2 } },
    { id: 'stress-q19-c', text: '想要逃避', scores: { FLIGHT: 3 } },
    { id: 'stress-q19-d', text: '感到疲惫无力', scores: { FREEZE: 3 } },
  ]},
  { id: 'stress-q20', testId: 'test-stress', order: 20, text: '总体来说，面对压力你？', options: [
    { id: 'stress-q20-a', text: '主动应对，迎难而上', scores: { FIGHT: 3 } },
    { id: 'stress-q20-b', text: '灵活调整，适应环境', scores: { ADAPT: 3 } },
    { id: 'stress-q20-c', text: '回避困难，保护自己', scores: { FLIGHT: 3 } },
    { id: 'stress-q20-d', text: '容易陷入瘫痪状态', scores: { FREEZE: 3 } },
  ]},
];

export const stressResults = [
  { id: 'stress-fight', testId: 'test-stress', typeCode: 'FIGHT', typeName: '战斗型',
    summary: '面对压力主动出击，化压力为动力',
    description: '你面对压力时的风格是战斗型。你倾向于直接面对问题，采取行动解决问题。压力会让你更有动力。',
    strengths: ['主动解决问题', '执行力强', '不回避困难', '有韧性'],
    weaknesses: ['可能过于冲动', '有时忽视风险', '容易透支'],
    relationships: '在关系中你是积极的解决问题者，但要注意倾听和共情。',
    career: '适合高压岗位：创业、销售、管理。',
    growth: '有时停下来反思一下，行动不是唯一的选择。',
    minScore: 0, maxScore: 100 },
  { id: 'stress-adapt', testId: 'test-stress', typeCode: 'ADAPT', typeName: '适应型',
    summary: '灵活调整策略，适应环境变化',
    description: '你面对压力时能够灵活应对。你既不盲目战斗也不一味逃避，而是根据情况调整策略。',
    strengths: ['灵活适应', '情绪稳定', '善于规划', '抗压能力强'],
    weaknesses: ['可能缺乏果断', '有时过度分析'],
    relationships: '你是关系中的稳定者，能够在压力下保持平衡。',
    career: '适合需要灵活性的岗位：项目管理、咨询。',
    growth: '保持这种平衡，有时候需要更果断的行动。',
    minScore: 0, maxScore: 100 },
  { id: 'stress-flight', testId: 'test-stress', typeCode: 'FLIGHT', typeName: '逃避型',
    summary: '面对压力倾向于回避或转移注意力',
    description: '你面对压力时倾向于逃避或转移注意力。这可能是一种保护机制，但长期回避可能让问题积累。',
    strengths: ['自我保护', '能避免直接冲突', '给自己空间'],
    weaknesses: ['问题可能积累', '错失解决机会', '可能形成回避习惯'],
    relationships: '在关系中你可能回避冲突，建议学习表达真实想法。',
    career: '适合低压岗位或可以独立完成的工作。',
    growth: '尝试面对一个压力源，你会发现自己比想象中强大。',
    minScore: 0, maxScore: 100 },
  { id: 'stress-freeze', testId: 'test-stress', typeCode: 'FREEZE', typeName: '冻结型',
    summary: '面对压力时容易陷入瘫痪状态',
    description: '你面对压力时可能感到无能为力，陷入瘫痪状态。这是最本能的应激反应，但可以通过训练改善。',
    strengths: ['不会冲动行事', '给自己时间'],
    weaknesses: ['无法采取行动', '问题持续存在', '自我效能感低'],
    relationships: '在关系中可能感到被动，建议寻求支持。',
    career: '适合低压、有明确指导的工作。',
    growth: '从小事开始练习应对压力，逐步建立自信。',
    minScore: 0, maxScore: 100 },
];

// ==== 情绪恢复力测试 ====
export const emotionRecoveryQuestions = [
  { id: 'erec-q1', testId: 'test-emotion-recovery', order: 1, text: '经历强烈负面情绪后，你通常需要多久恢复？', options: [
    { id: 'erec-q1-a', text: '几小时内', scores: { FAST: 3 } },
    { id: 'erec-q1-b', text: '一到两天', scores: { MODERATE: 3 } },
    { id: 'erec-q1-c', text: '几天到一周', scores: { SLOW: 2 } },
    { id: 'erec-q1-d', text: '超过一周', scores: { SLOW: 3 } },
  ]},
  { id: 'erec-q2', testId: 'test-emotion-recovery', order: 2, text: '你有有效的情绪调节方法吗？', options: [
    { id: 'erec-q2-a', text: '有，很有效', scores: { RESILIENT: 3 } },
    { id: 'erec-q2-b', text: '有一些方法', scores: { MODERATE: 2 } },
    { id: 'erec-q2-c', text: '不太有效', scores: { STRUGGLING: 2 } },
    { id: 'erec-q2-d', text: '没有', scores: { STRUGGLING: 3 } },
  ]},
  { id: 'erec-q3', testId: 'test-emotion-recovery', order: 3, text: '当你感到沮丧时，你会？', options: [
    { id: 'erec-q3-a', text: '主动调节情绪', scores: { RESILIENT: 3 } },
    { id: 'erec-q3-b', text: '等待情绪过去', scores: { MODERATE: 2 } },
    { id: 'erec-q3-c', text: '被情绪淹没', scores: { STRUGGLING: 2 } },
    { id: 'erec-q3-d', text: '逃避这种感觉', scores: { AVOIDANT: 2 } },
  ]},
  { id: 'erec-q4', testId: 'test-emotion-recovery', order: 4, text: '面对挫折时，你的思维模式是？', options: [
    { id: 'erec-q4-a', text: '这是暂时的，会过去', scores: { RESILIENT: 3 } },
    { id: 'erec-q4-b', text: '有些沮丧但能接受', scores: { MODERATE: 3 } },
    { id: 'erec-q4-c', text: '觉得自己总是失败', scores: { STRUGGLING: 3 } },
    { id: 'erec-q4-d', text: '试图不去想它', scores: { AVOIDANT: 2 } },
  ]},
  { id: 'erec-q5', testId: 'test-emotion-recovery', order: 5, text: '你的睡眠质量如何？', options: [
    { id: 'erec-q5-a', text: '很好，不受影响', scores: { RESILIENT: 2 } },
    { id: 'erec-q5-b', text: '还行，偶尔受影响', scores: { MODERATE: 2 } },
    { id: 'erec-q5-c', text: '不太好，常受影响', scores: { STRUGGLING: 2 } },
    { id: 'erec-q5-d', text: '很差，难以入睡', scores: { STRUGGLING: 3 } },
  ]},
  { id: 'erec-q6', testId: 'test-emotion-recovery', order: 6, text: '遇到困难时，你能否保持希望？', options: [
    { id: 'erec-q6-a', text: '能，相信会好起来', scores: { RESILIENT: 3 } },
    { id: 'erec-q6-b', text: '有时能有时不能', scores: { MODERATE: 2 } },
    { id: 'erec-q6-c', text: '容易失去希望', scores: { STRUGGLING: 2 } },
    { id: 'erec-q6-d', text: '不敢抱有希望', scores: { AVOIDANT: 2 } },
  ]},
  { id: 'erec-q7', testId: 'test-emotion-recovery', order: 7, text: '你如何处理负面回忆？', options: [
    { id: 'erec-q7-a', text: '接受并放下', scores: { RESILIENT: 3 } },
    { id: 'erec-q7-b', text: '偶尔想起但能控制', scores: { MODERATE: 2 } },
    { id: 'erec-q7-c', text: '经常被困扰', scores: { STRUGGLING: 3 } },
    { id: 'erec-q7-d', text: '努力压抑', scores: { AVOIDANT: 3 } },
  ]},
  { id: 'erec-q8', testId: 'test-emotion-recovery', order: 8, text: '你的社交支持系统如何？', options: [
    { id: 'erec-q8-a', text: '有可靠的支持网络', scores: { RESILIENT: 2 } },
    { id: 'erec-q8-b', text: '有一些朋友', scores: { MODERATE: 2 } },
    { id: 'erec-q8-c', text: '很少有支持', scores: { STRUGGLING: 2 } },
    { id: 'erec-q8-d', text: '不想麻烦别人', scores: { AVOIDANT: 2 } },
  ]},
  { id: 'erec-q9', testId: 'test-emotion-recovery', order: 9, text: '面对压力事件后，你通常？', options: [
    { id: 'erec-q9-a', text: '能较快恢复日常', scores: { RESILIENT: 3 } },
    { id: 'erec-q9-b', text: '需要几天调整', scores: { MODERATE: 2 } },
    { id: 'erec-q9-c', text: '很长时间难以恢复', scores: { STRUGGLING: 3 } },
    { id: 'erec-q9-d', text: '假装没发生', scores: { AVOIDANT: 2 } },
  ]},
  { id: 'erec-q10', testId: 'test-emotion-recovery', order: 10, text: '你如何看待自己的情绪？', options: [
    { id: 'erec-q10-a', text: '接纳并理解', scores: { RESILIENT: 3 } },
    { id: 'erec-q10-b', text: '能意识到但不总是接纳', scores: { MODERATE: 2 } },
    { id: 'erec-q10-c', text: '感到困惑和不知所措', scores: { STRUGGLING: 3 } },
    { id: 'erec-q10-d', text: '尽量不去感受', scores: { AVOIDANT: 3 } },
  ]},
  { id: 'erec-q11', testId: 'test-emotion-recovery', order: 11, text: '当情绪低落时，你的能量水平？', options: [
    { id: 'erec-q11-a', text: '仍能保持正常', scores: { RESILIENT: 2 } },
    { id: 'erec-q11-b', text: '有所下降但能运转', scores: { MODERATE: 3 } },
    { id: 'erec-q11-c', text: '明显下降', scores: { STRUGGLING: 2 } },
    { id: 'erec-q11-d', text: '几乎无法动弹', scores: { STRUGGLING: 3 } },
  ]},
  { id: 'erec-q12', testId: 'test-emotion-recovery', order: 12, text: '你能否从失败中学习？', options: [
    { id: 'erec-q12-a', text: '能，视为成长机会', scores: { RESILIENT: 3 } },
    { id: 'erec-q12-b', text: '有时能', scores: { MODERATE: 2 } },
    { id: 'erec-q12-c', text: '很难从中看到积极面', scores: { STRUGGLING: 2 } },
    { id: 'erec-q12-d', text: '不愿回想失败', scores: { AVOIDANT: 2 } },
  ]},
  { id: 'erec-q13', testId: 'test-emotion-recovery', order: 13, text: '你对自己的评价通常？', options: [
    { id: 'erec-q13-a', text: '积极且稳定', scores: { RESILIENT: 2 } },
    { id: 'erec-q13-b', text: '时好时坏', scores: { MODERATE: 3 } },
    { id: 'erec-q13-c', text: '偏消极', scores: { STRUGGLING: 2 } },
    { id: 'erec-q13-d', text: '尽量不去想', scores: { AVOIDANT: 1 } },
  ]},
  { id: 'erec-q14', testId: 'test-emotion-recovery', order: 14, text: '面对不确定性，你的感受？', options: [
    { id: 'erec-q14-a', text: '能够接受', scores: { RESILIENT: 2 } },
    { id: 'erec-q14-b', text: '有些不安但能应对', scores: { MODERATE: 3 } },
    { id: 'erec-q14-c', text: '非常焦虑', scores: { STRUGGLING: 2 } },
    { id: 'erec-q14-d', text: '试图逃避', scores: { AVOIDANT: 2 } },
  ]},
  { id: 'erec-q15', testId: 'test-emotion-recovery', order: 15, text: '总体上，你对自己情绪恢复能力的评价？', options: [
    { id: 'erec-q15-a', text: '很强', scores: { RESILIENT: 3 } },
    { id: 'erec-q15-b', text: '中等', scores: { MODERATE: 3 } },
    { id: 'erec-q15-c', text: '较弱', scores: { STRUGGLING: 3 } },
    { id: 'erec-q15-d', text: '不确定', scores: { AVOIDANT: 2 } },
  ]},
];

export const emotionRecoveryResults = [
  { id: 'erec-resilient', testId: 'test-emotion-recovery', typeCode: 'RESILIENT', typeName: '高恢复力型',
    summary: '情绪恢复快，调节能力强',
    description: '你有很强的情绪恢复能力。你能有效调节情绪，从挫折中快速恢复，并把挑战视为成长机会。',
    strengths: ['恢复速度快', '调节方法有效', '乐观积极', '适应力强'],
    weaknesses: ['可能忽视深层问题', '有时过于乐观'],
    relationships: '在关系中你是稳定的力量，能给他人带来安全感。',
    career: '适合高压岗位和领导角色。',
    growth: '继续保持，同时关注深层情绪需求。',
    minScore: 0, maxScore: 100 },
  { id: 'erec-moderate', testId: 'test-emotion-recovery', typeCode: 'MODERATE', typeName: '中等恢复型',
    summary: '情绪恢复能力中等，有波动',
    description: '你的情绪恢复能力中等。有时能快速恢复，有时需要较长时间。你有基本的调节策略，但不总是有效。',
    strengths: ['有一定调节能力', '能够自我觉察'],
    weaknesses: ['恢复速度不稳定', '有时陷入负面情绪'],
    relationships: '在关系中你需要稳定的支持系统。',
    career: '适合稳定性较高的工作。',
    growth: '学习更多情绪调节技巧，建立稳定的恢复习惯。',
    minScore: 0, maxScore: 100 },
  { id: 'erec-struggling', testId: 'test-emotion-recovery', typeCode: 'STRUGGLING', typeName: '恢复困难型',
    summary: '情绪恢复较慢，常被负面情绪影响',
    description: '你的情绪恢复能力需要提升。你可能经常被负面情绪困扰，需要较长时间才能恢复。',
    strengths: ['敏感深刻', '能体验丰富情感'],
    weaknesses: ['恢复速度慢', '缺乏有效调节方法', '容易陷入负面思维'],
    relationships: '在关系中可能感到脆弱，需要可靠的支持。',
    career: '适合低压、有支持的工作环境。',
    growth: '建议学习情绪调节技巧，必要时寻求专业帮助。',
    minScore: 0, maxScore: 100 },
  { id: 'erec-avoidant', testId: 'test-emotion-recovery', typeCode: 'AVOIDANT', typeName: '逃避回避型',
    summary: '倾向于回避情绪而非处理',
    description: '你倾向于回避情绪而非直接处理。这可能在短期内减少痛苦，但长期可能让问题积累。',
    strengths: ['能避免直接痛苦', '自我保护'],
    weaknesses: ['问题可能积累', '难以真正解决', '可能形成回避习惯'],
    relationships: '在关系中你可能回避冲突和深度情感交流。',
    career: '适合不需要深度情感处理的工作。',
    growth: '尝试面对一次情绪，你会发现并没有想象中可怕。',
    minScore: 0, maxScore: 100 },
];

