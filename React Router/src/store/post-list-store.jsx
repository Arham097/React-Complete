import { useState, useEffect, createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...newPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      console.log("clean");
    };
  }, []);

  const addPost = (post) => {
    // console.log(userId, postTitle, postBody, reactions, tags);
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        fetching,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Going to Wild Venture",
    body: "I am going to Wild Venture today. I am so excited.",
    reactions: 2,
    userId: "user-19",
    tags: ["adventure", "wild"],
  },
  {
    id: 2,
    title: "Going to Hunza",
    body: "I am going to Hunza today. I am so excited to see mountains and beauty of there.",
    reactions: 10,
    userId: "user-19",
    tags: ["tour", "mountains"],
  },
];

export default PostListProvider;
