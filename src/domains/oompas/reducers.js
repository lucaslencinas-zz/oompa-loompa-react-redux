import * as actions from './actionTypes';

const initialState = {
  list: [],
  data: {},
  currentPage: 0,
  hasMoreOompas: false
};

const oompasPerPage = 25;

const buildOompasHashMap = (oompasList) => (
  oompasList.reduce((acum, oompa) => ({
    ...acum,
    [oompa.id]: {
      ...oompa,
      isPartial: true
    }
  }), {})
);

export default function oompasReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_OOMPAS_SUCCESS:
      return {
        ...state,
        list: state.list.concat(action.oompas.map((oompa) => oompa.id)),
        data: {
          ...state.data,
          ...buildOompasHashMap(action.oompas)
        },
        currentPage: action.currentPage,
        hasMoreOompas: action.oompas.length === oompasPerPage
      };

    case actions.FETCH_OOMPA_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          [action.oompa.id]: { ...action.oompa, isPartial: false }
        }
      };

    default:
      return state;
  }
}
