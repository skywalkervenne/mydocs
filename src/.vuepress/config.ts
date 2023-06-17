import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Wandering Wind  | 随机漫步",
  //description: "testxxxx",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
