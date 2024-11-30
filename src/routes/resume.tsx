/* TODO: convert your resume to SVG,
 copy it to the assets folder, 
 and change the path below to match the file name */
import UserResume from '../assets/place-holder-resume.svg'

export default function Resume() {
    return (
      <>
        <div id="content">
          <h1>Resume!</h1>
          <img src={UserResume}/>
        </div>
      </>
    );
  }