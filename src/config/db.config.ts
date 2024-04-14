import app from "../app";

const port = process.env.PORT || 5000;

export const connectDB =async () => {
    app.listen(port, () => {
        console.log(`server running at ${port} port`);
    });
};
