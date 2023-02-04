import SingleEvent from '@/src/components/events/singleEvent';

const EventPage = ({eventData, city}) => {
    return (
        <>
            <SingleEvent data={eventData}/>
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
