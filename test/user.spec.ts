import { assert } from "chai";
import UserController from "../src/controllers/user";
import UserModel from "../src/models/user";
import UserModelFake from "./models/user";
import * as sinon from "sinon";

describe("User Service Tests", () => {
  let userFake: UserModel;
  beforeEach(() => {
    userFake = new UserModelFake();
  });

  afterEach(() => {
    sinon.restore();
  });

  it("The user should search with the id number.", async () => {
    const userController = new UserController();
    const userMock = sinon.mock(userController);
    userMock.expects("findAsync").withArgs(userFake.id).resolves(userFake);

    const user: UserModel = await userController.findAsync(userFake.id);
    assert.equal(user.id, userFake.id);
  });
});
