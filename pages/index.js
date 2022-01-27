import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import CharacktersPage from "./CharacktersPage";

export default function Home({ charackters }) {
  const [value, setValue] = useState(8);

  const ClickHandler = () => {
    setValue(value + 8);
  };

  return (
    <div className="bg-zinc-900 min-h-screen ">
      <Navbar />
      <div className="flex flex-wrap  container mx-auto justify-center gap-14">
        {charackters
          .filter((charackter) => charackter.id !== 25)
          .map(
            (charackter, index) =>
              index < value && (
                <CharacktersPage {...charackter} key={charackter.id} />
              )
          )}
      </div>
      {value < charackters.length && (
        <button
          onClick={ClickHandler}
          className="text-gray-300 w-full mt-12 hover:text-white text-xl "
        >
          SHOW MORE
        </button>
      )}
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://akabab.github.io/starwars-api/api/all.json");
  const charackters = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      charackters,
    },
  };
}
