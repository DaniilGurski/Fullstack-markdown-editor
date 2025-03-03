import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const markdownPreviewOpenedAtom = atom(false);
export const darkModeOnAtom = atomWithStorage("markdownDarkMode", false);
export const documentPanelOpenedAtom = atom(false);
