# Stage 1

## Approach

The notifications are fetched from the provided API using authenticated requests.

Priority is calculated using weighted sorting:

- Placement = 3
- Result = 2
- Event = 1

Notifications are first sorted based on priority weight and then by timestamp in descending order to show the most recent notifications first.

Top 10 notifications are returned.

## Logging Middleware

A reusable logging middleware was created using Axios.

The middleware:
- authenticates with the test server
- sends logs to the logging API
- supports reusable logging across backend routes and services

## Flow

1. Authenticate user
2. Fetch notifications
3. Sort notifications
4. Return top 10 results
5. Log important operations

## Tech Stack

- Node.js
- Express.js
- Axios