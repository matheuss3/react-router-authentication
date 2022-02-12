import { Link } from "react-router-dom"

function Home() {
	return (
		<div>
			<h1>Private Page</h1>
			<Link to='../public' replace>Go to public page</Link>
		</div>

	)
}

export { Home }