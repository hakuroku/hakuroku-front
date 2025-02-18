import { create } from 'zustand'
import { TopCounter, CurrentPage, ActiveState, selectViewSeries, ActiveModalTopIcon} from './interface/activeUI'


export const useTopCount = create<TopCounter>((set) => ({
    count: 0,
    setCount: (c) => set({count: c})
}))  

export const useCurrentPage = create<CurrentPage>((set) => ({
    currentPage: 0,
    setCurrentPage: (n) => set(() => ({ currentPage: n }))
}))

export const useModalIcon = create<ActiveModalTopIcon>((set) => ({
    modalAddIcon: false,
    modalChangeIcon: false,
    modalDeleteIcon: false,
    setModalAddIcon: (s) => set(()=> ({ modalAddIcon: s})),
    setModalChangeIcon: (s) => set(() => ({ modalChangeIcon: s })),
    setModalDeleteIcon: (s) => set(() => ({ modalDeleteIcon: s }))
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

