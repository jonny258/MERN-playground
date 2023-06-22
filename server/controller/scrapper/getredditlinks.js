const router = require("express").Router();
const puppeteer = require("puppeteer");
const RedditLink = require("../../models/redditLink");

const main = async (url) => {
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: "screenshot.png" });
  const getData = await page.evaluate(() => {
    const itemTitles = document.querySelectorAll("a");
    const hrefs = Array.from(itemTitles).map((link) => {
      return link.href;
    });
    let newHrefs = hrefs.filter(
      (link) => link.indexOf("ListOfSubreddits") === -1
    );
    let shortLinkArr = [];
    for (let i = 100; i < 300; i++) {
      let splitHref = newHrefs[i].split("");
      let replacedHref = splitHref.map((char) => {
        if (char === "/") {
          return "%2f";
        } else {
          return char;
        }
      });
      shortLinkArr.push(replacedHref.join(""));
    }

    return shortLinkArr;
  });
  await browser.close();
  return getData;
};

router.get("/", async (req, res) => {
  try {
    const links = await RedditLink.find({});
    console.log(links[0]);
    if (links[0] === undefined) {
      const data = await main(
        "https://www.reddit.com/r/ListOfSubreddits/wiki/listofsubreddits/#wiki_general_content"
      );
      for (let i = 0; i < data.length; i++) {
        const newRedditLink = new RedditLink({
          link: data[i],
          name: data[i].slice(33),
        });
        newRedditLink.save();
      }
      res.json(data);
    } else {
      res.json(links);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
