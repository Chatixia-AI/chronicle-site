// The home page's words in the page's language. Every component takes a lang prop and reads its text from here.
import type { Lang } from "../data/site";
import { en } from "./en";
import { ja } from "./ja";

export type { Seg, Strings } from "./en";

export const t = (lang: Lang) => (lang === "ja" ? ja : en);
