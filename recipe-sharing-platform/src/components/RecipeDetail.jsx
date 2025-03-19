import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch('../../data.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        if (foundRecipe) {
          setRecipe(foundRecipe);
        } else {
          setError('Recipe not found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <div className="container mx-auto py-8 text-center">Loading recipe...</div>;
  }

  if (error) {
    return <div className="container mx-auto py-8 text-center text-red-500">{error}</div>;
  }

  if (!recipe) {
    return <div className="container mx-auto py-8 text-center">Recipe not found.</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            {recipe.ingredients ? (
              <ul className="list-disc pl-5">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">Ingredients not available.</p>
            )}
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            {recipe.instructions ? (
              <ol className="list-decimal pl-5">
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            ) : (
              <p className="text-gray-600">Instructions not available.</p>
            )}
          </div>
          <p className="text-gray-700">{recipe.fullDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;