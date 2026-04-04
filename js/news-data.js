const newsData = [
  {
    date: "2026/01/20",
    category: "event",
    title: "東大創業者の会×SVCOアカデミー 「高い企業価値を目指すエクイティストーリーとは？」勉強会イベントを開催いたしました",
    url: "#"
  },
  {
    date: "2025/12/11",
    category: "event",
    title: "【2026/1/9(金)開催】「高い企業価値を目指すエクイティストーリーとは？」勉強会型イベントのお知らせ",
    url: "#"
  },
  {
    date: "2025/11/21",
    category: "event",
    title: "スタートアップの事業成長を加速する「事業計画の極意」講演会を開催いたしました",
    url: "#"
  },
  {
    date: "2025/11/03",
    category: "event",
    title: "【11/13(木)開催】スタートアップの事業成長を加速する「事業計画の極意」講演会のお知らせ",
    url: "#"
  },
  {
    date: "2025/09/11",
    category: "event",
    title: "【10/18(土)開催】甘利俊一先生座談会 with 藤井総長＋東大出身スタートアップ厳選5社ピッチ -Pathfinders 〜東大からフロンティアを拓き続ける者たち〜 のお知らせ",
    url: "#"
  },
  {
    date: "2025/07/16",
    category: "investment",
    title: "「株式会社BANKEY」へ出資しました",
    url: "#"
  },
  {
    date: "2025/07/01",
    category: "event",
    title: "東大創業者の会×東大基金「知と革新のフロンティア共創-AI・起業・グローバルが織りなす未来創造セッション- supported by Google」を開催いたしました",
    url: "#"
  },
  {
    date: "2025/04/27",
    category: "event",
    title: "【5/30(金)開催】知と革新のフロンティア共創-AI・起業・グローバルが織りなす未来創造セッション with Google- のお知らせ（5/20更新）",
    url: "#"
  },
  {
    date: "2025/04/25",
    category: "event",
    title: "東大創業者の会×ファイナンシャル・バリュー&アドバイザーズ 勉強会イベントを開催いたしました",
    url: "#"
  },
  {
    date: "2025/03/19",
    category: "event",
    title: "【4/9(水)開催】東大創業者の会×ファイナンシャル・バリュー&アドバイザーズ 勉強会イベントのお知らせ",
    url: "#"
  },
  {
    date: "2025/02/13",
    category: "investment",
    title: "「issinホールディングス株式会社」へ出資しました",
    url: "#"
  },
  {
    date: "2025/01/08",
    category: "investment",
    title: "「株式会社TricoLogic」へ出資しました",
    url: "#"
  },
  {
    date: "2025/01/08",
    category: "investment",
    title: "「株式会社EduCare」へ出資しました",
    url: "#"
  },
  {
    date: "2024/11/11",
    category: "event",
    title: "第7回 東大創業者の会MEETUPイベントを開催いたしました",
    url: "#"
  },
  {
    date: "2024/09/24",
    category: "event",
    title: "【10/23(水)開催】第7回東大創業者の会meet upイベントのお知らせ",
    url: "#"
  },
  {
    date: "2024/08/28",
    category: "investment",
    title: "「株式会社メタバースクリエイターズ」へ出資しました",
    url: "#"
  },
  {
    date: "2024/08/15",
    category: "investment",
    title: "「ハイタレント株式会社」へ出資しました",
    url: "#"
  },
  {
    date: "2024/07/23",
    category: "event",
    title: "【8/29(木)開催】東大創業者の会meet upイベントのお知らせ ※中止となりました",
    url: "#"
  },
  {
    date: "2024/07/16",
    category: "investment",
    title: "「株式会社Sally」へ追加出資しました",
    url: "#"
  },
  {
    date: "2024/07/09",
    category: "investment",
    title: "「株式会社Stayway」へ追加出資しました",
    url: "#"
  },
  {
    date: "2024/04/22",
    category: "event",
    title: "東大出身起業家の集い（東京大学基金との共催イベント）を開催いたしました",
    url: "#"
  },
  {
    date: "2024/03/13",
    category: "event",
    title: "【3/26(火)開催】東大出身起業家の集い（東大基金×東大創業者の会）のお知らせ",
    url: "#"
  },
  {
    date: "2024/02/13",
    category: "investment",
    title: "「株式会社okke」へ出資しました",
    url: "#"
  },
  {
    date: "2024/01/09",
    category: "event",
    title: "第6回 東大創業者の会MEETUPイベントを開催いたしました",
    url: "#"
  },
  {
    date: "2023/12/22",
    category: "investment",
    title: "「株式会社Alumnote」へ出資しました",
    url: "#"
  },
  {
    date: "2023/10/31",
    category: "event",
    title: "【12/20(水)開催】東大創業者の会meet upイベントのお知らせ",
    url: "#"
  },
  {
    date: "2023/10/31",
    category: "investment",
    title: "「タウンドクター株式会社」へ出資しました",
    url: "#"
  },
  {
    date: "2023/10/25",
    category: "investment",
    title: "「株式会社RICOS」へ出資しました",
    url: "#"
  },
  {
    date: "2023/07/31",
    category: "investment",
    title: "「株式会社Educare」へ出資しました",
    url: "#"
  },
  {
    date: "2023/07/21",
    category: "event",
    title: "第5回 東大創業者の会MEETUPイベントを開催いたしました",
    url: "#"
  },
  {
    date: "2023/06/08",
    category: "investment",
    title: "「World Matcha Inc.」へ出資しました",
    url: "#"
  },
  {
    date: "2023/04/04",
    category: "investment",
    title: "「株式会社キュライオ」へ出資しました",
    url: "#"
  },
  {
    date: "2023/01/26",
    category: "investment",
    title: "「株式会社HikariQ Health」「株式会社スペースリー」の2社へ出資しました",
    url: "#"
  },
  {
    date: "2022/12/20",
    category: "event",
    title: "第4回 東大創業者の会Meet Upイベントを開催いたしました",
    url: "#"
  },
  {
    date: "2022/12/16",
    category: "investment",
    title: "「まん福ホールディングス株式会社」「株式会社Stayway」の2社へ出資しました",
    url: "#"
  },
  {
    date: "2022/05/27",
    category: "info",
    title: "東大創業者の会ファンドを設立しました",
    url: "#"
  },
  {
    date: "2021/12/16",
    category: "event",
    title: "「東大創業者の会」メンバーによる懇親会を実施いたしました。",
    url: "#"
  },
];