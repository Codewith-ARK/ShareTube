import pool from "@/lib/db";

export default async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * from posts");
    client.release();

    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
