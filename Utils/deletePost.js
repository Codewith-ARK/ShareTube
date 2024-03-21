import axios from "axios";

export default async function deletePost(postId) {
  try {
    await axios.delete("/api/deletePost", {
      data: {
        postId: postId,
      },
    });
  } catch (error) {
    console.error("Error deleting post:", error.message);
  }
}
