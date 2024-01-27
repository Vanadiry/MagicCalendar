var list = [
  { name: "里中千惠", bday: "01-01", origin: "房东妹子青春期" },
  { name: "海凪日和", bday: "01-04", origin: "女孩的钓鱼慢活" },
  { name: "万年大会", bday: "01-09", origin: "Slow Start" },
  { name: "御庭摘希", bday: "01-11", origin: "一起一起这里那里" },
  { name: "斋藤枫", bday: "01-16", origin: "向山进发" },
  { name: "直枝理树", bday: "01-17", origin: "Kud Wafter" },
  { name: "风衣叶冬优", bday: "01-24", origin: "请问您今天要来点兔子吗？" },
  { name: "雪见小梅", bday: "02-01", origin: "Urara迷路帖" },
  { name: "池谷乃乃", bday: "02-01", origin: "斯特拉的魔法" },
  { name: "春日野悠", bday: "02-05", origin: "缘之空" },
  { name: "春日野穹", bday: "02-05", origin: "缘之空" },
  { name: "苗木诚", bday: "02-05", origin: "弹丸论破" },
  { name: "石田将也", bday: "02-08", origin: "声之形" },
  { name: "天天座理世", bday: "02-14", origin: "请问您今天要来点兔子吗？" },
  { name: "小鸟游十花", bday: "02-15", origin: "中二病也要谈恋爱！" },
  { name: "明日花绪", bday: "02-16", origin: "明日同学的水手服" },
  { name: "椎名", bday: "02-17", origin: "幸腹涂鸦" },
  { name: "雪村葵", bday: "02-19", origin: "向山进发" },
  { name: "森野真理", bday: "02-19", origin: "恋爱小行星" },
  { name: "种村小依", bday: "02-20", origin: "天使降临到了我身边！" },
  { name: "后藤一里", bday: "02-21", origin: "孤独摇滚！" },
  { name: "宗像草太", bday: "02-24", origin: "铃芽之旅" },
  { name: "小之森夏音", bday: "02-28", origin: "天使降临到了我身边！" },
  { name: "恋冢小梦", bday: "03-03", origin: "Comic Girls" },
  { name: "乔伊·莫奇马兹", bday: "03-03", origin: "玉子市场" },
  { name: "绪山真寻", bday: "03-06", origin: "别当欧尼酱了！" },
  { name: "白咲花", bday: "03-07", origin: "天使降临到了我身边！" },
  { name: "佐仓慈", bday: "03-10", origin: "学园孤岛" },
  { name: "保登摩卡", bday: "03-13", origin: "请问您今天要来点兔子吗？" },
  { name: "巽绀", bday: "03-15", origin: "Urara迷路帖" },
  { name: "本场切绘", bday: "03-15", origin: "干物妹！小埋" },
  { name: "木崎江利花", bday: "03-23", origin: "明日同学的水手服" },
  { name: "萌田薰子", bday: "04-01", origin: "Comic Girls" },
  { name: "千矢", bday: "04-02", origin: "Urara迷路帖" },
  { name: "朝雾史织", bday: "04-02", origin: "玉子市场" },
  { name: "藤川歌夜", bday: "04-02", origin: "斯特拉的魔法" },
  { name: "樱之宫莓香", bday: "04-04", origin: "调教咖啡厅" },
  { name: "明日小路", bday: "04-04", origin: "明日同学的水手服" },
  { name: "丈枪由纪", bday: "04-05", origin: "学园孤岛" },
  { name: "梅查·莫奇马兹", bday: "04-06", origin: "玉子市场" },
  { name: "一之濑花名", bday: "04-06", origin: "Slow Start" },
  { name: "高坂桐乃", bday: "04-08", origin: "我的妹妹哪有这么可爱！" },
  { name: "保登心爱", bday: "04-10", origin: "请问您今天要来点兔子吗？" },
  { name: "戌井榊", bday: "04-14", origin: "一起一起这里那里" },
  { name: "五更琉璃", bday: "04-20", origin: "我的妹妹哪有这么可爱！" },
  { name: "喜多郁代", bday: "04-21", origin: "孤独摇滚！" },
  { name: "绪山美波里", bday: "04-22", origin: "别当欧尼酱了！" },
  { name: "小林", bday: "04-23", origin: "小林家的龙女仆" },
  { name: "樱木雏子", bday: "04-30", origin: "雏子的笔记" },
  { name: "新垣绫濑", bday: "05-02", origin: "我的妹妹哪有这么可爱！" },
  { name: "田村麻奈实", bday: "05-04", origin: "我的妹妹哪有这么可爱！" },
  { name: "胜木翼", bday: "05-04", origin: "Comic Girls" },
  { name: "北白川馅子", bday: "05-04", origin: "玉子市场" },
  { name: "樱花朝日", bday: "05-05", origin: "别当欧尼酱了！" },
  { name: "饭野水叶", bday: "05-09", origin: "斯特拉的魔法" },
  { name: "才川乔吉", bday: "05-10", origin: "小林家的龙女仆" },
  { name: "星野日向", bday: "05-10", origin: "天使降临到了我身边！" },
  { name: "中岛优亚", bday: "05-10", origin: "雏子的笔记" },
  { name: "春野姬", bday: "05-12", origin: "一起一起这里那里" },
  { name: "花园莉莉香", bday: "05-14", origin: "Comic Girls" },
  { name: "千手院小春", bday: "05-18", origin: "向山进发" },
  { name: "百地玉手", bday: "05-23", origin: "Slow Start" },
  { name: "岩户铃芽", bday: "05-24", origin: "铃芽之旅" },
  { name: "真中苍", bday: "05-25", origin: "恋爱小行星" },
  { name: "伊地知虹夏", bday: "05-29", origin: "孤独摇滚！" },
  { name: "仓永梢", bday: "06-01", origin: "缘之空" },
  { name: "大槻悠悠子", bday: "06-02", origin: "孤独摇滚！" },
  { name: "土间大平", bday: "06-02", origin: "干物妹！小埋" },
  { name: "羽岛伊月", bday: "06-06", origin: "如果有妹妹就好了。" },
  { name: "西宫硝子", bday: "06-07", origin: "声之形" },
  { name: "牧野神奈", bday: "06-07", origin: "玉子市场" },
  { name: "二条臣", bday: "06-09", origin: "Urara迷路帖" },
  { name: "天野美雨", bday: "06-09", origin: "调教咖啡厅" },
  { name: "小鸟游六花", bday: "06-12", origin: "中二病也要谈恋爱！" },
  { name: "能美库特莉亚芙卡", bday: "06-12", origin: "Kud Wafter" },
  { name: "木之幡米拉", bday: "06-13", origin: "恋爱小行星" },
  { name: "大户爱", bday: "06-15", origin: "奇蛋物语" },
  { name: "室崎美夜", bday: "06-18", origin: "别当欧尼酱了！" },
  { name: "十仓荣依子", bday: "06-20", origin: "Slow Start" },
  { name: "町子凉", bday: "06-22", origin: "幸腹涂鸦" },
  { name: "枣妮娜", bday: "06-25", origin: "Urara迷路帖" },
  { name: "黑崎穗香", bday: "06-25", origin: "向山进发" },
  { name: "吉永恋", bday: "06-30", origin: "女孩的钓鱼慢活" },
  { name: "七宫智音", bday: "07-06", origin: "中二病也要谈恋爱！" },
  { name: "富㭴勇太", bday: "07-07", origin: "中二病也要谈恋爱！" },
  { name: "夏川玖井菜", bday: "07-07", origin: "雏子的笔记" },
  { name: "神崎日照", bday: "07-10", origin: "调教咖啡厅" },
  { name: "桐间纱路", bday: "07-15", origin: "请问您今天要来点兔子吗？" },
  { name: "樱井美景", bday: "07-20", origin: "恋爱小行星" },
  { name: "关菖蒲", bday: "07-23", origin: "斯特拉的魔法" },
  { name: "怖浦铃", bday: "07-26", origin: "Comic Girls" },
  { name: "九头龙八一", bday: "08-01", origin: "龙王的工作！" },
  { name: "色井佐久", bday: "08-01", origin: "Urara迷路帖" },
  { name: "井之上泷奈", bday: "08-02", origin: "Lycoris Recoil" },
  { name: "渚一叶", bday: "08-03", origin: "缘之空" },
  { name: "天女目瑛", bday: "08-03", origin: "缘之空" },
  { name: "惠飞须泽胡桃", bday: "08-07", origin: "学园孤岛" },
  { name: "黑柳琉璃子", bday: "08-07", origin: "雏子的笔记" },
  { name: "条河麻耶", bday: "08-08", origin: "请问您今天要来点兔子吗？" },
  { name: "凸守早苗", bday: "08-09", origin: "中二病也要谈恋爱！" },
  { name: "青羽心夏", bday: "08-11", origin: "向山进发" },
  { name: "日向夏帆", bday: "08-12", origin: "调教咖啡厅" },
  { name: "常盘绿", bday: "08-19", origin: "玉子市场" },
  { name: "才川莉子", bday: "08-21", origin: "小林家的龙女仆" },
  { name: "天野阳菜", bday: "08-22", origin: "天气之子。" },
  { name: "环彩羽", bday: "08-22", origin: "魔法纪录 魔法少女小圆外传" },
  { name: "水越澪", bday: "08-24", origin: "龙王的工作！" },
  { name: "本田珠辉", bday: "08-28", origin: "斯特拉的魔法" },
  { name: "丹生谷森夏", bday: "08-30", origin: "中二病也要谈恋爱！" },
  { name: "色川美姬", bday: "09-06", origin: "Comic Girls" },
  { name: "羽岛千寻", bday: "09-06", origin: "如果有妹妹就好了。" },
  { name: "空银子", bday: "09-09", origin: "龙王的工作！" },
  { name: "星野宫子", bday: "09-09", origin: "天使降临到了我身边！" },
  { name: "片濑真宵", bday: "09-10", origin: "一起一起这里那里" },
  { name: "穗月枫", bday: "09-12", origin: "别当欧尼酱了！" },
  { name: "猪濑舞", bday: "09-12", origin: "恋爱小行星" },
  { name: "布田裕美音", bday: "09-14", origin: "斯特拉的魔法" },
  { name: "山田凉", bday: "09-18", origin: "孤独摇滚！" },
  { name: "宇治松千夜", bday: "09-19", origin: "请问您今天要来点兔子吗？" },
  { name: "锦木千束", bday: "09-23", origin: "Lycoris Recoil" },
  { name: "土间埋", bday: "09-26", origin: "干物妹！小埋" },
  { name: "广井菊里", bday: "09-28", origin: "孤独摇滚！" },
  { name: "萩野千秋", bday: "10-01", origin: "雏子的笔记" },
  { name: "鹿目圆", bday: "10-03", origin: "魔法少女小圆" },
  { name: "雏鹤爱", bday: "10-07", origin: "龙王的工作！" },
  { name: "依媛奈绪", bday: "10-07", origin: "缘之空" },
  { name: "平岩萤", bday: "10-07", origin: "明日同学的水手服" },
  { name: "大路饼藏", bday: "10-10", origin: "玉子市场" },
  { name: "若狭悠里", bday: "10-11", origin: "学园孤岛" },
  { name: "五月七日茴香", bday: "10-14", origin: "中二病也要谈恋爱！" },
  { name: "音无伊御", bday: "10-15", origin: "一起一起这里那里" },
  { name: "海老名菜菜", bday: "10-19", origin: "干物妹！小埋" },
  { name: "穗月椛", bday: "10-20", origin: "别当欧尼酱了！" },
  { name: "青山Blue Mountain", bday: "10-27", origin: "请问您今天要来点兔子吗？",},
  { name: "千石冠", bday: "10-30", origin: "Slow Start" },
  { name: "奈津惠", bday: "11-02", origin: "请问您今天要来点兔子吗？" },
  { name: "诺艾尔", bday: "11-03", origin: "天体的秩序" },
  { name: "京冢志温", bday: "11-06", origin: "Slow Start" },
  { name: "仓上日向", bday: "11-11", origin: "向山进发" },
  { name: "海凪小春", bday: "11-15", origin: "女孩的钓鱼慢活" },
  { name: "天川那由多", bday: "11-23", origin: "别当欧尼酱了！" },
  { name: "姬坂乃爱", bday: "11-24", origin: "天使降临到了我身边！" },
  { name: "立花泷", bday: "12-01", origin: "你的名字。" },
  { name: "宫水三叶", bday: "12-01", origin: "你的名字。" },
  { name: "贞任绫乃", bday: "12-03", origin: "龙王的工作！" },
  { name: "香风智乃", bday: "12-04", origin: "请问您今天要来点兔子吗？" },
  { name: "一色诚", bday: "12-07", origin: "中二病也要谈恋爱！" },
  { name: "夜叉神天衣", bday: "12-10", origin: "龙王的工作！" },
  { name: "直树美纪", bday: "12-10", origin: "学园孤岛" },
  { name: "和泉纱雾", bday: "12-10", origin: "埃罗芒阿老师" },
  { name: "枣乃乃", bday: "12-16", origin: "Urara迷路帖" },
  { name: "胡桃", bday: "12-16", origin: "Lycoris Recoil" },
  { name: "森野麒麟", bday: "12-19", origin: "幸腹涂鸦" },
  { name: "真土翔太", bday: "12-22", origin: "小林家的龙女仆" },
  { name: "百武照", bday: "12-22", origin: "斯特拉的魔法" },
  { name: "星川麻冬", bday: "12-23", origin: "调教咖啡厅" },
  { name: "色川琉姬", bday: "12-24", origin: "Comic Girls" },
  { name: "伊地知星歌", bday: "12-24", origin: "孤独摇滚！" },
  { name: "橘·希尔芬福特", bday: "12-24", origin: "干物妹！小埋" },
  { name: "柊真雪", bday: "12-24", origin: "雏子的笔记" },
  { name: "村上椎奈", bday: "12-25", origin: "斯特拉的魔法" },
  { name: "北白川玉子", bday: "12-31", origin: "玉子市场" },
  { name: "爱城恋太郎", bday: "05-01", origin: "超超超超超喜欢你的100个女朋友",},
  { name: "花园羽香里", bday: "06-22", origin: "超超超超超喜欢你的100个女朋友",},
  { name: "院田唐音", bday: "09-09", origin: "超超超超超喜欢你的100个女朋友" },
  { name: "好本静", bday: "11-01", origin: "超超超超超喜欢你的100个女朋友" },
  { name: "荣逢凪乃", bday: "03-14", origin: "超超超超超喜欢你的100个女朋友" },
  { name: "药膳楠莉", bday: "04-18", origin: "超超超超超喜欢你的100个女朋友" },
  { name: "花园羽羽里", bday: "05-12", origin: "超超超超超喜欢你的100个女朋友",},
  { name: "铭户芽衣", bday: "05-10", origin: "超超超超超喜欢你的100个女朋友" },
  { name: "雷门瞬", bday: "04-09", origin: "星灵感应" },
  { name: "宝木遥乃", bday: "10-18", origin: "星灵感应" },
  { name: "小之星海果", bday: "01-22", origin: "星灵感应" },
  { name: "大宫忍", bday: "06-06", origin: "黄金拼图" },
  { name: "爱丽丝·卡塔雷特", bday: "04-05", origin: "黄金拼图" },
  { name: "小路绫", bday: "09-15", origin: "黄金拼图" },
  { name: "猪熊阳子", bday: "08-20", origin: "黄金拼图" },
  { name: "九条可怜", bday: "12-01", origin: "黄金拼图" },
  { name: "琪琪", bday: "02-02", origin: "魔女宅急便" },
  { name: "桐生慧辉", bday: "10-11", origin: "只要长得可爱即使是变态你也喜欢吗？",},
  { name: "桐生瑞叶", bday: "03-03", origin: "只要长得可爱即使是变态你也喜欢吗？",},
];

// app.js
// 获取今天的日期，格式为"MM-DD"
var today = new Date();
var month = today.getMonth() + 1; // 月份从0开始
var day = today.getDate();
if (month < 10) {
  month = "0" + month;
} // 补零
if (day < 10) {
  day = "0" + day;
} // 补零
var date = month + "-" + day;

// 在列表中查找今天生日的角色，并显示出来
var result = []; // 用一个数组存放结果
for (var i = 0; i < list.length; i++) {
  // 遍历列表
  var item = list[i]; // 取出每个元素
  if (item.bday == date) {
    // 如果生日和今天相同
    result.push(item); // 将元素添加到结果数组中
  }
}

// 输出结果
if (result.length == 0) {
  // 如果结果数组为空，说明没有找到匹配的角色
  document.getElementById("result").innerHTML = "今天没有角色生日...";
} else {
  // 否则，输出结果数组中的每个元素
  var output = ""; // 创建一个输出字符串，用<br>表示换行
  for (var j = 0; j < result.length; j++) {
    var role = result[j]; // 取出每个角色
    output += role.name + " [" + role.origin + "]" + "<br>"; // 把角色的名字和出处添加到输出字符串中
  }
  document.getElementById("result").innerHTML = output; // 把输出字符串赋值给<div>元素的innerHTML属性
}
