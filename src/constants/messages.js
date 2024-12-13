export const PROMPT = Object.freeze({
  ASK_MONTH_DAY: '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
  AKS_WORKERS: (type) =>
    `${type} 비상 근무 순번대로 사원 닉네임을 입력하세요> `,
});

export const ERROR = Object.freeze({
  INVALID_MONTH_DAY: '[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.',
  INVALID_WORKERS_EMPTY:
    '[ERROR] 빈 이름이 입력됐습니다. 1~5자의 이름을 입력해주세요.',
  INVALID_WORKERS_NAME_LENGTH: '[ERROR] 이름은 1~5자로 입력해주세요.',
  INVALID_WORKERS_DUPLICATE:
    '[ERROR] 중복된 이름이 입력됐습니다. 다시 입력해 주세요.',
  INVALID_WORKERS_LENGTH:
    '[ERROR] 근무자는 5명 이상, 35명 이하여야 합니다. 다시 입력해 주세요.',
});
