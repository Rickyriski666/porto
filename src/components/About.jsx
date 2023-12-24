export default function About() {
  return (
    <div className="flex justify-center py-20" id="about">
      <div className="container flex justify-center">
        <div className="w-hero-width lg:w-full bg-background-hero rounded-tl-[50px] rounded-br-[50px] shadow-hero-shadow">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-center p-8 ">
            <img
              src="src\assets\HeroImage.svg"
              alt=""
              className="lg:w-[400px] lg:h-[400px] "
            />
            <div className="my-4 ">
              <h1 className="text-5xl font-bold text-center lg:text-left">
                Hi There!
              </h1>

              <p className="mt-4">I’m Ricky RIskiawan, and I’m Web Developer</p>
              <p className="mt-4">
                My main focus is on Frontend Developer, but I also have an
                interest into backend development. Im currently learning about
                Web Developer especially on FullStack Developer
              </p>
              <p className="mt-4">
                I hope you enjoy my profile. If you want to get in touch, feel
                free to say hello through any of the social links{' '}
                <a href="#contact" className="underline">
                  here.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
