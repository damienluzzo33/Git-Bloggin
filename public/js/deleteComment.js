//* create a function that will allow the user to delete a comment they've created

const deleteCommentHandler = async (event) => {
    event.preventDefault();
    const comment_id_full = event.target.id;
    const comment_id_num = comment_id_full.split('-')[1];
    const thread_id = document.querySelector('.thread-name').getAttribute('data-id');


    const response = await fetch(`/api/comments/${comment_id_num}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: null
    });

    if (response.ok) {
        document.location.replace(`/threads/${thread_id}`);
    }

} 

let deleteCommentBtn = document.querySelector(".delete-comment");
deleteCommentBtn.addEventListener("click", deleteCommentHandler);