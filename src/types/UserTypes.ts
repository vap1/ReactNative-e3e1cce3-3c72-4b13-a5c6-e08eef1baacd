
export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

export interface DataInputRequest {
  user: User;
}

export interface DataInputResponse {}

export interface SearchRequest {
  keyword: string;
}

export interface SearchResponse {
  searchResults: User[];
}

export interface DataDisplayRequest {}

export interface DataDisplayResponse {
  users: User[];
}