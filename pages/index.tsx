import Head from "next/head";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Head>
        <title>Keystatic | Blank Template</title>
        <meta
          name="description"
          content="Create a new project using keystatic"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/keystatic">Go to Keystatic</Link>
    </>
  );
}
