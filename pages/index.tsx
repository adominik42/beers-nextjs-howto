import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import slugify from 'slugify'

const Home: NextPage = ({pokemons}: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Red Pokemons from an api</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Red Pokemons from an api
        </h1>

      <ul>
        {pokemons && pokemons.map((pokemon: any) => {
          return (
            <li key={pokemon.name}>
              <Link href={encodeURIComponent(pokemon.name)}>{pokemon.name}</Link>
            </li>
          )
        })}
      </ul>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://pokeapi.co/api/v2/pokemon-color/blue')
  const redPokemons = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      pokemons: redPokemons.pokemon_species
    },
  }
}

export default Home
