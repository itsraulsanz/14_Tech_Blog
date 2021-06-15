// CREATE A NEW POST
const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-cont').value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

document
.querySelector(".new-post-form")
.addEventListener("submit", newFormHandler);

// DELETE A POST
const deletePostHandler = async (event) => {
  event.preventDefault();
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type:': 'application/json' },
  });
  if (response.ok) {
      document.location.replace('/dashboard');
  } else {
      alert("You couldn't delete the post");
  }
};

document
  .querySelector('#btn-delete')
  .addEventListener('click', deletePostHandler);