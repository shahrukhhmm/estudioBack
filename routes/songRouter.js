// using multer


const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
    create,
    getAll,
    getById,
    update,
    getByCategory,
    getThumbnailsByCategory,
    addLike,
    addComment,
    getAllLikedSongs,
    getThumbnailById,
    getAudioById,
    removeLike,
    deleteComment
} = require('../controllers/songController');

// Multer configuration
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, 'uploads/') // Set the destination folder where files will be saved
//     },
//     filename: function(req, file, cb) {
//         cb(null, file.originalname) // Keep the original file name
//     }
// });
// const upload = multer({ storage: storage });

// Routes
router.post('/create', create);
router.get('/getAll', getAll);
router.get('/getById/:id', getById);
router.put('/update/:id', update);
router.get('/getByCategory/:category', getByCategory);
router.post('/addLike', addLike);
router.delete('/removeLike', removeLike);
router.post('/addComment', addComment);
router.get('/getThumbnailsByCategory/:category', getThumbnailsByCategory);
router.get('/getThumbnails/:id', getThumbnailById);

router.get('/getAllLikedSongs/:userId', getAllLikedSongs);

router.get('/song/:id/audio', getAudioById);
router.get('/user/:userId/liked-songs', getAllLikedSongs);
router.post('/deleteComment', deleteComment);

// like routes
router.post('/addLike', addLike);

module.exports = router;