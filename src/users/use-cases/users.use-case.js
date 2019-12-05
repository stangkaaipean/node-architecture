export function makeCreateUser(UserModel) {
  return async function createUser(user) {
    // business logic
    let result;
    await UserModel.create(user).then((res) => {
      result = res;
    }).catch((err) => {

    });
    // business logic
    return result;
  }
}
