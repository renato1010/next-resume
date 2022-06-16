import type { NextPage } from "next";
import { Page } from '@components'

const Home: NextPage = () => {
  return (
    <>
      <Page>
        <h1>Generated PDF</h1>
        <p>This text will be in the PDF!</p>
      </Page>
    </>
  );
};

export default Home;
