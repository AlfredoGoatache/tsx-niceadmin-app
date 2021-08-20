import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Charts } from "../../pages/Charts.component";
import { Dashboard } from "../../pages/Dashboard.component";

const Sidebar = () => {

    return (

        <Router>
        <aside>
          <div id="sidebar" className="nav-collapse ">
            <ul className="sidebar-menu">
              <li className="active">
                <Link to="/">
                  <i className="icon_house_alt" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/charts">
                  <i className="icon_house_alt" />
                  <span>Charts</span>
                </Link>
              </li>
              
              <li className="sub-menu">
                <a href="/" >
                  <i className="icon_documents_alt" />
                  <span>Pages</span>
                  <span className="menu-arrow arrow_carrot-right" />
                </a>
                <ul className="sub">
                  <li><a href="blank.html">Blank Page</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>
        

        <section id="main-content">
        <Switch>
          <Route path="/charts">
            <Charts />
          </Route>
          <Route path="/">
            <Dashboard/>
          </Route>
        </Switch>
        </section>

        </Router>

        
  )
}

export{
    Sidebar
}