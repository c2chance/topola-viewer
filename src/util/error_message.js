// error-messages.js
export const ERROR_MESSAGES = new Map([
  ['AUTH_001', 'Invalid credentials. Please try again.'],
  ['AUTH_002', 'Your session has expired. Please login.'],
  ['AUTH_003', 'Account locked. Contact support.'],
  ['RATE_LIMIT', 'Too many requests. Wait a moment.'],
  ['NETWORK_ERROR', 'Connection failed. Check your internet.'],
  ['SERVER_ERROR', 'Something went wrong. Try again later.'],
]);

// api-handler.js
function handleApiError(errorCode) {
  const message =
    ERROR_MESSAGES.get(errorCode) ?? 'An unexpected error occurred';

  // Handle error logs, analytics, notifications, etc.
  console.log(errorCode, message);
}

// Usage
handleApiError('AUTH_002');
// Output: AUTH_002 Your session has expired. Please login.

handleApiError('RATE_LIMIT');
// Output: RATE_LIMIT Too many requests. Wait a moment.

handleApiError('UNKNOWN_CODE');
// Output: UNKNOWN_CODE An unexpected error occurred
