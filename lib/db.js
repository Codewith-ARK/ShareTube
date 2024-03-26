const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Perform DB CRUD operation(s)

// function to CREATE a post
export async function createPost(postData) {
  try {
    const newPost = await prisma.posts.create({
      data: {
        post_title: postData.title,
        post_link: postData.link,
        post_category: postData.category,
        post_author: postData.author,
      },
    });
    return newPost;
  } catch (err) {
    throw new Error("Error creating post:" + err);
  }
}

export async function createUser(userData) {
  try {
    const newUser = await prisma.users.create({
      data:{
        id: userData.id,
        name: userData.name,
        email:userData.email,
      }
    });
    return newUser
  } catch (err) {
    throw new Error("Error creating post:" + err);
  }
}

// function to CREATE list

// function to READ/fetch all post
export async function fetchAllPost() {
  try {
    const allPost = await prisma.posts.findMany();
    return allPost;
  } catch (error) {
    throw new Error("Error fetching post:" + error);
  }
}

export async function fetchAllUser() {
  try {
    const allUser = await prisma.users.findMany();
    return allUser;
  } catch (error) {
    console.error("Error fetching all users:", error);
  }
}
// function to READ/fetch a specific post
export async function fetchUser(userId, userEmail) {
  try {
    const user = await prisma.users.findUniqueOrThrow({
      where: {
        id: userId,
        email: userEmail,
      }
    });
    return user;
  } catch (error) {
    console.error("Error fetching user:", error.message);
  }
}

// function to READ/fetch favorite post

// function to UPDATE a specific post
export async function increaseLike(postId) {
  try {
    await prisma.posts.update({
      where: {
        id: postId,
      },
      data: {
        post_likes: { increment: 1 },
      },
    });
  } catch (error) {
    console.error("Error increasing likes:", error);
  }
}

export async function increaseDislike(postId) {
  try {
    await prisma.posts.update({
      where: {
        id: postId,
      },
      data: {
        post_dislikes: { increment: 1 },
      },
    });
  } catch (error) {
    console.error("Error increasing dislikes:", error);
  }
}

// function to UPDATE favorite list

// function to DELETE a specific post
export async function deletePost(postId) {
  try {
    await prisma.posts.delete({
      where: {
        id: postId,
      },
    });
  } catch (error) {
    throw new Error("Error deleting post:" + error);
  }
}

// function to DELETE a list

// export default pool;
