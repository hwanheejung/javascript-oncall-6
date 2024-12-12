import getDataFromFile from '../utils/getDataFromFile.js';

class Calendar {
  /** @type {Map<number, string>} */ holidays;

  constructor(month, startDay) {
    this.month = month;
    this.startDay = startDay; // 시작 요일
    this.endDate;
    this.holidays = []; // date
  }

  initialize() {
    const rawHolidays = getDataFromFile('../../public/holidays.md');
    rawHolidays.forEach((line) => {
      const [month, date, name] = line.split(',');
      if (this.month == month) this.holidays.push(parseInt(date, 10));
    });

    this.endDate = this.#getEndDateOfMonth(this.month);
  }

  getMonthInfo() {
    return { month: this.month, endDate: this.endDate };
  }

  /**
   * @param {number} date - 날짜
   * @returns {string, boolean} 요일, 휴일 여부
   */
  getDateInfo(date) {
    let isHoliday = false;
    if (this.holidays.includes(date)) isHoliday = true;

    return { isHoliday };
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

  /**
   * 날짜를 기반으로 요일을 반환한다.
   * @param {number} date
   * @returns {string} 해당 날짜의 요일
   */
  #getDayByDate(date) {}
}

export default Calendar;
