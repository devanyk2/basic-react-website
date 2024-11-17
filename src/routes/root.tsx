import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={`/home`}>home</Link>
              </li>
              <li>
                <Link to={`/about`}>About Me</Link>
              </li>
              <li>
                <Link to={`/resume`}>Resume</Link>
              </li>
              <li>
                <Link to={`/projects`}>Projects</Link>
              </li>
            </ul>
          </nav>
            <div id="detail">
                <Outlet />
            </div>
        </div>
      </>
    );
  }