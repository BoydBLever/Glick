## Description

## Setup & Installation

### Clone the Glick app, and navigate to the directory.
   Split the terminal in two. Change to the `client` folder in the left-hand terminal, and change to `server` in the right-hand terminal.

### Install dependencies in both terminals:
```
npm install
```

In the right-hand terminal, enter this command:
```
node server.js
```
In the left-hand terminal, enter this command:
```
npm start
```

### Run the Application
After executing the start commands, the React development server should start, and Glick should automatically open in [http://localhost:3000/](http://localhost:3000/). For the best user experience, open the app in Google Chrome. Behold the beauty and power of Glick!

### Database Mapping
In order to browse collections and documents created by Glick users, you will need to interact with the storage database. You can perform various operations such as querying and editing.

To interact with this local database, use the **MongoDB Compass GUI**. It’s lightweight and user-friendly. Download the full version with all features and capabilities [here](https://www.mongodb.com/try/download/compass).

Connect to a local MongoDB instance with a database named `groupie_licks_db` on the default MongoDB port on `localhost`. The connection string as determined by the mongoose configuration in `mongoose.config.js` is `mongodb://localhost/groupie_licks_db`.

## Screenshots

1. **Login**
2. **Signup**
3. **User Profile**
4. **Cook-Up-A-Post**
5. **Landing**
6. **Profile Posts**
7. **MongoDB Compass Users**
