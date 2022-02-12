import { useContext } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

function Logged() {
  const authContext = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <div>
      <div>Logado como {authContext.user}</div>
      <button onClick={() => authContext.signout(() => navigate('/public'))}>logout</button>
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