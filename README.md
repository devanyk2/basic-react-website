# Personal Website


## Quickstart

To begin development, install the node modules and start up the development mode. 
Changes to the code are hot reloaded automatically.

``` bash
npm install
npm run dev
```

To build the website for a deployment, run the following (install the node modules if you havent already).

``` bash
npm install
npm run build
```

## Adding your own content

To add your own content, first search the repo for the `TODO` tag, where you will find areas that you will need to change. This will be areas like your email, your about me section, your resume, aswell as your projects and their writeups.

To add a new write up, copy one of the existing example project tsx's, give it a new UNIQUE file name and function name and add it to the `routes/projects.tsx` routes. Project writeups can be customized to your desire/ability, but if you want to include any new images/files, you should add them to the assets folder and reference them from there.