import RecipeList from './components/RecipeList'; // Or 
import AddRecipeForm from './components/AddRecipeForm'; // Or 

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;