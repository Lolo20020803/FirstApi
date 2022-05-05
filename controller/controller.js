const User = require('../model/userModel');

function standar(req, res) {
  return res.json({ text: 'Main Page' });
}
function getAllUser(req,res) {
  User.find({ }, (err, userData) => {
    if (err) return res.status(400).send(err.message);
    if (!userData) return res.status(404).send('No user found');
    return res.send(userData);
  });
}

function getUsuarioById(req, res) {
  User.findById(req.params.id, (err, userData) => {
    if (err) return res.status(400).send(err.message);
    if (!userData) return res.status(404).send('No user found');
    return res.send(userData);
  });
}

function getUserByEmail(req, res) {
  User.findOne({ email: req.params.email }, (err, userData) => {
    if (err) return res.status(400).send(`Error in email search: ${err.message}`);
    if (!userData) return res.status(400).send('Error in email search: no user');
    return res.send(userData);
  });
}

function createUser(req, res) {
  const newUser = new User(req.body);

  newUser.save((err, userInfo) => {
    if (err) return res.status(400).send(`Error in controller: ${err.message}`);
    return res.status(200).send(userInfo);
  });
}
function updateUser(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, (err, updatedUser) => {
    if (err) return res.status(400).send(`Failed to update: ${err.message}`);
    return res.status(200).send({ message: 'update ok', updatedUser });
  });
}
function deleteUser(req, res) {
  User.findByIdAndRemove(req.params.id, (err, userDeleted) => {
    if (err) return res.status(400).send(`Failed to deleted: ${err.message}`);
    return res.status(200).send({ message: 'User deleted', userDeleted });
  });
}

module.exports = {
  getUsuarioById,
  createUser,
  deleteUser,
  updateUser,
  getUserByEmail,
  standar,
  getAllUser,
};
