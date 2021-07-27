export const toggleDropdown = () => ({
  type: "TOGGLE_DROPDOWN",
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  payload: item,
});
