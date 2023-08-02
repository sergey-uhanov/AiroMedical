import { create } from 'zustand';


const useBearStore = create((set) => ({
    recipe: [],
    setRecipe: (data) => set({ recipe: data }),
}));

export default useBearStore;
