import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AddBlog from "./components/AddBlog";
import BlogDetail from "./components/BlogDetail";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <AddBlog />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetail />
            </Route>
            <Route path="*">
              <div className="not-found">
                <h2>Sorry</h2>
                <p>That page cannot be found</p>
                <Link to="/">Back to the homepage...</Link>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
