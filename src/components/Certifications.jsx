'use client';

import { Carousel } from 'flowbite-react';
import certificate from '../assets/certificate/certificates';

export default function Certifications() {
  return (
    <div
      className="h-[550px] lg:h-[800px] lg:w-full py-20 px-2 lg:px-10"
      id="certifications"
    >
      <h1 className="text-center text-3xl font-bold">Certification</h1>
      <Carousel>
        {certificate.map((cert) => (
          <div key={cert.id} className="w-[350px] lg:w-[500px]">
            <div>
              <a href={cert.link}>
                <img
                  className="object-fill w-full h-full"
                  src={cert.image}
                  alt={cert.title}
                />
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
