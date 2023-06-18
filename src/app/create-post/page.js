"use client";
import Form from "@components/Feed/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePost = () => {
  const { data: session } = useSession();
  console.log(session?.user.id);
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    post: "",
    tag: "",
  });
  
  const createPost = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/post/new", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          post: post.post,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });
      if (res.ok) {
        router.push("/");
        setSubmitting(false);
      }
    } catch (error) {
      console.log("Submit Error ", error?.message);
    }
  };
  return (
    <div>
      <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPost}
      />
    </div>
  );
};

export default CreatePost;
