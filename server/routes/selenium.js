const express = require('express');
const puppeteer = require('puppeteer');
const ScrapedData = require('../Models/ScrapedData'); 
const router = express.Router();

router.post('/scrape', async (req, res) => {
  const { url, userId } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  let browser;
  let page;

  
  try {
    // Initialize Puppeteer
    browser = await puppeteer.launch({ headless: false }); // headless: false to open the browser visibly
    page = await browser.newPage();

    await page.setViewport({ width: 1280, height: 720 });

    await page.goto(url, { waitUntil: 'networkidle2' });


    const scrapedData = await page.evaluate(() => {
      const data = {};

      // Scrape all paragraphs
      data.paragraphs = Array.from(document.querySelectorAll('p')).map(p => p.innerText);

      // Scrape all headings
      data.headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => h.innerText);

      // Scrape all links
      data.links = Array.from(document.querySelectorAll('a')).map(a => ({
        text: a.innerText,
        href: a.href
      }));

      // Scrape all images
      data.images = Array.from(document.querySelectorAll('img')).map(img => ({
        src: img.src,
        alt: img.alt
      }));

      // Scrape page title
      data.pageTitle = document.title;

      return data;
    });

    // Save the scraped data to MongoDB
    const newScrapedData = new ScrapedData({
      url, userId,
      ...scrapedData
    });

    await newScrapedData.save();
    res.status(200).json({scrapedData: newScrapedData});
  } catch (error) {
    console.error('Error during scraping:', error);
    res.status(500).json({ error: 'Failed to scrape the website' });
  } finally {
    if (browser) {
      await browser.close(); 
    }
  }
});

module.exports = router;
