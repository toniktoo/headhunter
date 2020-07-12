import { handleActions } from 'redux-actions';
import {
  changeExperience,
  changePage,
  changeCity,
  setIsOpenModalSearch,
  setCountItemsOnPage,
  setFirstLoaded,
} from '../actions/utils';

const initState = {
  experience: 1,
  currentPage: 1,
  countItemsOnPage: 10,
  city: { title: 'Москва', areaId: 1 },
  isOpenModalSearch: true,
  firstLoaded: false,
};

export const reducerUtils = handleActions(
  {
    [changePage]: (state, { payload: { currentPage } }) => {
      return { ...state, currentPage };
    },
    [setCountItemsOnPage]: (state, { payload: { count } }) => {
      return { ...state, countItemsOnPage: count };
    },
    [changeCity]: (state, { payload: { city } }) => {
      return { ...state, city };
    },

    [changeExperience]: (state, { payload: { experience } }) => {
      return { ...state, experience };
    },
    [setIsOpenModalSearch]: (state, { payload: { isOpenModalSearch } }) => {
      return { ...state, isOpenModalSearch };
    },
    [setFirstLoaded]: (state, { payload: { firstLoadedApp } }) => {
      return { ...state, firstLoadedApp };
    },
  },
  initState
);
