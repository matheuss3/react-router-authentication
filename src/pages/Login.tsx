import { useContext, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

function Login() {
	const [user, setUser] = useState<any>('')
	const context = useContext(AuthContext)
	const navigate = useNavigate()
	const location = useLocation()

	let from = location.state?.from?.pathname || '/';

	return (
		<form>
			<input type="text" value={user} onChange={e => setUser(e.target.value)}/>
			<button onClick={(e) => {
				e.preventDefault()
				context.signin(user, () => {
					navigate(from, {replace: true}) 
				})
			}}>sigin</button>
		</form>
	)
}

export { Login }