//* create a function that will allow the user to delete a thread they've created
let deleteThreadHandler = async (event) => {
    event.preventDefault();
    //* get the thread id of the the targeted thread
    const thread_id = document.querySelector('.thread-name').getAttribute('data-id');
    //* fetch the DELETE api route
    const response = await fetch(`/api/threads/${thread_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: null
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    }

} 

let deleteThreadBtn = document.querySelectorAll("#deleteThread").forEach(item => {
    item.addEventListener("click", deleteThreadHandler)
})