import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = ({ pokemons }: any) => {
  return (
    <>
      <Head>
        <title>Red Pokemons from an api</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="title">Valami fasza cim kell ide</h1>
      <p className="subtitle">Itt lesznek a varazslatos pokemonok</p>
      {pokemons && pokemons.length && (
        <div className="columns is-multiline">
          {pokemons.map((pokemon: any) => {
            return (
              <div className="column is-one-quarter" key={pokemon.name}>
                <div className="box has-background-info has-text-centered">
                  <h3 className="has-text-white">{pokemon.name}</h3>
                  <Link href={encodeURIComponent(pokemon.name)} passHref>
                    <a className="button is-error">info</a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon-color/blue");
  const redPokemons = await res.json();

  return {
    props: {
      pokemons: redPokemons.pokemon_species,
    },
  };
}

export default Home;
