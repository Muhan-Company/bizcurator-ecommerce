import { atom } from 'recoil';

interface SortByElment {
  id: number;
  sortName: string;
  english: string;
}

const sortByList = [
  { id: 1, sortName: '신상품', english: 'newest' },
  { id: 2, sortName: '인기순', english: 'popular' },
  { id: 3, sortName: '낮은 가격', english: 'low_price' },
  { id: 4, sortName: '높은 가격', english: 'high_price' },
];

const sortByState = atom<SortByElment>({
  key: 'sortByState',
  default: sortByList[0],
});

export { sortByList, sortByState };
