import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIgredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIgredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

// Our synchronous 'action' that we want to 'dispatch' when our asynchronous 'initIgredients action' is done
export const setIgredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
};

// Our asynchronous action
export const initIgredients = () => {
  return dispatch => {
    axios
      .get("https://react-my-burger-e91be.firebaseio.com/ingredients.json")
      .then(response => {
        dispatch(setIgredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
