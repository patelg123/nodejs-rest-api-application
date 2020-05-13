import * as dotenv from "dotenv";
import app from "./app";


dotenv.config();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App now listening on port ${PORT}`);
}).on("error", () => {
  console.log("Error starting server");
});