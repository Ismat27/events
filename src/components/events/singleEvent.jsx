import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const SingleEvent = ({data}) => {

    const inputEmail = useRef();
    const router = useRouter();
    const [message, setMessage] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault()
    }

    return (
        <div className="event_single_page">
          <h1> {data.title} </h1>
          <Image src={data.image} width={1000} height={500} alt={data.title} />
          <p> {data.description} </p>
          <form onSubmit={onSubmit} className="email_registration">
            <label> Get Registered for this event!</label>
            <input
              ref={inputEmail}
              type="email"
              id="email"
              placeholder="Please insert your email here"
            />
            <button type="submit"> Submit</button>
          </form>
          <p>{message}</p>
        </div>
    );
}

export default SingleEvent