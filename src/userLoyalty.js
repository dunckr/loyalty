import RequestAdapter from './requestAdapter'
import Monitor from './monitor'

export class UserLoyalty {

  constructor(Request = RequestAdapter, M = Monitor) {
    this.request = new Request()
    this.monitor = new M()
    if (this.active()) { this.request.stub() }
  }

  start() {
    this.request.stub()
    this.monitor.start()
  }

  stop() {
    this.request.unstub()
    this.monitor.stop()
  }

  results() {
    return this.monitor.results()
  }

  active() {
    return this.monitor.active()
  }
}

export default new UserLoyalty()
