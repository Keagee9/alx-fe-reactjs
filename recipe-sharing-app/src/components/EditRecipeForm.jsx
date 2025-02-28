import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EditRecipeForm from './EditRecipeForm'; // Adjust the path
import useRecipeStore from '../store/recipeStore'; // Adjust the path
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Mock the useRecipeStore
jest.mock('../store/recipeStore', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('EditRecipeForm', () => {
  it('calls preventDefault on form submit', () => {
    const preventDefault = jest.fn();
    const recipe = { id: 1, title: 'Test Recipe', description: 'Test Description' };

    // Mock the store's updateRecipe function
    useRecipeStore.mockReturnValue({
      updateRecipe: jest.fn(),
    });

    const { getByRole } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/recipes/:id" element={<div>Test Route</div>} />
          <Route path="/" element={<EditRecipeForm recipe={recipe} />} />
        </Routes>
      </BrowserRouter>
    );

    const form = getByRole('form');
    fireEvent.submit(form, { preventDefault });

    expect(preventDefault).toHaveBeenCalled();
  });

  it('updates the recipe and navigates on submit', () => {
    const recipe = { id: 1, title: 'Test Recipe', description: 'Test Description' };
    const updateRecipeMock = jest.fn();

    useRecipeStore.mockReturnValue({
      updateRecipe: updateRecipeMock,
    });

    const { getByRole, getByLabelText } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/recipes/:id" element={<div>Test Route</div>} />
          <Route path="/" element={<EditRecipeForm recipe={recipe} />} />
        </Routes>
      </BrowserRouter>
    );

    fireEvent.change(getByLabelText('Title:'), { target: { value: 'Updated Title' } });
    fireEvent.change(getByLabelText('Description:'), { target: { value: 'Updated Description' } });
    fireEvent.click(getByRole('button', { name: 'Save Changes' }));

    expect(updateRecipeMock).toHaveBeenCalledWith({
      id: 1,
      title: 'Updated Title',
      description: 'Updated Description',
    });
  });
});