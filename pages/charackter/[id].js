import React from "react";
import CharackterDetails from "../../components/CharackterDetails";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Charackter = ({ charackter }) => {
  return (
    <div className="bg-zinc-900 min-h-screen ">
      <Navbar />
      <div className="container mx-auto">
        <CharackterDetails {...charackter} />
      </div>
      <Footer />
    </div>
  );
};

export default Charackter;

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://akabab.github.io/starwars-api/api/all.json");
  const charackters = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = charackters.map(
    (charackter) => `/charackter/${charackter.id}.json`
  );

  return {
    paths,
    fallback: false,
  };
}

//executed on server
export async function getStaticProps(context) {
  const res = await fetch(
    `https://akabab.github.io/starwars-api/api/id/${context.params.id}`
  );
  const charackter = await res.json();

  return {
    props: {
      charackter,
    },
  };
}
