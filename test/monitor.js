import describedSpec from '../src/monitor'

describe('Monitor', () => {
  let subject
  class Store {
    set() {}
    get() {}
  }

  beforeEach(() => {
    spyOn(Store.prototype, 'set')
    subject = new describedSpec(Store)
  })

  describe('start', () => {
    it('sets the COUNTER to 0 and ACTIVE to true', () => {
      subject.start()
      expect(Store.prototype.set).toHaveBeenCalledWith('userLoyalty.COUNTER', 0)
      expect(Store.prototype.set).toHaveBeenCalledWith('userLoyalty.ACTIVE', true)
    })
  })

  describe('stop', () => {
    it('sets ACTIVE to 0', () => {
      subject.stop()
      expect(Store.prototype.set).toHaveBeenCalledWith('userLoyalty.ACTIVE', false)
    })
  })

  describe('results', () => {
    it('returns the results', () => {
      expect(subject.results()).toEqual(0)
    })
  })

  describe('active', () => {
    it('returns active state', () => {
      expect(subject.active()).toEqual(false)
    })
  })

})
