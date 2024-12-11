import { Console } from '@woowacourse/mission-utils';

class InputView {
  static async monthAndDay() {
    const input = await Console.readLineAsync(
      '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
    );
    const [month, startDay] = input.split(',');
    return [Number(month), startDay];
  }
}

export default InputView;
