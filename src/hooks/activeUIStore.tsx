import { create } from 'zustand'
import { Counter } from './interface/activeUI'

export const Count = create<Counter>((set) => ({
    count: 0,
    setCount: (c) => set({count: c})
}))  
