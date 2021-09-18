export interface ApiResponse<T = any> {
  status: boolean;
  result: T;
  errorCode: number;
  errorMessage: string;
  errors: string[];
}

export interface PaginationModel<T = any> {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  records: T[];
  recordsTotalCount: number;
}


export interface ErrorModel {
  errorMessage: string;
  errors: string[];
  errorCode: number;
  result: any;
  status: boolean;
}