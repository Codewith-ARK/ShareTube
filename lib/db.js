// import { Pool } from "pg";

// import { PrismaClient } from "@prisma/client";
const { PrismaClient } = require("@prisma/client");

// // Pool variable to conenct to DB
// const pool = new Pool({
//   user: process.env.PGSQL_USER,
//   password: process.env.PGSQL_PASSWORD,
//   host: process.env.PGSQL_HOST,
//   port: process.env.PGSQL_PORT,
//   database: process.env.PGSQL_DATABASE,
// });

const prisma = new PrismaClient();

// async function main() {
//   const allUsers = await prisma.users.findMany()
//   console.log(allUsers)
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (err) => {
//     console.error(err);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

// Perform DB CRUD operation(s)

// function to CREATE a post
export async function createPost(postData) {
  try {
    const newPost = await prisma.posts.create({
      data: {
        title: postData.title,
        link: postData.link,
        category: postData.category,
      },
    });

    console.log("Post added successfully");
  } catch (err) {
    console.err(err);
  }
}
// function to CREATE list

// function to READ/fetch all post
export async function fetchAllPost() {
  try {
    console.log("Fetch req recieved")
    const allPost = await prisma.posts.findMany();
    console.log(allPost)
    return allPost;
  } catch (err) {
    if (err) return new Error("Error fetching all post");
  }
}

// function to READ/fetch a specific post

// function to READ/fetch favorite post

// function to UPDATE a specific post

// function to UPDATE favorite list

// function to DELETE a specific post

// function to DELETE a list

// export default pool;
