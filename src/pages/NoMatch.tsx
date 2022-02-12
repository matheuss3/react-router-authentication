import { Link } from "react-router-dom"

function NoMatch() {
  return (
    <div>
      <h1>Nothing Here !!</h1>
      <Link to='/public'>Go to public page</Link>
    </div>
  )
}

export { NoMatch }