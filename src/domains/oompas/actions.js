import * as actions from './actionTypes';
import * as selectors from './selectors';
import storage from '../../repositories/oompaStorage';
import * as oompaService from '../../services/oompaService';

function getOompas({ page }) {
  return storage.getOompas(page)
    .then((oompas) => oompas || oompaService.list({ page }).then(storage.setOompas));
}

function getOompa({ id }) {
  return storage.getOompa(id)
    .then((oompa) => oompa || oompaService.get({ id })
      .then((fullOompa) => storage.setOompa({ ...fullOompa, id })));
}

export function fetchOompas() {
  return (dispatch, getState) => {
    const state = getState();
    const nextPage = selectors.currentPage(state) + 1;
    dispatch({ type: actions.FETCH_OOMPAS_REQUEST });

    return getOompas({ page: nextPage })
      .then(({ current, results }) => (
        dispatch({
          type: actions.FETCH_OOMPAS_SUCCESS,
          oompas: results,
          currentPage: current
        })
      ));
  };
}

export function fetchOompa(id) {
  return (dispatch) => {
    dispatch({ type: actions.FETCH_OOMPA_REQUEST });

    return getOompa({ id })
      .then((oompa) => (
        dispatch({
          type: actions.FETCH_OOMPA_SUCCESS,
          oompa: { ...oompa, id }
        })
      ));
  };
}
