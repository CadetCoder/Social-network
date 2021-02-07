const express = require('express');
const router = express.Router();
const postCtrl = require('../controller/posts');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')

router.get('/', auth, postCtrl.getAllPosts);
router.get('/profile/:tokenUser', auth, postCtrl.getPostsUser);
router.get('/:id', auth, postCtrl.getOnePostId);
router.post('/:tokenUser', auth, multer, postCtrl.createPosts);
router.put('/:tokenUser/:id', auth, multer, postCtrl.modifyPosts);
router.delete('/:id', auth, postCtrl.deletePosts);
router.post('/:id/like', auth, postCtrl.postLikes);
router.post('/:id/dislike', auth, postCtrl.postDislike);
router.get('/:tokenUser/comments/:id', auth, postCtrl.getAllcomments);
router.post('/:tokenUser/comments/:id', auth, postCtrl.postComments);
router.put('/:tokenUser/comments/:id', auth, postCtrl.modifyComments);
router.delete('/:tokenUser/comments/:id', auth, postCtrl.deleteComments);


module.exports = router;