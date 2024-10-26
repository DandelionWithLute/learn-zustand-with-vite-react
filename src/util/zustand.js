import { create } from "zustand";

const useStore = create((set) => ({
  hp: 100,
  pp: 120,
  increaseHp: () => set((state) => ({ hp: state.hp + 1 })),
}));

export default useStore;
