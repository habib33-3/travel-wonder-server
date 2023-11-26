import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import { MongoClient, ServerApiVersion } from "mongodb";
import jwt from "jsonwebtoken";

const port = process.env.PORT || 5000;

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://travel-wonder-client.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(port, () => {
  console.log(`Server at ${port}`);
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cdjrxf4.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const database = client.db("travelWonderDB");
    const userCollection = database.collection("users");

    const verifyToken = (req, res, next) => {
      const token = req?.cookies?.token;

      if (!token) {
        return res.status(401).send({ message: "Unauthorized" });
      }

      jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: "Unauthorized" });
        }

        req.user = decoded;

        next();
      });
    };

    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { email: email };
      const user = await userCollection.findOne(query);

      const isAdmin = user?.role === "admin";

      if (!isAdmin) {
        return res.status(403).send({ message: "Forbidden" });
      }

      next();
    };

    app.get("/user/admin/:email", verifyToken, async (req, res) => {
      const email = req.params.email;

      if (email !== req.decoded.email) {
        return res.status(403).send({ message: "Forbidden" });
      }

      const query = { email: email };

      const user = await userCollection.findOne(query);
      let admin = false;
      
      if (user) {
        admin = user?.role === "admin";
      }

      res.send({ admin });
    });

    app.post("/api/v1/auth/createToken", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
        expiresIn: "30d",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true });
    });

    app.post("/api/v1/auth/logout", async (req, res) => {
      const user = req.body;
      console.log("logging out", user);
      res
        .clearCookie("token", {
          maxAge: 0,
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ message: "cookie cleared" });
    });

    app.post("/api/v1/user/saveUser", async (req, res) => {
      const user = req.body;
      const query = { email: user.email };
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "user already exists", insertedId: null });
      }

      const userInfo = {
        email: user.email,
        role: "user",
      };

      const result = await userCollection.insertOne(userInfo);

      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
