import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="px-8">
      <Head>
        <title>Improve Logic</title>
        <meta name="description" content="app for improve logic algoritm" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="py-10">
          <h1 className="text-6xl text-center font-semibold">
            Improve{" "}
            <span className="bg-blue-500 px-4 rounded-lg text-white">
              Logic
            </span>
          </h1>
        </div>

        <div></div>
      </main>

      {/* ------ Begin Footer ------ */}
      <footer>
        <div className="w-full pt-10 border-t mt-8">
          <p className="font-medium text-sm text-slate-500 text-center">
            Dibuat dengan <span className="text-pink-500">❤️</span> oleh{" "}
            <a
              href="https://izzyzammil.netlify.app/"
              target="_blank"
              className="font-bold text-primary"
              rel="noreferrer"
            >
              Muzammil
            </a>
            , menggunakan{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="font-bold text-sky-500"
              rel="noreferrer"
            >
              Tailwind CSS
            </a>
            , dan{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              className="font-bold text-slate-700"
              rel="noreferrer"
            >
              NextJs
            </a>
          </p>
        </div>
      </footer>
      {/* ------ End Footer ------ */}
    </div>
  );
};

export default Home;
