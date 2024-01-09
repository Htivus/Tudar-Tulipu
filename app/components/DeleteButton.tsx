"use client";
import { PostDelete, fetchToken } from "@/libs/actions";
import React from "react";
import { useRouter } from "next/navigation";
const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const handleDeletePost = async () => {
    const { token } = await fetchToken();
    try {
      console.log(id);
      await PostDelete(id, token);

      router.push("/Blogs");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <button onClick={handleDeletePost} className="bg-gray-500 rounded-md p-2">
      {" "}
      Delete
    </button>
  );
};

export default DeleteButton;
