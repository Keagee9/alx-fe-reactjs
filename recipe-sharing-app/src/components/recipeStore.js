


import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes:,
  searchTerm: '',
  filteredRecipes:,

  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) => {
        const searchTerm = state.searchTerm.toLowerCase();
        return (
          recipe.title.toLowerCase().includes(searchTerm) ||
          recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(searchTerm)
          ) 
        );
      }),
    })),

  // ... your existing actions for adding, deleting, updating recipes
}));