export interface BaseModel<T> {
  data: T;
  error: boolean;
  message: string;
}
