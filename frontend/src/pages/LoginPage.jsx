import {Card, Input, Button} from "../components/ui";

function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
     <h1 className="text-2xl font-bold">Sign in</h1>
     <form>
      <Input type="email" placeholder="enter your email"/>
      <Input type="password" placeholder="enter your password"/>
      <Button>Sign in</Button>
     </form>
      </Card>
    </div>
  )
}

export default LoginPage
