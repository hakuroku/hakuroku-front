import { create } from 'zustand'
import { Counter, ActiveState, selectViewSeries} from './interface/activeUI'


export const TopCount = create<Counter>((set) => ({
    count: 0,
    setCount: (c) => set({count: c})
}))  

export const useActive = create<ActiveState>((set) => ({
    seriesModal: false,
    setSeriesModal: (b) => set(() => ({ seriesModal: b })),

    seriesSelect: false,
    setSeriesSelect: (b) => set(() => ({ seriesSelect: b }))
}))

export const useSelectViewSeries = create<selectViewSeries>((set) => ({
    selectViewSeriesTitle: '',
    setSelectViewSeriesTitle: (s) => set(({ selectViewSeriesTitle: s}))
}))

