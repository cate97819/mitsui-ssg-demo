export type ExhibitorCategory = {
  id: number,
  label: string,
}

export type Exhibitor = {
  id: string,
  name: string,
  description: string,
  categoryId: number[],
  export: boolean,
  ecology: boolean,
}

export const exhibitorCategory: ExhibitorCategory[] = [{
  id: 0,
  label: "総合（市販用）ゾーン",
},{
  id: 1,
  label: "市販用ゾーン",
},{
  id: 2,
  label: "業務用ゾーン",
},{
  id: 3,
  label: "ペットゾーン",
},{
  id: 4,
  label: "酒類ゾーン",
},{
  id: 5,
  label: "にっぽん元気マーケット",
},{
  id: 6,
  label: "日配ゾーン",
},{
  id: 7,
  label: "惣菜ゾーン",
},{
  id: 8,
  label: "生鮮ゾーン",
}]

export const exhibitors: Exhibitor[] = [{
  id: "Pqxl3Bb38n",
  name: "ケンコーマヨネーズ株式会社",
  description: "ケンコーマヨネーズは、1958年の創業当初は食用油を販売する企業でした。 その後、業務用に特化したマヨネーズメーカーとして成長し、転機となったのは1977年。 冷蔵で日持ちのする「ロングライフサラダ」を日本で初めて開発しました。 サンドイッチの具材から始まり、現在は外食やホテル、中食等幅広い業態のお客様にお使いいただいています。 当社グループはサラダNo.1企業を目指し、市場ニーズにお応えする、市場を創造する商品・ メニューを積極的に開発し、市場を演出してきました。 これからも、食の嗜好が多様化する市場の変化を的確に捉え、持続的に成長できる企業を目指してまいります。",
  categoryId: [2],
  export: false,
  ecology: true,
},{
  id: "RBV0TIMf3q",
  name: "サトウ食品株式会社",
  description: "当社は、餅業界で初めて餅を一切れ一切れ無菌化包装する技術を開発し、代表的な商品である「サトウの切り餅つきたてシングルパック」として製品化し、お客さまがいつでも食べたい時に食べたい量だけ召し上がって頂けるなどの利便性を実現いたしました。さらに、餅製造で培った無菌化包装の技術を駆使し、製造工程の自動化等を実現し、微生物の混入を防ぎ、炊き立てのごはんをそのままパックし常温で1年間保存可能な無菌化包装米飯を開発いたしました。餅・ごはんともに業界のリーダーとして市場規模の更なる拡大を目指しております。今後は、従来の家族構成が変化し、核家族世代や単身者の増加、高齢化社会の進展等国民生活の変容に伴う食生活の個食化がますます進むことが想定されます。当社は、このような時代背景の中で、お客さまの利便性を追求した事業展開を図ってまいります。",
  categoryId: [1],
  export: true,
  ecology: true,
}]

