import { create } from "zustand";
import { LogInAdminNameStore, LogInAdminPassStore } from "./interface/login";

export const useLoginAdminName = create<LogInAdminNameStore>((set) => ({
    nameAdmin: '',
    setNameAdmin: (n) => set({ nameAdmin: n })
}))

export const useLoginAdminPass = create<LogInAdminPassStore>((set) => ({
    passAdmin: '',
    setPassAdmin: (n) => set({ passAdmin: n })
}))