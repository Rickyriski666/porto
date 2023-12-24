export default function Contact() {
  return (
    <div className="py-20 scroll-smooth" id="contact">
      <div className="p-8 bg-grey">
        <h1 className="text-white text-center text-2xl font-bold">Contact</h1>

        <div className="flex mt-8 items-center justify-center  rounded-md">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:rickyrizkiawan666@gmail.com"
          >
            <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300">
              <img src="./gmail.svg" alt="" className="w-[30px] h-[30px]" />
              <p className="text-center font-bold"></p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Rickyriski666"
          >
            <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300">
              <img src="./github.svg" alt="" className="w-[30px] h-[30px]" />
              <p className="text-center font-bold"></p>
            </div>
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/rickyriskiawan"
          >
            <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300">
              <img src="./linkedin.svg" alt="" className="w-[30px] h-[30px]" />
              <p className="text-center font-bold"></p>
            </div>
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/rickyyrzki/"
          >
            <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300">
              <img src="./instagram.svg" alt="" className="w-[30px] h-[30px]" />
              <p className="text-center font-bold"></p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
