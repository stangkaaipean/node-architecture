export function createErrorResponse(reason) {
  // TODO will define err code later.
  return { errors: { code: undefined, message: reason } };
}