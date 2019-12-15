export function validUserBodyNeeded(req, res, next) {
  const errors = [];
  const body = req.body
  if (!body || !body.data || !body.data.user) {
    return res.status(400).json(createErrorResponse(undefined, 'Bad request'));
  }
  const user = body.data.user;
  if (!user.username) {
    errors.push('Username is required');
  }

  if (!user.password) {
    errors.push('Password is required');
  }

  if (!user.email) {
    errors.push('Email is required');
  }

  if (!user.firstName) {
    errors.push('firstName is required');
  }

  if (!user.lastName) {
    errors.push('lastName is required');
  }

  if (errors.length > 0) {
    return res.status(400).json(createErrorResponse(undefined, errors.join(',')));
  }
  next();
}