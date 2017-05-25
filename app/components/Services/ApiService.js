/**
 * Created by duong on 5/25/17.
 */
// Inject fetch polyfill if fetch is unsuported
if (!window.fetch) {
  const fetch = require('whatwg-fetch')
}

let ApiService = {
  create(api) {

    console.log(api);

    const data = new FormData();
    data.append('name', api.name);
    data.append('hosts', api.hosts);
    data.append('upstream_url', api.upstreamUrl);

    return fetch(`http://10.10.1.118:8001/apis/`, {
      method: 'POST',
      body: data
    })
      .then(checkStatus)
      .then(response => response.json())
      .then(response => ({ response }))
      .catch(error => ({ error }))
  },
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response.statusText)
  }
}

export default ApiService;
