const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let books = [
  { id: 1, title: "Book 1" },
  { id: 2, title: "Book 2" },
  { id: 3, title: "Book 3" },
  { id: 4, title: "Book 4" },
  { id: 5, title: "Book 5" },
  { id: 6, title: "Book 6" },
  { id: 7, title: "Book 7" },
  { id: 8, title: "Book 8" },
  { id: 9, title: "Book 9" },
  { id: 10, title: "Book 10" },
];

app.get("/", (req, res) => {
  res.send("HomePage");
});

app.get("/books", (req, res) => {
  res.json(books);
});

// Read a single book
app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Book not found");
  res.json(book);
});
// Create a new book
app.post("/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
  };
  books.push(newBook);
  res.json(newBook);
});

// Update a book
app.put("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Book not found");

  book.title = req.body.title;
  res.json(book);
});

// Delete a book
app.delete("/books/:id", (req, res) => {
  books = books.filter((b) => b.id !== parseInt(req.params.id));
  res.send("Book deleted successfully");
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
