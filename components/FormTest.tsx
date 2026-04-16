import { useActionState } from "react";
async function updateUsername(prevState, formData) {
  const name = formData.get("userName");
  const pass = formData.get("password");
  try {
    console.info(prevState, "test fun", name, pass);
    return { data: formData, error: null, success: true };
  } catch (e: unknown) {
    return e && e?.message && { error: e.message };
  }
}

const FormTest = () => {
  const [state, formAction, isPending] = useActionState(updateUsername, {
    error: null,
  });

  return (
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
      <input type="reset" value="reset" />
      <input type="submit" value="Save" />
      <hr />
    </form>
  );
};
export default FormTest;
