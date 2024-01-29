import { Card, Input, Button, Label } from "../components/ui";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function LoginPage() {
  const {register, handleSubmit} = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })


  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <h1 className="text-2xl font-bold mb-5 text-center">Sign in</h1>
        <form onSubmit={ onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="enter your email"  {...register("email, {required: true}")}/>
          <Label htmlFor="password">Password</Label>
          <Input type="password" placeholder="enter your password"  {...register("password, {required: true}")}/>
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
