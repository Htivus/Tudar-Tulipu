import { GraphQLClient } from "graphql-request";
import { getUserQuery } from "../graphql";
// import {
//   deleteProjectMutation,
//   getProjectByIdQuery,
//   getProjectsOfUserQuery,
//   getUserQuery,
//   projectsQuery,
//   updateProjectMutation,
// } from "../graphql";
// import { createUserMutation, updateProfileMutation } from "../graphql";
// import { ProjectForm, ProfileForm } from "@/common.types";
// import { createProjectMutation } from "../graphql";
// import ProfileForm from "@/app/components/ProfileForm";
import { PostDetails } from "../graphql";
import { createPostMutation } from "../graphql";
import { postsQuery } from "../graphql";
import { createUserMutation } from "../graphql";
import { PostDeleteById } from "../graphql";
import { PostForm, SessionInterface } from "@/common.types";
const isProduction = process.env.NODE_ENV === "production";
const apiUrl = "http://127.0.0.1:4000/graphql";
const apiKey = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || ""
  : "letmein";
const serverUrl = isProduction
  ? process.env.NEXT_PUBLIC_SERVER_URL
  : "http://localhost:3000";

const client = new GraphQLClient(apiUrl);
const makeGraphQLRequest = async (query: string, variables = {}) => {
  try {
    return await client.request(query, variables);
  } catch (error) {
    throw error;
  }
};

export const getUser = (email: string) => {
  return makeGraphQLRequest(getUserQuery, { email });
};
export const createUser = (name: string, email: string, avatarUrl: string) => {
  client.setHeader("x-api-key", apiKey);

  const variables = {
    input: {
      name: name,
      email: email,
      avatarUrl: avatarUrl,
    },
  };

  return makeGraphQLRequest(createUserMutation, variables);
};

export const fetchToken = async () => {
  try {
    const response = await fetch(`${serverUrl}/api/auth/token`);
    return response.json();
  } catch (error) {
    throw error;
  }
};
export const uploadImage = async (imagePath: string) => {
  try {
    const response = await fetch(`${serverUrl}/api/upload`, {
      method: "POST",
      body: JSON.stringify({ path: imagePath }),
    });
    return response.json();
  } catch (error: any) {
    throw error;
  }
};
export const createPost = async (
  form: PostForm,
  creatorId: string,
  token: string
) => {
  console.log(form);
  console.log(creatorId);
  const imageUrl = await uploadImage(form.image);
  client.setHeader("Authorization", `Bearer ${token}`);
  console.log(imageUrl);
  if (imageUrl.url) {
    const variables = {
      input: {
        ...form,
        image: imageUrl.url,
        created: {
          link: creatorId,
        },
      },
    };
    console.log(form);
    return makeGraphQLRequest(createPostMutation, variables);
  }
};

export const getAllPosts = async () => {
  return makeGraphQLRequest(postsQuery);
};
export const getPostDetails = async (id: string) => {
  return makeGraphQLRequest(PostDetails, { id });
};
export const PostDelete = async (id: string, token: string) => {
  console.log(id);
  client.setHeader("Authorization", `Bearer ${token}`);
  return makeGraphQLRequest(PostDeleteById, { id });
};
