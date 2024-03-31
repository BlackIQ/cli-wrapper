import express from "express";
import axios from "axios";

const Wrapper = (port = 3000) => {
  const app = express();

  app.use(express.json());

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
      console.error("Error:", error.response.data);
      res.status(error.response.status).json({ error: error.message });
    }
  });

  app.listen(port, () => {
    console.log(`Wrapper is running on http://localhost:${port}`);
  });
};

export default Wrapper;
