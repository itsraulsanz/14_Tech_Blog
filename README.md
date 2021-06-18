# Tech Blog

## Table of contents

- [Description](#description)
- [Mock-Up](#mock-up)
- [Deployed Application](#deployed-application)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)


## Description

This repository contains a CMS-style blog site where users can publish their blog posts and comment on other developers’ posts as well. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Mock-Up

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./assets/blog.gif) 

## Deployed Application

  Website URL: <a href="https://raul-tech-blog.herokuapp.com/">https://raul-tech-blog.herokuapp.com/</a>

## Installation

After copying the repository please run “npm install” to install the inquirer package.
The app uses:

- [MySQL2](https://www.npmjs.com/package/mysql)

- [Sequelize](https://www.npmjs.com/package/sequelize) packages.

- [dotenv](https://www.npmjs.com/package/dotenv) package to store sensitive data (MySQL username, password, and database name) using environment variables through.

- [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for the Views.

- [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords.

- [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

## Usage

Run `npm run seed` to seed data to your database so that you can test your routes. Then run the server `npm run dev`.


## License

![Github license](https://img.shields.io/badge/license-MIT-blue.svg)
This project is licensed under MIT license.

---

## Contributing

Contributions, issues and feature requests are welcome.

## Questions

Github: <a href="https://github.com/itsraulsanz/">https://github.com/itsraulsanz/</a><br />


---



## Getting Started



## Grading Requirements

This homework is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

    * Application’s folder structure follows the Model-View-Controller paradigm.

    * Uses the [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js for your Views.

    * Application must be deployed to Heroku.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.

### Application Quality: 15%

* User experience is intuitive and easy to navigate.

* User interface style is clean and polished.

* Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
