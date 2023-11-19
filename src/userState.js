import { create } from 'zustand'

export const useStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  showTxt: false,
  setShowTxt: (showTxt) => set({ showTxt }),
}))
