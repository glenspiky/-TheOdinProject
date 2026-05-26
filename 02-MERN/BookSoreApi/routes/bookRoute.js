const express = require("express");
const {
  getAllBooks,
  updateSingleBook,
  deleteSingleBook,
  updateBook,
  addNewBook,
  getSingleBook,  
} = require("../comtrollers/bookController");

//create express router
const router = express.Router();

//all the routes that are related to the books only

router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBook);
router.post("/add", addNewBook);
router.put("/udate/:put",updateBook);
router.delete("/delete/:id",deleteSingleBook);

module.exports = router
