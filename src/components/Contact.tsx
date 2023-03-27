import React from 'react'
import { send } from 'emailjs-com';

type Props = {}

export default function Contact({}: Props) {
    const [toSend, setToSend] = React.useState({
        from_name: '',
        reply_to: '',
        message: ''
    });

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        send('service_vjrj0lu', 'template_fp82evd', toSend, 'DVk09GD4w6gOAHZDh')

        .then((response) => {
            console.log('Message Sent!', response.status, response.text)
            alert("Message Sent.");
        })

        .catch((err) => {
            console.log('Message Failed to Send.', err)
            alert("Message Failed to Send.")
        })
    };
    
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div className='w-full py-24 h-fit space-y-32 relative px-10 mx-auto flex flex-col items-center justify-evenly'>
            <h1 className='relative top-20 2xl:top-0 text-center selectionwhite font-montserrat font-bold text-6xl md:text-7xl 2xl:text-8xl'>
                Contact.
            </h1>
            
            <form 
            onSubmit={onSubmit}
            className='relative flex flex-col space-y-2 w-full md:w-8/12'>
                <input
                    type="text"
                    name='from_name'
                    placeholder='Name'
                    value={toSend.from_name}
                    onChange={handleChange}
                    className='contactInput h-12'
                    required
                />
                <input
                    type="email"
                    name='reply_to'
                    placeholder='Email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                    className='contactInput h-12'
                    required
                />
                <textarea
                    name='message'
                    placeholder='Message'
                    value={toSend.message}
                    onChange={handleChange}
                    className='contactInput'
                    required>
                </textarea>

                <button type='submit' className='ml-auto font-medium font-montserrat text-lg gradient w-28 p-2 rounded-sm border-2'> Send </button>
            </form>
        </div>
    )
}