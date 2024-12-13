import { Console } from '@woowacourse/mission-utils';
import { ERROR } from '../../src/constants/messages.js';
import {
  monthAndDayValidator,
  workersValidator,
} from '../../src/utils/inputValidator.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: { print: jest.fn() },
}));

describe('utils/inputValidator', () => {
  describe('monthAndDayValidator()', () => {
    it.each([
      ['정상 입력', '1,일', [1, '일']],
      ['정상 입력', '2,월', [2, '월']],
      ['정상 입력', '3,화', [3, '화']],
      ['정상 입력', '9,수', [9, '수']],
      ['정상 입력', '10,목', [10, '목']],
      ['정상 입력', '11,금', [11, '금']],
      ['정상 입력', '12,토', [12, '토']],
      ['요일 비정상', '1,dnfj', null],
      ['월 비정상', '0,월', null],
      ['월 비정상', '13,월', null],
      ['잘못된 포맷', '1,,월', null],
    ])('%s: 입력값 "%s"', (_, input, expected) => {
      expect(monthAndDayValidator(input)).toEqual(expected);
      if (expected === null) {
        expect(Console.print).toHaveBeenCalledWith(ERROR.INVALID_MONTH_DAY);
      }
    });
  });

  describe('scheduleValidator()', () => {
    it.each([
      [
        '정상 입력',
        '준팍,도밥,고니,수아,루루,글로,솔로스타,우코,슬링키,참새,도리',
        [
          '준팍',
          '도밥',
          '고니',
          '수아',
          '루루',
          '글로',
          '솔로스타',
          '우코',
          '슬링키',
          '참새',
          '도리',
        ],
        null,
      ],
      [
        '중복 입력',
        '수아,수아,글로,고니,도밥,준팍',
        null,
        ERROR.INVALID_WORKERS_DUPLICATE,
      ],
      [
        '최대 글자수(5자) 초과',
        '일이삼사오육,수아,글로,고니,도밥,준팍',
        null,
        ERROR.INVALID_WORKERS_NAME_LENGTH,
      ],
      ['빈 값 입력', '', null, ERROR.INVALID_WORKERS_EMPTY],
      ['빈 이름 입력', '일,,이', null, ERROR.INVALID_WORKERS_EMPTY],
      [
        '최소 근무자 수(5명) 못채움',
        '수아,글로,고니',
        null,
        ERROR.INVALID_WORKERS_LENGTH,
      ],
      [
        '최대 근무자 수(35명) 초과',
        '일,이,삼,사,오,육,칠,팔,구,십,십일,십이,십삼,십사,십오,십육,십칠,십팔,십구,이십,이십일,이십이,이십삼,이십사,이십오,이십육,이십칠,이십팔,이십구,삼십,삼십일,삼십이,삼십삼,삼십사,삼십오,삼십육',
        null,
        ERROR.INVALID_WORKERS_LENGTH,
      ],
    ])('%s', (_, input, expected, error) => {
      expect(workersValidator(input)).toEqual(expected);
      if (expected === null) {
        expect(Console.print).toHaveBeenCalledWith(error);
      }
    });
  });
});
