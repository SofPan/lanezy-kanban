import { signIn } from "@/auth";

export function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn("resend", formData)
      }}
    >
      <input type="text" name="email" placeholder="Email" className="border border-gray-300 rounded-3xl focus:outline-sky-500 p-1 mr-4"/>
      <button type="submit" className="border border-gray-300 rounded-3xl hover:border-sky-500 p-1 text-md">Sign In</button>
    </form>
  )
}