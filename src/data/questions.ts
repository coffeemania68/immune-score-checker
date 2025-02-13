
export const questions = [
  {
    id: 1,
    question: "최근 3개월 동안 감기에 걸린 횟수는?",
    options: [
      { value: "0", label: "전혀 없음", score: 10 },
      { value: "1", label: "1회", score: 8 },
      { value: "2", label: "2회", score: 5 },
      { value: "3", label: "3회 이상", score: 2 },
    ],
  },
  {
    id: 2,
    question: "평소 하루 수면 시간은?",
    options: [
      { value: "1", label: "7-8시간", score: 10 },
      { value: "2", label: "6-7시간", score: 7 },
      { value: "3", label: "5-6시간", score: 4 },
      { value: "4", label: "5시간 미만", score: 2 },
    ],
  },
  {
    id: 3,
    question: "규칙적인 운동을 하시나요?",
    options: [
      { value: "1", label: "주 3회 이상", score: 10 },
      { value: "2", label: "주 1-2회", score: 7 },
      { value: "3", label: "가끔", score: 4 },
      { value: "4", label: "거의 안함", score: 2 },
    ],
  },
  {
    id: 4,
    question: "하루 물 섭취량은?",
    options: [
      { value: "1", label: "8컵 이상", score: 10 },
      { value: "2", label: "6-7컵", score: 8 },
      { value: "3", label: "4-5컵", score: 5 },
      { value: "4", label: "3컵 이하", score: 2 },
    ],
  },
  {
    id: 5,
    question: "스트레스 수준은?",
    options: [
      { value: "1", label: "거의 없음", score: 10 },
      { value: "2", label: "약간 있음", score: 7 },
      { value: "3", label: "다소 높음", score: 4 },
      { value: "4", label: "매우 높음", score: 2 },
    ],
  },
  {
    id: 6,
    question: "채소와 과일 섭취는?",
    options: [
      { value: "1", label: "매일", score: 10 },
      { value: "2", label: "주 4-6회", score: 8 },
      { value: "3", label: "주 2-3회", score: 5 },
      { value: "4", label: "거의 안함", score: 2 },
    ],
  },
  {
    id: 7,
    question: "손 씻기 횟수는?",
    options: [
      { value: "1", label: "매우 자주", score: 10 },
      { value: "2", label: "적절히", score: 8 },
      { value: "3", label: "가끔", score: 5 },
      { value: "4", label: "거의 안함", score: 2 },
    ],
  },
  {
    id: 8,
    question: "음주 빈도는?",
    options: [
      { value: "1", label: "전혀 안함", score: 10 },
      { value: "2", label: "월 1-2회", score: 8 },
      { value: "3", label: "주 1-2회", score: 5 },
      { value: "4", label: "주 3회 이상", score: 2 },
    ],
  },
  {
    id: 9,
    question: "햇빛 노출 시간은?",
    options: [
      { value: "1", label: "매일 30분 이상", score: 10 },
      { value: "2", label: "주 3-4회", score: 8 },
      { value: "3", label: "주 1-2회", score: 5 },
      { value: "4", label: "거의 없음", score: 2 },
    ],
  },
  {
    id: 10,
    question: "장 건강은 어떠신가요?",
    options: [
      { value: "1", label: "매우 좋음", score: 10 },
      { value: "2", label: "양호", score: 8 },
      { value: "3", label: "보통", score: 5 },
      { value: "4", label: "좋지 않음", score: 2 },
    ],
  },
  {
    id: 11,
    question: "평소 피로감은?",
    options: [
      { value: "1", label: "거의 없음", score: 10 },
      { value: "2", label: "가끔", score: 8 },
      { value: "3", label: "자주", score: 5 },
      { value: "4", label: "항상", score: 2 },
    ],
  },
  {
    id: 12,
    question: "몸이 아플 때 회복 속도는?",
    options: [
      { value: "1", label: "매우 빠름", score: 10 },
      { value: "2", label: "보통", score: 7 },
      { value: "3", label: "느린 편", score: 4 },
      { value: "4", label: "매우 느림", score: 2 },
    ],
  },
];

export const getResult = (score: number) => {
  if (score >= 100) return {
    grade: "최상",
    description: "매우 훌륭한 면역력을 가지고 계십니다!",
    recommendations: [
      "현재의 건강한 생활습관을 유지하세요",
      "정기적인 건강검진으로 관리를 지속하세요",
      "주변 사람들과 건강한 습관을 공유해보세요",
    ]
  };
  if (score >= 80) return {
    grade: "양호",
    description: "좋은 면역력 상태입니다",
    recommendations: [
      "규칙적인 운동을 통해 더욱 건강해질 수 있어요",
      "충분한 수면으로 면역력을 지키세요",
      "건강한 식단을 유지하세요",
    ]
  };
  if (score >= 60) return {
    grade: "보통",
    description: "면역력 관리가 필요한 상태입니다",
    recommendations: [
      "하루 30분 이상 걷기를 시작해보세요",
      "과일과 채소 섭취를 늘려보세요",
      "스트레스 관리에 신경 써주세요",
    ]
  };
  return {
    grade: "주의",
    description: "면역력이 많이 저하된 상태입니다",
    recommendations: [
      "전문의와 상담을 통해 건강 체크를 받아보세요",
      "규칙적인 생활습관 개선이 필요합니다",
      "영양 보충제 섭취를 고려해보세요",
    ]
  };
};
