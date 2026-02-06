import { SignIn } from "../SignIn";

const NavTop = () => {
  return(
    <div className="col-span-full max-h-16 h-screen flex justify-end items-center px-6 py-2 relative">
      <div className="w-30 h-10 rounded-full bg-sky-500 absolute top-3 left-8 flex items-center justify-center">
        <p className="text-white font-bold">Logo</p>
      </div>
      <h1 className="md:text-xl md:mr-16">Lanezy | A Highly Customizable Kanban Experience</h1>
      <SignIn />
    </div>
  )
}

export default NavTop;