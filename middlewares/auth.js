const jetHelper = require('../helpers/jwtHelper');

exports.check = (req, res, next) => {
  let token = req.header['authorization'];
  token = token?.replace('Bearer', '')?.trim();

  const payload = jetHelper.verify(token);

  if (payload) {
    req.userId=payload.sub
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
};
