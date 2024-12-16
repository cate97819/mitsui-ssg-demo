export type ProductCategory = {
  id: number,
  label: string,
  smallCategory: number[],
}

export type SmallCategory = {
  id: number,
  label: string,
  category: number[],
}

export type Product = {
  id: string,
  name: string,
  description: string,
  categoryId: number[],
  smallCategoryId: number[],
}

export const productCategory: ProductCategory[] = [{
  id: 0,
  label: "加工食品",
  smallCategory: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
},{
  id: 1,
  label: "生鮮食品",
  smallCategory: [21, 22, 23, 24],
},{
  id: 2,
  label: "菓子類",
  smallCategory: [25, 26, 27, 28, 29],
},{
  id: 3,
  label: "飲料",
  smallCategory: [30, 31, 32, 33],
},{
  id: 4,
  label: "酒類",
  smallCategory: [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
},{
  id: 5,
  label: "その他食品",
  smallCategory: [53, 54],
},{
  id: 6,
  label: "ペット用品",
  smallCategory: [55, 56, 57, 58, 59, 60, 61, 62],
}]

export const smallCategory: SmallCategory[] = [{
  id: 0,
  label: "調味料",
  category: [0],
},{
  id: 1,
  label: "食用油",
  category: [0],
},{
  id: 2,
  label: "スプレッド類",
  category: [0],
},{
  id: 3,
  label: "乳製品",
  category: [0],
},{
  id: 4,
  label: "調理品",
  category: [0],
},{
  id: 5,
  label: "スープ",
  category: [0],
},{
  id: 6,
  label: "冷凍食品",
  category: [0],
},{
  id: 7,
  label: "缶詰",
  category: [0],
},{
  id: 8,
  label: "粉類",
  category: [0],
},{
  id: 9,
  label: "ホームメイキング材料",
  category: [0],
},{
  id: 10,
  label: "麺類",
  category: [0],
},{
  id: 11,
  label: "パン・シリアル類",
  category: [0],
},{
  id: 12,
  label: "穀物",
  category: [0],
},{
  id: 13,
  label: "加工肉類",
  category: [0],
},{
  id: 14,
  label: "練り製品",
  category: [0],
},{
  id: 15,
  label: "漬物・佃煮",
  category: [0],
},{
  id: 16,
  label: "水物",
  category: [0],
},{
  id: 17,
  label: "惣菜類",
  category: [0],
},{
  id: 18,
  label: "農産乾物",
  category: [0],
},{
  id: 19,
  label: "加工水産",
  category: [0],
},{
  id: 20,
  label: "その他加工食品",
  category: [0],
},{
  id: 21,
  label: "水産",
  category: [1],
},{
  id: 22,
  label: "畜産",
  category: [1],
},{
  id: 23,
  label: "農産",
  category: [1],
},{
  id: 24,
  label: "その他生鮮食品",
  category: [1],
},{
  id: 25,
  label: "菓子",
  category: [2],
},{
  id: 26,
  label: "デザート・ヨーグルト",
  category: [2],
},{
  id: 27,
  label: "珍味",
  category: [2],
},{
  id: 28,
  label: "アイスクリーム類",
  category: [2],
},{
  id: 29,
  label: "その他菓子類",
  category: [2],
},{
  id: 30,
  label: "嗜好飲料",
  category: [3],
},{
  id: 31,
  label: "果実飲料",
  category: [3],
},{
  id: 32,
  label: "清涼飲料",
  category: [3],
},{
  id: 33,
  label: "乳飲料",
  category: [3],
},{
  id: 34,
  label: "清酒",
  category: [4],
},{
  id: 35,
  label: "合成清酒",
  category: [4],
},{
  id: 36,
  label: "焼酎（甲類）",
  category: [4],
},{
  id: 37,
  label: "焼酎（乙類）",
  category: [4],
},{
  id: 38,
  label: "みりん",
  category: [4],
},{
  id: 39,
  label: "ビール",
  category: [4],
},{
  id: 40,
  label: "果実酒",
  category: [4],
},{
  id: 41,
  label: "甘味果実酒",
  category: [4],
},{
  id: 42,
  label: "ウィスキー",
  category: [4],
},{
  id: 43,
  label: "ブランデー",
  category: [4],
},{
  id: 44,
  label: "スピリッツ",
  category: [4],
},{
  id: 45,
  label: "スピリッツ（発泡性）",
  category: [4],
},{
  id: 46,
  label: "リキュール類",
  category: [4],
},{
  id: 47,
  label: "リキュール類（発泡性）",
  category: [4],
},{
  id: 48,
  label: "発泡酒",
  category: [4],
},{
  id: 49,
  label: "粉末種",
  category: [4],
},{
  id: 50,
  label: "その他雑酒",
  category: [4],
},{
  id: 51,
  label: "その他雑酒（発泡性）",
  category: [4],
},{
  id: 52,
  label: "その他アルコール類",
  category: [4],
},{
  id: 53,
  label: "乳幼児食品",
  category: [5],
},{
  id: 54,
  label: "健康食品",
  category: [5],
},{
  id: 55,
  label: "犬",
  category: [6],
},{
  id: 56,
  label: "猫",
  category: [6],
},{
  id: 57,
  label: "観賞魚",
  category: [6],
},{
  id: 58,
  label: "小鳥",
  category: [6],
},{
  id: 59,
  label: "小動物",
  category: [6],
},{
  id: 60,
  label: "昆虫",
  category: [6],
},{
  id: 61,
  label: "爬虫類・両生類",
  category: [6],
},{
  id: 62,
  label: "その他ペット",
  category: [6],
}]

export const products: Product[] = [{
  id: "oWsQ4FK8JQ",
  name: "塩キャラメルバターソース",
  description: "芳醇なバターとほろ苦いキャラメル、まろやかな味わいの岩塩によるコクと風味がやみつきになるソースです。液状なので溶かしバターのようにかける、塗る、和えるなど様々な用途に役立ちます。スイーツはもちろん、焼成時に照りつやが出るのでベーカリーにもおすすめです。",
  categoryId: [0],
  smallCategoryId: [0],
},{
  id: "7XYGoJ9gP7",
  name: "じっくり煮込んだ豚の角煮",
  description: "豚バラ肉をじっくり煮込んで旨味を引き出しました。甘めのしょうゆだれをきかせた、食べやすい和風の味付けです。電子レンジまたは湯せんで解凍できる便利な使い切りタイプです。",
  categoryId: [0],
  smallCategoryId: [6],
}]