import UserModel from "../../src/models/user";
import { faker } from "@faker-js/faker";

export default class UserModelFaker extends UserModel {
  constructor() {
    super();
    faker;
  }
}
