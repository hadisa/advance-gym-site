import { create } from "zustand"

interface AppStore {
  isMenuOpen: boolean
  setMenuOpen: (open: boolean) => void
  activeSection: string
  setActiveSection: (section: string) => void
}

export const useAppStore = create<AppStore>((set) => ({
  isMenuOpen: false,
  setMenuOpen: (open) => set({ isMenuOpen: open }),
  activeSection: "home",
  setActiveSection: (section) => set({ activeSection: section }),
}))
