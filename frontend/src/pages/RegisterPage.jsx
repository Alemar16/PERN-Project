import { Input, Card, Button, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await signup(data);
    navigate("/profile");

  });

  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <h3 className="text-2xl font-bold mb-5 text-center">Register page</h3>

        <form onSubmit={onSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input
            placeholder="enter your name"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-red-500">Name is required</p>}
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="enter your email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="enter your password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <div className="flex justify-center mt-5">
            <Button>Register</Button>
          </div>
          <div className="text-center mt-5">
            <p className="mb-2">Already have an account?</p>
            <Link
              to="/login"
              className="text-blue-500 mx-auto transition duration-300 hover:text-blue-700"
            >
              {" "}
              Sign in
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default RegisterPage;
