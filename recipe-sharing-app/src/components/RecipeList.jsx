 // RecipeList component
 import { useRecipeStore } from './recipeStore';

 const RecipeList = () => {
   const recipes = useRecipeStore(state => state.recipes);
   const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
   return (
     <div>
          {filteredRecipes.map((recipe) => (
         <div key={recipe.id}>
           <h3>{recipe.title}</h3>
           <p>{recipe.description}</p>
         </div>
       ))}
     </div>
   );
 };

 export default RecipeList;



 import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  

  return (
    <div>
      {/* ... your existing code ... */}
    
        <div key={recipe.id}>
          {/* ... display recipe information ... */}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;