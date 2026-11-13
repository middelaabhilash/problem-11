// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.end("Method not allowed");
    return;
  }

  const chunks = [];
  req.on("data", (chunk) => {
    chunks.push(chunk);
  });

  req.on("end", () => {
    fs.appendFile("data.txt", Buffer.concat(chunks), (appendError) => {
      if (appendError) {
        console.error("Failed to append request data:", appendError);
        res.statusCode = 200;
        res.end("Failed to process data");
        return;
      }

      fs.readFile("data.txt", "utf8", (readError, content) => {
        if (readError) {
          console.error("Failed to read data file:", readError);
          res.statusCode = 200;
          res.end("Failed to process data");
          return;
        }

        console.log(content);
        res.end("data received");
      });
    });
  });
});

export default server;
