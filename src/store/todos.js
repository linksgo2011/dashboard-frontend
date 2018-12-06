import storage from './storage.js'

const STORE_KEY = 'TODOS'

export default {
  uuid: 0,
  fetch: function () {
    var todos = storage.fetchAll(STORE_KEY) || []
    this.uid = todos.length
    return todos
  },
  save: function (todos) {
    storage.saveAll(STORE_KEY, todos)
  }
}
