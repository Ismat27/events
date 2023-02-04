import Image from 'next/image'
import Link from 'next/link'

export async function getStaticProps () {
    const {events_categories} = await import('/data/data.json')
    return {
      props: {
        events_categories
      }
    }
}

const EventsPage = ({events_categories}) => {
    return (
        <div>
            <h1>Events Page</h1>
            {
            events_categories.map(cat => {
                const {id, title, image} = cat
                return (
                    <Link key={id} href={`/events/${id}`}>
                        <Image 
                        src={image}
                        alt={title}
                        height={200}
                        width={200}
                        />
                        <h2>{title}</h2>
                    </Link>
                )
            })
        }
        </div>
    )
}

export default EventsPage