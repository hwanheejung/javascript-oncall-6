## 기능 정리

### InputView

- `monthAndDay`: 월(숫자)과 시작 요일(일, 월, 화, 수, 목, 금, 토) 정보를 입력

  - 연도는 고려하지 않으며, 매년 2월은 28일까지만 있다고 가정

- `workersSchedule`
  - `weekdayList`: 평일 비상 근무 순서를 입력받는다.
  - `holidayList`: 휴일(토요일, 일요일, 법정공휴일) 비상 근무 순서를 입력받는다.
  - 평일 순번 또는 휴일 순번의 입력 값이 올바르지 않은 경우, '평일 순번'부터 다시 입력 받는다.

### Utils

- [x] promptUntilValid
- [x] inputValidator
  - [x] monthAndDayValidator
  - [x] workersValidator: 중복x, 최대 5자, 5~35명

### models

- Calendar.js

  - [x] {month, endDate, startDay, holidays: [date]}
  - [x] initialize()

    - [x] read 'public/holidays.md'
    - [x] parse {month, date, name}
    - [x] this.holidays = filter month
    - [x] this.endDate = getEndDate(month)

  - getDateInfo(date)
    - {day, holiday}
  - getMonthInfo()
    - {month, endDate}

- WorkersSchedule.js
  - {weekdayList, holidayList, yesterdayWorker}
  - getWorkerInFront(isHoliday)
    - {name}
  - getYesterdayWorker()
    - {name}
  - setYesterdayWorker(name)
  - changeOrder(isHoliday)

### controllers

- Manager (일할사람 확정하는 역할)
  - {month, endDate} = Calendar.getMonthInfo()
  - 오늘 날짜 정보 불러오기 {day, isHoliday} = Calendar.getDateInfo(date)
  - 오늘 일할 사람 불러오기 {name} = WorkerSchedule.getWorkerInFront(date)
    - 어제 일한 사람인지 확인
      - Y: 날짜 바꾸기
      - N: 확정
  - WorkerSchedule.setYesterDayWorker(name)

### OutputView

-

### App.js

- initializeCalendar()
