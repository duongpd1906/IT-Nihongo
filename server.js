import express from "express";
import "express-async-errors";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";

//routers
import authRoutes from "./routes/authRoutes.js";
import topicRoutes from "./routes/topicRoutes.js";

app.use("/api/auth", authRoutes);
app.use("/api/topic", topicRoutes);

app.get("/", (req, res) => {
	res.send("hello world");
});

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandleMiddleware from "./middleware/error-handler.js";

app.use(notFoundMiddleware);
app.use(errorHandleMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URL);
		app.listen(port, () => {
			console.log(`Server is listening on port ${port}...`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
