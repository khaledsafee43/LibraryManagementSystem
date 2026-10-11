import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../utils/authSchemas.js";
import { supabase } from "../../lib/supabase.js";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });


const onSubmit = async (formData) => {
  try {
    const { email, password } = formData;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    console.log("Logged-in user:", data.user);
    alert("Login successful!");

    // Later: Navigate to the dashboard.
  } catch (error) {
    console.error("Login error:", error);
    alert("Unable to log in. Please try again.");
  }
};


  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-5 rounded-2xl bg-white p-8 shadow-lg"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800">Login</h1>

          <p className="mt-2 text-slate-500">Sign in to manage your library</p>
        </div>

        {/* Email */}
        <div>
          <label className="mb-1 block text-sm font-medium">
            Email Address
          </label>

          <input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="mb-1 block text-sm font-medium">Password</label>

          <input
            {...register("password")}
            type="password"
            placeholder="At least 8 characters"
            autoComplete="new-password"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
