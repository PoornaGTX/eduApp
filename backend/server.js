import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

//error handler
import "express-async-errors";

import morgan from "morgan";

// db and authenticateUser
import connectDB from "./db/connect.js";

// // routers
import adminRoutes from "./routes/adminRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js"
import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";

// // middleware
// import errorHandlerMiddleware from "./middleware/error-handler.js";
// import notFoundMiddleware from "./middleware/not-found.js";
// import authenticateUser from "./middleware/auth.js";

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome" });
});

app.use("/api/v1/admin", adminRoutes);

app.use("/api/v1/students", studentRoutes);

app.use("/api/v1/teacher", teacherRoutes);

app.use("/api/auth", authRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listing on port : ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
