const getKorReqType = (req: string) => {
  switch (req) {
    case 'purchase':
      return '제품구매 의뢰 확인';

    case 'make':
      return '제품제작 의뢰 확인';

    case 'sell':
      return '판매입점 의뢰 확인';

    default:
      break;
  }
};

export default getKorReqType;
