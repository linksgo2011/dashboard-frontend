const STORAGE_KEY = 'dashboard-v1'

export default {
  fetchAll (key) {
    const store = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    return key ? store[key] : store
  },
  saveAll (key, object) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...this.fetchAll(),
      [key]: object
    }))
  }
}
