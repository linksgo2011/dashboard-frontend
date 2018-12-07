import storage from './storage.js'

const STORE_KEY = 'NOTES'

export default {
  fetch: function () {
    var notes = storage.fetchAll(STORE_KEY) || []
    this.uid = notes.length
    return notes
  },
  save: function (notes) {
    storage.saveAll(STORE_KEY, notes)
  }
}
