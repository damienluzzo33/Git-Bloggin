//* create a function that will allow the user to create a new comment on an existing thread

const newCommentHandler = async (event) => {
    event.preventDefault();

    const comment_body = document.querySelector('#commentBody').value.trim();
    const thread_id = document.querySelector('h3').getAttribute('data-id');
    let theDate = new Date();
    let year  = theDate.getFullYear();
    let month = theDate.getMonth();
    let day   = theDate.getDate();
    let newDate  = `${month + 1}/${day}/${year}`;
    const date_created = newDate;

    if (comment_body && thread_id && date_created) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment_body, thread_id, date_created }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace(`/threads/${thread_id}`);
        }

    }

} 

let newCommentForm = document.querySelector(".formAddComment");
newCommentForm.addEventListener("submit", newCommentHandler);