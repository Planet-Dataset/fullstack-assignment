<img src="https://user-images.githubusercontent.com/28607713/212879228-3ca54e74-ee8f-485c-a5d2-e54758b471dc.png"
     alt="planet-logo-white-no-bg"
     width="240">


# Planet fullstack-assignment
Full-Stack position skill assessment home assignment.

## Context
As a Full-Stack developer in Planet Dataset, you will be asked to participate in the design
and implementation of new features that will be used in our price-management platform for
eCommerce.

New features usually involves three different tasks:
1. Implementing an interface to configure the user's preferences.
2. Implementing API endpoints to retrieve data such as result examples.
3. Implementing asynchronous tasks that apply the changes to our clients' stores.

This is the workflow that we tried to replicate in this task.

## Overview
We provide you with a project that has a database, an API, a service that executes periodically
and a web app.

This project has part of the functionality of fictitious software solution that provides stock exchange data services:
it allows the user of the web app to subscribe to currencies, and see the current exchange prices of those he/she
whishes to follow.

You are responsible of finishing the app by implementing:
- The code that executes periodically and fetches the forex data.
- The code for the API endpoint that sends that data to the front-end.
- The front-end code to see and edit the list of currencies currently followed, along with their stock prices.

## About this repository
This repository holds the basic project structure for implementing a NodeJS based API and service,
and an Angular web app.

The code is organized as follows:

- `services`
     - \ `api` - A NodeJS project with ExpressJS, TypeScript and Mongoose to implement the API.
     - \ `front-end` - An Angular project with TypeScript, SCSS, Material and NgRX to implement the web app. Implementation details can be found in `services/front-end/README.md`.
     - \ `service` - A NodeJS-based service with TypeScript and Mongoose that is setup to run periodically in order to implement asynchronous tasks.
- `docker-compose.slim.yml` - 
- `docker-compose.yml` - 
- `dump` - 
- `Makefile` - Makefile for your ease of development, see below
- `frontend.mk` - Makefile rules for the web app.
- `backend.mk` - Makefile rules for the API.
- `service.mk` - Makefile rules for the asynchronous task.
- `README.md` - This file.
- `LICENSE`


Disclaimer: The purpose and usage of this repo is solely for insight acquisition regarding problem-solving,
and does not represent an existing and ongoing implementation task.

PS: We provide this structure as a starting point but you may discard it and approach the task in
any other way.

## The problem
The solution you are required to design and implement is geared towards collecting historic exchange
prices from the currencies the API user wants to EUR. With this in mind we need a system that provides
an API for adding, removing and listing the currencies that are being followed at the moment, and an
additional endpoint for retrieving such historic data.

We already provide the endpoints for managing subscriptions so you can focus on the use case of fetching,
saving and showing historical data.

The workflow that the system should support is:
1. The API user adds or removes currencies from the followed ones, by the currency code.
2. The API user is able to see the followed currencies using the corresponding endpoint
3. The system, periodically, fetches the stock exchange price from each followed currency to Euros (EUR).
4. The user can see the historical data for the followed currencies, which
     includes basic data such as ask, bid, and spread; and additional calculated stats.

> We recommend using the [alphavantage API](https://www.alphavantage.co/) for retrieving the data as
> it is free and the endpoint for retrieving the data is well documented and easy to use.
> _See the docs: [https://www.alphavantage.co/documentation/#crypto-exchange](https://www.alphavantage.co/documentation/#crypto-exchange)_

## Tasks
### 1. Forex data retrieval
#### What we want
#### What we will evaluate


### 2. API endpoint for retrieving the fetched forex data
#### What we want
#### What we will evaluate


### 3. Interface to list followed currencies
#### What we want
We provide you with three basic endpoints for subscribing, unsubscribing and listing the subscriptions
to different currencies:

- `[POST] /api/currency` Subscribe new currency
- `[PUT] /api/currency/:code` Unsubscribe currency
- `[GET] /api/currencies` Get subscribed currencies

We want a view that lists the subscribed currencies along with their forex data, and that allows to
add or remove subscriptions. Here is a mockup of it could look, although you are free to design it
however you feel it works best.

![image](https://user-images.githubusercontent.com/28607713/212859859-462fe5b8-e05f-4332-a5ee-098500a78418.png)


#### What we will evaluate

## How to run the services
We provide you with Makefile rules for you to lift individual services:
- The _services/api_ directory holds the code for the API. The following make commands are available:
     - `backend-build` Builds the corresponding Docker images.
     - `backend-up` Raises the platform.
     - `backend-up-slim` Raises the platform without the service _service_ running in the background (just the db and API).
     - `backend-down` Shuts down the platform. _Requires having the platform up (you can use make backend-up)_
     - `backend-dump` Dumps the database contents to a _dump_ folder. _Requires having the platform up (you can use make backend-up)_
     - `backend-load` Loads the database contents from a _dump_ folder. _Requires having the platform up (you can use make backend-up)_
     - `backend-dbshell` Connects to the database shell. _Requires having the platform up (you can use make backend-up)_
     - `backend-test` Runs the API tests with database dump and restore. _Requires having the platform up (you can use make backend-up)_

- The _services/services_ directory holds the code for the API. The following make commands are available:
     - `service-build` Builds the corresponding Docker images.
     - `service-run` Executes just once the service.. _Requires having the platform up (you can use make service-up)_
     - `service-dev` Executes the service each time the code changes. _Requires having the platform up (you can use make service-up)_
     
- The _services/front-end_ directory holds the code for the Front-end. The following make commands are available:
     - `frontend-build` Builds the corresponding app dist files.
     - `frontend-dev` Runs the front-end service locally (accessible at http://localhost:4200). _It will install the dependencies (requires having a local installation of node)._

We designed the repo to work in such a way that the API and the web app could run independently from a cron job
that executes the service, and where you could place recurrent asynchronous code. Therefore, there are two use
cases that we think you could face:

* Having the API up (with hot-reloading), along with the generic service (with**out** hot-reloading) running periodically using cron.
  This would be the complete platform running:
     ```bash
     make backend-up
     make frontend-dev
     ```
* Having the API up (with hot-reloading) without the generic service. This way you could develop the API and web app and, whenever
  you want to execute the service, you still have the option to do it once or have it execute each time the code has changed:
     ```bash
     make backend-up-slim
     make frontend-dev
     # execute the generic service once
     make service-run
     # execute the generic service each time the code changes (hot-reloading)
     make service-dev
     ```

# fullstack-assignment
Full-Stack position skill assessment home assignment.

**[Place here any extra documentation or comments you want us to have.]**
