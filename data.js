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
    ur: "Ürümqi is the capital and largest city of the Xinjiang Uyghur Autonomous Region in Northwestern China. With a census population of 4,054,000 in 2020, Ürümqi is the second-largest city in China's northwestern interior after Xi'an. Ürümqi has seen significant economic development since the 1990s and currently serves as a regional transport hub and a cultural, political, and commercial center."
}

/* Population, Area, GDP Per Capita */
const city_stats = {
    hk: [7498100, 2755, 84212],
    sh: [24874500, 6341, 32840],
    ur: [4054000, 14577, 15748]
}

const city_tcard = {
    hk: ['Hong Kong Disneyland', 'Tian Tan Buddha', 'Ocean Park'],
    sh: ['The Bund', 'Nanjing Road', 'Yu Garden'],
    ur: ['Hongshan Park', 'Erdaoqiao Market', 'Xinjiang Museum']
}

const city_tcard_img = {
    hk: ['./images/hk/hongkong_disneyland.jpg', './images/hk/tian_tan_buddha.jpg', './images/hk/ocean_park.jpg'],
    sh: ['./images/sh/the_bund.jpg', './images/sh/nanjing_road.webp', './images/sh/yu_garden.jpg'],
    ur: ['./images/ur/hongshan_park.webp', './images/ur/erdaoqiao_market.webp', './images/ur/xinjiang_regional_museum.jpg']
}

const city_dcard = {
    hk: ['Siu Mai', 'Egg Tart', 'Pineapple Bun'],
    sh: ['Xiao Long Bao', 'Sheng Jian Bao', 'Hong Shao Rou'],
    ur: ['Dapanji', 'Laghman', "Chuan'r"]
}

const city_dcard_img = {
    hk: ['./images/hk/siu_mai.jpg', './images/hk/egg_tart.jpg', './images/hk/pineapple_bun.jpg'],
    sh: ['./images/sh/xiaolongbao.webp', './images/sh/shengjianbao.jpg', './images/sh/hongshaorou.webp'],
    ur: ['./images/ur/dapanji.jpg', './images/ur/laghman.jpg', './images/ur/chuanr.webp']
}

const imgs = {
    hk: './images/hk/hongkong.jpg',
    sh: './images/sh/shanghai.jpg',
    ur: './images/ur/urumqi.jpg'
}