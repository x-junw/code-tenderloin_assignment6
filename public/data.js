// Used a Proxy and the Handler Object to auto generate cities keys instead of causing an error.
const handler = {
  get(target, property, receiver) {
    if (!(property in target)) {
      target[property] = undefined;
    }
    return Reflect.get(target, property, receiver);
  }
};

const citiesStored = {};
const cities = new Proxy(citiesStored, handler);

const city_desc = {
    hk: "Hong Kong is a special administrative region of China. Situated on China's southern coast just south of Shenzhen, it consists of Hong Kong Island, Kowloon, and the New Territories. With 7.5 million residents in a 1,114-square-kilometre (430 sq mi) territory, Hong Kong is the fourth-most densely populated region in the world.",
    sh: "Shanghai is a provincial-level direct-administered municipality in China. It has a population of 30,050,000 in the urban area as of 2026, thus making it China's most populous city and more broadly the fifth-largest city in the world by population. The city is located on the southern estuary of the Yangtze River, with the Huangpu River bisecting the city.",
    ur: "Ürümqi is the capital and largest city of the Xinjiang Uyghur Autonomous Region in Northwestern China. With a census population of 4,054,000 in 2020, Ürümqi is the second-largest city in China's northwestern interior after Xi'an. Ürümqi has seen significant economic development since the 1990s and currently serves as a regional transport hub and a cultural, political, and commercial center.",
    bj: "Beijing, previously romanized as Peking, is the capital city of China. With more than 21.8 million residents, it is the world's most populous national capital city, as well as China's second-largest city by urban area, after Shanghai. It is located in Northern China and is governed as a provincial-level direct-administered municipality with 16 municipal districts. Beijing is mostly surrounded by Hebei Province and neighbors Tianjin Municipality to the southeast; together, the three divisions form the Jing-Jin-Ji cluster.",
    cq: "Chongqing is a provincial-level direct-administered municipality in Southwestern China. It is one of the four direct-administered municipalities of China and the only one located inland.",
    lh: "Lhasa, officially the Chengguan District of Lhasa City, is the inner urban district of Lhasa City, Tibet Autonomous Region, Southwestern China. Lhasa is the second most populous urban area on the Tibetan Plateau after Xining and, at an altitude of 3,656 metres (11,990 ft), Lhasa is one of the highest cities in the world. The city has been the religious and administrative capital of Tibet since the mid-17th century. It contains many culturally significant Tibetan Buddhist sites such as the Potala Palace, Jokhang Temple and Norbulingka Palaces.",
    hb: "Harbin is the capital of Heilongjiang, China, and the largest city of the province—as well as the second largest urban population (after Shenyang, Liaoning province) and the largest metropolitan population (urban and rural regions together) in Northeast China. Harbin has direct jurisdiction over nine metropolitan districts, two county-level cities, and seven counties. It is the eighth most populous Chinese city according to the 2020 census. The built-up area of Harbin (which consists of all districts except Shuangcheng and Acheng) has 5,841,929 inhabitants, while the total metropolitan population is up to 10,009,854, making it one of the 100 largest urban areas in the world. Harbin serves as a key political, economic, scientific, cultural, and communications hub in Northeast China, as well as an important industrial base of the nation.",
    sy: "Shenyang, formerly known by its Manchu name Mukden, is a sub-provincial city in China and the provincial capital of Liaoning province. It is the province's most populous city with a population of 9,070,093 as of the 2020 census, also making it the largest city in Manchuria by urban population, and the second-largest by metropolitan population (behind Harbin). The Shenyang metropolitan area is one of the major megalopolises in China, with a population of over 23 million. The city's administrative region includes the ten metropolitan districts, the county-level city of Xinmin, and the counties of Kangping and Faku.",
    xa: "Xi'an is the capital of the Chinese province of Shaanxi. A sub-provincial city on the Guanzhong plain, the city is the third-most populous city in Western China after Chongqing and Chengdu, as well as the most populous city in Northwestern China. Its total population was 13.17 million in the 2024 census, including an urban population of 10.59 million."
}

/* Population, Area, GDP Per Capita */
const city_stats = {
    hk: [7498100, 2755, 84212],
    sh: [24874500, 6341, 32840],
    ur: [4054000, 14577, 15748],
    bj: [21893095, 16411, 34314],
    cq: [32054159, 82403, 15118],
    lh: [876400, 525, 17904],
    hb: [10009854, 53068, 9477],
    sy: [9070093, 12869, 13975],
    xa: [12952907, 10762, 15108]
}

const city_tcard = {
    hk: ['Hong Kong Disneyland', 'Tian Tan Buddha', 'Ocean Park'],
    sh: ['The Bund', 'Nanjing Road', 'Yu Garden'],
    ur: ['Hongshan Park', 'Erdaoqiao Market', 'Xinjiang Museum'],
    bj: ['Forbidden City', 'Tiananmen Square', 'Summer Palace'],
    cq: ['Three Gorges Museum', 'Chongqing Zoo', 'Fengdu Ghost City'],
    lh: ['Potala Palace', 'Jokhang Temple', 'Sera Monastery'],
    hb: ['Ice and Snow World', 'Zhaolin Park', 'Harbin Grand Theatre'],
    sy: ['Mukden Palace', 'Liaoning Museum', 'Zhao Mausoleum'],
    xa: ['Terracotta Army', "Xi'an City Wall", 'Muslim Quarter']
}

const city_tcard_img = {
    hk: ['../images/hk/hongkong_disneyland.jpg', '../images/hk/tian_tan_buddha.jpg', '../images/hk/ocean_park.jpg'],
    sh: ['../images/sh/the_bund.jpg', '../images/sh/nanjing_road.webp', '../images/sh/yu_garden.jpg'],
    ur: ['../images/ur/hongshan_park.webp', '../images/ur/erdaoqiao_market.webp', '../images/ur/xinjiang_regional_museum.jpg'],
    bj: ['../images/bj/forbidden_city.jpg', '../images/bj/tiananmen_square.jpg', '../images/bj/summer_palace.jpg'],
    cq: ['../images/cq/three_gorges_museum.jpg', '../images/cq/chongqing_zoo.jpg', '../images/cq/fengdu_ghost_city.jpg'],
    lh: ['../images/lh/potala_palace.jpg', '../images/lh/jokhang_temple.webp', '../images/lh/sera_monastery.webp'],
    hb: ['../images/hb/ice_and_snow_world.jpg', '../images/hb/zhaolin_park.jpg', '../images/hb/harbin_grand_theatre.jpg'],
    sy: ['../images/sy/mukden_palace.jpg', '../images/sy/liaoning_museum.webp', '../images/sy/zhao_mausoleum.jpg'],
    xa: ['../images/xa/terracotta_army.jpg', '../images/xa/xi_an_city_wall.jpg', '../images/xa/muslim_quarter.jpg']
}

const city_dcard = {
    hk: ['Siu Mai', 'Egg Tart', 'Pineapple Bun'],
    sh: ['Xiao Long Bao', 'Sheng Jian Bao', 'Hong Shao Rou'],
    ur: ['Dapanji', 'Laghman', "Chuan'r"],
    bj: ['Peking Duck', 'Zhajiangmian', 'Tanghulu'],
    cq: ['Suan La Fen', 'Lazi Ji', 'Xiao Mian'],
    lh: ['Tsampa', 'Momos', 'Thukpa'],
    hb: ['Guobaorou', 'Hongchang', 'Dalieba'],
    sy: ['Laobian', 'Xita Cold Noodles', 'Jijia'],
    xa: ['Biangbiang', 'Roujiamo', 'Liangpi']
}

const city_dcard_img = {
    hk: ['../images/hk/siu_mai.jpg', '../images/hk/egg_tart.jpg', '../images/hk/pineapple_bun.jpg'],
    sh: ['../images/sh/xiaolongbao.webp', '../images/sh/shengjianbao.jpg', '../images/sh/hongshaorou.webp'],
    ur: ['../images/ur/dapanji.jpg', '../images/ur/laghman.jpg', '../images/ur/chuanr.webp'],
    bj: ['../images/bj/peking_duck.jpg', '../images/bj/zhajiangmian.jpg', '../images/bj/tanghulu.jpg'],
    cq: ['../images/cq/suan_la_fen.jpg', '../images/cq/lazi_ji.webp', '../images/cq/xiao_mian.jpg'],
    lh: ['../images/lh/tsampa.jpg', '../images/lh/momos.jpg', '../images/lh/thukpa.jpg'],
    hb: ['../images/hb/guobaorou.webp', '../images/hb/hongchang.jpg', '../images/hb/dalieba.webp'],
    sy: ['../images/sy/laobian.jpg', '../images/sy/xita_cold_noodles.png', '../images/sy/jijia.jpg'],
    xa: ['../images/xa/biangbiang.jpg', '../images/xa/roujiamo.jpg', '../images/xa/liangpi.webp']
}

const imgs = {
    hk: '../images/hk/hongkong.jpg',
    sh: '../images/sh/shanghai.jpg',
    ur: '../images/ur/urumqi.jpg',
    bj: '../images/bj/beijing.webp',
    cq: '../images/cq/chongqing.webp',
    lh: '../images/lh/lhasa.jpg',
    hb: '../images/hb/harbin.jpg',
    sy: '../images/sy/shenyang.jpg',
    xa: '../images/xa/xi_an.jpg'
}

function renderCityPoints() {
    cities.hk = new cityElement('hk', [814, 798], '香港 Hong Kong');
    cities.sh = new cityElement('sh', [943, 563], '上海 Shanghai');
    cities.ur = new cityElement('ur', [298, 297], '乌鲁木齐 Ürümqi');
    cities.bj = new cityElement('bj', [814, 362], '北京 Beijing');
    cities.cq = new cityElement('cq', [641, 601], '重庆 Chongqing');
    cities.lh = new cityElement('lh', [306, 612], '城关区 Lhasa');
    cities.hb = new cityElement('hb', [985, 189], '哈尔滨 Harbin');
    cities.sy = new cityElement('sy', [932, 300], '沈阳 Shenyang');
    cities.xa = new cityElement('xa', [673, 482], "西安 Xi'an");
}

// History Page
let selectedDynasty = "xia";
let selectedChina = "roc";

const dynastyStats = {
    xia: ["夏 Xia", "2070 BC - 1600 BC", "Erlitou"],
    shang: ["商 Shang", "1600 BC - 1046 BC", "Yin"],
    zhou: ["周 Zhou", "1046 BC - 256 BC", "Fenghao"],
    qin: ["秦 Qin", "221 BC - 206 BC", "Xianyang"],
    han: ["汉 Han", "202 BC - 220 AD", "Luoyang"],
    tang: ["唐 Tang", "618 AD - 907 AD", "Chang'an"],
    song: ["宋 Song", "960 AD - 1279 AD", "Hangzhou"],
    yuan: ["元 Yuan", "1271 AD - 1368 AD", "Khanbaliq"],
    ming: ["明 Ming", "1368 AD - 1644 AD", "Nanjing"],
    qing: ["清 Qing", "1636 AD - 1912 AD", "Beijing"]
}

const chinaStats = {
    roc: ["ROC", "1912 AD - Present", "Taipei"],
    prc: ["PRC", "1949 AD - Present", "Beijing"]
}

const dynastyDesc = {
    xia: "The Xia dynasty is the first dynasty in traditional Chinese historiography. According to tradition, it was established by the likely legendary figure Yu the Great, after Shun, the last of the Five Emperors, gave the throne to him. In traditional historiography, the Xia dynasty was succeeded by the Shang dynasty. There are no contemporaneous records of the Xia, and they are not mentioned in the oldest Chinese texts, the earliest oracle bone inscriptions dating from the Late Shang period, meaning it may possibly be mythical. <br/><br/> The Xia dynasty's end was driven by political corruption, internal rebellions, and the tyrannical rule of its final king, Jie, culminating in its defeat by the Shang Dynasty around 1600 BCE.",
    shang: "The Shang dynasty, also known as the Yin dynasty, was a Chinese royal dynasty that ruled in the Yellow River valley during the 2nd millennium BC, traditionally succeeding the Xia dynasty and followed by the Western Zhou dynasty. The classic account of the Shang comes from texts such as the Book of Documents, Bamboo Annals and Shiji. Modern scholarship dates the dynasty between the 16th and 11th centuries BC, with more agreement surrounding the end date than beginning date. The Shang dynasty is the earliest dynasty within traditional Chinese history that is firmly supported by archaeological evidence. <br/><br/> The Shang dynasty ended around 1046 BCE when the rising western state of Zhou invaded the capital, defeated the final king, and established the Zhou dynasty.",
    zhou: "The Zhou dynasty was a royal dynasty of China that existed for 789 years from 1046 BC until 256 BC, the longest span of any dynasty in Chinese history. During the Western Zhou period (c. 1046 – 771 BC), the royal house, surnamed Ji, had military control over territories centered on the Wei River valley and North China Plain. Even as Zhou suzerainty became increasingly ceremonial over the following Eastern Zhou period (771–256 BC), the political system created by the Zhou royal house survived in some form for several additional centuries. <br/><br/> The fall of the Zhou dynasty unfolded in two major stages: the collapse of the Western Zhou in 771 BCE due to nomadic invasions and internal rebellion, followed by the slow political decay and final military extinction of the Eastern Zhou by the state of Qin in 256 BCE.",
    qin: "The Qin dynasty was the first imperial dynasty of China. It is named for its progenitor state of Qin, a fief of the confederal Zhou dynasty (c. 1046–256 BC). Beginning in 230 BC, the Qin under King Ying Zheng engaged in a series of wars conquering each of the rival states that had previously pledged fealty to the Zhou. This culminated in 221 BC with the successful unification of China. The Qin then assumed an imperial prerogative – with Ying Zheng declaring himself to be Qin Shi Huang, the first emperor of China, and bringing an end to the Warring States period (c. 475–221 BC). This state of affairs lasted until 206 BC, when the dynasty collapsed in the years following Qin Shi Huang's death. The Qin dynasty's 14-year existence was the shortest of any major dynasty in Chinese history, with only two emperors.",
    han: `The Han dynasty was an imperial dynasty of China established by Liu Bang, and preceded by the short-lived Qin dynasty (221–206 BC) and the interregnum known as the Chu–Han Contention (206–202 BC). It was succeeded by the Three Kingdoms period (220–280 AD) and also briefly interrupted by the Xin dynasty (9–23 AD) established by the usurping regent Wang Mang. It is thus separated into two periods—the Western Han (202 BC – 9 AD) and the Eastern Han (25–220 AD). The Han dynasty is considered a golden age in Chinese history, impacting Chinese identity in later periods. The majority ethnic group of modern China refer to themselves as the "Han people", while spoken Chinese and written Chinese are referred to respectively as the "Han language" and "Han characters". <br/><br/> The fall of the Han dynasty occurred gradually through deep structural decay, marked by three core factors: palace corruption involving eunuchs and empress clans, devastating natural disasters, and the massive Yellow Turban Rebellion.`,
    tang: "The Tang dynasty was an imperial dynasty of China that ruled from 618 to 907, with an interregnum between 690 and 705. It was preceded by the Sui dynasty and followed by the Five Dynasties and Ten Kingdoms period. Historians generally regard the Tang as a high point of Chinese civilisation, and a golden age of cosmopolitan culture. Tang territory, acquired through the military campaigns of its early rulers, surpassed that of the Han dynasty. <br/><br/> The Tang Dynasty fell due to the devastating Huang Chao rebellion.",
    song: "The Song dynasty was an imperial dynasty of China that ruled from 960 to 1279. The dynasty was founded by Emperor Taizu of Song, who usurped the throne of the Later Zhou dynasty and went on to conquer the rest of the Ten Kingdoms, ending the Five Dynasties and Ten Kingdoms period. The Song often came into conflict with the contemporaneous Liao, Western Xia, and Jin dynasties in northern China. After retreating to southern China following attacks by the Jin dynasty, the Song was eventually conquered by the Mongol-led Yuan dynasty. <br/><br/> The dynasty's history is divided into two periods: during the Northern Song (960–1127), the dynasty controlled most of what is now East China. The Southern Song (1127–1279) comprised the period following the loss of control over the northern half of Song territory to the Jurchen-led Jin dynasty in the Jin–Song wars. At that time, the Song court retreated south of the Yangtze and established its capital at Hangzhou. <br/><br/> The fall of the Song dynasty occurred in two major stages: the loss of northern China to the Jurchen Jin dynasty in 1127, and the final collapse of the Southern Song to the Mongol-led Yuan dynasty.",
    yuan: "The Yuan dynasty, officially the Great Yuan, was a Mongol-led imperial dynasty of China and a successor state to the Mongol Empire after its division. It was established by Kublai (Emperor Shizu or Setsen Khan), the fifth khagan-emperor of the Mongol Empire from the Borjigin clan, and lasted from 1271 to 1368 AD. In Chinese history, the Yuan dynasty followed the Song dynasty and preceded the Ming dynasty. <br/><br/> The Yuan dynasty fell in 1368 CE due to natural disasters, economic collapse, and massive peasant revolts. Key causes include the catastrophic flooding of the Yellow River, severe inflation from overprinting paper money, and the destructive Red Turban Rebellion.",
    ming: "The Ming dynasty, officially the Great Ming, was an imperial dynasty of China that ruled from 1368 to 1644, following the collapse of the Mongol-led Yuan dynasty. The Ming was the last imperial dynasty of China ruled by the Han people, the majority ethnic group in China. Although the primary capital of Beijing fell in 1644 to a rebellion led by Li Zicheng (who established the short-lived Shun dynasty), numerous rump regimes ruled by remnants of the Ming imperial family, collectively called the Southern Ming, survived until 1662. <br/><br/> The fall of the Ming dynasty in 1644 resulted from economic collapse, devastating natural disasters, and a fatal two-front pressure from peasant revolts and the Manchu advance.",
    qing: "The Qing dynasty, officially the Great Qing, also known as the Qing Empire or Qing China, was a Manchu-led imperial dynasty of China and an early modern empire in East Asia which existed from 1636/1644 to 1912. The last imperial dynasty in Chinese history, the Qing dynasty was preceded by the Ming dynasty and succeeded by the Republic of China. At the height of its power, the empire stretched from the Sea of Japan in the east to the Pamir Mountains in the west, and from the Mongolian Plateau in the north to the South China Sea in the south. Originally emerging from the Later Jin dynasty founded in 1616 and proclaimed in Shenyang in 1636, the dynasty seized control of the Ming capital Beijing and North China in 1644, traditionally considered the start of the dynasty's rule. <br/><br/> The dynasty lasted until the Xinhai Revolution of October 1911 led to the abdication of the last emperor in February 1912."
}

const chinaDesc = {
    roc: "The Republic of China, known more now as Taiwan, was the original successor to the Qing Dynasty following the Xinhai Revolution. After the forced abdication of their second president (proclaimed emperor), Yuan Shikai, the country split between two conflicting parties, the Kuomintang (KMT) and the Chinese Communist party (CCP). Though the civil war was temporarily ceased by the looming threat of the Japanese, the CCP eventually won over the mainland, resulting in the KMT retreating to Taiwan. The KMT still to this day proclaims themselves as the Republic of China.",
    prc: "The People's Republic of China, or China, is the communist successor of the Republic of China (non-KMT). After the forced abdication of their second president (proclaimed emperor), Yuan Shikai, the country split between two conflicting parties, the Kuomintang (KMT) and the Chinese Communist party (CCP). The CCP won the civil war and took the mainland, while the KMT fled to Taiwan."
}