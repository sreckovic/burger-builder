import { put } from "redux-saga/effects";
import axios from "../../axios-orders";

import * as actions from "../actions/index";

export function* initIgredientsSaga(action) {
  try {
    const response = yield axios.get(
      "https://react-my-burger-e91be.firebaseio.com/ingredients.json"
    );
    yield put(actions.setIgredients(response.data));
  } catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}
