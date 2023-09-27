import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
