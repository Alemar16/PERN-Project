import { Card, Input, Button, Label } from "../components/ui";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function LoginPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const res = await axios.post("http://localhost:3000/api/signin", data, {
      withCredentials: true,
    });
    console.log(res);
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <h1 className="text-2xl font-bold mb-5 text-center">Sign in</h1>
        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="enter your email"
            {...register("email", { required: true })}
            autoComplete="email"
          />

          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="enter your password"
            {...register("password", { required: true })}
            autoComplete="current-password"
          />
          <div className="flex justify-center mt-5">
            <Button>Sign in</Button>
          </div>

          <div className="text-center mt-5">
            <p className="mb-2">Don&apos;t have an account?</p>
            <Link
              to="/register"
              className="text-blue-500 mx-auto transition duration-300 hover:text-blue-700"
            >
              Register
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default LoginPage;
