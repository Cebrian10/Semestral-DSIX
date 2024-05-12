import usuarioModel from '../models/usuarioModel.js';

function setUsuario(req, res) {
  res.status(201).json({ message: 'Usuario setUsuario' });
}

function getUsuario(req, res) {
  res.status(201).json({ message: 'Usuario getUsuario' });
}

function getAllUsuario(req, res) {
  res.status(201).json({ message: 'Usuario getAllUsuario' });
}

function createUsuario(req, res) {
  res.status(201).json({ message: 'Usuario createUsuario' });
}

function updateUsuario(req, res) {
  res.status(201).json({ message: 'Usuario updateUsuario' });
}

function deleteUsuario(req, res) {
  res.status(201).json({ message: 'Usuario deleteUsuario' });
}

export {
  setUsuario,
  getUsuario,
  getAllUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario
};