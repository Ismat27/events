import Image from 'next/image';

const EventPage = ({eventData, city}) => {
    return (
        <>
            <h1>{city}</h1>
            <div>
                <Image 
                    width={200}
                    height={200}
                    src={eventData.image}
                    alt={eventData.title}
                />
                <h2>{eventData.title}</h2>
                <p>{eventData.description}</p>
            </div>

        </>
    )
}

export async function getStaticPaths () {
    const { allEvents } = await import('/data/data.json');
    const paths = allEvents.map(event => {
        return {
            params: {
                cat: event.city.toLowerCase(),
                id: event.id,
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps ({params}) {
    const { id, cat } = params
    const {allEvents} = await import('/data/data.json');
    const eventData = allEvents.find(event => event.id === id)
    return {
        props: {
            eventData,
            city: cat
        }
    }
}

export default EventPage
