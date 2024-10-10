import React from 'react';
import Image from 'next/image';

const Employers = () => {
  const employer = [
    {
      name: "Loki Laufeyson",
      title: "Founder",
      bgColor: "bg-yellow-300",
      pic: "https://imgv3.fotor.com/images/ai-headshot-generator/a-man-in-dark-casual-outfit-with-his-back-to-the-bridge.jpg"
    },
    {
      name: "Thor Odinson",
      title: "Developer",
      bgColor: "bg-yellow-500",
      pic: "https://imgv3.fotor.com/images/ai-headshot-generator/a-man-wearing-a-jean-jacket.jpg"
    },
    {
      name: "Freyja Lover",
      title: "Designer",
      bgColor: "bg-yellow-700",
      pic: "https://imgv3.fotor.com/images/ai-headshot-generator/a-woman-with-long-hair-wearing-the-blue-slip-dress.jpg"
    },
  ];

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold mb-20 text-gray-800">
        Meet the heroes behind the magic
      </h1>
      <div className="flex justify-around space-x-10">
        {employer.map((e, index) => (
          <div key={index} className={`p-4 rounded-lg ${e.bgColor}`}>
            <div className="flex flex-col items-center">
              <Image
                className="rounded-full"
                src={e.pic}
                alt={`${e.name}`}
                width={100}
                height={100}
              />
              <p className="font-bold text-gray-800 mt-2">{e.name}</p>
              <p className="text-gray-600">{e.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Employers;