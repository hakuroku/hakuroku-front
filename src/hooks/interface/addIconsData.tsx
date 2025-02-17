import { iconId, iconTopView, iconLinkView } from "../../types/stateIconData";

export interface AddIconStore {
    addSeriesId: iconId;
    addTopView: iconTopView;
    addLinkView: iconLinkView
    setAddSeriesId: (seriesId: iconId)=> void
    setAddTopView: (topView: iconTopView)=> void;
    setAddLinkView: (iconView: iconLinkView) => void;
}