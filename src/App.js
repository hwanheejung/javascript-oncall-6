import Manager from './controllers/Manager.js';
import Calendar from './models/Calendar.js';
import InputView from './views/InputView.js';

class App {
  async run() {
    // initialize calendar
    const [month, startDay] = await InputView.monthAndDay();
    const calendar = new Calendar(month, startDay);
    calendar.initialize();

    // manager start working
    const manager = new Manager(calendar);
    await manager.start();
  }
}

export default App;
