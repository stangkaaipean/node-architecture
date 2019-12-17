export function createErrorResponse(code , reason) {
  // TODO will define err code later.
  return { errors: { code: code, message: reason } };
}