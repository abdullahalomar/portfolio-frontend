export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export interface Blog {
  id: string;
  title: string;
  description: string;
  publish_date: string;
  image: string;
  link: string;
  total_likes: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technology: string;
  link: string;
}
