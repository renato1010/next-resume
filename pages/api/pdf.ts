import { NextApiHandler } from "next";
import { launch } from "puppeteer";

const handler: NextApiHandler = async (_, res) => {
  const browser = await launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000");
  await page.emulateMediaType("screen");
  const pdfBuffer = await page.pdf({ format: "a4" });
  res.send(pdfBuffer);
  await browser.close();
};

export default handler;
