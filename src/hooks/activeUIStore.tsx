import { create } from 'zustand'
import { Counter, ActiveState} from './interface/activeUI'


export const TopCount = create<Counter>((set) => ({
    count: 0,
    setCount: (c) => set({count: c})
}))  

export const useActive = create<ActiveState>((set) => ({
    seriesModal: false,
    setSeriesModal: (b) => set((preModal) => ({ seriesModal: b })),

    seriesSelect: false,
    setSeriesSelect: (b) => set((preSelect) => ({ seriesSelect: b }))
}))


