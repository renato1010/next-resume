import { NextApiHandler } from "next";
import { launch } from "puppeteer";

const handler: NextApiHandler = async (req, res) => {
  let { pageName } = req.query;
  const browser = await launch();
  const page = await browser.newPage();
  pageName = pageName === "home" ? "" : pageName;

  await page.goto(`http://localhost:3000${pageName ? `/${pageName}` : ""}`);
  await page.emulateMediaType("screen");
  const pdfBuffer = await page.pdf({ format: "a4" });
  res.send(pdfBuffer);
  await browser.close();
};

export default handler;
