const Book = require("../models/books");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: "List of data fetched succesfuly",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No books found in the collection",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Somehthing went wrong",
    });
  }
};

const updateSingleBook = async (req, res) => {
  try {
    const updatedBookFormData = req.body;
    const getCurrentId = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(
      getCurrentId,
      updatedBookFormData,
      {
        new: true,
      },
    );
    if (!updatedBook) {
      res.status(404).json({
        success: false,
        message: "Book is not found with this id",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book updated",
      data: updatedBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Somehthing went wrong",
    });
  }
};

const deleteSingleBook = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const deleteBook = await Book.findByIdAndDelete(getCurrentBookId);
    if (!deleteBook) {
      res.status(404).json({
        success: false,
        message: "Book is not found with this id",
      });
    } else {
      res.status(200).json({
        success: true,
        data: deleteBook,
        message: "Book deleted succesfuly",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Somehthing went wrong",
    });
  }
};

const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: "Book added succesfuly",
        data: newlyCreatedBook,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Somehthing went wrong",
    });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const bookDetailsById = await Book.findByIdAndDelete(getCurrentBookId);
    if (!bookDetailsById) {
      return res.status(404).json({
        success: false,
        message: "Book with the current id is not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: bookDetailsById,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Somehthing went wrong",
    });
  }
};

module.exports = {
  getAllBooks,
  updateSingleBook,
  deleteSingleBook,
  addNewBook,
  getSingleBook,
};
