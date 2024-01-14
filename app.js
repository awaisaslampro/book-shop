const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs"); //use a template engine to render the HTML dynamically with the value.
//Express has several template engines available, and one commonly used is EJS (Embedded JavaScript).

app.use("/admin", adminData.routs);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "page not found" });
});
app.listen(3000);
