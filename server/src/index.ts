import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Define a test route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world! This is your server.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
