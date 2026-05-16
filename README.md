# Campus Notifications System

A responsive notification dashboard developed as part of the campus hiring evaluation.

## Features

* Priority based notification sorting
* Responsive frontend dashboard
* Notification filtering
* Logging middleware integration
* Backend API integration
* Mobile and desktop support

## Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Node.js
* Express.js
* Axios

## Project Structure

```text
22MIS0156/
├── logging-middleware/
├── notification_app_be/
├── notification_app_fe/
├── screenshots/
├── notification_system_design.md
└── .gitignore
```

## Priority Logic

Notifications are sorted using weighted priorities:

* Placement = Highest Priority
* Result = Medium Priority
* Event = Lowest Priority

Notifications with same priority are sorted using latest timestamp.

## Setup Instructions

### Backend

```bash
cd notification_app_be
npm install
node server.js
```

Backend runs on:

```text
http://localhost:5000
```

### Frontend

```bash
cd notification_app_fe
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

## Screenshots

Screenshots for:

* Backend API Output
* Postman Testing
* Desktop View
* Mobile View

are included inside the screenshots folder.

## Logging Middleware

A reusable logging middleware was implemented for:

* info logs
* error logs
* middleware tracking
* backend event tracking

Logs are pushed to the provided evaluation logging API.

## Author

22MIS0156
K HAILEY

