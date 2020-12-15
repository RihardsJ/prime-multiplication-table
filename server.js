const http = require("http");
const fs = require("fs");
const path = require("path");

//1. define ports
const PORT = process.env.PORT || 3000;

//2. create server
const server = http.createServer((request, response) => {
  //3. initialize file path
  let url = request.url;
  if (url == "/") {
    url = "index.html";
  }

  //4. define used content types for the project
  const types = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
  };

  //5. define suitable MIME type
  const urlArray = url.split(".");
  const extension = urlArray[1];
  const type = types[extension];

  //6. read files, handle errors and display index.html with all modules and styling
  fs.readFile(path.join(__dirname, "assets", url), (error, file) => {
    if (error) {
      response.writeHead(404, {
        "content-type": "text/html",
      });
      response.end("<h1>Cannot find index file! Please restart the server</h1>");
    } else {
      response.writeHead(200, {
        "content-type": type,
      });
      response.end(file);
    }
  });
});

// 7. listen for the correct port and log a localhost link in terminal
server.listen(PORT, () => console.log(`The app is running on http://localhost:${PORT}`));
