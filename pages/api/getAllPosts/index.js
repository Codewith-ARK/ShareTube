// import pool from "@/lib/db";

import { fetchAllPost } from "@/lib/db";

export default async (req, res) => {
  try {
    // const client = await pool.connect();
    // const result = await client.query("SELECT * from posts");
    // client.release();
    const result = await fetchAllPost();
    res.status(200).json(result);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
