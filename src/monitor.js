import Store from './store'

const COUNTER = 'userLoyalty.COUNTER'
const ACTIVE = 'userLoyalty.ACTIVE'

export default class Monitor {

  constructor(S = Store) {
    this._store = new S()
    if (this.active() === null) this.stop()
    this._increment()
  }

  start() {
    this._store.set(COUNTER, 0)
    this._store.set(ACTIVE, true)
  }

  stop() {
    this._store.set(ACTIVE, false)
  }

  results() {
    return this._counter()
  }

  active() {
    return this._store.get(ACTIVE) === 'true'
  }

  // private

  _increment() {
    if (this.active()) {
      this._store.set(COUNTER, this._counter() + 1)
    }
  }

  _counter() {
    const counter = this._store.get(COUNTER) ? this._store.get(COUNTER) : 0
    return Number(counter)
  }

}
