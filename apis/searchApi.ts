import newAxios from './config';

export interface SearchType {
  searchQuery: string;
  sortBy: string;
}

const search = async ({ searchQuery, sortBy }: SearchType) => {
  const { data } = await newAxios.get(`/api/products/search?keyword=${searchQuery}&sort=${sortBy}`);
  return data;
};

export default search;
