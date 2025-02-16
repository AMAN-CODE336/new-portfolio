export default function Navbar() {
  return (
    <div className=" border-gray-200 fixed top-0 z-50 backdrop-blur-sm w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center   justify-between mx-auto p-4">
        <span className="self-center text-4xl font-semibold  text-lime-500 ">
          Aman
        </span>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex items-center flex-col p-12 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   text-2xl ">
            <li>
              <a
                href="#home"
                className="block py-2 px-3 text-lime-500 rounded md:bg-transparent md:p-0 "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3 text-lime-500  rounded "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 px-3 text-lime-500  rounded "
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 text-lime-500  rounded "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
