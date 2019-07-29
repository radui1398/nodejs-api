const express = require("express");

const mongo = require('./util/mongo.js');
const front = require('./util/front.js');

const app = express();

//front end
front.init(app,express.static('public'));
front.createFrontPage("Simple NodeJS API");

mongo.init(app);
//db routing
mongo.getAll('students',0);
mongo.getAll('profs',1);

//404
mongo.notFoundPage();