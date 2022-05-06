const createNewAccount = (req, res, next) => {
  console.log(req.body);
  next();
};

module.exports = { createNewAccount };
