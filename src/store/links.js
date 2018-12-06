import storage from './storage.js'

const STORE_KEY = 'LINKS'

export default {
  fetch: function () {
    var links = storage.fetchAll(STORE_KEY) || []
    return links
  },
  save: function (links) {
    storage.saveAll(STORE_KEY, links)
  }
}
