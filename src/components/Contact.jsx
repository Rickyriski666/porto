export default function Contact() {
  return (
    <div className="py-20 scroll-smooth" id="contact">
      <div className="p-8 bg-grey">
        <h1 className="text-white text-center text-2xl font-bold">Contact</h1>

        <div className="flex mt-8 items-center justify-center  rounded-md">
          <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center">
            <img
              src="src\assets\contact\gmail.svg"
              alt=""
              className="w-[30px] h-[30px]"
            />
            <p className="text-center font-bold"></p>
          </div>
          <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center">
            <img
              src="src\assets\contact\Github.svg"
              alt=""
              className="w-[30px] h-[30px]"
            />
            <p className="text-center font-bold"></p>
          </div>
          <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center">
            <img
              src="src\assets\contact\Linkedin.svg"
              alt=""
              className="w-[30px] h-[30px]"
            />
            <p className="text-center font-bold"></p>
          </div>
          <div className="m-2 p-2 bg-white rounded-md shadow-md flex flex-col items-center">
            <img
              src="src\assets\contact\instagram.svg"
              alt=""
              className="w-[30px] h-[30px]"
            />
            <p className="text-center font-bold"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
