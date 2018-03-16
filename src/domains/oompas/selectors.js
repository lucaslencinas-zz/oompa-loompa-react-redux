import { createSelector } from 'reselect';

export const currentPage = (state) => state.oompas.currentPage;
const oompasKeys = (state) => state.oompas.list;
const oompasData = (state) => state.oompas.data;

export const oompas = createSelector(
  oompasKeys,
  oompasData,
  ($keys, $oompas) => $keys.map((key) => $oompas[key])
);

export const oompa = createSelector(
  (state, props) => props.id,
  oompasData,
  (oompaId, $oompas) => $oompas[oompaId]
);
