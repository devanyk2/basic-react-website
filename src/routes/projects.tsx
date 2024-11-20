import { Link, useLoaderData } from "react-router-dom";

import FoodGis from "../projects/foodGis";
import LandScapeDesign from "../projects/landScapeDesign";

interface componentDict{
  [key: string]: any;
}

interface projectLoader{
  project_id: string,
}

export async function loader({params}: any): Promise<projectLoader>{
  const project_id = params.project_id
  return {project_id};
}

export default function Projects() {

  const componentMap: componentDict = {
    "foodgis": <FoodGis/>,
    "landscapedesign": <LandScapeDesign/>,
  };
  const unknown_val: any = useLoaderData();
  const project_id: string = typeof(unknown_val.project_id) === "string" ? unknown_val.project_id : "";

  if (project_id == ""){
    return (
      <>
        <div id="content">
          <h1>Projects!</h1>
          <ul>
            <li><Link to="/projects/foodgis">Project to map hunger in Colorado</Link></li>
            <li><Link to="/projects/landscapedesign">Landscape Design for a local</Link></li>
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