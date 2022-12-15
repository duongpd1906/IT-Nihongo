import express from "express";
import "express-async-errors";
import cors from "cors";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

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
import commentRoutes from "./routes/commentRoutes.js";
import voteRoutes from "./routes/voteRoutes.js";

app.use("/api/auth", authRoutes);
app.use("/api/topic", topicRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/vote", voteRoutes);

app.get("/", (req, res) => {
	res.send("hello world");
});

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandleMiddleware from "./middleware/error-handler.js";

app.use(notFoundMiddleware);
app.use(errorHandleMiddleware);

const port = process.env.PORT || 5000;

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(express.json());

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

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
