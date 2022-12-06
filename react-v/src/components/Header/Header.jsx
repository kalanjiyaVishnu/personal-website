import "./Header.css"
import { useState } from "react"
import { Link } from "react-router-dom"
function Header(props) {
  const [show, setshow] = useState(false)
  return (
    <div className="header">
      <div className="header__brand">
        <span>r1558</span>
      </div>
      <button
        className="hide_btn"
        onClick={() => {
          setshow(!show)
          console.log(show)
        }}
      >
        {">menu"}
      </button>
      <div className="header__links">
        <ul className={show ? "active" : "links"}>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
          <li>
            <Link>Projects</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Header
