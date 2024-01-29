import { Card, Input, Button, Label } from "../components/ui";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <h1 className="text-2xl font-bold mb-5 text-center">Sign in</h1>
        <form>
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="enter your email" />
          <Label htmlFor="password">Password</Label>
          <Input type="password" placeholder="enter your password" />
          <div className="flex justify-end mt-5"> {/* Alinea el botón a la derecha */}
            <Button>Sign in</Button>
          </div>

          <div className="flex flex-col items-center mt-5"> {/* Contenedor centrado verticalmente */}
            <p className="text-center mb-2">
              Don&apos;t have an account?{" "}
            </p>
            <Link to="/register" className="text-blue-500 transition duration-300 hover:text-blue-700">
              Register
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default LoginPage;
