import { deletePost } from "@/lib/db";

export default async function (req, res) {
  const { postId } = req.body;
  try {
    console.log("Delete req received")
    await deletePost(postId);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting post" });
  }
}
