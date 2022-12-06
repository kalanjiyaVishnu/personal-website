import { useState } from "react"
import "./App.css"
// import Header from './components/Header/Header';
import Header_fb from "./components/Header_fb/Header_fb"
import Body from "./components/Content/Body"
import Videos from "./components/Content/pages/Videos"
import { BrowserRouter as Router, Route } from "react-router-dom"
function App() {
  const [page, setpage] = useState("home")
  const change_page = (p_name) => {
    setpage(p_name)
  }
  return (
    <Router>
      <Route
        path="/"
        render={() => (
          <>
            <div className="App">
              <Header_fb change_page={change_page} />
              <Body p_name={page} />
            </div>
          </>
        )}
      ></Route>
      <Route path="/videos" component={Videos}></Route>
    </Router>
  )
}

export default App
