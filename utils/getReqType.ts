const getReqType = (req: string) => {
  switch (req) {
    case '제품구매 의뢰':
      return 'purchase';

    case '제품제작 의뢰':
      return 'make';

    case '제품입점 의뢰':
      return 'sell';

    default:
      break;
  }
};

export default getReqType;
