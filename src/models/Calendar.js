import getDataFromFile from '../utils/getDataFromFile.js';

class Calendar {
  /** @type {Map<number, string>} */ holidays;

  constructor(month, startDay) {
    this.month = month;
    this.startDay = startDay;
    this.endDate;
    this.holidays = new Map(); // date, name
  }

  initialize() {
    const rawHolidays = getDataFromFile('../../public/holidays.md');
    rawHolidays.forEach((line) => {
      const [month, date, name] = line.split(',');
      if (this.month == month) this.holidays.set(parseInt(date, 10), name);
    });

    this.endDate = this.#getEndDateOfMonth(this.month);
  }

  /**
   * 특정 월을 기반으로 마지막 날짜를 반환한다.
   * @param {number} month - 해당 월
   * @returns {number} 마지막 날짜 (2월은 항상 28일)
   */
  #getEndDateOfMonth(month) {
    const thirty = [4, 6, 8, 10, 12];
    const thirtyOne = [1, 3, 5, 7, 9, 11];

    if (thirty.includes(month)) return 30;
    if (thirtyOne.includes(month)) return 31;
    return 28;
  }
}

export default Calendar;
