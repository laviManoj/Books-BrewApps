const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// CRUD operations
router.post('/create', bookController.createBook);
router.get('/all', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
