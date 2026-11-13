# Problem 13 - Simple HTTP Data Receiver

This project is a small Node.js challenge to build a server that receives data from a client and stores it in a file.

## Problem statement

Create an HTTP server that:

- accepts only POST requests
- reads the raw request body
- appends that data to a file named `data.txt`
- reads the file contents back
- logs the file content to the console
- responds with `data received`

## What the project contains

- `index.js` - defines the HTTP server logic
- `server.js` - starts the server on port `3000`
- `data.txt` - file used to store incoming request data
- `upload_project.js` - utility script used to zip the project and submit it for evaluation

## How it works

When a client sends a POST request to the server, the server:

1. collects the request body in chunks
2. writes the combined data to `data.txt`
3. reads `data.txt` again
4. prints its contents to the console
5. sends the response `data received`

## Run the project locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   node server.js
   ```

3. Send a POST request:

   ```bash
   curl -X POST http://localhost:3000 -d "hello from client"
   ```

4. Check the terminal output and the contents of `data.txt`.

## Expected behavior

A successful request should:

- return HTTP 200 with response body `data received`
- append the incoming payload to `data.txt`
- print the updated file contents in the server console

## Notes

- The server rejects all non-POST methods with HTTP 405.
- `upload_project.js` is only for packaging and submitting the project, not for the actual app logic.
