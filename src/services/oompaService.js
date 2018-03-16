import { format } from 'url';

const serviceUri = {
  protocol: 'https',
  host: '2q2woep105.execute-api.eu-west-1.amazonaws.com'
};


export function list({ page }) {
  const url = format({
    ...serviceUri,
    pathname: '/napptilus/oompa-loompas',
    query: { page }
  });

  return fetch(url)
    .then((response) => response.json());
}

export function get({ id }) {
  const url = format({
    ...serviceUri,
    pathname: `/napptilus/oompa-loompas/${id}`
  });

  return fetch(url)
    .then((response) => response.json());
}
