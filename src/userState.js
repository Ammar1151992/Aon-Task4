import { create } from 'zustand'

export const useStore = create((set) => ({
  products: [],
  showTxt: false,
  title: "",
  description: "",
  price: "",
  loading: false,
  open: false,
  edit: false,
  search: "",
  setProducts: (products) => set({ products }),
  setShowTxt: (showTxt) => set({ showTxt }),
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  setPrice: (price) => set({ price }),
  setLoading: (loading) => set({ loading }),
  setOpen: (open) => set({ open }),
  setEdit: (edit) => set({ edit }),
  setSearch: (search) => set({ search }),
}))
