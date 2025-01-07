import { create } from 'zustand'
import { topViewCount } from './interface/activeUI'

export const ImgsCount = create<topViewCount>((set) => ({
    count: 0,
    setCount: (c) => set({count: c})
}))  
