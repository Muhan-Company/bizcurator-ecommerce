import { atom } from 'recoil';

interface ReqDetails {
  category: string;
  categoryId: number;
  companyIntroduction: string;
  desiredDeliveryDate: string;
  desiredEstimateDate: string;
  establishYear: number;
  image: string;
  productDetail: string;
  quantity: number;
  requestContext: string;
  requestId: number;
}

const reqDetailsState = atom<ReqDetails | null>({
  key: 'reqDetailsState',
  default: null,
});

export default reqDetailsState;
