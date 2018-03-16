import * as actions from './actionTypes';
import * as selectors from './selectors';
import * as oompaService from '../../services/oompaService';

export const fetchOompas = () => {
  return (dispatch, getState) => {
    const state = getState();
    const nextPage = selectors.currentPage(state) + 1;
    dispatch({ type: actions.FETCH_OOMPAS_REQUEST });

    return oompaService.list({ page: nextPage })
      .then(({ current, results }) => {
        return dispatch({
          type: actions.FETCH_OOMPAS_SUCCESS,
          oompas: results,
          currentPage: current
        })
      })
    ;
  }
}

export const fetchOompa = (id) => {
  return (dispatch, algo) => {
    dispatch({ type: actions.FETCH_OOMPA_REQUEST });

    return oompaService.get({ id })
      .then((oompa) => {
        return dispatch({
          type: actions.FETCH_OOMPA_SUCCESS,
          oompa: { ...oompa, id }
        });
      })
    ;
  }
}
