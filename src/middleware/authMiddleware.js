// Example middleware for protected routes
module.exports = (req, res, next) => {
  // In a real app, check for session or token here
  next();
};
