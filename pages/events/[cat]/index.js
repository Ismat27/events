import Image from 'next/image';
import Link from 'next/link';

const Cat = ({events, city}) => {
    return (
        <>
            <h1>All events in {city}</h1>
            {
                events.map(event => {
                    return (
                        <Link key={event.id} href={`/events/${city}/${event.id}`}>
                            <Image 
                                src={event.image}
                                width={200}
                                height={200}
                                alt={event.title}
                            />
                            <h2>{event.title}</h2>
                            <p>{event.description}</p>
                        </Link>
                    )
                })
            }

        </>
    )
}

export async function getStaticPaths () {
    const {events_categories} = await import('/data/data.json');
    const paths = events_categories.map(category => {
        return {
            params: {
                cat: category.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps ({params}) {
    const { cat } = params
    const {allEvents} = await import('/data/data.json');
    const events = allEvents.filter(event => event.city.toLowerCase() === cat.toLowerCase())
    return {
        props: {
            events,
            city: cat.toLowerCase()
        }
    }
}

export default Cat