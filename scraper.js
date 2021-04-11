const puppeteer = require("puppeteer");
console.log("test");
(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: false
    });
    const page = (await browser.pages())[0];
    await page.goto(
        "https://captcha.com/demos/features/captcha-demo.aspx",
        { waitUntil: "load" }
    );
    //await page.waitForSelector('#top > div.container > div.header > div > div.logocontainer > a > span');
    await page.screenshot({
        path: "./ignore.png"
    });
    const elementHandler = await page.$('#demoCaptcha_CaptchaImage');
    await elementHandler.screenshot({
        path: "./captcha.jpg"
    });
    //const base64String = await elementHandler.screenshot({ encoding: "base64" });
    //console.log(base64String);
})();