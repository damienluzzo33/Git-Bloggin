//* create a function that will allow the user to create a new thread

const newThreadHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#thread-title').value.trim();
    const text_body = document.querySelector('#thread-body').value.trim();

    let theDate = new Date(date);
    var year  = theDate.getFullYear();
    var month = theDate.getMonth();
    var day   = theDate.getDate();
    var newDate  = `${month + 1}/${day}/${year}`;

    const date_created = newDate;

    if (title && text_body && date_created) {
        const response = await fetch(`/api/threads`, {
            method: 'POST',
            body: JSON.stringify({ title, text_body, date_created }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/');
        }

    }

} 

