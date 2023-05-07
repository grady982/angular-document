import { BaseModel } from './base.model';

export interface UserModel {
  userName: string;
  mail: string;
  phone: string;
  birthday: string;
}

export interface UserRspModel extends BaseModel<UserModel> {}

export interface UserReqModel extends UserModel {
  createUser: string;
}
