import { createPost } from "@/lib/db";

export default async (req, res) => {
  try {
    const { title, link, category } = req.body; // Destructure data from request body
    // Database logic - Connect to database using conn and save post data
    // await conn.query("INSERT INTO posts (title, link, category) VALUES ($1, $2, $3)", [title, link, category]);
    createPost({title, link, category})
    res.status(200).json({ message: "Post added successfully!" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Error adding post" });
  }
};
