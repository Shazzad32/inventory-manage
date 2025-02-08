import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectToDb = async () => {
  if (cached.conn) {
    console.log("Connected From Cache");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { dbName: "serviceDB" })
      .then((result) => {
        console.log("Connected to MongoDB");
        return result;
      })
      .catch((error) => {
        console.error("Error connecting to MongoDB", error);
        throw error;
      });
  }

  cached.conn = await cached.promise;

  return cached.conn;
};

// interface MongooseCache {
//   conn: Mongoose | null;
//   promise: Promise<Mongoose> | null;
// }

// declare global {
//   // eslint-disable-next-line no-var
//   var mongoose: MongooseCache;
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// const dbConnect = async (): Promise<Mongoose> => {
//   if (cached.conn) {
//     console.log("Connected From Cache");
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose
//       .connect(MONGODB_URI, { dbName: "devflow" })
//       .then((result) => {
//         console.log("Connected to MongoDB");
//         return result;
//       })
//       .catch((error) => {
//         console.error("Error connecting to MongoDB", error);
//         throw error;
//       });
//   }

//   cached.conn = await cached.promise;

//   return cached.conn;
// };
