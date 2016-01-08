export default class Store {

  constructor(backend = window.localStorage) {
    this._backend = backend
  }

  get(key) {
    return this._backend.getItem(key)
  }

  set(key, value) {
    this._backend.setItem(key, value)
  }

}
