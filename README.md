# Football API 
A simple RESTful API built with **Express.js** and **MongoDB** (using **Mongoose**) for retrieving football (soccer) data — teams and players.
It is easy to set up locally, and already deployed on Railway for quick online access.

## Overview

- Create, read, update, and delete (CRUD) teams
- JSON-based API  
Base URL (local): `http://localhost:5000/teams`
Base URL (local): `http://localhost:5000/players`
Base URL (Railway): `https://football-api-production.up.railway.app/teams`
Base URL (Railway): `https://football-api-production.up.railway.app/players`

## Get Started

**1. Clone this repository**  
 ```bash
 git clone https://github.com/Kally-Dossa/football-api.git
 cd football-api
```

**2. Install dependencies**
 ```bash
npm install
```

**3. Create .ennv file**
 ```bash
//Create .env file with your MongoDB connection string
MONGODB_URI=mongodb://localhost:27017/FootballDB
PORT=5000
```

**4. Start**
 ```bash
node index.js
```
The API will be available at `http://localhost:5000/teams`
The API will be available at `http://localhost:5000/players`

## API Endpoints
**Teams**
- GET /teams → list all teams

- POST /teams → create new team

- GET /teams/:id → get team by id

- PUT /teams/:id → update team

- DELETE /teams/:id → delete team

**Players**

- GET /players → list all players

- POST /players → create new player

- GET /players/:id → get player by id

- PUT /players/:id → update player

- DELETE /players/:id → delete player
