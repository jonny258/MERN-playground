const mongoose = require("mongoose");

const redditLinkSchema = new mongoose.Schema({
  link: { type: String, required: true },
  name: { type: String, required: true },
});

const RedditLink = mongoose.model("RedditLink", redditLinkSchema);

module.exports = RedditLink;
