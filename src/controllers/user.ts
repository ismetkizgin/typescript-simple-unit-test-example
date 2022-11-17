import UserModel from "../models/user";

export default class UserController {
  findAsync(id: number): UserModel {
    const user: UserModel = { id: 1, firstName: "ismet", lastName: "kizgin" };
    return user;
  }
}
