import axiosInstance from './config';

export interface SearchType {
  searchQuery: string;
  sort: string;
}

const search = ({ searchQuery, sort }: SearchType) =>
  axiosInstance.get(`/api/products/search?keyword=${searchQuery}&sort=${sort}`).then((res) => res.data);

export default search;
