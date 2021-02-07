const express = require('express');
const router = express.Router();
const userCtrl = require('../controller/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/delete/:tokenUser', userCtrl.delete);
router.put('/update/:tokenUser', userCtrl.modify);
router.get('/profile/:tokenUser', userCtrl.display);
router.get('/getCurrentUser/:tokenUser', userCtrl.getCurrentUser);

module.exports = router;