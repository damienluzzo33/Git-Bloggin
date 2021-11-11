//* create a function that will allow the user to delete a comment they've created

const deleteCommentHandler = async (event) => {
    event.preventDefault();

    const comment_id = document.querySelector('.comment-block').getAttribute('data-id');

    const response = await fetch(`/api/comments/${comment_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    }

} 

let deleteCommentBtn = document.querySelector(".deleteBtn");
deleteCommentBtn.addEventListener("click", deleteCommentHandler);