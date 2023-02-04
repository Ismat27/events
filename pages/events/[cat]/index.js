import Image from 'next/image';
import Link from 'next/link';

const Cat = ({events, city}) => {
    return (
        <div className='cat_events'>
            <h1>All events in {city}</h1>
            <div className='content'>
                {
                    events.map(event => {
                        return (
                            <Link key={event.id} href={`/events/${city}/${event.id}`}>
                                <div className='card'>
                                    <Image 
                                        src={event.image}
                                        width={200}
                                        height={200}
                                        alt={event.title}
                                    />
                                    <h2>{event.title}</h2>
                                    <p>{event.description}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
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