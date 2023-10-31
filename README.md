# Blog API Project - Public Frontend

This project seeks to build out the features and functionality described in TOP's [NodeJS Blog API project](https://www.theodinproject.com/lessons/nodejs-blog-api)

Specifically, this repo contains the code to serve a React/React-router-dom project with Vite. This app is not a true SPA, due to the limited interactivity needed, I felt that making it a full SPA was a bit overkill for this project. The project's goals are to design/implement/interact with a REST API. I also made the choice to limit the scope of the project to one admin/author account, and not force readers to make an account to comment. I will tackle more robust user schemes/strategies in my upcoming projects.

## Links to other the repos of this project
- [Authoring Frontend (React with Vite)](https://github.com/justwavethings/blog_api_author)
- [NodeJS REST API Express server](https://github.com/justwavethings/blog_api_backend)

## How to get a development instance of this project running locally
1. First, follow the instructions in the backend repo's readme to get a development backend server running locally on localhost:3000.
2. Clone this repo to your machine.
3. `cd` into the folder created by cloning, and run `npm install` to install the dependencies.
4. Then run `npm run dev` to start the development web server. Vite typically defaults to `localhost:5173`, but regardless, your specific port will be printed to the terminal
5. Success! You have this app running. If you don't see any content, it's because there isn't any yet populated to the database for this app to fetch
6. Spin up the authoring frontend to create and administer the content for this site by following the [steps in the Authoring repo](https://github.com/justwavethings/blog_api_author)
7. Feel free to create an issue on GitHub if you run into any issues.

#### Thanks for taking the time to explore my project!
