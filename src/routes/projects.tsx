import { Link, useLoaderData } from "react-router-dom";

import FoodGis from "../projects/foodGis";
import LandScapeDesign from "../projects/landScapeDesign";



export async function loader({ params }) {
  const project_id = params.project_id
  return { project_id };
}

export default function Projects() {

  const componentMap = {
    "foodgis": <FoodGis/>,
    "landscapedesign": <LandScapeDesign/>,
  };

  const { project_id } = useLoaderData();
  if ((project_id == null) || (project_id == "")){
    return (
      <>
        <div id="content">
          <h1>Projects!</h1>
          <ul>
            <li><Link to="/projects/foodgis">Project to map hunger in Colorado</Link></li>
            <li><Link to="/projects/landscapedesign">Landscape Design for a local home!</Link></li>
          </ul>
        </div>
      </>
    );
  }
  else{
    return (
      <>
      {componentMap[project_id]}
      </>
    );
  }

  }