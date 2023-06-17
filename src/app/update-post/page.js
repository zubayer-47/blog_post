"use client";
import UpdateForm from "@components/Feed/UpdateForm";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const UpdatePost = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const postId = searchParams.get("id");
  const [updateing, setUpdateing] = useState(false);
  const [post, setPost] = useState({
    post: "",
    tag: "",
  });
  const updatePost = async (e) => {
    e.preventDefault();
    setUpdateing(true);
    try {
      const res = await fetch(`/api/update/${postId}`, {
        method: "PATCH",
        body: JSON.stringify({
          post: post.post,
          tag: post.tag,
        }),
      });
      if (res.ok) {
        router.push("/");
        setUpdateing(false);
      }
    } catch (error) {
      console.log("Submit Error ", error?.message);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/update/${postId}`);
      const data = await res.json();
      setPost(data);
    };
    fetchData();
  }, [postId]);
  return (
    <div>
      <UpdateForm
        type="Update"
        post={post}
        setPost={setPost}
        updateing={updateing}
        handleSubmit={updatePost}
      />
    </div>
  );
};

export default UpdatePost;
