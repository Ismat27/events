import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({events_categories}) {
  return (
    <>
      <Head>
        <title>Events Home</title>
        <meta name="description" content="Events App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <Link href={'/'}>Home</Link>
          <Link href={'/events'}>Events</Link>
          <Link href={'/about-us'}>About us</Link>
        </nav>
      </header>
      <main className={styles.main}>
        {
          events_categories.map(cat => {
            const {id, title, description, image} = cat
            return (
              <Link key={id} href={`/events/${id}`}>
                <Image 
                  src={image}
                  alt={title}
                  height={200}
                  width={200}
                />
                <h2>{title}</h2>
                <p>{description}</p>
              </Link>
            )
          })
        }
      </main>
    </>
  )
}

export async function getServerSideProps () {
  const {events_categories} = await import('/data/data.json')
  return {
    props: {
      events_categories
    }
  }
}
