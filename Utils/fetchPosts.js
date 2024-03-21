import axios from "axios";

export default async function fetchPosts() {
  try {
    const response = await axios.get("/api/getAllPosts");
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
