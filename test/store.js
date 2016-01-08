import describedSpec from '../src/store'

describe('Store', () => {
  let subject

  beforeEach(() => {
    window.localStorage.clear()
    subject = new describedSpec()
  })

  describe('get', () => {
    it('returns null if empty', () => {
      expect(subject.get('counter')).toEqual(null)
    })
  })

  describe('set', () => {
    it('stores the value', () => {
      let value = '10'
      subject.set('counter', value)
      expect(subject.get('counter')).toEqual(value)
    })
  })

})
