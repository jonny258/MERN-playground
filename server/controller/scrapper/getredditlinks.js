const router = require('express').Router()
const puppeteer = require('puppeteer')

const main = async (url) => {
    const browser = await puppeteer.launch({
        headless: 'new'
    })
    const page = await browser.newPage()
    await page.goto(url)
    await page.screenshot({ path: 'screenshot.png' })
    const getData = await page.evaluate(() =>{
        const itemTitles = document.querySelectorAll('a')
        const hrefs = Array.from(itemTitles).map((link) =>{
            return link.href
        })
        let newHrefs = hrefs.filter(link => link.indexOf('ListOfSubreddits') === -1);
        let shortLinkArr = [];
        for (let i = 100; i < 200; i++) {
          let splitHref = newHrefs[i].split('');
          let replacedHref = splitHref.map(char => {
            if (char === "/") {
              return "%2f";
            } else {
              return char;
            }
          });
          shortLinkArr.push(replacedHref.join(''));
        }
        
        return shortLinkArr;
    })
    await browser.close()
    return getData
}

router.get('/',  async (req, res) => {
    const data = await main('https://www.reddit.com/r/ListOfSubreddits/wiki/listofsubreddits/#wiki_general_content')
    res.json(data)
})

module.exports = router