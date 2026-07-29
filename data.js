// Used a Proxy and the Handler Object to auto generate cities variables instead of causing an error.
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
    hk: ['./images/hk/hongkong_disneyland.jpg', './images/hk/tian_tan_buddha.jpg', './images/hk/ocean_park.jpg'],
    sh: ['./images/sh/the_bund.jpg', './images/sh/nanjing_road.webp', './images/sh/yu_garden.jpg'],
    ur: ['./images/ur/hongshan_park.webp', './images/ur/erdaoqiao_market.webp', './images/ur/xinjiang_regional_museum.jpg'],
    bj: ['./images/bj/forbidden_city.jpg', './images/bj/tiananmen_square.jpg', './images/bj/summer_palace.jpg'],
    cq: ['./images/cq/three_gorges_museum.jpg', './images/cq/chongqing_zoo.jpg', './images/cq/fengdu_ghost_city.jpg'],
    lh: ['./images/lh/potala_palace.jpg', './images/lh/jokhang_temple.webp', './images/lh/sera_monastery.webp'],
    hb: ['./images/hb/ice_and_snow_world.jpg', './images/hb/zhaolin_park.jpg', './images/hb/harbin_grand_theatre.jpg'],
    sy: ['./images/sy/mukden_palace.jpg', './images/sy/liaoning_museum.webp', './images/sy/zhao_mausoleum.jpg'],
    xa: ['./images/xa/terracotta_army.jpg', './images/xa/xi_an_city_wall.jpg', './images/xa/muslim_quarter.jpg']
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
    hk: ['./images/hk/siu_mai.jpg', './images/hk/egg_tart.jpg', './images/hk/pineapple_bun.jpg'],
    sh: ['./images/sh/xiaolongbao.webp', './images/sh/shengjianbao.jpg', './images/sh/hongshaorou.webp'],
    ur: ['./images/ur/dapanji.jpg', './images/ur/laghman.jpg', './images/ur/chuanr.webp'],
    bj: ['./images/bj/peking_duck.jpg', './images/bj/zhajiangmian.jpg', './images/bj/tanghulu.jpg'],
    cq: ['./images/cq/suan_la_fen.jpg', './images/cq/lazi_ji.webp', './images/cq/xiao_mian.jpg'],
    lh: ['./images/lh/tsampa.jpg', './images/lh/momos.jpg', './images/lh/thukpa.jpg'],
    hb: ['./images/hb/guobaorou.webp', './images/hb/hongchang.jpg', './images/hb/dalieba.webp'],
    sy: ['./images/sy/laobian.jpg', './images/sy/xita_cold_noodles.png', './images/sy/jijia.jpg'],
    xa: ['./images/xa/biangbiang.jpg', './images/xa/roujiamo.jpg', './images/xa/liangpi.webp']
}

const imgs = {
    hk: './images/hk/hongkong.jpg',
    sh: './images/sh/shanghai.jpg',
    ur: './images/ur/urumqi.jpg',
    bj: './images/bj/beijing.webp',
    cq: './images/cq/chongqing.webp',
    lh: './images/lh/lhasa.jpg',
    hb: './images/hb/harbin.jpg',
    sy: './images/sy/shenyang.jpg',
    xa: './images/xa/xi_an.jpg'
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