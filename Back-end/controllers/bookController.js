const Book = require("../models/Book");

// Create a new book
const createBook = async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const newBook = new Book({ title, author, summary });
    await newBook.save();
    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
};

// Get a list of all books
const getAllBooks = async (req, res) => {
    try {
      const books = await Book.find().exec();
      res.status(200).json(books);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// Get details of a specific book by its ID
const getBookById = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id).exec();
      if (!book) {
        return res.status(404).json({ error: "Book not found" });
      }
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
// Update a book's details
const updateBook = async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
      if (!book) {
        return res.status(404).json({ error: "Book not found" });
      }
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  ;

// Delete a book

const deleteBook = async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id).exec();
      if (!book) {
        return res.status(404).json({ error: "Book not found" });
      }
      res.status(200).json({ message: "Deleted successful" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  

module.exports = {
  createBook,
  getAllBooks,
  deleteBook,
  updateBook,
  getBookById,
};
