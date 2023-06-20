import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  {
    text: "目的地",
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
  /**
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
   */
]);
