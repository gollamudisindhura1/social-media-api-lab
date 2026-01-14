# Connecting a Database - LAB

## Overview

A simple Node.js/Express application that connects to a MongoDB Atlas database cluster.  
This lab sets up the core infrastructure for a future social media platform by creating a production-ready database and verifying a secure connection.

## Learning Objectives

- Set up a new project on MongoDB Atlas.
- Configure a new database cluster for a production environment.
- Create a database user with appropriate permissions.
- Connect a Node.js/Express application to the Atlas cluster.
- Secure the database connection string using environment variables.


## Tech Stack
- Node.js
- Express.js 
- MongoDB 
- MongoDB Node.js Driver 
- dotenv

## Reflection Questions

1. Why is it important to whitelist IP addresses in a real-world production environment? What are the risks of allowing connections from anywhere (0.0.0.0/0)?
- Whitelisting IPs prevents unauthorized access from hackers anywhere. Allowing 0.0.0.0/0 lets anyone try to connect.

2. What is the purpose of the dotenv package? What other methods could you use to manage environment variables in a production environment (e.g., in a cloud hosting service)?
- dotenv loads sensitive info like DB URI from .env file so it is not in code. 

3. If your application failed to connect, what are the first few steps you would take to debug the issue?
- 1. Check if URI in .env is correct like if the  password right.
- 2. Test the network access in Atlas allow your IP or 0.0.0.0/0