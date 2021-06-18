// UPDATE A POST
const updatePostHandler = async (event) => {
  event.preventDefault();

  //const title = document.querySelector("post-title").value.trim();
  //const content = document.querySelector("post-cont").value.trim();
  const title = "test";
  const content = "text";
  const id = event.target.value;

  console.log(title, content, id);
  if (title && content) {
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      // headers: { "Content-Type:": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("You couldn't update the post");
    }
  }
};

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", updatePostHandler);
