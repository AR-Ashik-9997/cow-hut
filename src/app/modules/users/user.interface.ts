import { Model } from 'mongoose';

export type userName = {
  firstName: string;
  lastName: string;
};

export type IUser = {
  password: string;
  role: 'seller' | 'buyer';
  name: userName;
  phoneNumber: string;
  address: string;
  budget: number;
  income: number;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
