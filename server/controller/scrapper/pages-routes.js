const router = require("express").Router();
const puppeteer = require("puppeteer");

const main = async (url) => {
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: "screenshot.png" });
  const getData = await page.evaluate(() => {
    const cards = document.querySelectorAll("h3");
    const test = Array.from(cards).map((item) => {
        const cardTitle = item.innerText
        const cardLink = item.parentElement.parentElement.href

        return ({
            cardTitle: cardTitle,
            cardLink: cardLink,
        })
      });
    return test;
  });
  await browser.close();
  return getData;
};

router.get("/:href", async (req, res) => {
  const href = req.params.href;
  data = await main(href);
  res.json(data);
});

module.exports = router;

//.parentElement
//.children  //returns an array