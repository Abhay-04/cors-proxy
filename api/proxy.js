import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
app.use(cors());
app.use(
  "/",
  createProxyMiddleware({
    target:
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6186784&lng=77.05335339999999", // Replace with your target URL
    changeOrigin: true,
    pathRewrite: {
      "^/": "", // Strip the / from the beginning of the path
    },
  })
);

export default app;
