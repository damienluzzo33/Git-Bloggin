//* create a function that will allow the user to create a new thread

const editCommentHandler = async (event) => {
    event.preventDefault();

    console.log("it works")

    const comment_id_full = event.target.id;
    const comment_id_num = comment_id_full.split('-')[1];

    const commentBody = document.querySelector(`#commentBody-${comment_id_num}`);
    const oldComment = commentBody.textContent;
    commentBody.remove();
    
    const commentDetails = document.querySelector(`#commentDetails-${comment_id_num}`);
    commentDetails.remove();
    
    const commentDiv = document.querySelector(`#commentDiv-${comment_id_num}`);
    
    const newForm = document.createElement('form');

    const newInput = document.createElement('input');
    newInput.setAttribute("type", "text");
    newInput.setAttribute("value", oldComment);
    newInput.setAttribute("id", `#newCommentBody-${comment_id_num}`)

    const newSaveButton = document.createElement('button');
    newSaveButton.setAttribute('class', 'btn btn-success');
    newSaveButton.setAttribute('type', 'submit');
    
    newForm.appendChild(newInput);
    newForm.appendChild(newSaveButton);

    newForm.addEventListener('submit', updateComment);

    commentDiv.appendChild(newForm);
}

const updateComment = async (event) => {
    event.preventDefault();

    const comment_body = document.querySelector(`#newCommentBody-${comment_id_num}`).value.trim();
    const thread_id = document.querySelector('.thread-name').getAttribute('data-id');

    if (title && text_body) {
        console.log(title)
        const response = await fetch(`/api/comments/${thread_id}`, {
            method: 'PUT',
            body: JSON.stringify({ comment_body }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response)
        if (response.ok) {
            console.log(response)
            document.location.replace(`/threads/${thread_id}`);
        }
    }
} 

let editCommentBtns = document.querySelectorAll(".edit-comment");
for (let btn of editCommentBtns) {
    btn.addEventListener("click", editCommentHandler);
}