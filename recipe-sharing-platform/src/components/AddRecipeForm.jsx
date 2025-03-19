import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [titleError, setTitleError] = useState('');
  const [ingredientsError, setIngredientsError] = useState('');
  const [stepsError, setStepsError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!title.trim()) {
      setTitleError('Title is required');
      isValid = false;
    } else {
      setTitleError('');
    }

    if (!ingredients.trim()) {
      setIngredientsError('Ingredients are required');
      isValid = false;
    } else if (ingredients.trim().split('\n').filter(item => item.trim()).length < 2) {
      setIngredientsError('Please list at least two ingredients');
      isValid = false;
    } else {
      setIngredientsError('');
    }

    if (!steps.trim()) {
      setStepsError('Preparation steps are required');
      isValid = false;
    } else {
      setStepsError('');
    }

    if (isValid) {
      // In a real application, you would send this data to an API
      const newRecipe = {
        title,
        ingredients: ingredients.split('\n').map(item => item.trim()).filter(item => item),
        steps: steps.split('\n').map(item => item.trim()).filter(item => item),
        // You might want to generate a unique ID here or let the backend handle it
        id: Date.now(),
        image: 'https://via.placeholder.com/300/CCCCCC/FFFFFF?Text=NewRecipe', // Placeholder image
        summary: ingredients.split('\n')[0] || 'New Recipe Summary', // Basic summary
      };
      console.log('New Recipe Submitted:', newRecipe);
      // Reset the form after submission (optional)
      setTitle('');
      setIngredients('');
      setSteps('');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {titleError && <p className="text-red-500 text-xs italic">{titleError}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 text-sm font-bold mb-2">
            Ingredients:
            <span className="text-gray-500 italic">(one per line)</span>
          </label>
          <textarea
            id="ingredients"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {ingredientsError && <p className="text-red-500 text-xs italic">{ingredientsError}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="steps" className="block text-gray-700 text-sm font-bold mb-2">
            Preparation Steps:
            <span className="text-gray-500 italic">(one step per line)</span>
          </label>
          <textarea
            id="steps"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          {stepsError && <p className="text-red-500 text-xs italic">{stepsError}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;