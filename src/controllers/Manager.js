import WorkerSchedule from '../models/WorkerSchedule.js';
import InputView from '../views/InputView.js';

class Manager {
  constructor(calendar) {
    this.month = null;
    this.calendar = calendar;
    this.workerSchedule = null;
    this.lastAssigned = '';
    this.shouldAssign = {
      평일: [],
      휴일: [],
    };
  }

  async start() {
    await this.#setWorkerSchedule();
    const { month, endDate } = this.calendar.getMonthInfo();
    this.month = month;
    for (let d = 1; d <= endDate; d++) {
      this.#fixWorkerOnDate(d);
    }
  }

  async #setWorkerSchedule() {
    const list = await InputView.workerSchedule();
    this.workerSchedule = new WorkerSchedule(
      list.weekdayList,
      list.holidayList,
    );
  }

  // 날짜에 worker fix
  #fixWorkerOnDate(date) {
    console.log(date);
  }
}

export default Manager;
