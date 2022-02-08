const { sendStatus } = require('express/lib/response');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const authConfig = require('../../config/authConfig.ts');

module.exports = async (request: any, response: any, next: any) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.sendStatus(401).json({ error: 'Token not provided' });
  }

  const [, token] = authorization.split(' ');

  try {
    await promisify(jwt.verify)(token, authConfig.secret);

    return next();
  } catch {
    return sendStatus(401).json({ error: 'Token not valid' });
  }
};
