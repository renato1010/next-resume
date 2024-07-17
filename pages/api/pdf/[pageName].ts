import { NextApiHandler } from 'next';
import { launch } from 'puppeteer-core';

const handler: NextApiHandler = async (req, res) => {
  let { pageName, plain } = req.query;
  const browser = await launch({executablePath:'/usr/bin/google-chrome'});
  const page = await browser.newPage();
  pageName = pageName === 'home' ? '' : pageName;
  const visitUrl = `http://localhost:3000${
    pageName ? `/${pageName}?plain=${plain}` : `/?plain=${plain}`
  }`;

  await page.goto(visitUrl);
  await page.emulateMediaType('screen');
  const pdfBuffer = await page.pdf({ format: 'a4' });
  res.send(pdfBuffer);
  await browser.close();
};

export default handler;
