import { TestCategory, Test, TestDimension, TestQuestion, TestOption, TestResult } from './types';

export const testCategories: TestCategory[] = [
  {
    id: 'cat-1',
    name: '人格类型',
    slug: 'personality',
    description: '探索你的人格特质与行为模式',
    icon: '🧠',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'cat-2',
    name: '情感关系',
    slug: 'relationship',
    description: '了解你的爱情风格与关系模式',
    icon: '💫',
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 'cat-3',
    name: '职业发展',
    slug: 'career',
    description: '发现你的职业优势与潜在方向',
    icon: '🌟',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'cat-4',
    name: '情绪心理',
    slug: 'emotion',
    description: '认识你的情绪反应与心理模式',
    icon: '🌊',
    color: 'from-teal-500 to-emerald-600',
  },
];

export const tests: Test[] = [
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
    id: 'test-love',
    title: '爱情依恋风格测试',
    slug: 'attachment-style',
    description: '探索你在亲密关系中的依恋模式——你是安全型、焦虑型还是回避型？了解你的关系风格，能帮助你建立更健康的连结。',
    shortDescription: '了解你的依恋风格，让亲密关系更深入、更安全',
    categoryId: 'cat-2',
    questionCount: 20,
    estimatedMinutes: 7,
    tags: ['关系', '依恋', '情感'],
    completionCount: 54327,
    isPopular: false,
    isFeatured: true,
    coverGradient: 'from-rose-500 via-pink-500 to-purple-600',
    createdAt: '2024-02-15',
  },
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
    id: 'test-pm16',
    title: 'PM16 哲学人格测试',
    slug: 'pm16-philosophy',
    description: 'PM16 通过四个哲学认知维度——知识来源、推理方式、价值立场与存在观——揭示你独特的思维底色。16 种哲学人格类型，每一种都是一种看世界的方式。',
    shortDescription: '通过哲学四维度，发现你看世界的独特底层逻辑',
    categoryId: 'cat-1',
    questionCount: 32,
    estimatedMinutes: 12,
    tags: ['哲学', '思维', '原创'],
    completionCount: 12847,
    isPopular: false,
    isFeatured: true,
    coverGradient: 'from-slate-700 via-indigo-800 to-violet-900',
    createdAt: '2024-04-15',
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
    default:
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

// ==== PM16 Philosophy Personality Test ====
// Dimensions:
//   dim-re: 知识来源  理性 (R/Rationalist, score>0) vs 经验 (E/Empiricist, score<0)
//   dim-di: 推理方式  演绎 (D/Deductive, score>0) vs 归纳 (I/Inductive, score<0)
//   dim-uc: 价值立场  普遍 (U/Universalist, score>0) vs 情境 (C/Contextualist, score<0)
//   dim-cr: 存在观   建构 (C/Constructivist, score>0) vs 实在 (R/Realist, score<0)

export const pm16Dimensions: TestDimension[] = [
  { id: 'pm-re', testId: 'test-pm16', name: '知识来源', description: '你认为真知从哪里来', minLabel: '经验主义 (E)', maxLabel: '理性主义 (R)', color: '#8b5cf6' },
  { id: 'pm-di', testId: 'test-pm16', name: '推理方式', description: '你倾向于如何得出结论', minLabel: '归纳 (I)', maxLabel: '演绎 (D)', color: '#06b6d4' },
  { id: 'pm-uc', testId: 'test-pm16', name: '价值立场', description: '你如何看待道德与价值判断', minLabel: '情境主义 (C)', maxLabel: '普遍主义 (U)', color: '#10b981' },
  { id: 'pm-cr', testId: 'test-pm16', name: '存在观', description: '你认为现实世界的本质是什么', minLabel: '实在论 (R)', maxLabel: '建构论 (C)', color: '#f59e0b' },
];

export const pm16Questions: TestQuestion[] = [
  // 知识来源 dim-re
  { id: 'pm-q1',  testId: 'test-pm16', text: '你更倾向于认为，真正可靠的知识来源于…', order: 1,  dimensionId: 'pm-re' },
  { id: 'pm-q2',  testId: 'test-pm16', text: '当一个结论在逻辑上无懈可击，即使缺乏实验验证，你也会接受它吗？', order: 2,  dimensionId: 'pm-re' },
  { id: 'pm-q3',  testId: 'test-pm16', text: '你更相信哪种方式能帮你理解世界？', order: 3,  dimensionId: 'pm-re' },
  { id: 'pm-q4',  testId: 'test-pm16', text: '对于"我思故我在"这类纯粹靠思维得出的命题，你觉得…', order: 4,  dimensionId: 'pm-re' },
  { id: 'pm-q5',  testId: 'test-pm16', text: '数学真理是否需要通过现实检验才算成立？', order: 5,  dimensionId: 'pm-re' },
  { id: 'pm-q6',  testId: 'test-pm16', text: '你更认同哪种说法？', order: 6,  dimensionId: 'pm-re' },
  { id: 'pm-q7',  testId: 'test-pm16', text: '面对一个全新领域，你更倾向于先…', order: 7,  dimensionId: 'pm-re' },
  { id: 'pm-q8',  testId: 'test-pm16', text: '如果两种知识相互冲突——逻辑推导的结论与亲眼所见的现象，你更信任…', order: 8,  dimensionId: 'pm-re' },
  // 推理方式 dim-di
  { id: 'pm-q9',  testId: 'test-pm16', text: '思考问题时，你更喜欢从哪里出发？', order: 9,  dimensionId: 'pm-di' },
  { id: 'pm-q10', testId: 'test-pm16', text: '你更擅长哪种推理？', order: 10, dimensionId: 'pm-di' },
  { id: 'pm-q11', testId: 'test-pm16', text: '当面对一个复杂问题时，你更倾向于…', order: 11, dimensionId: 'pm-di' },
  { id: 'pm-q12', testId: 'test-pm16', text: '你更认同哪种观点：规律是被发现的，还是被总结的？', order: 12, dimensionId: 'pm-di' },
  { id: 'pm-q13', testId: 'test-pm16', text: '遇到不熟悉的新情境，你会…', order: 13, dimensionId: 'pm-di' },
  { id: 'pm-q14', testId: 'test-pm16', text: '你在论证时，更依赖的是…', order: 14, dimensionId: 'pm-di' },
  { id: 'pm-q15', testId: 'test-pm16', text: '分析一件事，你更习惯先…', order: 15, dimensionId: 'pm-di' },
  { id: 'pm-q16', testId: 'test-pm16', text: '你认为科学进步的主要路径是…', order: 16, dimensionId: 'pm-di' },
  // 价值立场 dim-uc
  { id: 'pm-q17', testId: 'test-pm16', text: '你认为道德判断…', order: 17, dimensionId: 'pm-uc' },
  { id: 'pm-q18', testId: 'test-pm16', text: '"在某些极端情境下撒谎是正确的"——你怎么看这句话？', order: 18, dimensionId: 'pm-uc' },
  { id: 'pm-q19', testId: 'test-pm16', text: '你更倾向于评价行为的哪个方面？', order: 19, dimensionId: 'pm-uc' },
  { id: 'pm-q20', testId: 'test-pm16', text: '一条跨越文化的"普世道德法则"…', order: 20, dimensionId: 'pm-uc' },
  { id: 'pm-q21', testId: 'test-pm16', text: '当"规则"与具体"情境中的善意结果"冲突时，你倾向于…', order: 21, dimensionId: 'pm-uc' },
  { id: 'pm-q22', testId: 'test-pm16', text: '你更认同哪种说法？', order: 22, dimensionId: 'pm-uc' },
  { id: 'pm-q23', testId: 'test-pm16', text: '面对不同文化的道德观念，你的第一反应是…', order: 23, dimensionId: 'pm-uc' },
  { id: 'pm-q24', testId: 'test-pm16', text: '评价一个人的行为，最重要的标准是…', order: 24, dimensionId: 'pm-uc' },
  // 存在观 dim-cr
  { id: 'pm-q25', testId: 'test-pm16', text: '"现实"在我们认识它之前就独立存在——你认为这句话…', order: 25, dimensionId: 'pm-cr' },
  { id: 'pm-q26', testId: 'test-pm16', text: '语言和概念对我们理解世界的作用是…', order: 26, dimensionId: 'pm-cr' },
  { id: 'pm-q27', testId: 'test-pm16', text: '你认为人类的"客观认识"…', order: 27, dimensionId: 'pm-cr' },
  { id: 'pm-q28', testId: 'test-pm16', text: '真理是…', order: 28, dimensionId: 'pm-cr' },
  { id: 'pm-q29', testId: 'test-pm16', text: '科学描述的世界与真实世界之间的关系是…', order: 29, dimensionId: 'pm-cr' },
  { id: 'pm-q30', testId: 'test-pm16', text: '"自我"这个概念是…', order: 30, dimensionId: 'pm-cr' },
  { id: 'pm-q31', testId: 'test-pm16', text: '人类对自然规律的认识是…', order: 31, dimensionId: 'pm-cr' },
  { id: 'pm-q32', testId: 'test-pm16', text: '不同文化产生不同世界观，你认为这说明…', order: 32, dimensionId: 'pm-cr' },
];

export const pm16Options: Record<string, TestOption[]> = {
  'pm-q1': [
    { id: 'pm-q1-a', questionId: 'pm-q1', text: '理性与先天的推理能力——有些真理无需经验就能认识', value: 2, dimensionScores: { 'pm-re': 2 } },
    { id: 'pm-q1-b', questionId: 'pm-q1', text: '两者都重要，理性与经验相互补充', value: 1, dimensionScores: { 'pm-re': 0 } },
    { id: 'pm-q1-c', questionId: 'pm-q1', text: '感官经验与观察——没有观察就没有知识', value: 0, dimensionScores: { 'pm-re': -2 } },
  ],
  'pm-q2': [
    { id: 'pm-q2-a', questionId: 'pm-q2', text: '会，逻辑上成立就足够了', value: 2, dimensionScores: { 'pm-re': 2 } },
    { id: 'pm-q2-b', questionId: 'pm-q2', text: '部分接受，还需要一定的现实依据', value: 1, dimensionScores: { 'pm-re': 0 } },
    { id: 'pm-q2-c', questionId: 'pm-q2', text: '不会，没有经验验证的结论很可疑', value: 0, dimensionScores: { 'pm-re': -2 } },
  ],
  'pm-q3': [
    { id: 'pm-q3-a', questionId: 'pm-q3', text: '在头脑中推演和建构逻辑体系', value: 2, dimensionScores: { 'pm-re': 2 } },
    { id: 'pm-q3-b', questionId: 'pm-q3', text: '两种都需要，不同场景用不同方法', value: 1, dimensionScores: { 'pm-re': 0 } },
    { id: 'pm-q3-c', questionId: 'pm-q3', text: '走进现实，亲身体验和观察', value: 0, dimensionScores: { 'pm-re': -2 } },
  ],
  'pm-q4': [
    { id: 'pm-q4-a', questionId: 'pm-q4', text: '它揭示了思维本身的力量，十分深刻', value: 2, dimensionScores: { 'pm-re': 2 } },
    { id: 'pm-q4-b', questionId: 'pm-q4', text: '有一定道理，但需要进一步分析', value: 1, dimensionScores: { 'pm-re': 0 } },
    { id: 'pm-q4-c', questionId: 'pm-q4', text: '这只是语言游戏，缺乏实质内容', value: 0, dimensionScores: { 'pm-re': -2 } },
  ],
  'pm-q5': [
    { id: 'pm-q5-a', questionId: 'pm-q5', text: '不需要，数学是先于经验存在的逻辑体系', value: 2, dimensionScores: { 'pm-re': 2 } },
    { id: 'pm-q5-b', questionId: 'pm-q5', text: '数学有其内在逻辑，但也可以联系实际', value: 1, dimensionScores: { 'pm-re': 0 } },
    { id: 'pm-q5-c', questionId: 'pm-q5', text: '需要，任何知识最终要回到现实检验', value: 0, dimensionScores: { 'pm-re': -2 } },
  ],
  'pm-q6': [
    { id: 'pm-q6-a', questionId: 'pm-q6', text: '"心灵天生就具备认识真理的能力"', value: 2, dimensionScores: { 'pm-re': 2 } },
    { id: 'pm-q6-b', questionId: 'pm-q6', text: '"心灵既有先天结构，也依赖后天经验"', value: 1, dimensionScores: { 'pm-re': 0 } },
    { id: 'pm-q6-c', questionId: 'pm-q6', text: '"心灵是一块白板，一切来自经验"', value: 0, dimensionScores: { 'pm-re': -2 } },
  ],
  'pm-q7': [
    { id: 'pm-q7-a', questionId: 'pm-q7', text: '建立概念框架，再用框架去理解现象', value: 2, dimensionScores: { 'pm-re': 2 } },
    { id: 'pm-q7-b', questionId: 'pm-q7', text: '理论与实践交替推进', value: 1, dimensionScores: { 'pm-re': 0 } },
    { id: 'pm-q7-c', questionId: 'pm-q7', text: '大量接触现象，慢慢归纳出规律', value: 0, dimensionScores: { 'pm-re': -2 } },
  ],
  'pm-q8': [
    { id: 'pm-q8-a', questionId: 'pm-q8', text: '逻辑推导的结论——感官可能欺骗我们', value: 2, dimensionScores: { 'pm-re': 2 } },
    { id: 'pm-q8-b', questionId: 'pm-q8', text: '视情况，两者都需要认真考察', value: 1, dimensionScores: { 'pm-re': 0 } },
    { id: 'pm-q8-c', questionId: 'pm-q8', text: '亲眼所见的现象——逻辑可能有前提错误', value: 0, dimensionScores: { 'pm-re': -2 } },
  ],
  'pm-q9': [
    { id: 'pm-q9-a', questionId: 'pm-q9', text: '一个公理或基本原则，然后向下推导', value: 2, dimensionScores: { 'pm-di': 2 } },
    { id: 'pm-q9-b', questionId: 'pm-q9', text: '根据具体情况，两种方向都会用', value: 1, dimensionScores: { 'pm-di': 0 } },
    { id: 'pm-q9-c', questionId: 'pm-q9', text: '具体案例和现象，然后向上寻找规律', value: 0, dimensionScores: { 'pm-di': -2 } },
  ],
  'pm-q10': [
    { id: 'pm-q10-a', questionId: 'pm-q10', text: '从原则出发推出结论（演绎）', value: 2, dimensionScores: { 'pm-di': 2 } },
    { id: 'pm-q10-b', questionId: 'pm-q10', text: '两种都擅长', value: 1, dimensionScores: { 'pm-di': 0 } },
    { id: 'pm-q10-c', questionId: 'pm-q10', text: '从案例中归纳总结（归纳）', value: 0, dimensionScores: { 'pm-di': -2 } },
  ],
  'pm-q11': [
    { id: 'pm-q11-a', questionId: 'pm-q11', text: '先确立核心假设，再逐步分解子问题', value: 2, dimensionScores: { 'pm-di': 2 } },
    { id: 'pm-q11-b', questionId: 'pm-q11', text: '同时从两个方向探索', value: 1, dimensionScores: { 'pm-di': 0 } },
    { id: 'pm-q11-c', questionId: 'pm-q11', text: '先收集大量信息，再从中发现模式', value: 0, dimensionScores: { 'pm-di': -2 } },
  ],
  'pm-q12': [
    { id: 'pm-q12-a', questionId: 'pm-q12', text: '规律是被发现的，自然界本就有其内在秩序', value: 2, dimensionScores: { 'pm-di': 2 } },
    { id: 'pm-q12-b', questionId: 'pm-q12', text: '两者都有道理', value: 1, dimensionScores: { 'pm-di': 0 } },
    { id: 'pm-q12-c', questionId: 'pm-q12', text: '规律是被总结的，是人类对现象的抽象', value: 0, dimensionScores: { 'pm-di': -2 } },
  ],
  'pm-q13': [
    { id: 'pm-q13-a', questionId: 'pm-q13', text: '尝试用已有的原则框架来理解它', value: 2, dimensionScores: { 'pm-di': 2 } },
    { id: 'pm-q13-b', questionId: 'pm-q13', text: '先了解情况，再决定用什么框架', value: 1, dimensionScores: { 'pm-di': 0 } },
    { id: 'pm-q13-c', questionId: 'pm-q13', text: '先观察和体验，看看能发现什么规律', value: 0, dimensionScores: { 'pm-di': -2 } },
  ],
  'pm-q14': [
    { id: 'pm-q14-a', questionId: 'pm-q14', text: '逻辑上的一致性与必然性', value: 2, dimensionScores: { 'pm-di': 2 } },
    { id: 'pm-q14-b', questionId: 'pm-q14', text: '逻辑加上案例支撑', value: 1, dimensionScores: { 'pm-di': 0 } },
    { id: 'pm-q14-c', questionId: 'pm-q14', text: '充足的案例和数据证据', value: 0, dimensionScores: { 'pm-di': -2 } },
  ],
  'pm-q15': [
    { id: 'pm-q15-a', questionId: 'pm-q15', text: '明确核心命题，再展开分析', value: 2, dimensionScores: { 'pm-di': 2 } },
    { id: 'pm-q15-b', questionId: 'pm-q15', text: '视具体情况而定', value: 1, dimensionScores: { 'pm-di': 0 } },
    { id: 'pm-q15-c', questionId: 'pm-q15', text: '收集相关信息和实例，再尝试理解', value: 0, dimensionScores: { 'pm-di': -2 } },
  ],
  'pm-q16': [
    { id: 'pm-q16-a', questionId: 'pm-q16', text: '从理论出发，推导出可检验的假设', value: 2, dimensionScores: { 'pm-di': 2 } },
    { id: 'pm-q16-b', questionId: 'pm-q16', text: '理论与实验相互推动', value: 1, dimensionScores: { 'pm-di': 0 } },
    { id: 'pm-q16-c', questionId: 'pm-q16', text: '从大量观察中总结出规律和模型', value: 0, dimensionScores: { 'pm-di': -2 } },
  ],
  'pm-q17': [
    { id: 'pm-q17-a', questionId: 'pm-q17', text: '有客观基础，有些行为本质上就是对或错的', value: 2, dimensionScores: { 'pm-uc': 2 } },
    { id: 'pm-q17-b', questionId: 'pm-q17', text: '有一定普遍性，但也受情境影响', value: 1, dimensionScores: { 'pm-uc': 0 } },
    { id: 'pm-q17-c', questionId: 'pm-q17', text: '总是相对的，离不开具体情境和文化背景', value: 0, dimensionScores: { 'pm-uc': -2 } },
  ],
  'pm-q18': [
    { id: 'pm-q18-a', questionId: 'pm-q18', text: '错，诚实是道德基本原则，不能因情境而放弃', value: 2, dimensionScores: { 'pm-uc': 2 } },
    { id: 'pm-q18-b', questionId: 'pm-q18', text: '需要权衡，有时确实难以判断', value: 1, dimensionScores: { 'pm-uc': 0 } },
    { id: 'pm-q18-c', questionId: 'pm-q18', text: '有道理，好的结果有时需要灵活对待规则', value: 0, dimensionScores: { 'pm-uc': -2 } },
  ],
  'pm-q19': [
    { id: 'pm-q19-a', questionId: 'pm-q19', text: '行为本身是否符合道德原则', value: 2, dimensionScores: { 'pm-uc': 2 } },
    { id: 'pm-q19-b', questionId: 'pm-q19', text: '原则与结果都很重要', value: 1, dimensionScores: { 'pm-uc': 0 } },
    { id: 'pm-q19-c', questionId: 'pm-q19', text: '行为带来的实际结果和影响', value: 0, dimensionScores: { 'pm-uc': -2 } },
  ],
  'pm-q20': [
    { id: 'pm-q20-a', questionId: 'pm-q20', text: '是可能的，人类有共同的道德直觉和理性', value: 2, dimensionScores: { 'pm-uc': 2 } },
    { id: 'pm-q20-b', questionId: 'pm-q20', text: '有一些基本共识，但细节因文化而异', value: 1, dimensionScores: { 'pm-uc': 0 } },
    { id: 'pm-q20-c', questionId: 'pm-q20', text: '道德本质上是文化建构的，普世道德是幻觉', value: 0, dimensionScores: { 'pm-uc': -2 } },
  ],
  'pm-q21': [
    { id: 'pm-q21-a', questionId: 'pm-q21', text: '坚持规则，规则的普遍性正是其价值所在', value: 2, dimensionScores: { 'pm-uc': 2 } },
    { id: 'pm-q21-b', questionId: 'pm-q21', text: '视情况权衡，寻找最合理的处理方式', value: 1, dimensionScores: { 'pm-uc': 0 } },
    { id: 'pm-q21-c', questionId: 'pm-q21', text: '优先考虑情境和结果，规则是工具不是目的', value: 0, dimensionScores: { 'pm-uc': -2 } },
  ],
  'pm-q22': [
    { id: 'pm-q22-a', questionId: 'pm-q22', text: '"对的事无论何时何地都是对的"', value: 2, dimensionScores: { 'pm-uc': 2 } },
    { id: 'pm-q22-b', questionId: 'pm-q22', text: '"大多数道德原则是普遍的，但细节因情境而异"', value: 1, dimensionScores: { 'pm-uc': 0 } },
    { id: 'pm-q22-c', questionId: 'pm-q22', text: '"离开了具体情境，道德判断就失去意义"', value: 0, dimensionScores: { 'pm-uc': -2 } },
  ],
  'pm-q23': [
    { id: 'pm-q23-a', questionId: 'pm-q23', text: '这说明不同文化对同一道德真理有不同理解方式', value: 2, dimensionScores: { 'pm-uc': 2 } },
    { id: 'pm-q23-b', questionId: 'pm-q23', text: '既有共通之处，也有各自的合理性', value: 1, dimensionScores: { 'pm-uc': 0 } },
    { id: 'pm-q23-c', questionId: 'pm-q23', text: '这说明道德本就是文化的产物，没有高下之分', value: 0, dimensionScores: { 'pm-uc': -2 } },
  ],
  'pm-q24': [
    { id: 'pm-q24-a', questionId: 'pm-q24', text: '行为是否遵循了普遍的道德原则', value: 2, dimensionScores: { 'pm-uc': 2 } },
    { id: 'pm-q24-b', questionId: 'pm-q24', text: '原则、动机与结果共同决定', value: 1, dimensionScores: { 'pm-uc': 0 } },
    { id: 'pm-q24-c', questionId: 'pm-q24', text: '在具体情境中是否做出了最好的选择', value: 0, dimensionScores: { 'pm-uc': -2 } },
  ],
  'pm-q25': [
    { id: 'pm-q25-a', questionId: 'pm-q25', text: '对，外部世界独立于我们的认知而存在', value: 2, dimensionScores: { 'pm-cr': -2 } },
    { id: 'pm-q25-b', questionId: 'pm-q25', text: '部分同意，有一个外部世界，但我们的认知会塑造对它的理解', value: 1, dimensionScores: { 'pm-cr': 0 } },
    { id: 'pm-q25-c', questionId: 'pm-q25', text: '存疑，"现实"是认知与经验共同建构的', value: 0, dimensionScores: { 'pm-cr': 2 } },
  ],
  'pm-q26': [
    { id: 'pm-q26-a', questionId: 'pm-q26', text: '只是工具，世界的存在不依赖于我们如何描述它', value: 2, dimensionScores: { 'pm-cr': -2 } },
    { id: 'pm-q26-b', questionId: 'pm-q26', text: '语言影响我们的理解，但不完全决定现实', value: 1, dimensionScores: { 'pm-cr': 0 } },
    { id: 'pm-q26-c', questionId: 'pm-q26', text: '深刻地塑造了我们所能认识的"现实"本身', value: 0, dimensionScores: { 'pm-cr': 2 } },
  ],
  'pm-q27': [
    { id: 'pm-q27-a', questionId: 'pm-q27', text: '可以是真实可靠的，有些知识确实反映了客观世界', value: 2, dimensionScores: { 'pm-cr': -2 } },
    { id: 'pm-q27-b', questionId: 'pm-q27', text: '部分可靠，但认知者的视角总会有影响', value: 1, dimensionScores: { 'pm-cr': 0 } },
    { id: 'pm-q27-c', questionId: 'pm-q27', text: '总是带有认知者的视角和建构成分', value: 0, dimensionScores: { 'pm-cr': 2 } },
  ],
  'pm-q28': [
    { id: 'pm-q28-a', questionId: 'pm-q28', text: '独立于人类信念存在的客观事实', value: 2, dimensionScores: { 'pm-cr': -2 } },
    { id: 'pm-q28-b', questionId: 'pm-q28', text: '客观性是真理的目标，但认识总受主体影响', value: 1, dimensionScores: { 'pm-cr': 0 } },
    { id: 'pm-q28-c', questionId: 'pm-q28', text: '共同体在特定框架内形成的合理共识', value: 0, dimensionScores: { 'pm-cr': 2 } },
  ],
  'pm-q29': [
    { id: 'pm-q29-a', questionId: 'pm-q29', text: '科学描述正在逐步接近真实世界', value: 2, dimensionScores: { 'pm-cr': -2 } },
    { id: 'pm-q29-b', questionId: 'pm-q29', text: '科学模型有效但不一定完全对应现实', value: 1, dimensionScores: { 'pm-cr': 0 } },
    { id: 'pm-q29-c', questionId: 'pm-q29', text: '科学是一套有用的建构框架，而非现实的镜像', value: 0, dimensionScores: { 'pm-cr': 2 } },
  ],
  'pm-q30': [
    { id: 'pm-q30-a', questionId: 'pm-q30', text: '一个真实存在的主体，尽管难以完全认识', value: 2, dimensionScores: { 'pm-cr': -2 } },
    { id: 'pm-q30-b', questionId: 'pm-q30', text: '有真实基础，但也在不断地被经历塑造', value: 1, dimensionScores: { 'pm-cr': 0 } },
    { id: 'pm-q30-c', questionId: 'pm-q30', text: '一种持续建构的叙事，而非固定的本质', value: 0, dimensionScores: { 'pm-cr': 2 } },
  ],
  'pm-q31': [
    { id: 'pm-q31-a', questionId: 'pm-q31', text: '对外在规律的发现，这些规律本就存在', value: 2, dimensionScores: { 'pm-cr': -2 } },
    { id: 'pm-q31-b', questionId: 'pm-q31', text: '既有发现也有建构的成分', value: 1, dimensionScores: { 'pm-cr': 0 } },
    { id: 'pm-q31-c', questionId: 'pm-q31', text: '人类认知框架与世界互动产生的建构', value: 0, dimensionScores: { 'pm-cr': 2 } },
  ],
  'pm-q32': [
    { id: 'pm-q32-a', questionId: 'pm-q32', text: '不同文化对同一现实有不同的描述方式', value: 2, dimensionScores: { 'pm-cr': -2 } },
    { id: 'pm-q32-b', questionId: 'pm-q32', text: '有些文化差异是描述方式不同，有些则是真正的建构差异', value: 1, dimensionScores: { 'pm-cr': 0 } },
    { id: 'pm-q32-c', questionId: 'pm-q32', text: '"现实"在不同文化框架中被建构成不同的样子', value: 0, dimensionScores: { 'pm-cr': 2 } },
  ],
};

// PM16 type codes: R/E + D/I + U/C + C/R = 16 types
export const pm16Results: TestResult[] = [
  {
    id: 'pm-rduc', testId: 'test-pm16', typeCode: 'RDUC',
    typeName: '体系建构者',
    summary: '以理性为源泉，演绎为武器，追求普遍真理的终极建构者',
    description: '你是一个思想体系的构筑者。你相信理性本身就能抵达真理，擅长从第一原则出发演绎出庞大的体系。你坚信存在超越文化与情境的普遍道德法则，而现实本身也是被概念和语言所建构的结构。黑格尔、康德或许是你思想上的同路人。',
    strengths: ['善于构建完整自洽的思想体系', '逻辑严密，论证有力', '追求思想的统一与连贯性', '有强烈的理性理想主义精神'],
    weaknesses: ['可能过度抽象，脱离现实经验', '对不符合体系的反例缺乏包容', '有时忽视情境的复杂性'],
    relationships: '你在关系中渴望思想上的深度碰撞。你欣赏能与你辩论又不失温度的人，但要注意不要用逻辑框架来套量他人的感受。',
    career: '适合哲学研究、理论物理、系统设计、法学理论、神学或高层战略规划等需要宏观建构能力的领域。',
    growth: '试着走出你的体系，让偶然的经验和例外打动你——它们往往是最深刻的老师。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'pm-rdir', testId: 'test-pm16', typeCode: 'RDIR',
    typeName: '理性实在论者',
    summary: '用先天理性把握客观存在，相信思维与现实之间存在深刻对应',
    description: '你坚信理性能够认识一个独立存在的客观世界。你从原则出发演绎结论，同时认为这些结论在指向真实的外部现实。笛卡尔和弗雷格是你的同路人——思维不是建构世界，而是在发现世界原本的样子。',
    strengths: ['思维清晰，逻辑严密', '对客观真理有强烈信念', '善于将抽象原则应用于具体问题', '不轻易随波逐流'],
    weaknesses: ['对"客观"的执念可能忽视认知的局限性', '有时对他人的主观视角缺乏耐心', '可能在细节中忽略整体的不确定性'],
    relationships: '你是一个可靠、诚实的伴侣，因为你相信存在真实的对与错。但记得，人心的运作有时不遵循你所熟悉的逻辑。',
    career: '适合数学、逻辑学、法律、分析哲学、计算机科学基础研究等追求精确与客观的领域。',
    growth: '给自己一些空间去体验那些无法被逻辑捕获的事物——美、爱、偶然——它们也是真实的一部分。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'pm-rdcc', testId: 'test-pm16', typeCode: 'RDCC',
    typeName: '普遍道德建构者',
    summary: '以理性之光演绎出跨越情境的道德法则，并相信道德框架本身是建构的产物',
    description: '你相信存在可以理性推导出的普遍道德准则，同时认为我们对现实的认识是通过概念框架建构的。你是一个道德理想主义者，努力构建能够适用于所有人的伦理体系，但也承认认知的媒介性。',
    strengths: ['道德立场坚定，不轻易妥协', '善于建立伦理论证体系', '思想深度与广度兼备', '对原则有强烈的承诺感'],
    weaknesses: ['在道德判断上有时过于刚硬', '可能忽视情境细节对正确行动的影响', '与他人的分歧可能更多是原则性的'],
    relationships: '你对关系有清晰的道德期待，你是忠诚而有原则的伴侣。但允许自己理解对方所处的情境，而不只用原则衡量。',
    career: '适合伦理学研究、法律、政策设计、教育哲学或社会理论等涉及规范性问题的领域。',
    growth: '有时候，最道德的事不是坚持原则，而是真正聆听眼前那个人的处境。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'pm-rdicr', testId: 'test-pm16', typeCode: 'RDCR',
    typeName: '自然法则探寻者',
    summary: '相信可以通过纯粹理性演绎，触及客观存在的道德与自然法则',
    description: '你是理性主义、演绎推理、道德情境主义与实在论的结合体，这是一个罕见的哲学组合。你从理性原则出发，但在道德判断上更看重实际情境而非抽象规则，同时相信你所认识的世界是真实存在的。',
    strengths: ['灵活而有原则', '演绎能力强，但不教条', '对现实有清醒的认识', '善于在逻辑与实践间找到平衡'],
    weaknesses: ['立场有时难以被他人完全理解', '在原则与情境之间的张力中容易感到矛盾', '思维方式较为个人化，不易被套用'],
    relationships: '你能够用原则立场提供稳定感，同时用情境思维给予理解。这让你成为少见的既有原则又有温度的伴侣。',
    career: '适合司法实践、伦理咨询、政策制定、社会科学研究或需要在规范与现实间斡旋的职业。',
    growth: '你的内在张力是你思想深度的来源。不要急于统一，让矛盾成为你持续思考的动力。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'pm-riuc', testId: 'test-pm16', typeCode: 'RIUC',
    typeName: '理性普遍归纳者',
    summary: '从内在理性出发，通过归纳建构跨越情境的普遍原则',
    description: '你相信理性是认识的根基，但你倾向于通过观察和归纳来验证与发展理性原则。你追求普遍的道德准则，并认为现实世界在某种程度上是通过概念建构的。你介于笛卡尔与康德之间，兼具系统性与开放性。',
    strengths: ['既有理性基础又对经验开放', '善于从案例中提炼普遍规律', '对道德原则的坚守不失灵活', '思维方式系统而不僵化'],
    weaknesses: ['在原则与归纳间有时难以取舍', '建构性倾向可能导致对"客观性"的过度质疑', '思维过程较复杂，不易向他人解释'],
    relationships: '你是一个思想上的探索者，在关系中你会不断反思和建构共同的意义。找一个愿意和你一起探索的人。',
    career: '适合跨学科研究、人文科学、伦理学、认知科学或任何需要在理论与案例间往复的领域。',
    growth: '你的优势在于连结理论与经验。记得偶尔停下来，不只是为了找到原则，也为了体验本身。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'pm-riur', testId: 'test-pm16', typeCode: 'RIUR',
    typeName: '理性普遍实在者',
    summary: '通过理性与归纳共同把握客观存在的普遍真理',
    description: '你相信理性是知识的核心来源，倾向于归纳推理，追求普遍道德真理，并相信这些真理指向一个真实存在的世界。你是一个将理性与经验综合的人，同时对普遍性与客观性保持信念。',
    strengths: ['思维扎实且对经验开放', '对真理和道德的追求既有原则又有依据', '善于综合信息形成可靠判断', '不轻易被相对主义动摇'],
    weaknesses: ['可能在归纳与演绎之间摇摆不定', '对普遍性的追求可能忽视文化差异的深层意义', '有时过于自信于"客观"立场'],
    relationships: '你在关系中值得信赖，你的判断通常既有原则又有根据。学会保持好奇心，承认他人的经验可能带来你尚未遇见的真理。',
    career: '适合自然科学、哲学、法律、政治理论或任何需要将原则与事实结合的领域。',
    growth: '真理不只在推论中，也在感受里。试着让自己对无法被论证的事物保持温柔。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'pm-ricc', testId: 'test-pm16', typeCode: 'RICC',
    typeName: '理性情境建构者',
    summary: '以理性为基础，在情境中归纳，并将世界理解为人类认知的建构',
    description: '你是一个灵活的理性主义者：你相信理性是认识的核心，但你在道德上重视情境而非抽象原则，在本体上认为我们对世界的认识是一种建构。你可能喜欢福柯或晚期维特根斯坦。',
    strengths: ['思维灵活，不教条', '善于理解复杂情境中的道德与意义', '理性与情境思维的结合使你具有深度', '对权力、语言与知识的关系有独特洞察'],
    weaknesses: ['立场有时难以向他人清晰表达', '对普遍原则的抵触可能造成判断上的摇摆', '思维太过复杂有时导致行动迟疑'],
    relationships: '你是深刻的倾听者，能够理解每一个独特的处境。你需要一个能够接受复杂性、不急于下结论的伴侣。',
    career: '适合文化研究、批判理论、质性社会科学、临床心理学或艺术领域。',
    growth: '你的洞察力是礼物。偶尔也允许自己站在某个立场上，清晰地表达和行动。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'pm-ricr', testId: 'test-pm16', typeCode: 'RICR',
    typeName: '理性情境实在者',
    summary: '以理性认识一个真实存在的世界，在情境中寻求具体而真实的判断',
    description: '你相信理性是认识的核心，通过归纳认识客观存在的世界，并在道德判断上重视情境而非普遍原则。你是一个务实的理性主义者：思维严谨，但不教条，在具体情境中寻求最真实的答案。',
    strengths: ['思维严谨而不失灵活', '善于在具体情境中做出有依据的判断', '既尊重理性又不忽视情境细节', '务实而深刻'],
    weaknesses: ['有时在普遍原则的缺失中感到不确定', '对主观建构主义倾向保持怀疑，可能错过某些洞见', '实用导向有时削弱了更宏观的哲学视野'],
    relationships: '你是可靠、清醒且体贴的伴侣，能够在每一种情境中给予恰当的回应。注意不要因过于理性而忽视自己内心的感受。',
    career: '适合应用科学、医学、心理治疗、法律实践或管理决策等将理性与实务结合的领域。',
    growth: '有些真实不能被归纳，只能被感受。给自己的直觉多一点信任。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'pm-educ', testId: 'test-pm16', typeCode: 'EDUC',
    typeName: '经验普遍建构者',
    summary: '从经验出发演绎普遍原则，相信世界是人类认知共同建构的',
    description: '你相信知识来自经验，但你能够从经验中演绎出具有普遍意义的道德与认识框架。你认为世界在某种程度上是通过人类的认知框架建构起来的。你是一个深思熟虑的经验主义者，不满足于纯粹的描述，而是努力寻找经验背后的普遍结构。',
    strengths: ['扎根经验又追求深度', '善于从生活经验中提炼普遍意义', '对认知的局限性有清醒认识', '思维兼具实用性与哲学深度'],
    weaknesses: ['从经验演绎到普遍原则的跳跃可能过大', '建构主义倾向可能让你对"客观真理"保持过多距离', '有时难以平衡具体经验与普遍框架'],
    relationships: '你能够从每一段真实经历中提炼意义，是善于反思的伴侣。找一个能够和你一起在生活中发现哲学的人。',
    career: '适合社会学、人类学、教育学、现象学研究或任何在经验与理论之间工作的领域。',
    growth: '你从经验出发的智慧是珍贵的。有时候允许自己不必立刻找到"意义"，只是存在也有它的价值。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'pm-edur', testId: 'test-pm16', typeCode: 'EDUR',
    typeName: '经验实在论者',
    summary: '通过经验与演绎认识一个客观存在的普遍世界',
    description: '你是一个扎根经验的思考者，相信感官观察是知识的起点，同时你能够从经验中演绎出指向客观现实的普遍结论。你可能欣赏洛克或早期的英国经验主义者——相信经验能够触及客观真实，道德也有其客观基础。',
    strengths: ['思维扎实、有依据', '对经验保持尊重，不空谈理论', '能够从观察中提炼可靠结论', '对普遍真理的追求不失务实精神'],
    weaknesses: ['从特殊经验到普遍结论的演绎可能存在逻辑跳跃', '对理论建构的不适可能限制更宏观的思考', '有时过于依赖已有经验，难以突破认知边界'],
    relationships: '你是脚踏实地、真诚可靠的伴侣。你的爱是有质感的，体现在真实的陪伴与行动中。',
    career: '适合自然科学、工程学、经济学、实证社会科学或任何以观察和数据为基础的领域。',
    growth: '真实的世界比你已经见过的更大。保持对那些尚未被经验过的事物的好奇心。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'pm-edcc', testId: 'test-pm16', typeCode: 'EDCC',
    typeName: '经验情境建构者',
    summary: '从具体经验出发，在情境中演绎，将世界理解为人类共同建构',
    description: '你是一个关注具体情境的建构主义者。你相信知识来自经验，道德判断依赖于情境，而我们所认识的世界也是经由人类认知框架建构的。杜威的实用主义或某些后现代思想家可能与你产生共鸣。',
    strengths: ['对情境高度敏感', '能够在具体经验中发现深刻意义', '不被抽象教条束缚', '对多元视角保持开放'],
    weaknesses: ['可能缺乏跨情境的一致性立场', '建构主义有时导致判断上的相对主义', '在需要坚定立场时可能犹豫'],
    relationships: '你是极为敏感和体贴的伴侣，能够真正理解对方所处的具体情境。你的挑战在于：有时也需要给出明确的立场。',
    career: '适合设计、教育、咨询、社会工作、质性研究或任何需要深度情境理解的领域。',
    growth: '情境固然重要，但偶尔从经验中抬起头来，也许你会发现某些事情无论在何种情境中都是真实的。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'pm-edcr', testId: 'test-pm16', typeCode: 'EDCR',
    typeName: '经验情境实在者',
    summary: '在具体情境中通过经验认识一个真实存在的世界',
    description: '你是一个务实的哲学者：知识来自经验，道德判断依赖情境，而你所认识的世界是真实客观存在的。你不喜欢抽象的理论体系，更信任亲历的经验和具体情境中的真实判断。亚里士多德的某些方面或许与你相近。',
    strengths: ['极度务实，脚踏实地', '善于在具体情境中做出有依据的判断', '对现实保持清醒认识', '不被抽象理论所迷惑'],
    weaknesses: ['可能对哲学抽象层面缺乏兴趣', '有时因过于务实而错失更宏观的视野', '在普遍原则的缺失中可能在跨情境判断上遇到挑战'],
    relationships: '你是最真实的那种人：你用切实的行动和在场来表达关心，而不是言语。记得偶尔说出你内心所感受到的。',
    career: '适合临床医学、法律实践、工程、管理、体力劳动中的技艺领域或任何需要直接面对现实的工作。',
    growth: '经验是最好的老师，你深知这一点。偶尔也让自己思考一下"为什么"——不只是"怎么做"。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'pm-eiuc', testId: 'test-pm16', typeCode: 'EIUC',
    typeName: '经验归纳建构者',
    summary: '从感官出发，归纳出普遍结构，并将认识理解为建构的过程',
    description: '你相信经验是知识的基础，通过归纳方法寻找规律，追求跨越情境的普遍道德准则，同时认为我们的认识是通过概念框架建构的。你是一个现代认识论意义上的建构主义经验主义者，可能与皮亚杰或维果茨基有共鸣。',
    strengths: ['善于从大量经验中提炼模式', '对认知过程有深刻理解', '追求普遍性而不失对经验的尊重', '善于跨领域建立连接'],
    weaknesses: ['归纳的局限性（无法从有限案例确证普遍结论）', '建构主义倾向可能导致对客观性的持续质疑', '有时难以从具体经验中抽身看到整体'],
    relationships: '你是善于观察和理解他人模式的伴侣，往往比对方更早看到关系的走向。注意不要把你的"归纳"当作绝对的预测。',
    career: '适合发展心理学、教育研究、认知科学、质性社会研究或任何在经验与模式识别之间工作的领域。',
    growth: '你已经很擅长理解"是什么"，试着多问问"应该是什么"——你内心其实有答案。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'pm-eiur', testId: 'test-pm16', typeCode: 'EIUR',
    typeName: '科学归纳实在者',
    summary: '通过经验归纳认识一个客观存在的普遍世界',
    description: '你代表了现代科学精神的核心：知识来自经验和观察，通过归纳方法形成理论，这些理论指向客观存在的普遍真理，而道德也有其客观基础。你可能是一个朴素的科学实在论者，相信科学正在接近真实的世界。',
    strengths: ['思维严谨，基于证据', '对科学方法有深刻的认同', '既追求普遍真理又尊重观察事实', '不轻易被没有依据的论断说服'],
    weaknesses: ['可能低估科学框架本身的建构性', '对无法被经验检验的命题持过度怀疑', '有时因强调客观而忽视主观体验的价值'],
    relationships: '你是可靠、理性的伴侣，你做出的承诺通常有充分的依据。试着也给一些无法被"证明"的感受留出空间。',
    career: '适合自然科学、工程学、数据科学、实证研究或任何以科学方法为核心的领域。',
    growth: '科学给你提供了理解世界的有力工具。但有些最重要的事情不在数据里——它们在你自己心里。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'pm-eicc', testId: 'test-pm16', typeCode: 'EICC',
    typeName: '情境归纳建构者',
    summary: '在经验与情境中归纳，相信现实是多元建构的',
    description: '你是彻底的后现代或社会建构主义倾向者：知识来自经验，推理方式是归纳，道德判断依赖情境，而现实也是被社会与认知建构的。你可能与维特根斯坦的晚期思想、社会建构主义或后结构主义有共鸣。',
    strengths: ['对多元视角有极强的开放性', '能够理解知识与权力的复杂关系', '在情境中的判断极为敏锐', '不被单一"真理"所束缚'],
    weaknesses: ['极度相对主义可能导致难以做出明确判断', '在需要坚守立场时容易摇摆', '有时思维过于流动，缺乏稳定的锚点'],
    relationships: '你是最开放、最不评判的伴侣之一，能够接受对方的任何状态。但你自己的需求和立场同样值得被尊重。',
    career: '适合文化研究、批判理论、艺术、后殖民研究、质性社会科学或创意写作。',
    growth: '开放性是你的天赋。但偶尔，给自己一个清晰的立场——它不会关上你的思维，反而会给你稳固的出发点。',
    minScore: 0, maxScore: 100,
  },
  {
    id: 'pm-eicr', testId: 'test-pm16', typeCode: 'EICR',
    typeName: '经验情境探寻者',
    summary: '在真实经验与具体情境中归纳，触及客观存在的世界',
    description: '你是一个真正扎根于现实的哲学者：你通过经验和归纳来认识世界，在情境中做出道德判断，同时相信你所经历的这个世界是真实客观存在的。你是最"务实"的哲学类型，但这种务实包含着深刻的诚实。',
    strengths: ['极度脚踏实地', '在具体情境中的判断极为可靠', '不被抽象理论迷惑，始终回到现实', '有强烈的诚实感和真实感'],
    weaknesses: ['可能对哲学抽象层面缺乏兴趣或耐心', '有时因太过务实而错过更大的意义框架', '在需要原则性立场时可能感到困难'],
    relationships: '你是最真实的陪伴者。你在场的方式是踏实而真诚的，不需要华丽的语言。记得有时也分享你内心更深处的思考。',
    career: '适合实践型的职业：工匠技艺、医疗、田野调查、社会工作、农业、运动或任何将双手和心智直接投入现实的领域。',
    growth: '你已经活在最真实的地方了。偶尔抬起头，思考一下你正在触碰的这个世界的更大图景——它值得你的好奇。',
    minScore: 0, maxScore: 100,
  },
];

export function calculatePm16Result(answers: Record<string, string>): {
  typeCode: string;
  dimensionScores: Record<string, number>;
  result: TestResult;
} {
  const dimScores: Record<string, number> = {
    'pm-re': 0,
    'pm-di': 0,
    'pm-uc': 0,
    'pm-cr': 0,
  };

  pm16Questions.forEach((q) => {
    const optionId = answers[q.id];
    if (!optionId) return;
    const opts = pm16Options[q.id];
    if (!opts) return;
    const opt = opts.find(o => o.id === optionId);
    if (!opt) return;
    Object.entries(opt.dimensionScores).forEach(([dim, score]) => {
      dimScores[dim] = (dimScores[dim] || 0) + (score as number);
    });
  });

  const r = dimScores['pm-re'] > 0 ? 'R' : 'E';
  const d = dimScores['pm-di'] > 0 ? 'D' : 'I';
  const u = dimScores['pm-uc'] > 0 ? 'U' : 'C';
  const c = dimScores['pm-cr'] > 0 ? 'C' : 'R';
  const typeCode = `${r}${d}${u}${c}`;

  const result = pm16Results.find(res => res.typeCode === typeCode) || pm16Results[0];
  return { typeCode, dimensionScores: dimScores, result };
}

