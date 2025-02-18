import { SeriesTitle } from "../../types/statePostData";
import { StateActive } from "../../types/stateActive";

export interface Counter {
    count: number;
    setCount: (c: number) => void
}
export interface ActiveModalTopIcon {
    modalAddIcon: StateActive;
    modalChangeIcon: StateActive;
    modalDeleteIcon: StateActive;
    setModalAddIcon: (s: StateActive) => void;
    setModalChangeIcon: (s: StateActive) => void;
    setModalDeleteIcon: (s: StateActive) => void;
}

export interface ActiveState {
    seriesModal:StateActive;
    seriesSelect: StateActive;

    setSeriesModal: (b: StateActive) => void;
    setSeriesSelect: (b: StateActive) => void;
}

export interface selectViewSeries {
    selectViewSeriesTitle: SeriesTitle;
    setSelectViewSeriesTitle: (s: SeriesTitle) => void;
}