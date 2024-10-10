import React from 'react'
import Image from 'next/image'


const About = () => {
    return (
        <>
            <section className="p-10">
                <h2 className="flex items-center justify-start text-3xl font-bold mb-4 text-gray-800">Who we are</h2>
                <p className="text-left text-xl text-gray-700">
                     We love what we do and create partnerships with our clients to ensure their
                        digital transformation is positioned for long-term success.
                    <br />
                    We believe that the human dimensions essential to start any successful project and
                    that this is where splendid emotional relationships between the company and people are born.
                </p>
            </section>

            <section className='p-10'>
                <div className="text-center flex item-center justify-center">
                    <Image width={470} height={300} src={"https://img.aviationpros.com/files/base/cygnus/cavc/image/2017/01/EB_logo_2009_NOBKGRND_2.58753621aad22.png?auto=format%2Ccompress&w=640&width=640"}/>
                </div>

            </section>
        </>
    )
}

export default About
