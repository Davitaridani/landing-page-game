const express = require("express");
const app = express();
const port = 3001;
const expressLayouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  let data = {
    title: "Landing Page - Home",
    layout: "./pages/layouts/main-layouts",
  };
  res.render("index", data);
});

app.get("/game", (req, res) => {
  let data = {
    title: "Game",
    layout: "./pages/game",
  };
  res.render("./pages/game", data);
});

app.use("/", (req, res) => {
  res.status(404);
  res.render("./pages/404", {
    title: "404",
    layout: "./pages/404",
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
