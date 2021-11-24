import { ReactChild } from "react";
import Head from "next/head";
import "bulma/css/bulma.min.css";

interface LayoutProps {
  children: ReactChild;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <main>
        <div className="container">{props.children}</div>
      </main>
    </>
  );
}
