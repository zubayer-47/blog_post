"use client";

import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import PostCard from "./PostCard";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post");
      const data = await res.json();

      console.log({data})
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const filterBySearch = () => {
    const regex = new RegExp(searchText, "i"); // "i for case insensitive search"
    return posts?.filter(
      (item) => regex.test(item.creator.username) || regex.test(item.tag)
    );
  };
  let filters = filterBySearch();
  console.log(filters);

  return (
    <section className="mt-5">
      <div className="relative w-full text-center">
        <DebounceInput
          minLength={3}
          debounceTimeout={500}
          type="search"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          required
          className="font-mono bg-sky-200 text-gray-600 px-3 py-2 rounded-sm w-2/3 text-xs sm:text-lg"
        />
      </div>
      <div className="mt-5 flex justify-center flex-wrap">
        {filters?.length > 0 &&
          filters?.map((post) => (
            <PostCard
              post={post}
              key={post._id}
              setSearchText={setSearchText}
            />
          ))}
      </div>
    </section>
  );
};

export default Feed;
