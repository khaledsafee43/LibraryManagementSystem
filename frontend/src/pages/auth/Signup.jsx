import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupShema } from "../../utils/authSchemas.js";
import { supabase } from "../../lib/supabase.js";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupShema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

const onSubmit = async (data) => {
  try {
    const { name, email, password } = data;

    const { data: signupData, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          full_name: name.trim(),
        },
      },
    });

    if (error) {
      alert(error.message);
      return;
    }

    if (signupData.user) {
      alert(
        signupData.session
          ? "Account created successfully!"
          : "Registration successful. Please check your email if verification is required."
      );

      console.log("Registered user:", signupData.user);
    }
  } catch (error) {
    console.error("Signup error:", error);
    alert("Unable to register. Please try again.");
  }
};


  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-5 rounded-2xl bg-white p-8 shadow-lg"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800">Create Account</h1>

          <p className="mt-2 text-slate-500">Sign up to manage your library</p>
        </div>

        {/* Name */}
        <div>
          <label className="mb-1 block text-sm font-medium">Full Name</label>

          <input
            {...register("name")}
            type="text"
            placeholder="Enter your full name"
            autoComplete="name"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
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

        {/* Confirm Password */}
        <div>
          <label className="mb-1 block text-sm font-medium">
            Confirm Password
          </label>

          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="Repeat your password"
            autoComplete="new-password"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>
      </form>
    </div>
  );
}
