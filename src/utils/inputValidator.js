import { Console } from '@woowacourse/mission-utils';
import { ERROR } from '../constants/messages.js';

export const monthAndDayValidator = (input) => {
  // '1,월'
  const regex = /^(1[0-2]|[1-9]),(일|월|화|수|목|금|토)$/;

  if (!regex.test(input)) {
    Console.print(ERROR.INVALID_MONTH_DAY);
    return null;
  }

  const [month, startDay] = input.split(',');
  return [Number(month), startDay];
};

export const workersValidator = (input) => {
  // '준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리'
  const workers = input.split(',').map((worker) => worker.trim());

  // 빈 worker 입력됐는지 확인
  if (workers.filter((worker) => worker === '').length !== 0) {
    Console.print(ERROR.INVALID_WORKERS_EMPTY);
    return null;
  }
  // 개별 worker 1자 이상 5자 이하인지 확인
  const lengthRegex = /^[가-힣a-zA-Z]{1,5}$/;
  if (workers.filter((worker) => !lengthRegex.test(worker)).length > 0) {
    Console.print(ERROR.INVALID_WORKERS_NAME_LENGTH);
    return null;
  }

  // 중복 확인
  if (new Set(workers).size !== workers.length) {
    Console.print(ERROR.INVALID_WORKERS_DUPLICATE);
    return null;
  }

  // 5명 이상, 35명 이하인지 확인
  if (workers.length < 5 || workers.length > 35) {
    Console.print(ERROR.INVALID_WORKERS_LENGTH);
    return null;
  }

  return workers;
};
