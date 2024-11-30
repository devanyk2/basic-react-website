
export default function About() {

    /* TODO: replace email with your own */
    let emailString: string = "mailto:fakeuser@fakeemail.com" ;
    return (
      <>
        <div id="content">
          <h1>About me!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio purus, euismod at tortor vitae, suscipit pulvinar ante. Ut feugiat nisl vel diam interdum commodo. 
            Sed aliquet sem nec imperdiet varius. Vivamus eget diam sem. In id finibus dui, sed finibus lacus. Sed bibendum sem id sapien rutrum, 
            a condimentum ex tempor. Duis dolor tortor, tincidunt a nisl vel, accumsan eleifend dolor. Integer egestas eros id mattis interdum. 
            Praesent vitae lobortis eros, sit amet lacinia ante. In imperdiet tortor non tortor dictum vestibulum. </p>
            <div>
              <p>Want to collaborate? <a href={emailString} target="_blank">Send me an Email!</a></p>
            </div>
        </div>
      </>
    );
  }