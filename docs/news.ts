// お知らせ内容の管理
const newsList = [{
  date: "2024.05.05",
  content: "オフィシャルホームページ公開しました",
},{
  date: "2024.05.06",
  content: "「来場事前登録」を開始しました。",
},{
  date: "2024.05.07",
  content: "出展者の「企業・商品の紹介」を公開しました。",
}]
// 順序並び変えるので、一番下に追加していけばOK
export const newsContents = newsList.reverse();