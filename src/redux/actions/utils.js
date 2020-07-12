import { createAction } from 'redux-actions';

export const changeExperience = createAction('CHANGE_EXPERIENCE');
export const changePage = createAction('CHANGE_PAGE');
export const changeCity = createAction('CHANGE_CITY');
export const setIsOpenModalSearch = createAction('SET_IS_OPEN_MODAL');
export const setCountItemsOnPage = createAction('SET_COUNT_ITEMS_ON_PAGE');
export const setFirstLoaded = createAction('SET_FIRST_LOADED');
