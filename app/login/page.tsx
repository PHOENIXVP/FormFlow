"use client";
import { useActionState } from "react";
// import { useFormState, useFormStatus } from "react-dom";
const delay = (ms: number, userName: string, password: string) =>
  new Promise((res) =>
    setTimeout(() => {
      console.log(userName, password);
      res(null); // <--- YOU MUST CALL THIS to tell the promise it's done!
    }, ms)
  );

async function loginAction(previusState, formData) {
  await delay(5000, formData.get("userName"), formData.get("password")); // Wait for 2 seconds
}
export default function Login() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <>
      <form action={formAction} className="flex flex-col space-y-3">
        <input
          type="text"
          placeholder="userName"
          name="userName"
          id="userName"
          className="p-3 border placeholder:text-gray-700 text-gray-900"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          className="p-3 border placeholder:text-gray-700 text-gray-900"
        />
        {/* {isPending ? "pending" : "good to go"} */}
        {/* <input type="reset" value="reset" disabled={isPending} />
        <input type="submit" value="Save" disabled={isPending} /> */}
        <button
          type="reset"
          disabled={isPending}
          className="p-3 bg-blue-500 text-white disabled:bg-gray-400"
        >
          {isPending ? "Logging in..." : "Reset"}
        </button>
        <button
          type="submit"
          disabled={isPending}
          className="p-3 bg-blue-500 text-white disabled:bg-gray-400"
        >
          {isPending ? "Logging in..." : "Save"}
        </button>
        <hr />
      </form>
    </>
  );
}
