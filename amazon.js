const puppeteer = require('puppeteer');

let browser = null;
let page = null;

// constants
const BASE_URL = 'https://amazon.com';

const amazon = {

    initialize: async () => {
        console.log('Starting the scraper...');

        browser = await puppeteer.launch({
            headless: false
        })

        page = await browser.newPage();

        await page.goto(BASE_URL, { waitUntil: 'networkidle2' });
        
        console.log('Initialization completed...');

    },

    getProductDetails: async (link) => {
        console.log(`Going o the Product Page.. (${link})`);

        await page.goto(link, { waitUntil: 'networkidle2'});

        let details = await page.evaluate(() => {
            let title = document.querySelector('#productTitle').innerText;

            return {
                title,
            }
        });
        return details;
    },

    end: async () => {
        console.log('Stopping the scraper...');

        await browser.close();
    }

};

module.exports = amazon;