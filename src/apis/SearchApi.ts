
import axios from 'axios';
import { SearchRequest, SearchResponse } from '../types/UserTypes';

const BASE_URL = 'YOUR_API_BASE_URL';

export const search = async (keyword: string): Promise<SearchResponse> => {
  try {
    const response = await axios.get<SearchResponse>(`${BASE_URL}/search/${keyword}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to search. Please try again.');
  }
};