import React from 'react'
import Image from 'next/image';

const Contract = () => {
                return (
                    <>
                        <section className="bg-gray-800 text-white p-10">
            <div className="flex justify-around space-x-10">
                {[
                { value: "350 +", label: "Clients Worldwide" },
                { value: "20 +",  label: "Team Members" },
                { value: "100 +", label: "Projects Completed" },
                { value: "85M +", label: "Revenue Generated" },
                ].map((item, index) => (
                <div key={index}> <p className="text-3xl font-bold text-yellow-200">
                    {item.value}</p>
                    <p>{item.label}</p>
                </div>
                ))}
            </div>
            </section>

            <section className="p-10">
                <div className='flex item-center justify-center'>
                    <div className='w-1/2'>
                        <Image
                            className="flex item-center aling-center justify-center"
                            src="https://thumbs.dreamstime.com/b/two-men-man-business-suit-elegant-young-cartoon-businessman-guy-costume-stock-vector-97980637.jpg"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className='w-1/2'>
                        <h2 className="text-3xl text-right font-bold mb-4 text-gray-800"> We'd love to hear <br/> from you
                        </h2>
        
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    className="border text-black pl-5 w-full placeholder:text-black"
                                    placeholder="Name*"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    className="border text-black pl-5 w-full  placeholder:text-black"
                                    placeholder="Email*"
                                />
                            </div>
                            <div>
                                <input
                                    type="url"
                                    className="border text-black  pl-5 w-full placeholder:text-black"
                                    placeholder="Website URL*"
                                />
                            </div>
                            <div>
                                <textarea
                                    className="border text-black pl-5 w-full  placeholder:text-black"
                                    placeholder="Project Details*"
                                    rows={4}
                                />
                            </div>
                            <button className="bg-black text-white p-3 rounded-md w-full" type="submit">
                                Send Proposal
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contract
