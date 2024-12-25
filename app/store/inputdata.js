
import {create} from 'zustand'
export const UseInputData = create((set) => ({
    link: '',
  key: '',
  updatelink: (link) => set(() => ({ link: link })),
  updatekey: (key) => set(() => ({ key: key })),
    
}))