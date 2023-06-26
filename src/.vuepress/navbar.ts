import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  //"/demo/", 
  {
    text: "目的地 | Destination",
    icon: "lightbulb",
    prefix: "/destinations/",
    children: [
      {
        text: "国外",
        icon: "lightbulb",
        prefix: "oversea/",
        //children: ["japan", { text: "111", icon: "ellipsis", link: "" }],
        children: ["japan", "osaka_1"],
      },
      {
        text: "国内",
        icon: "lightbulb",
        prefix: "china/",
        children: ["xiamen", "hangzhou", "shanghai", "beijing", "northwest", "chongqing", "xian", ],
      },
    ],
  },

  {
    text: "情绪人像 | Portrait",
    icon: "book",
    link: "/portrait/README.md",
  },
  {
    text: "现场 | Live",
    icon: "lightbulb",
    prefix: "/live/",
    children: [
      {
        text: "音乐节",
        icon: "lightbulb",
        prefix: "festival/",
        //children: ["japan", { text: "111", icon: "ellipsis", link: "" }],
        children: ["strawberry_festival", "xiamen_jazz","xidi_music_festival"],
      },
      {
        text: "LiveHouse",
        icon: "lightbulb",
        prefix: "livehouse/",
        children: ["hangzhou_jiuqiuhui", "kr_beijing", "maolivehouse_sh", "reallive_xm",  ],
      },
    ],
  },
  {
    text: "街色巷影 |Street",
    icon: "book",
    link: "/street/README.md",
  },
]);
