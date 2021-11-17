//* create a function that will allow the user to create a new thread

let editCommentHandler = async (event) => {
    event.preventDefault();

    let comment_id_full = event.target.id;
    let comment_id_num = comment_id_full.split('-')[1];

    const commentBody = document.querySelector(`#commentBody-${comment_id_num}`);
    const oldComment = commentBody.textContent;
    commentBody.remove();
    
    const commentDetails = document.querySelector(`#commentDetails-${comment_id_num}`);
    commentDetails.remove();
    
    const commentDiv = document.querySelector(`#commentDiv-${comment_id_num}`);
    
    const newForm = document.createElement('form');
    newForm.setAttribute('id', comment_id_num)

    const newInput = document.createElement('input');
    newInput.setAttribute("type", "text");
    newInput.setAttribute("value", oldComment);
    newInput.setAttribute("id", `newCommentBody-${comment_id_num}`)

    const newSaveButton = document.createElement('button');
    newSaveButton.setAttribute('class', 'btn btn-success');
    newSaveButton.setAttribute('type', 'submit');
    newSaveButton.textContent = "Save"
    
    newForm.appendChild(newInput);
    newForm.appendChild(newSaveButton);

    newForm.addEventListener('submit', updateComment);

    commentDiv.appendChild(newForm);
}

const updateComment = async (event) => {
    event.preventDefault();

    let comment_id_num = event.target.id;
    const comment_body = document.querySelector(`#newCommentBody-${comment_id_num}`).value.trim();
    const thread_id = document.querySelector('.thread-name').getAttribute('data-id');

    if (thread_id && comment_body) {
        const response = await fetch(`/api/comments/${comment_id_num}`, {
            method: 'PUT',
            body: JSON.stringify({ comment_body, thread_id }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace(`/threads/${thread_id}`);
        }
    }
}

let editCommentBtns = document.querySelectorAll(".edit-comment").forEach(item => {
    item.addEventListener("click", editCommentHandler)
})