import { createSelector } from "reselect";

const selectHome = (state) => state.home;

export const selectMenus = createSelector([selectHome], (home) => home.menus);
