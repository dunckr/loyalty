import { UserLoyalty } from '../src/userLoyalty'

describe('UserLoyalty', () => {
  let subject
  class Request {
    stub() {}
    unstub() {}
  }
  const results = 10
  const active = true
  class Monitor {
    start() {}
    stop() {}
    results() { return results }
    active() { return active }
  }

  beforeEach(() => {
    spyOn(Request.prototype, 'stub')
    spyOn(Request.prototype, 'unstub')
    spyOn(Monitor.prototype, 'start')
    spyOn(Monitor.prototype, 'stop')
    subject = new UserLoyalty(Request, Monitor)
  })

  describe('start', () => {
    it('calls Request.stub and Monitor.start', () => {
      subject.start()
      expect(Request.prototype.stub).toHaveBeenCalled()
      expect(Monitor.prototype.start).toHaveBeenCalled()
    })
  })

  describe('stop', () => {
    it('calls Request.unstub and Monitor.stop', () => {
      subject.stop()
      expect(Request.prototype.unstub).toHaveBeenCalled()
      expect(Monitor.prototype.stop).toHaveBeenCalled()
    })
  })

  describe('results', () => {
    it('returns monitor results', () => {
      expect(subject.results()).toEqual(results)
    })
  })

  describe('active', () => {
    it('returns monitor results', () => {
      expect(subject.active()).toEqual(active)
    })
  })

})
