const express = require("express");
const postsRouter = require("./post/postsRouter.js");

const server = express();
server.use(express.json());
server.use("/api/posts", postsRouter);

server.listen(5000, () => console.log("server listening on port 5000"));
