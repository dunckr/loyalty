import describedSpec from '../src/requestAdapter'

describe('RequestAdapter', () => {
  let subject

  beforeEach(() => {
    subject = new describedSpec()
  })

  describe('stub', () => {
    it('stubs out XMLHttpRequest.send', () => {
      subject.stub()
      expect(window.XMLHttpRequest.prototype.send).toEqual(subject._fakeSend)
    })
  })

  describe('unstub', () => {
    it('sets XMLHttpRequest.send back to the default', () => {
      subject.unstub()
      expect(window.XMLHttpRequest.prototype.send).toEqual(subject.copy)
    })
  })

})
