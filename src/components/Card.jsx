'use client';

import { Card } from 'flowbite-react';
import projects from '../assets/projects/projects';

export default function CardProject() {
  return (
    <div className="md:grid md:grid-cols-2">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="max-w-sm mt-8 md:mx-4"
          href={project.link}
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={project.image}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {project.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
