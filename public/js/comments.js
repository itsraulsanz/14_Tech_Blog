const newCommentFormHandler = async (event) => {
    event.preventDefault();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    const comment_text = document.querySelector('#comment-text').value.trim();
    console.log(comment_text, post_id);
    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ 
            comment_text, 
            post_id 
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
};

document
    .querySelector('#new-comment-form')
    .addEventListener('submit', newCommentFormHandler);