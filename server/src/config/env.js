import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "finances_secret_dev",
  dbStorage: process.env.DB_STORAGE || "./data/finances.sqlite",
  corsOrigin: process.env.CORS_ORIGIN || "http://localhost:5173"
};
