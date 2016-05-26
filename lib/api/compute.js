const API = require('../api');
const conoha = require('../conoha');

const compute = new API(conoha.ENDPOINT.compute);

((accessTokenId) => {
  if (accessTokenId) {
    compute.routes = {flavors: compute.process('flavors', {}, {
      headers: {'X-Auth-Token': accessTokenId}
    })};
    compute.routes = {servers: compute.process('servers', {}, {
      headers: {'X-Auth-Token': accessTokenId}
    })};
    compute.routes = {addServer: compute.process('servers', {
      method: 'POST'
    }, {
      headers: {'X-Auth-Token': accessTokenId}
    })};
    compute.routes = {serversDetail: compute.process('servers/detail', {}, {
      headers: {'X-Auth-Token': accessTokenId}
    })};
    compute.routes = {images: compute.process('images', {}, {
      headers: {'X-Auth-Token': accessTokenId}
    })};
    compute.routes = {isoImages: compute.process('iso-images', {}, {
      headers: {'X-Auth-Token': accessTokenId}
    })};
  }
})(conoha.DATA.accessTokenId);