import express from "express";
import axios from "axios";
import chalk from "chalk";

const methodColors = {
  "POST": chalk.yellow,
  "GET": chalk.green,
  "DELETE": chalk.red,
  "PATCH": chalk.blue,
  "PUT": chalk.magenta,
  "HEAD": chalk.cyan,
  "OPTIONS": chalk.gray,
  "TRACE": chalk.white,
  "CONNECT": chalk.black,
};

const Wrapper = (port = 3000) => {
  const app = express();

  app.use(express.json());

  // Middleware for logging
  app.use((req, res, next) => {
    const { url, method } = req.body;

    // Log request method and URL with colors
    const colorizeMethod = methodColors[method] || chalk.reset;
    console.log(colorizeMethod(`${method} ${url}`));

    next();
  });

  app.post("/api/request", async (req, res) => {
    try {
      const { url, method, headers, params, data } = req.body;

      const response = await axios({
        url,
        method,
        headers,
        params,
        data,
      });

      res.json(response.data);
    } catch (error) {
      res.status(error.response.status).json({ error: error.message });
    }
  });

  app.listen(port, () => {
    console.log(`Wrapper is running on ${chalk.blue(`http://localhost:${port}`)}\n`);
  });
};

export default Wrapper;
