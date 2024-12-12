import { Console } from '@woowacourse/mission-utils';
import promptUntilValid from '../utils/promptUntilValid.js';
import { PROMPT } from '../constants/messages.js';
import {
  monthAndDayValidator,
  workersValidator,
} from '../utils/inputValidator.js';

class InputView {
  static async monthAndDay() {
    return promptUntilValid(
      (input) => monthAndDayValidator(input),
      PROMPT.ASK_MONTH_DAY,
    );
  }

  static async workerSchedule() {
    let weekdayWorkers;
    let holidayWorkers;

    while (true) {
      const weekdayInput = await Console.readLineAsync(
        PROMPT.AKS_WORKERS('평일'),
      );
      weekdayWorkers = workersValidator(weekdayInput);
      if (!weekdayWorkers) continue;

      const holidayInput = await Console.readLineAsync(
        PROMPT.AKS_WORKERS('휴일'),
      );
      holidayWorkers = workersValidator(holidayInput);
      if (!holidayWorkers) continue;

      break;
    }

    return { weekdayWorkers, holidayWorkers };
  }
}

export default InputView;
