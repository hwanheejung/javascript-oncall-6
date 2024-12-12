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
      ['1,일', [1, '일']],
      ['2,월', [2, '월']],
      ['3,화', [3, '화']],
      ['9,수', [9, '수']],
      ['10,목', [10, '목']],
      ['11,금', [11, '금']],
      ['12,토', [12, '토']],
      ['1,dnfj', null],
      ['0,월', null],
      ['13,월', null],
      ['13,월', null],
      ['1,,월', null],
    ])('should return %p for input %p', (input, expected) => {
      expect(monthAndDayValidator(input)).toEqual(expected);
      if (expected === null) {
        expect(Console.print).toHaveBeenCalledWith(ERROR.INVALID_MONTH_DAY);
      }
    });
  });

  describe('scheduleValidator()', () => {
    it.each([
      [
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
      ],
      ['수아,수아,글로,고니,도밥,준팍', null], // 중복 x
      ['일이삼사오육,수아,글로,고니,도밥,준팍', null], // 최대 5자
      ['', null], // 빈 값
      ['일,,이', null], // 빈 값
      ['수아,글로,고니', null], // 5명 미만
      [
        '일,이,삼,사,오,육,칠,팔,구,십,십일,십이,십삼,십사,십오,십육,십칠,십팔,십구,이십,이십일,이십이,이십삼,이십사,이십오,이십육,이십칠,이십팔,이십구,삼십,삼십일,삼십이,삼십삼,삼십사,삼십오,삼십육',
        null,
      ], // 35명 초과
    ])('should return %p for input %p', (input, expected) => {
      expect(workersValidator(input)).toEqual(expected);
      if (expected === null) {
        expect(Console.print).toHaveBeenCalledWith(ERROR.INVALID_WORKERS);
      }
    });
  });
});
