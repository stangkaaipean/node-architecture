export function makeCreateUserController(userUseCases) {
  return function (req, res) {
    userUseCases.createUser(req.body).then((result) => {4
      res.status(200).json(result);
    }).catch(() => {
      res.status(500).json({ error: 'error' });
    });
  }
}
