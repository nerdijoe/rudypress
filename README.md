# rudypress

## What is rudypress

Rudypress is a blogging site

### Backend

Express, mongoose, passport, passport-local, jsonwebtoken

### Front End

Vuejs, vuex, axios


## How to run

Clone the repo, then do the following

```
cd rudypress/server
npm install
npm start
```

## End points

### Users

Fields
```
name, username, password
```

#### Sign up
```
POST localhost:3000/api/users/signup
```

#### Sign in
```
POST localhost:3000/api/users/signin
```

#### Get all users
```
GET localhost:3000/api/users
```

### Articles

Fields
```
title, content, category, author(ref: User)
```


#### Create new article
```
POST localhost:3000/api/articles
```

#### Get all articles
```
GET localhost:3000/api/articles
```
