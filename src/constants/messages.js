export const PROMPT = Object.freeze({
  ASK_MONTH_DAY: '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
  AKS_WORKERS: (type) =>
    `${type} 비상 근무 순번대로 사원 닉네임을 입력하세요> `,
});

export const ERROR = Object.freeze({
  INVALID_MONTH_DAY: '[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.',
  INVALID_WORKERS: '[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.',
});
