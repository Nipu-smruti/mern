import app from "./app.js";
import connectDB from "./config/database.js";
connectDB();
const PORT = process.env.PORT;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`server is running on ${PORT}`);
    }
});