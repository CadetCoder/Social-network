module.exports = {
  authentication: {
    jwtSecret: process.env.JWT_TOKEN || 'secret',
  },
};