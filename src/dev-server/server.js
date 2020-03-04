// purpose of devServer is to test functions like ampifyStory with dummy data. This can't be done with storybook

const express = require("express");
const app = express();
const port = 3003;
const { homePage } = require("./templates");
const amp = require("../../dist/bundle");
const { ampifyTextStory } = amp;
const { config } = require("./mock-data/config");
const { story } = require("./mock-data/story");

app.get("/", (req, res) => res.status(200).send(homePage));
app.get("/ampifyTextStory", (req, res) => {
  const ampified = ampifyTextStory({ story, config });
  const statusCode = ampified instanceof Error ? 500 : 200;
  res.status(statusCode).send(ampified);
});
app.use((req, res) => res.status(404).send(`404 - Page not found! <a href="/">Go Home</a>`));

app.listen(port, () => console.log(`Dev Server running on port ${port}`));
