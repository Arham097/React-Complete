import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Enter User Id"
        />
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="body"
          rows={5}
          cols={30}
          name="body"
          className="form-control"
          id="userId"
          placeholder="Tell us more about it..."
        />
        <label htmlFor="reactions" className="form-label">
          Number of Reactions(Likes Dislikes)
        </label>
        <input
          type="text"
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="Enter Reaction in a way likes dislikes by using space"
        />
        <label htmlFor="tags" className="form-label">
          Enter your Hashtags here
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="userId"
          placeholder="Please Enter tags by using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export const createPostAction = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  postData.reactions = postData.reactions.split(" ");
  postData.reactions = {
    likes: +postData.reactions[0],
    dislikes: +postData.reactions[1],
  };
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      // addPost(post);
      // console.log(post);
    });
  return redirect("/");
};

export default CreatePost;
