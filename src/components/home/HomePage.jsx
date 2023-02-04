import Link from 'next/link'
import Image from 'next/image'

const HomePage = ({events_categories}) => {
  return (
    <div className='home_body'>
        {
          events_categories.map(cat => {
            const {id, title, description, image} = cat
            return (
              <Link key={id} href={`/events/${id}`} >
                <div className='card'>
                  <div className='image'>
                    <Image 
                      src={image}
                      alt={title}
                      width={600} height={400}
                    />
                  </div>
                  <div className='content'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                  </div>
                </div>
              </Link>
            )
          })
        }
    </div>
  )
}

export default HomePage