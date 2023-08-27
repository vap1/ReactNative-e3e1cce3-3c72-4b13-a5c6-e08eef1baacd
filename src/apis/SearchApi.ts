
import axios from 'axios';
import { SearchRequest, SearchResponse } from '../types/UserTypes';

const BASE_URL = 'http://your-api-base-url.com'; // Replace with your actual API base URL

const SearchApi = {
  search: async (request: SearchRequest): Promise<SearchResponse> => {
    try {
      const response = await axios.get(`${BASE_URL}/search/${request.keyword}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to perform search');
    }
  },
};

export default SearchApi;