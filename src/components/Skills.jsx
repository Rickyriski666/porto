export default function Skills() {
  return (
    <div className="py-20 scroll-smooth" id="skills">
      <div className="p-8 bg-grey">
        <h1 className="text-white text-center text-3xl font-bold">SKILLS</h1>
        <div className="mt-8 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-center">
            <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300">
              <img src="./Html.svg" alt="" className="w-[50px] h-[50px]" />
              <p className="text-center font-bold">HTML</p>
            </div>
            <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300">
              <img src="./Css.svg" alt="" className="w-[50px] h-[50px]" />
              <p className="text-center font-bold">CSS</p>
            </div>
            <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300">
              <img src="./js.svg" alt="" className="w-[50px] h-[50px]" />
              <p className="text-center font-bold">Javascript</p>
            </div>
            <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300">
              <img
                src="./react-icon.svg"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <p className="text-center font-bold">React</p>
            </div>
            <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300">
              <img src="./NodeJs.svg" alt="" className="w-[50px] h-[50px]" />
              <p className="text-center font-bold">Node Js</p>
            </div>
            <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300">
              <img src="./Tailwind.svg" alt="" className="w-[50px] h-[50px]" />
              <p className="text-center font-bold">Tailwind</p>
            </div>
            <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300">
              <img src="./Express.svg" alt="" className="w-[50px] h-[50px]" />
              <p className="text-center font-bold">Express Js</p>
            </div>
            <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300">
              <img src="./Git.svg" alt="" className="w-[50px] h-[50px]" />
              <p className="text-center font-bold">Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
