import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <div>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={`/about`}>About Me</Link>
              </li>
              <li>
                <Link to={`/projects/`}>Projects</Link>
              </li>
              <li>
                <Link to={`/resume`}>Resume</Link>
              </li>
            </ul>
          </nav>
            
        </div>
        <div id="detail">
                <Outlet />
        </div>
      </>
    );
  }