import Head from 'next/head'
import { Inter } from '@next/font/google'
import HomePage from '@/src/components/home/HomePage'

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
      <HomePage events_categories={events_categories} />
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
