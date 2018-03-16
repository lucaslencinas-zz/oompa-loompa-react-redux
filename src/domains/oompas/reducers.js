import * as actions from './actionTypes';

const initialState = {
  list: [],
  data: {},
  currentPage: 0,
  ui: {
    isLoadingOompas: false,
    isLoadingOompa: false
  }
}

const buildOompasHashMap = (oompasList) => {
  return oompasList.reduce((acum, oompa) => ({
    ...acum,
    [oompa.id]: {
      ...oompa,
      isPartial: true
    }
  }),
  {});
}

export default (state = initialState, action) => {

  switch (action.type) {
    case actions.FETCH_OOMPAS_REQUEST:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoadingOompas: true
        }
      }

    case actions.FETCH_OOMPAS_SUCCESS:
      return {
        ...state,
        list: state.list.concat(action.oompas.map((oompa) => oompa.id)),
        data: {
          ...state.data,
          ...buildOompasHashMap(action.oompas)
        },
        currentPage: action.currentPage,
        ui: {
          ...state.ui,
          isLoadingOompas: false
        }
      }

    case actions.FETCH_OOMPA_REQUEST:
      return {
        ...state,
        ui: {
          ...state.ui,
          isLoadingOompa: true
        }
      }

    case actions.FETCH_OOMPA_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          [action.oompa.id]: { ...action.oompa, isPartial: false }
        },
        ui: {
          ...state.ui,
          isLoadingOompa: false
        }
      }

    default:
      return state
  }
}
