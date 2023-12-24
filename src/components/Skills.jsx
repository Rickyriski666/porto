export default function Skills() {
  return (
    <div className="py-20 scroll-smooth" id="skills">
      <div className="p-8 bg-grey">
        <h1 className="text-white text-center text-3xl font-bold">SKILLS</h1>
        <div className="mt-8">
          <div className="grid grid-cols-2 items-center justify-center">
            <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center">
              <img
                src="src\assets\Html.svg"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <p className="text-center font-bold">HTML</p>
            </div>
            <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center">
              <img
                src="src\assets\Css.svg"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <p className="text-center font-bold">CSS</p>
            </div>
            <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center">
              <img
                src="src\assets\js.svg"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <p className="text-center font-bold">Javascript</p>
            </div>
            <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center">
              <img
                src="src\assets\react-icon.svg"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <p className="text-center font-bold">React</p>
            </div>
            <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center">
              <img
                src="src\assets\NodeJs.svg"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <p className="text-center font-bold">Node Js</p>
            </div>
            <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center">
              <img
                src="src\assets\Tailwind.svg"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <p className="text-center font-bold">Tailwind</p>
            </div>
            <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center">
              <img
                src="src\assets\Express.svg"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <p className="text-center font-bold">Express Js</p>
            </div>
            <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center">
              <img
                src="src\assets\Git.svg"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <p className="text-center font-bold">Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
