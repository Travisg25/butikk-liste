import uuid from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const initailState = {
  items: [
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Bacon" },
    { id: uuid(), name: "Garlic" },
    { id: uuid(), name: "Chicken" }
  ]
};

export default function(state = initailState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state;
  }
}
