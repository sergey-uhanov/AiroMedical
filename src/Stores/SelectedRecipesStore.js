import { create } from 'zustand';


const SelectedRecipesStore = create((set) => ({
    selectRecipe: [],
    pushSelectRecipe: (data) => {
        set((state) => {
            // Check if an element with the same id exists in the selectRecipe array
            const duplicateItem = state.selectRecipe.find(item => item.id === data.id);

            if (!duplicateItem) {
                return { selectRecipe: [...state.selectRecipe, data] };
            }

            return state; // No changes needed, return the current state
        });
    },
    delSelectRecipe: (id) => set((state) => ({ selectRecipe: state.selectRecipe.filter(item => item.id !== id) })),
}));


export default SelectedRecipesStore;
