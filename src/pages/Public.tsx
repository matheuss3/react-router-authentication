import { Link } from "react-router-dom"

function Public() {
	return (
		<div>
			<h1>Public Page</h1>
			<Link to='/protected'>Go to protected page</Link>
		</div>

	)
}

export { Public }