import { signIn } from "@/auth";

const SigninForm = () => {


  return(
    <div className="text-center flex items-center flex-col p-24">
      <div className="bg-sky-500 w-36 h-36 rounded-full mb-8"></div>
      <h1 className="text-5xl uppercase font-bold my-4 border-b-2 border-sky-500">Welcome</h1>
      <form 
        action={async (formData) => {
                "use server"
                await signIn("resend", formData)
              }}
        className="text-center w-1/4" 
      >
          <input type="email" placeholder="Email" name="email" className="border border-gray-300 block w-full rounded-3xl px-3 py-2"/>
          <button className="bg-sky-400 border border-2 border-transparent w-1/2 mt-4 px-2 py-1 rounded-3xl font-bold text-white text-2xl cursor-pointer hover:bg-sky-200 hover:border-gray-200">Login</button>
      </form>
    </div>
  )
}

export default SigninForm;