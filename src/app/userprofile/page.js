"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProfileCart from "../../components/Feed/Profile";
import { captilize } from "@utils/captilize";
const UserProfile = () => {
  const search = useSearchParams();
  const searchId = search.get("id");
  const searchName = search.get("name");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/user/${searchId}`);
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h2 className="font-bold text-3xl text-sky-400 font-mono">
        {captilize(searchName)} Profile
      </h2>
      <p className="text-gray-500 font-medium">
        View{" "}
        <span className="text-red-400 font-bold font-mono">
          {captilize(searchName)}
        </span>{" "}
        activity and its profile page.
      </p>
      <div className="mt-5 flex justify-center flex-wrap">
        {posts.map((post, index) => (
          <ProfileCart posts={post} key={index} />
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
