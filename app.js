const CHARACTER_BANK = [
  '人', '口', '手', '足', '目', '耳', '头', '心', '山', '水',
  '火', '土', '日', '月', '星', '云', '雨', '风', '花', '草',
  '木', '田', '石', '金', '车', '船', '飞', '鸟', '鱼', '虫',
  '牛', '羊', '马', '鸡', '狗', '猫', '爸', '妈', '爷', '奶',
  '哥', '姐', '弟', '妹', '老', '师', '学', '校', '书', '本',
  '字', '词', '句', '读', '写', '听', '说', '看', '玩', '吃',
  '喝', '睡', '走', '跑', '跳', '站', '坐', '开', '关', '来',
  '去', '上', '下', '左', '右', '前', '后', '里', '外', '大',
  '小', '多', '少', '长', '短', '高', '矮', '红', '黄', '蓝',
  '绿', '黑', '白', '早', '晚', '春', '夏', '秋', '冬', '家'
];

const SCENE_PACKS = {
  family: {
    label: '家庭',
    words: [
      ['爸爸', '家庭中男性家长', '家里称呼', '👨'],
      ['妈妈', '家庭中女性家长', '家里称呼', '👩'],
      ['爷爷', '爸爸的爸爸', '长辈称呼', '👴'],
      ['奶奶', '爸爸的妈妈', '长辈称呼', '👵'],
      ['哥哥', '年长的男孩', '兄弟关系', '🧑'],
      ['姐姐', '年长的女孩', '姐妹关系', '👧'],
      ['弟弟', '年幼的男孩', '兄弟关系', '👦'],
      ['妹妹', '年幼的女孩', '姐妹关系', '👶'],
      ['叔叔', '男性长辈称呼', '家庭成员', '🙋‍♂️'],
      ['阿姨', '女性长辈称呼', '家庭成员', '🙋‍♀️'],
      ['宝宝', '小朋友', '家庭称呼', '🍼'],
      ['朋友', '一起玩耍的人', '社交关系', '🤝'],
      ['吃饭', '进行用餐', '餐桌场景', '🍚'],
      ['喝水', '补充水分', '日常行为', '🥤'],
      ['洗手', '清洁双手', '卫生习惯', '🫧'],
      ['刷牙', '清洁牙齿', '早晚习惯', '🪥'],
      ['睡觉', '进入睡眠', '夜晚活动', '😴'],
      ['起床', '早上离开床铺', '早晨活动', '⏰'],
      ['穿衣', '穿上衣服', '出门准备', '👕'],
      ['脱鞋', '把鞋脱下', '回家动作', '👟'],
      ['洗澡', '清洁身体', '卫生习惯', '🛁'],
      ['梳头', '整理头发', '洗漱动作', '🪮'],
      ['客厅', '家里会客空间', '居家空间', '🛋️'],
      ['厨房', '做饭空间', '居家空间', '🍳'],
      ['卧室', '睡觉空间', '居家空间', '🛏️'],
      ['阳台', '晒太阳的地方', '居家空间', '🌤️'],
      ['桌子', '放东西的家具', '家庭用品', '🪑'],
      ['椅子', '坐的家具', '家庭用品', '💺'],
      ['电视', '观看节目设备', '家用电器', '📺'],
      ['冰箱', '冷藏食物设备', '家用电器', '🧊'],
      ['窗户', '采光通风位置', '家中结构', '🪟'],
      ['床单', '铺在床上的布', '卧室用品', '🛌'],
      ['枕头', '睡觉垫头用品', '卧室用品', '🛏'],
      ['书包', '上学背包', '学习用品', '🎒'],
      ['玩具', '玩耍物品', '亲子互动', '🧸'],
      ['牛奶', '常见饮品', '早餐食物', '🥛'],
      ['米饭', '常见主食', '家庭饮食', '🍚'],
      ['面条', '条状主食', '家庭饮食', '🍜'],
      ['鸡蛋', '常见食材', '家庭饮食', '🥚'],
      ['水果', '健康食物', '家庭饮食', '🍎']
    ]
  },
  school: {
    label: '学校',
    words: [
      ['老师', '教课的人', '课堂角色', '👩‍🏫'],
      ['同学', '一起学习的伙伴', '班级关系', '👫'],
      ['校长', '学校负责人', '校园角色', '👨‍💼'],
      ['班级', '学生组织单位', '校园结构', '🏫'],
      ['教室', '上课的房间', '校园空间', '🧑‍🏫'],
      ['黑板', '写字展示板', '教学工具', '⬛'],
      ['粉笔', '在黑板写字的笔', '教学工具', '✏️'],
      ['铅笔', '写字工具', '学习用品', '✏️'],
      ['橡皮', '擦字工具', '学习用品', '🧽'],
      ['本子', '记录内容的纸本', '学习用品', '📓'],
      ['课本', '上课用书', '学习用品', '📘'],
      ['课桌', '课堂用桌', '教室物品', '🪑'],
      ['文具', '学习工具集合', '学习用品', '🧰'],
      ['作业', '课后练习任务', '学习任务', '📝'],
      ['朗读', '大声读书', '语文活动', '📖'],
      ['写字', '用笔写字', '课堂活动', '✍️'],
      ['画画', '进行绘画', '艺术活动', '🎨'],
      ['数学', '数字计算课程', '学科课程', '➗'],
      ['语文', '汉语课程', '学科课程', '🈶'],
      ['英语', '英文课程', '学科课程', '🔤'],
      ['音乐', '唱歌听曲课程', '学科课程', '🎵'],
      ['体育', '运动课程', '学科课程', '⚽'],
      ['上课', '课程进行中', '课堂时间', '🔔'],
      ['下课', '课程结束', '课堂时间', '🔕'],
      ['早读', '早晨朗读', '校园活动', '🌅'],
      ['午休', '中午休息', '校园活动', '😌'],
      ['排队', '按顺序站好', '校园秩序', '🚶'],
      ['举手', '主动发言动作', '课堂互动', '🙋'],
      ['回答', '对问题作答', '课堂互动', '💬'],
      ['值日', '轮流做卫生', '班级事务', '🧹'],
      ['清洁', '打扫卫生', '班级事务', '🫧'],
      ['图书', '可阅读书籍', '阅读资源', '📚'],
      ['操场', '户外运动场地', '校园空间', '🏃'],
      ['跑步', '快速行走运动', '体育活动', '🏃‍♂️'],
      ['跳绳', '用绳子跳跃', '体育活动', '🪢'],
      ['游戏', '趣味活动', '课间活动', '🎯'],
      ['考试', '阶段测试', '学习评价', '📋'],
      ['成绩', '考试结果', '学习评价', '📈'],
      ['奖状', '表扬证明', '荣誉奖励', '🏅'],
      ['校门', '学校入口', '校园空间', '🚪']
    ]
  },
  market: {
    label: '超市',
    words: [
      ['超市', '买东西的地方', '购物场景', '🏪'],
      ['商店', '售卖商品的店铺', '购物场景', '🏬'],
      ['购物', '挑选并购买商品', '购物行为', '🛍️'],
      ['购物车', '装商品的小车', '购物工具', '🛒'],
      ['货架', '摆放商品架子', '购物场景', '🗄️'],
      ['收银', '结算付款过程', '付款流程', '💳'],
      ['付款', '支付商品费用', '付款流程', '💰'],
      ['价格', '商品多少钱', '商品信息', '🏷️'],
      ['标签', '商品说明贴纸', '商品信息', '🔖'],
      ['发票', '购物凭证', '付款流程', '🧾'],
      ['蔬菜', '绿色食材', '生鲜区', '🥬'],
      ['面包', '烘焙食品', '烘焙区', '🍞'],
      ['饮料', '喝的商品', '冷柜区', '🧃'],
      ['酸奶', '奶类饮品', '冷藏区', '🥣'],
      ['饼干', '零食点心', '零食区', '🍪'],
      ['糖果', '甜味零食', '零食区', '🍬'],
      ['青菜', '绿色蔬菜', '生鲜区', '🥗'],
      ['苹果', '红色水果', '水果区', '🍎'],
      ['香蕉', '黄色水果', '水果区', '🍌'],
      ['西瓜', '夏天水果', '水果区', '🍉'],
      ['土豆', '常见根茎蔬菜', '蔬菜区', '🥔'],
      ['胡萝卜', '橙色蔬菜', '蔬菜区', '🥕'],
      ['番茄', '红色蔬果', '蔬菜区', '🍅'],
      ['黄瓜', '绿色蔬菜', '蔬菜区', '🥒'],
      ['南瓜', '橙色蔬菜', '蔬菜区', '🎃'],
      ['鱼肉', '鱼类食材', '生鲜区', '🐟'],
      ['鸡肉', '鸡类食材', '生鲜区', '🍗'],
      ['猪肉', '猪类食材', '生鲜区', '🥩'],
      ['大米', '做饭原料', '粮油区', '🌾'],
      ['食盐', '调味品', '粮油区', '🧂'],
      ['食油', '烹饪用油', '粮油区', '🫗'],
      ['酱油', '常见调味料', '调味区', '🥫'],
      ['餐巾', '擦手纸品', '日用品区', '🧻'],
      ['袋子', '装东西用品', '结账区', '👜'],
      ['零钱', '小面额钱币', '付款场景', '🪙'],
      ['牙膏', '刷牙用品', '日用品区', '🪥'],
      ['毛巾', '洗脸擦手布', '日用品区', '🧺'],
      ['肥皂', '清洁用品', '日用品区', '🧼'],
      ['电池', '供电用品', '百货区', '🔋'],
      ['雨伞', '下雨工具', '百货区', '☔']
    ]
  },
  transport: {
    label: '交通',
    words: [
      ['马路', '车辆行驶道路', '出行场景', '🛣️'],
      ['红灯', '停止通行信号', '交通规则', '🔴'],
      ['绿灯', '可以通行信号', '交通规则', '🟢'],
      ['黄灯', '准备等待信号', '交通规则', '🟡'],
      ['斑马线', '行人过街线', '交通规则', '🚸'],
      ['人行道', '行人走路区域', '道路区域', '🚶‍♀️'],
      ['过街', '穿越马路行为', '交通行为', '🚶'],
      ['天桥', '跨路人行桥', '道路设施', '🌉'],
      ['地铁', '地下轨道交通', '公共交通', '🚇'],
      ['公交', '公共汽车', '公共交通', '🚌'],
      ['站台', '候车位置', '交通节点', '🚏'],
      ['车票', '乘车凭证', '交通凭证', '🎫'],
      ['刷卡', '刷交通卡', '乘车动作', '💳'],
      ['候车', '等待车辆到来', '乘车流程', '⌛'],
      ['上车', '进入交通工具', '乘车流程', '🪜'],
      ['下车', '离开交通工具', '乘车流程', '🚶‍♂️'],
      ['安全带', '保护乘客装置', '安全规则', '🧷'],
      ['头盔', '保护头部用品', '安全规则', '⛑️'],
      ['司机', '开车的人', '交通角色', '🧑‍✈️'],
      ['乘客', '乘车的人', '交通角色', '👥'],
      ['自行车', '两轮脚踏车', '交通工具', '🚲'],
      ['电动车', '电力驱动车', '交通工具', '🛵'],
      ['小汽车', '家庭出行车辆', '交通工具', '🚗'],
      ['大巴', '大型客车', '交通工具', '🚍'],
      ['火车', '轨道列车', '交通工具', '🚆'],
      ['飞机', '空中交通工具', '交通工具', '✈️'],
      ['船只', '水上交通工具', '交通工具', '🚢'],
      ['机场', '飞机起降地点', '交通节点', '🛫'],
      ['车站', '车辆停靠地点', '交通节点', '🏁'],
      ['导航', '指引路线系统', '出行辅助', '🧭'],
      ['方向', '前进方位', '出行辅助', '🗺️'],
      ['左转', '向左改变方向', '行驶动作', '↩️'],
      ['右转', '向右改变方向', '行驶动作', '↪️'],
      ['直行', '一直向前', '行驶动作', '⬆️'],
      ['慢行', '减速行驶', '安全提示', '🐢'],
      ['停车', '车辆停止', '行驶动作', '🅿️'],
      ['出发', '开始行程', '出行动作', '🚀'],
      ['到达', '抵达目的地', '出行动作', '🎯'],
      ['回家', '返回家中', '出行目标', '🏠'],
      ['路线', '到目的地路径', '出行辅助', '🛤️']
    ]
  },
  nature: {
    label: '自然社区',
    words: [
      ['公园', '休闲活动场所', '户外场景', '🌳'],
      ['花园', '种花的小园地', '户外场景', '🌷'],
      ['草地', '长满草的地面', '自然景物', '🌱'],
      ['树木', '高大的植物', '自然景物', '🌲'],
      ['花朵', '植物开的花', '自然景物', '🌸'],
      ['小鸟', '会飞的小动物', '自然动物', '🐦'],
      ['蝴蝶', '彩色昆虫', '自然动物', '🦋'],
      ['蜜蜂', '采蜜昆虫', '自然动物', '🐝'],
      ['蓝天', '蓝色的天空', '天气景象', '🌤️'],
      ['白云', '天空中的云朵', '天气景象', '☁️'],
      ['太阳', '白天发光天体', '天气景象', '☀️'],
      ['月亮', '夜晚天体', '天气景象', '🌙'],
      ['星星', '夜空发光点', '天气景象', '⭐'],
      ['雨天', '下雨天气', '天气景象', '🌧️'],
      ['雪天', '下雪天气', '天气景象', '❄️'],
      ['风车', '风力转动玩具', '自然互动', '🎡'],
      ['河流', '流动水道', '自然景物', '🏞️'],
      ['小桥', '跨河小桥', '自然设施', '🌉'],
      ['石头', '坚硬岩石', '自然景物', '🪨'],
      ['沙子', '细小颗粒', '自然景物', '🏖️'],
      ['医院', '看病的地方', '社区场景', '🏥'],
      ['医生', '给人看病的人', '社区角色', '🩺'],
      ['护士', '照顾病人的人', '社区角色', '👩‍⚕️'],
      ['药房', '购买药品地点', '社区场景', '💊'],
      ['发烧', '体温升高症状', '身体状态', '🤒'],
      ['咳嗽', '喉咙不舒服', '身体状态', '😷'],
      ['打针', '注射治疗', '医疗行为', '💉'],
      ['口罩', '保护呼吸用品', '健康防护', '😷'],
      ['消毒', '杀菌清洁行为', '健康防护', '🧴'],
      ['警察', '维护秩序的人', '社区角色', '👮'],
      ['消防', '扑灭火灾工作', '社区服务', '🚒'],
      ['邮局', '寄信包裹地点', '社区场景', '📮'],
      ['银行', '办理金融业务地点', '社区场景', '🏦'],
      ['广场', '公共开放空间', '社区场景', '🏟️'],
      ['邻居', '住在附近的人', '社区关系', '🏘️'],
      ['社区', '共同生活区域', '社区概念', '🏙️'],
      ['帮助', '给别人支持', '社会行为', '🫶'],
      ['礼貌', '文明说话行为', '社会行为', '🙏'],
      ['谢谢', '表达感谢', '礼仪表达', '😊'],
      ['再见', '告别用语', '礼仪表达', '👋']
    ]
  }
};

const BATCH_SIZE = 20;
const PROGRESS_KEY = 'hanzi_mvp_progress_v2';

const WORD_CATALOG = buildWordCatalog();

const state = {
  activeTab: 'learn',
  selectedLearnScene: null,
  selectedChallengeScene: 'mixed',
  learnIndex: 0,
  challengeRound: null,
  challengeQuestionIndex: 0,
  sessionStart: Date.now(),
  progress: loadProgress()
};

const nodes = {
  tabButtons: [...document.querySelectorAll('.tab-btn')],
  panels: {
    learn: document.getElementById('learn-panel'),
    challenge: document.getElementById('challenge-panel'),
    progress: document.getElementById('progress-panel')
  },
  learnScenePills: document.getElementById('learnScenePills'),
  unlockStatus: document.getElementById('unlockStatus'),
  unlockNextBatchBtn: document.getElementById('unlockNextBatchBtn'),
  learnCard: document.getElementById('learnCard'),
  playAudioBtn: document.getElementById('playAudioBtn'),
  markLearnedBtn: document.getElementById('markLearnedBtn'),
  nextWordBtn: document.getElementById('nextWordBtn'),
  miniQuizBox: document.getElementById('miniQuizBox'),
  challengeScene: document.getElementById('challengeScene'),
  startChallengeBtn: document.getElementById('startChallengeBtn'),
  challengeBox: document.getElementById('challengeBox'),
  statsGrid: document.getElementById('statsGrid'),
  masteryList: document.getElementById('masteryList'),
  weakWords: document.getElementById('weakWords'),
  refreshProgressBtn: document.getElementById('refreshProgressBtn')
};

function buildWordCatalog() {
  let order = 0;
  return Object.entries(SCENE_PACKS).flatMap(([sceneKey, pack]) =>
    pack.words.map(([text, meaning, sceneHint, emoji], idx) => {
      order += 1;
      return {
        id: `${sceneKey}-${idx + 1}`,
        order,
        text,
        meaning,
        sceneHint,
        emoji,
        scene: sceneKey,
        sceneLabel: pack.label
      };
    })
  );
}

function loadProgress() {
  const fallback = {
    learned: {},
    challengeHistory: [],
    wordStats: {},
    daily: {},
    unlockedBatch: 1,
    unlockEvents: []
  };

  const raw = localStorage.getItem(PROGRESS_KEY);
  if (!raw) return fallback;

  try {
    const parsed = JSON.parse(raw);
    return {
      ...fallback,
      ...parsed,
      unlockedBatch: Math.max(1, parsed.unlockedBatch || 1)
    };
  } catch (_) {
    return fallback;
  }
}

function saveProgress() {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(state.progress));
}

function getUnlockedWordCount() {
  return Math.min(state.progress.unlockedBatch * BATCH_SIZE, WORD_CATALOG.length);
}

function getUnlockedWords(sceneKey = 'mixed') {
  const unlockedCount = getUnlockedWordCount();
  const pool = sceneKey === 'mixed' ? WORD_CATALOG : WORD_CATALOG.filter((w) => w.scene === sceneKey);
  return pool.filter((w) => w.order <= unlockedCount);
}

function getWordById(wordId) {
  return WORD_CATALOG.find((x) => x.id === wordId);
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function speak(text) {
  if (!window.speechSynthesis) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'zh-CN';
  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

function shuffle(list) {
  return [...list]
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((v) => v.x);
}

function sample(list, n) {
  return shuffle(list).slice(0, Math.min(n, list.length));
}

function masteryLevelById(wordId) {
  const stat = state.progress.wordStats[wordId] || { right: 0, wrong: 0 };
  const total = stat.right + stat.wrong;
  if (total < 2) return '未掌握';
  const rate = stat.right / total;
  if (rate >= 0.8 && total >= 5) return '已掌握';
  return '练习中';
}

function updateWordStat(wordId, isRight) {
  const item = state.progress.wordStats[wordId] || { right: 0, wrong: 0 };
  if (isRight) item.right += 1;
  else item.wrong += 1;
  state.progress.wordStats[wordId] = item;
}

function markDaily(durationSec = 0) {
  const key = todayKey();
  const day = state.progress.daily[key] || { durationSec: 0, learned: 0 };
  day.durationSec += durationSec;
  state.progress.daily[key] = day;
}

function markLearned(word) {
  const key = todayKey();
  if (!state.progress.learned[word.id]) {
    state.progress.learned[word.id] = key;
    const day = state.progress.daily[key] || { durationSec: 0, learned: 0 };
    day.learned += 1;
    state.progress.daily[key] = day;
  }

  saveProgress();
  renderProgress();
  tryUnlockNextBatch();
}

function getMasteredCountWithinUnlocked() {
  const unlockedSet = new Set(getUnlockedWords('mixed').map((w) => w.id));
  return [...unlockedSet].filter((wordId) => masteryLevelById(wordId) === '已掌握').length;
}

function canUnlockNextBatch() {
  const unlocked = getUnlockedWordCount();
  if (unlocked >= WORD_CATALOG.length) return false;
  const need = Math.ceil(unlocked * 0.6);
  const mastered = getMasteredCountWithinUnlocked();
  return mastered >= need;
}

function tryUnlockNextBatch(manual = false) {
  if (!canUnlockNextBatch()) return false;

  state.progress.unlockedBatch += 1;
  const event = {
    date: todayKey(),
    unlockedTo: getUnlockedWordCount(),
    manual
  };
  state.progress.unlockEvents.push(event);
  saveProgress();
  renderUnlockStatus();

  nodes.learnCard.innerHTML = `
    <h3>词包已解锁</h3>
    <p>已解锁到 ${event.unlockedTo} / ${WORD_CATALOG.length} 词。</p>
    <p class="tip">继续学习和挑战，逐步解锁完整 200 词内容。</p>
  `;

  return true;
}

function createScenePills() {
  nodes.learnScenePills.innerHTML = '';
  Object.entries(SCENE_PACKS).forEach(([sceneKey, pack], idx) => {
    const btn = document.createElement('button');
    btn.className = `pill${idx === 0 ? ' active' : ''}`;
    btn.textContent = pack.label;
    btn.addEventListener('click', () => {
      [...nodes.learnScenePills.querySelectorAll('.pill')].forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedLearnScene = sceneKey;
      state.learnIndex = 0;
      nodes.miniQuizBox.innerHTML = '';
      renderLearnCard();
    });
    nodes.learnScenePills.appendChild(btn);
    if (idx === 0) state.selectedLearnScene = sceneKey;
  });
}

function renderUnlockStatus() {
  const unlocked = getUnlockedWordCount();
  const total = WORD_CATALOG.length;
  const nextNeed = Math.ceil(unlocked * 0.6);
  const mastered = getMasteredCountWithinUnlocked();
  const isAllOpen = unlocked >= total;

  nodes.unlockStatus.textContent = isAllOpen
    ? `已全部解锁：${total}/${total} 词（100字词库）`
    : `已解锁 ${unlocked}/${total} 词 · 已掌握 ${mastered}/${nextNeed}（达标后解锁下一批）`;

  nodes.unlockNextBatchBtn.disabled = isAllOpen || !canUnlockNextBatch();
}

function renderLearnCard() {
  const words = getUnlockedWords(state.selectedLearnScene);
  if (!words.length) {
    nodes.learnCard.innerHTML = '<div class="card-placeholder">当前场景暂无已解锁词语，请先学习并解锁更多词包。</div>';
    return;
  }

  const idx = Math.min(state.learnIndex, words.length - 1);
  state.learnIndex = idx;
  const item = words[idx];
  const learnedTag = state.progress.learned[item.id] ? '已学过' : '新词';

  nodes.learnCard.innerHTML = `
    <p class="word-main">${item.text}</p>
    <div class="illustration-slot">
      <div class="illustration-emoji">${item.emoji}</div>
      <div class="illustration-label">插画素材位：${item.sceneLabel} · ${item.sceneHint}</div>
    </div>
    <p class="word-meta">释义：${item.meaning}</p>
    <p class="word-meta">场景：${item.sceneLabel} · ${item.sceneHint}</p>
    <p class="tip">进度：${idx + 1}/${words.length} · ${learnedTag}</p>
  `;
}

function nextLearnWord() {
  const words = getUnlockedWords(state.selectedLearnScene);
  if (!words.length) return;
  if (state.learnIndex >= words.length - 1) {
    state.learnIndex = 0;
    renderMiniQuiz();
  } else {
    state.learnIndex += 1;
    renderLearnCard();
  }
}

function renderMiniQuiz() {
  const words = sample(getUnlockedWords(state.selectedLearnScene), 4);
  if (words.length < 4) {
    nodes.miniQuizBox.innerHTML = '';
    return;
  }

  const target = words[Math.floor(Math.random() * words.length)];
  const opts = shuffle(words.map((w) => w.meaning));

  nodes.miniQuizBox.innerHTML = `
    <div class="card">
      <h3>学习后小练习</h3>
      <p>“${target.text}” 的意思是哪个？</p>
      <div class="option-grid">
        ${opts.map((x) => `<button class="option-btn" data-answer="${x}">${x}</button>`).join('')}
      </div>
    </div>
  `;

  [...nodes.miniQuizBox.querySelectorAll('.option-btn')].forEach((btn) => {
    btn.addEventListener('click', () => {
      const isRight = btn.dataset.answer === target.meaning;
      updateWordStat(target.id, isRight);
      btn.classList.add(isRight ? 'correct' : 'wrong');
      if (!isRight) {
        const rightBtn = [...nodes.miniQuizBox.querySelectorAll('.option-btn')].find(
          (x) => x.dataset.answer === target.meaning
        );
        if (rightBtn) rightBtn.classList.add('correct');
      }
      saveProgress();
      renderProgress();
      renderUnlockStatus();
      tryUnlockNextBatch();
    });
  });
}

function createChallengeOptions() {
  nodes.challengeScene.innerHTML = `
    <option value="mixed">综合场景</option>
    ${Object.entries(SCENE_PACKS)
      .map(([k, v]) => `<option value="${k}">${v.label}</option>`)
      .join('')}
  `;
}

function buildPictureQuestion(word, pool) {
  const targetChar = word.text[0];
  const distractorChars = shuffle(
    [...new Set(pool.map((x) => x.text[0]).filter((c) => c && c !== targetChar))]
  ).slice(0, 3);

  return {
    type: 'picture',
    prompt: `看图选字：哪个字最符合“${word.meaning}”？`,
    answer: targetChar,
    options: shuffle([targetChar, ...distractorChars]),
    word
  };
}

function buildChallengeRound(sceneKey) {
  const pool = getUnlockedWords(sceneKey);
  const picked = sample(pool, 10);

  const questions = picked.map((word, idx) => {
    const typeIndex = idx % 3;
    const distractors = sample(
      pool.filter((x) => x.id !== word.id),
      3
    );

    if (typeIndex === 0) {
      return {
        type: 'meaning',
        prompt: `在“${word.sceneLabel}”场景中，符合“${word.sceneHint}”的是哪个词？`,
        answer: word.text,
        options: shuffle([word, ...distractors]).map((x) => x.text),
        word
      };
    }

    if (typeIndex === 1) {
      return {
        type: 'audio',
        prompt: '听读音，选择正确词语：',
        answer: word.text,
        options: shuffle([word, ...distractors]).map((x) => x.text),
        word
      };
    }

    return buildPictureQuestion(word, pool);
  });

  return {
    startedAt: Date.now(),
    sceneKey,
    score: 0,
    questions,
    answers: []
  };
}

function renderChallengeQuestion() {
  const round = state.challengeRound;
  if (!round) return;

  if (state.challengeQuestionIndex >= round.questions.length) {
    finishChallenge();
    return;
  }

  const q = round.questions[state.challengeQuestionIndex];

  const illustration = q.type === 'picture'
    ? `<div class="illustration-slot"><div class="illustration-emoji">${q.word.emoji}</div><div class="illustration-label">插画素材位：${q.word.text}（可替换真实插画）</div></div>`
    : '';

  nodes.challengeBox.innerHTML = `
    <h3>第 ${state.challengeQuestionIndex + 1} / ${round.questions.length} 题</h3>
    <p>${q.prompt}</p>
    ${illustration}
    <div class="option-grid">
      ${q.options.map((opt) => `<button class="option-btn" data-option="${opt}">${opt}</button>`).join('')}
    </div>
    <p class="tip">当前得分：${round.score}</p>
  `;

  if (q.type === 'audio') speak(q.word.text);

  [...nodes.challengeBox.querySelectorAll('.option-btn')].forEach((btn) => {
    btn.addEventListener('click', () => {
      const choice = btn.dataset.option;
      const isRight = choice === q.answer;
      if (isRight) {
        btn.classList.add('correct');
        round.score += 1;
      } else {
        btn.classList.add('wrong');
        const rightBtn = [...nodes.challengeBox.querySelectorAll('.option-btn')].find(
          (x) => x.dataset.option === q.answer
        );
        if (rightBtn) rightBtn.classList.add('correct');
      }

      round.answers.push({
        wordId: q.word.id,
        right: isRight
      });
      updateWordStat(q.word.id, isRight);
      saveProgress();

      setTimeout(() => {
        state.challengeQuestionIndex += 1;
        renderChallengeQuestion();
      }, 450);
    });
  });
}

function finishChallenge() {
  const round = state.challengeRound;
  const total = round.questions.length;
  const right = round.score;
  const rate = Math.round((right / total) * 100);
  const stars = rate >= 90 ? '3 星' : rate >= 70 ? '2 星' : '1 星';

  const wrongWords = round.answers
    .filter((x) => !x.right)
    .map((x) => getWordById(x.wordId)?.text)
    .filter(Boolean);

  const costSec = Math.round((Date.now() - round.startedAt) / 1000);

  markDaily(costSec);
  state.progress.challengeHistory.push({
    date: todayKey(),
    scene: round.sceneKey,
    rate,
    total,
    right
  });

  saveProgress();

  nodes.challengeBox.innerHTML = `
    <h3>挑战完成</h3>
    <p>正确率：${rate}%（${right}/${total}）</p>
    <p>评级：${stars} · ${rate >= 70 ? '闯关成功' : '继续努力'}</p>
    <p>用时：${costSec} 秒</p>
    <p>错题词：${wrongWords.length ? wrongWords.join('、') : '本轮全对'}</p>
    <button id="restartChallengeBtn" class="primary-btn">再来一轮</button>
  `;

  document.getElementById('restartChallengeBtn').addEventListener('click', startChallenge);

  state.challengeRound = null;
  state.challengeQuestionIndex = 0;
  renderProgress();
  renderUnlockStatus();
  tryUnlockNextBatch();
}

function startChallenge() {
  state.selectedChallengeScene = nodes.challengeScene.value;

  const pool = getUnlockedWords(state.selectedChallengeScene);
  if (pool.length < 10) {
    nodes.challengeBox.innerHTML = '<p class="tip">当前已解锁词不足 10 个，请先学习并解锁更多词包。</p>';
    return;
  }

  state.challengeRound = buildChallengeRound(state.selectedChallengeScene);
  state.challengeQuestionIndex = 0;
  renderChallengeQuestion();
}

function calcStreak() {
  const days = Object.keys(state.progress.daily).sort();
  if (!days.length) return 0;

  let streak = 0;
  let cursor = new Date();
  cursor.setHours(0, 0, 0, 0);

  while (true) {
    const key = cursor.toISOString().slice(0, 10);
    if (state.progress.daily[key]) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
      continue;
    }
    break;
  }

  return streak;
}

function renderProgress() {
  const learnedCount = Object.keys(state.progress.learned).length;
  const today = state.progress.daily[todayKey()] || { durationSec: 0, learned: 0 };
  const latestRate = state.progress.challengeHistory.at(-1)?.rate ?? '-';
  const streak = calcStreak();

  nodes.statsGrid.innerHTML = `
    <div class="stat"><span>今日学习时长</span><strong>${Math.round(today.durationSec / 60)} 分钟</strong></div>
    <div class="stat"><span>今日新学词</span><strong>${today.learned} 个</strong></div>
    <div class="stat"><span>累计已学词</span><strong>${learnedCount} 个</strong></div>
    <div class="stat"><span>字库规模</span><strong>${CHARACTER_BANK.length} 字</strong></div>
    <div class="stat"><span>词库规模</span><strong>${WORD_CATALOG.length} 词</strong></div>
    <div class="stat"><span>最近挑战正确率</span><strong>${latestRate}%</strong></div>
    <div class="stat"><span>连续学习天数</span><strong>${streak} 天</strong></div>
  `;

  const unlockedWords = getUnlockedWords('mixed');
  const groups = {
    未掌握: [],
    练习中: [],
    已掌握: []
  };

  unlockedWords.forEach((w) => {
    groups[masteryLevelById(w.id)].push(w.text);
  });

  nodes.masteryList.innerHTML = `
    <li>未掌握：${groups.未掌握.length} 个</li>
    <li>练习中：${groups.练习中.length} 个</li>
    <li>已掌握：${groups.已掌握.length} 个</li>
  `;

  const weak = Object.entries(state.progress.wordStats)
    .filter(([, stat]) => stat.wrong > stat.right)
    .sort((a, b) => b[1].wrong - a[1].wrong)
    .slice(0, 8)
    .map(([wordId, stat]) => `${getWordById(wordId)?.text || '未知词'}（错${stat.wrong}次）`);

  nodes.weakWords.innerHTML = weak.length
    ? weak.map((x) => `<li>${x}</li>`).join('')
    : '<li>暂无明显薄弱词，继续保持。</li>';
}

function bindEvents() {
  nodes.tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      state.activeTab = tab;
      nodes.tabButtons.forEach((x) => x.classList.remove('active'));
      btn.classList.add('active');
      Object.entries(nodes.panels).forEach(([k, panel]) => {
        panel.classList.toggle('active', k === tab);
      });
    });
  });

  nodes.playAudioBtn.addEventListener('click', () => {
    const words = getUnlockedWords(state.selectedLearnScene);
    const current = words[state.learnIndex];
    if (current) speak(current.text);
  });

  nodes.markLearnedBtn.addEventListener('click', () => {
    const words = getUnlockedWords(state.selectedLearnScene);
    const current = words[state.learnIndex];
    if (!current) return;
    markLearned(current);
    renderLearnCard();
    renderUnlockStatus();
  });

  nodes.nextWordBtn.addEventListener('click', nextLearnWord);
  nodes.startChallengeBtn.addEventListener('click', startChallenge);

  nodes.challengeScene.addEventListener('change', (e) => {
    state.selectedChallengeScene = e.target.value;
  });

  nodes.unlockNextBatchBtn.addEventListener('click', () => {
    if (!tryUnlockNextBatch(true)) {
      nodes.learnCard.innerHTML = `
        <h3>还不能解锁下一批</h3>
        <p>需要先把当前已解锁词中的 60% 达到“已掌握”。</p>
        <p class="tip">你可以继续学习并完成挑战后再试。</p>
      `;
    } else {
      renderLearnCard();
    }

    renderProgress();
    renderUnlockStatus();
  });

  nodes.refreshProgressBtn.addEventListener('click', () => {
    const sec = Math.round((Date.now() - state.sessionStart) / 1000);
    markDaily(sec);
    state.sessionStart = Date.now();
    saveProgress();
    renderProgress();
    renderUnlockStatus();
  });
}

function bootstrap() {
  if (WORD_CATALOG.length !== 200) {
    console.warn(`词库数量异常：当前 ${WORD_CATALOG.length}，目标应为 200。`);
  }

  createScenePills();
  createChallengeOptions();
  renderUnlockStatus();
  renderLearnCard();
  renderProgress();
  bindEvents();
}

bootstrap();
