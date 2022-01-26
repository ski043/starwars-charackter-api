import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CharacktersPage from "./CharacktersPage";

export default function Home({ charackters }) {
  return (
    <div className="bg-zinc-900 min-h-screen px-">
      <h1 className="text-center text-4xl font-bold text-white py-10">
        Welcome, this are the Charackters! 🚀
      </h1>
      <div className="container mx-auto">
        {charackters.map((charackter) => (
          <CharacktersPage {...charackter} key={charackter.id} />
        ))}
      </div>
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
