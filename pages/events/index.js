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
        <div className="events_page">
            {
            events_categories.map(cat => {
                const {id, title, image} = cat
                return (
                    <Link key={id} href={`/events/${id}`}>
                        <div className='card'>
                            <Image 
                            src={image}
                            alt={title}
                            height={500}
                            width={500}
                            />
                            <h2>{title}</h2>
                        </div>
                    </Link>
                )
            })
        }
        </div>
    )
}

export default EventsPage