const express = require("express");

const app = express();

//root route

app.get("/", (req, res) => {
  res.send("Welcome to the homepage");
});

//get all products
const products = [
  {
    id: 1,
    label: "Product 1",
  },
  {
    id: 2,
    label: "Product 2",
  },
  {
    id: 3,
    label: "Product 3",
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  //const productId = parseInt(req.params.id)
  const product = products.find((p) => p.id == Number(id));
  if (product) {
    return res.json(product);
  }
  res.status(500).send("item not found");
});

const port = 3000;
app.listen(port, () => {
  console.log("LIstening");
});
