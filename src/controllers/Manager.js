import WorkerSchedule from '../models/WorkerSchedule.js';
import InputView from '../views/InputView.js';

class Manager {
  constructor(calendar) {
    this.Calendar = calendar;
    this.WorkerSchedule;
  }

  async start() {
    await this.#setWorkerSchedule();
    const { month, endDate } = this.Calendar.getMonthInfo();
    for (let d = 1; d <= endDate; d++) {
      this.#fixWorkerOnDate(d);
    }
  }

  async #setWorkerSchedule() {
    const list = await InputView.workerSchedule();
    this.WorkerSchedule = new WorkerSchedule(
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
