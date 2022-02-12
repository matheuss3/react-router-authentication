import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

function Logged() {
  const authContext = useContext(AuthContext)

  return (
    <div>
      <div>Logado como {authContext.user}</div>
      <button onClick={() => authContext.signout(() => console.log('Logout'))}>logout</button>
    </div>
  )
}

function Header() {
  const authContext = useContext(AuthContext)

  return (
    <div>
      {authContext.user? <Logged /> : null}
      <Outlet />
    </div>
  )
}

export { Header }