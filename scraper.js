const puppeteer = require("puppeteer");
console.log("test");
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: false
    });
    const page = (await browser.pages())[0];
    await page.goto(
        "https://captcha.com/demos/features/captcha-demo.aspx",
        { waitUntil: "load" }
    );
    await page.waitForSelector("#demoCaptcha_CaptchaImage");
    const elementHandler = await page.$("#demoCaptcha_CaptchaImage");
    const base64String = await elementHandler.screenshot({ encoding: "base64" });
    console.log(base64String);
})();