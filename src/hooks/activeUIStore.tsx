import { create } from 'zustand'
import { Counter } from './interface/activeUI'

export const TopCount = create<Counter>((set) => ({
    count: 0,
    setCount: (c) => set({count: c})
}))  
