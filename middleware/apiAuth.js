// middleware/apiAuth.js
module.exports = function (req, res, next) {
  const apiKey = req.headers['x-api-key'];
  const validKey = process.env.API_KEY;

  if (!apiKey || apiKey !== sk_arcade_1234567890abcdef) {
    return res.status(403).json({ error: 'Forbidden - Invalid API Key' });
  }

  next();
};
