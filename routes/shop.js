const path = require("path");
const express = require("express");
const route = express.Router();
const adminData = require("./admin");

route.get("/", (req, res, next) => {
  const products = adminData.products;
  console.log("Shop.js ", adminData.products);
  res.render("shop", { prods: products, docTitle: "shop" });
});

module.exports = route;
