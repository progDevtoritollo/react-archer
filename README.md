# Archery

This project is designed to provide archers with a comprehensive tool for tracking their shooting
performance during training sessions. It enables athletes to record and mark their hits on the
target, facilitating the analysis of accuracy and progression over time. Additionally, the platform
allows archers to engage in friendly competitions and mini-events, fostering a sense of community
and healthy competition among peers.

![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

## Tech Stack

**Client:** Vite, React, TypeScript, MaterialUI, ReduxToolKit, React Query, Axios, Vitest,
react-hot-toast, react-tournament-brackets, sccs, classNames

## References to

**Design** --link

**Server** --link

## Run Locally

Clone the project:

```bash
  git clone git@github.com:progDevtoritollo/react-archer.git
```

Go to the project directory:

```bash
  cd react-archer
```

Install dependencies:

```bash
  npm install
```

Start the server:

```bash
  npm run dev
```

## General functionality

- Authenticate users via JWT (login/signup pages + logout button on settings page)
- CRU- user (sign up & settings page - no deleting required)
- GET list of users
- CR-D notifications (friend requests, payment reminder, event requests )
- CRUD club (club settings page)
- GET list of clubs
- CR-- checks/duels (new check & new duel & competiotion pages)
- GET and display paginated lists of checks & duels & competiotions

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Deployment

To deploy this project run

Run buil command:

```bash
  npm run built
```

execute docker compose file:

```bash
  docker compose up
```

## The general page breakdown

- Home page (URL: / )

  - Landing page

- Sign in/Sign up pages (URL: /auth/login, /auth/logout )

  - Uses JWT (store the token in localStorage)
  - Authentication can be easily switched to session/cookie based

- User

  - statistic page (URL: /user/statistic)
  - settings page (URL: /user/settings)
  - notification page (URL: /user/notifications)
  - friends page (URL: /user/friends)
  - list of user activity (URL: /user/activity)
    - Page of check, duel or competition (URL: user/activity/:id)

- Club
  - statistic page (URL: /club/statistic)
  - events page (URL: /club/events)
  - settings page (URL: /club/settings)
  - activity page & list of check, duel, competition (URL: /club/activity)
    - Page of check, duel or competition (URL: club/activity/:id)
- Create events (URL: /create-event/:type)

  - Check (URL: /create-event/check)
  - Duel (URL: /create-event/duel)
  - Competition (URL: /create-event/competition)

- Profile user page (URL: /user/:username or /user/:id):

  - Show basic user info
  - Show user statistic
  - Show user info for trainer
  - List of check, duel, competition

- World
  - List of top clubs in week/mounth/year (URL: /world/clubs)
  - List of top users in week/mounth/year (URL: /world/users)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

exemple:

VITE_API_ENDPOINT=http://localhost:3000 VITE_API_DELAY=100 VITE_API_STORAGE_MODE=session
VITE_API_USER_EMAIL=user@nukeapp.com VITE_API_USER_PASSWORD=37fVgE
VITE_JWT_SECRET=cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2

## Color Reference

| Color         | Hex                                                              |
| ------------- | ---------------------------------------------------------------- |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |

## Data

LocalStorage

- auth JWTkey - string
- account settings - (light/dark mode)
- target type: Big, Triple

SessionStorage

- isLoggedIn - true|false
- Auth data

Redux Toolkit

- pages information like list of clubs, users, notifications, activity, etc.
- User info
-

## docker compose file
