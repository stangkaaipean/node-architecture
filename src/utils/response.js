export function messageResponse(data, message) {
  return { responses: { data: data, message: message} }
}