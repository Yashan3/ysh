import http from "http";

const server = http.createServer((req, res) => {
  console.log(req.method);

  res.setHeader("Content-Type", "text/plain");
  res.statusCode = 202;
  req.statusMessage = "Nice";

  res.end("Response from Server");
});

server.listen(8000, "localhost", () => {
  console.log("Server is running at http://localhost:8000");
});
