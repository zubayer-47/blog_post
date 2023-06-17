"use client";

import { useEffect, useState } from "react";
import PostCard from "./PostCard";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const handlerSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <section className="mt-5">
      <form className="relative w-full text-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handlerSearchChange}
          required
          className="font-mono bg-sky-200 text-gray-600 px-3 py-2 rounded-sm w-2/3"
        />
      </form>
      <div className="mt-5 flex justify-center flex-wrap">
        {posts?.length > 0 &&
          posts.map((post) => <PostCard post={post} key={post._id} />)}
      </div>
    </section>
  );
};

export default Feed;
