// CREATE A NEW POST
const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#post-cont").value.trim();

  if (title && content) {
    console.log(title, content);
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create post");
    }
  }
};

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

// DELETE A POST
const deletePostHandler = async (event) => {
  event.preventDefault();
  const id = event.target.value;
  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
    // headers: { "Content-Type:": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("You couldn't delete the post");
  }
};

document
  .querySelector("#btn-delete")
  .addEventListener("click", deletePostHandler);

// UPDATE A POST
//handle editing the post
const updatePostHandler = async (event) => {
  event.preventDefault();

  //get the post title and the text
  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#post-cont").value.trim();
  const postId = event.target.value;
  console.log(title, content);
  document.location.replace("/edit/" + postId);
};

document
  .querySelector("#btn-update")
  .addEventListener("click", updatePostHandler);
