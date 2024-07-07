const User = require('../models/user');
const jwtHelper = require('../utils/jwtHelpers');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  res.json({
    success: true,
  });
};
exports.register = async (req, res) => {
  res.json({
    success: true,
  });
};
exports.me = async (req, res) => {
  res.json({
    success: true,
  });
};
