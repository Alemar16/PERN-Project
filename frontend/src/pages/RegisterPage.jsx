import { Input, Card, Button } from "../components/ui";
import { useForm } from "react-hook-form";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const response = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    });
    const dataSignup = await response.json();
    console.log(dataSignup);
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <h3 className="text-2xl font-bold">Register page</h3>

        <form onSubmit={onSubmit}>
          <Input
            placeholder="enter your name"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-red-500">Name is required</p>}
          <Input
            type="email"
            placeholder="enter your email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <Input
            type="password"
            placeholder="enter your password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}

          <Button>Register</Button>
        </form>
      </Card>
    </div>
  );
}

export default RegisterPage;
