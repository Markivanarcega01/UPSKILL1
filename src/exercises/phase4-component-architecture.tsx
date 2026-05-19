import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}
interface Post {
  id: string;
  content: string;
  userId: string;
}

const useUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const userload = async () => {
      setTimeout(() => {
        setIsLoading(false);
        setUser({ id: "1", name: "ivan", email: "email@gmail.com" });
      }, 2000);
    };
    userload();
    return () => {};
  }, []);
  return {
    isLoading,
    user,
  };
};
const useUserPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<Post | null>(null);
  useEffect(() => {
    const userpostsload = async () => {
      setTimeout(() => {
        setIsLoading(false);
        setPost({ id: "2", content: "the longest content ever", userId: "33" });
      }, 2000);
    };
    userpostsload();
    return () => {};
  }, []);
  return {
    isLoading,
    post,
  };
};

const UserProfileCard = () => {
  const { user, isLoading } = useUser();

  return (
    <div>
      {!isLoading ? (
        <>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
        </>
      ) : (
        "user fetching"
      )}
    </div>
  );
};

const PostsList = () => {
  const { isLoading, post } = useUserPosts();

  return (
    <div>
      {!isLoading ? (
        <>
          <p>{post?.content}</p>
        </>
      ) : (
        "post fetching"
      )}
    </div>
  );
};

const EditProfileForm = () => {
  return (
    <form action="">
      <button>Edit Profile</button>
    </form>
  );
};

const UserDashboard = () => {
  return (
    <div>
      <UserProfileCard />
      <PostsList />
      <EditProfileForm />
    </div>
  );
};
