export default class RequestAdapter {

  constructor(request = window.XMLHttpRequest) {
    this.request = request
    this.copy = this.request.prototype.send
  }

  stub() {
    this.request.prototype.send = this._fakeSend
  }

  unstub() {
    this.request.prototype.send = this.copy
  }

  // private

  _fakeSend() {
    this.error('ERROR!')
    return this
  }
}
