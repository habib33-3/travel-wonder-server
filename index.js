import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

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
app.use(cookieParser());
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

    // db related
    const database = client.db("travelWonderDB");
    const userCollection = database.collection("users");
    const categoriesCollection = database.collection("categories");
    const toursCollection = database.collection("Tours");
    const guideCollection = database.collection("guide");
    const reviewCollection = database.collection("review");
    const bookingCollection = database.collection("booking");
    const wishListCollection = database.collection("wishList");

    // middlewares

    // verify Token
    const verifyToken = (req, res, next) => {
      const token = req?.cookies?.token;

      if (!token) {
        // console.log(process.env.ACCESS_TOKEN)
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

    // verify admin
    const verifyAdmin = async (req, res, next) => {
      const email = req.user.email;
      const query = { email: email };
      const user = await userCollection.findOne(query);

      const isAdmin = user?.role === "admin";

      if (!isAdmin) {
        return res.status(403).send({ message: "Forbidden" });
      }

      next();
    };

    //  api routes

    // check if user is admin
    app.get("/api/v1/checkAdmin/:email", verifyToken, async (req, res) => {
      const email = req.params.email;

      if (email !== req.user.email) {
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

    // check if guide
    app.get("/api/v1/checkGuide/:email", verifyToken, async (req, res) => {
      const email = req.params.email;

      if (email !== req.user.email) {
        return res.status(403).send({ message: "Forbidden" });
      }

      const query = { email: email };

      const user = await userCollection.findOne(query);
      let guide = false;

      if (user) {
        guide = user?.role === "guide";
      }

      res.send({ guide });
    });

    // auth related API

    // create token when user login
    app.post("/api/v1/auth/createToken", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
        expiresIn: "3h",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true });
    });

    // clear cookies if user logout
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

    // user routes

    /* save user to db*/
    app.post("/api/v1/user/saveUser", async (req, res) => {
      const user = req.body;
      const query = { email: user.email };
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "user already exists", insertedId: null });
      }

      const userInfo = {
        email: user.email,
        name: user.displayName,
        img: user.photoURL,
        role: "user",
      };

      const result = await userCollection.insertOne(userInfo);

      res.send(result);
    });

    // Get all user
    app.get(
      "/api/v1/user/getAllUsers",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        const result = await userCollection.find().toArray();

        res.send(result);
      }
    );

    // update user to admin
    app.patch(
      "/api/v1/users/makeAdmin/:id",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };

        const updatedRole = {
          $set: {
            role: "admin",
          },
        };

        const result = await userCollection.updateOne(filter, updatedRole);

        res.send(result);
      }
    );

    // update user to guide
    app.patch(
      "/api/v1/users/makeGuide/:id",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };

        const updatedRole = {
          $set: {
            role: "guide",
          },
        };

        const result = await userCollection.updateOne(filter, updatedRole);

        res.send(result);
      }
    );

    // package related

    // get all categories
    app.get("/api/v1/packages/getCategories", async (req, res) => {
      const result = await categoriesCollection.find().toArray();

      res.send(result);
    });

    // add a package
    app.post(
      "/api/v1/packages/addPackage",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        const tour = req.body;

        const result = await toursCollection.insertOne(tour);

        res.send(result);
      }
    );

    // get all packages
    app.get("/api/v1/packages/getAllPackages", async (req, res) => {
      const result = await toursCollection.find().toArray();

      res.send(result);
    });

    // guide related api

    // create a guide
    app.post("/api/v1/guide/saveGuide", verifyToken, async (req, res) => {
      const guideInfo = req.body;

      const query = { email: guideInfo.email };
      const isExists = await guideCollection.findOne(query);
      if (isExists) {
        return res.send({ message: "Guide already exists", insertedId: null });
      }

      const result = await guideCollection.insertOne(guideInfo);

      res.send(result);
    });

    // get all guide
    app.get("/api/v1/guides/getAllGuide", async (req, res) => {
      const result = await guideCollection.find().toArray();

      res.send(result);
    });

    // review related api

    // add new review
    app.post("/api/v1/review/addReview", verifyToken, async (req, res) => {
      const review = req.body;

      const result = await reviewCollection.insertOne(review);

      res.send(result);
    });

    // booking related api

    // add new booking
    app.post("/api/v1/booking/addBooking", verifyToken, async (req, res) => {
      const booking = req.body;

      const result = await bookingCollection.insertOne(booking);

      res.send(result);
    });

    // get all booking
    app.get("/api/v1/booking/getAllBooking", verifyToken, async (req, res) => {
      const result = await bookingCollection.find().toArray();

      res.send(result);
    });

    // get all bookings by guides email
    app.get("/api/v1/guidesBooking", verifyToken, async (req, res) => {
      const email = req.query.email;

      const query = { guideEmail: email };

      const result = await bookingCollection.find(query).toArray();

      res.send(result);
    });

    // change booking status by guide
    app.put(
      "/api/v1/bookings/changeStatus/:id",
      verifyToken,
      async (req, res) => {
        const status = req.body;
        console.log(status);
        const id = req.params.id;

        const filter = { _id: new ObjectId(id) };

        const updatedStatus = {
          $set: {
            status: status.status,
          },
        };
        const result = await bookingCollection.updateOne(filter, updatedStatus);

        res.send(result);
      }
    );

    // get bookings for user
    app.get("/api/v1/bookings/userBookings", verifyToken, async (req, res) => {
      const email = req.query.email;

      const query = { touristEmail: email };

      const result = await bookingCollection.find(query).toArray();

      res.send(result);
    });

    // cancel booking
    app.delete(
      "/api/v1/booking/cancelBooking/:id",
      verifyToken,
      async (req, res) => {
        const id = req.params.id;

        const query = { _id: new ObjectId(id) };

        const result = await bookingCollection.deleteOne(query);

        res.send(result);
      }
    );

    // wishlist related api

    // add to wishList
    app.post("/api/v1/wishlist/add", verifyToken, async (req, res) => {
      const item = req.body;
      const result = await wishListCollection.insertOne(item);

      res.send(result);
    });

    app.get("/api/v1/wishlist/getWishlist", verifyToken, async (req, res) => {
      const email = req.query.email;

      const query = { email: email };

      const result = await wishListCollection.find(query).toArray();

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
