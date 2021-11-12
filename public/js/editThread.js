//* create a function that will allow the user to create a new thread

const editThreadHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#thread-title').value.trim();
    const text_body = document.querySelector('#thread-body').value.trim();
    const threadId = document.querySelector('#editing').getAttribute('data-id');

    if (title && text_body) {
        console.log(title)
        const response = await fetch(`/api/threads/:id/edit`, {
            method: 'PUT',
            body: JSON.stringify({ title, text_body, threadId }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log(response)
            document.location.replace('/dashboard');
        }

    }

} 

let editThreadForm = document.querySelector(".formEditThread");
editThreadForm.addEventListener("submit", editThreadHandler);