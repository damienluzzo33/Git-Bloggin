//* create a function that will allow the user to delete a thread they've created

const deleteThreadHandler = async (event) => {
    event.preventDefault();
    console.log("button clicked!")

    const thread_id = document.querySelector('.thread-name').getAttribute('data-id');

    const response = await fetch(`/api/threads/${thread_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: null
    });
    console.log(response)

    if (response.ok) {
        document.location.replace('/dashboard');
    }

} 

let deleteThreadBtn = document.querySelector("#deleteThread");
console.log(deleteThreadBtn)
deleteThreadBtn.addEventListener("click", deleteThreadHandler);