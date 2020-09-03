const endPoint = "http://localhost:3000/api/v1/journal_entries"

document.addEventListener('DOMContentLoaded', (event) => {
    fetch(endPoint)
    .then(response => response.json())
    .then(journal_entries => {
        console.log(journal_entries);
    })
})