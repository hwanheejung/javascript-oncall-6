import Calendar from './models/Calendar.js';
import InputView from './views/InputView.js';

class App {
  constructor() {}
  async run() {
    const [month, startDay] = await InputView.monthAndDay();
    this.Calendar = new Calendar(month, startDay);
    this.Calendar.initialize();
  }
}

export default App;
