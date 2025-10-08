const {getUsers, getRoles, updateUser, deleteUser} = require("../controllers/user");
const authenticated = require("../middlewares/authenticated");
const hasAccess = require("../middlewares/hasAccess");
const mapUser = require("../helpers/mapUser");
const ROLES = require("../constants/roles");
const express = require('express')


const router = express.Router({mergeParams: true})
router.get('/', authenticated, hasAccess([ROLES.ADMIN]), async (req, res) => {
  const users = await getUsers()
  res.send({data: users.map(mapUser)})
})

router.get('/roles', authenticated, hasAccess([ROLES.ADMIN]), async (req, res) => {
  const roles = getRoles()
  res.send({data: roles})
})

router.patch('/:id', authenticated, hasAccess([ROLES.ADMIN]), async (req, res) => {
  const newUser = await updateUser(req.params.id, {
    role: req.body.roleId,
  })
  res.send({data: mapUser(newUser)})
})

router.delete('/:id', authenticated, hasAccess([ROLES.ADMIN]), async (req, res) => {
  await deleteUser(req.params.id)
  res.send({error: null})
})

module.exports = router
