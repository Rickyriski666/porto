import CardProject from './Card';

export default function Project() {
  return (
    <div className="py-20 flex justify-center" id="projects">
      <div className="container flex justify-center mt-6" id="about">
        <div className="w-hero-width md:w-full bg-background-hero rounded-xl shadow-hero-shadow">
          <div className="flex flex-col items-center justify-center p-8">
            <h1 className="text-center text-3xl font-bold">Project</h1>
            <CardProject />
          </div>
        </div>
      </div>
    </div>
  );
}
