import { SeriesTitle } from "../../types/statePostData";

export interface Counter {
    count: number;
    setCount: (c: number) => void
}

export interface ActiveState {
    seriesModal: boolean;
    seriesSelect: boolean;

    setSeriesModal: (b: boolean) => void;
    setSeriesSelect: (b: boolean) => void;
}

export interface selectViewSeries {
    selectViewSeriesTitle: SeriesTitle;
    setSelectViewSeriesTitle: (s: SeriesTitle) => void;
}