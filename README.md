# Freecodecamp Issue Tracker

Fullstack project made with NextJs created for the FreeCodeCamp Quality and assurance certification.
This project is created using [NextJs](https://nextjs.org/) and features:

- [MongoDb](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Scss](https://sass-lang.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)

The project is hosted via [Vercel](https://vercel.com/) and can be found [Here](https://issue-tracker-ashen.vercel.app/)

# Installation and running

1. clone this repo `git clone git@github.com:robdll/issue-tracker.git`
2. move to the repository directory `cd issue-tracker`
3. install dependencies `yarn`
4. run development `yarn dev`
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# API

All API routes can be accessed using the following domain:  
`https://issue-tracker-ashen.vercel.app/api/<ENDPOINT>`.

The following endpoints are available:

- `GET /issues` - Get all issues
- `POST /issues` - Create a new issue
- `GET /issues/:id` - Get a specific issue
- `PUT /issues/:id` - Update a specific issue
- `DELETE /issues/:id` - Delete a specific issue

# Tests

To run tests open your terminal in the project root directory and run `yarn test`
