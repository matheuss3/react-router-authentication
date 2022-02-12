import { Link } from "react-router-dom"

function NoMatch() {
  return (
    <div>
      <p>Nothing Here !!</p>
      <Link to='/public'>Go to public page</Link>
    </div>
  )
}

export { NoMatch }