import axiosInstance from './config';

export interface SearchType {
  searchQuery: string;
  sortBy: string;
}

const search = ({ searchQuery, sortBy }: SearchType) =>
  axiosInstance.get(`/api/products/search?keyword=${searchQuery}&sort=${sortBy}`).then((res) => res.data);

export default search;
