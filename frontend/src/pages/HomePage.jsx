import {useContext} from "react"
import * as AuthContext from "../context/AuthContext";

function HomePage() {
  const data = useContext(AuthContext)
  console.log(data)

  return (
    <div>
      Home page
    </div>
  )
}

export default HomePage
