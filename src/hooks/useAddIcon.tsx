import { create } from "zustand";
import { AddIconStore } from "./interface/addIconsData";

export const useAddIconData = create<AddIconStore>((set)=>({
    addSeriesId: null,
    addTopView: null,
    addLinkView: null,
    setAddSeriesId: ( seriesId )=> set( {addSeriesId: seriesId}),
    setAddTopView: ( topView )=> set({ addTopView: topView}),
    setAddLinkView: (iconLinkView) => set({ addLinkView: iconLinkView})
}))