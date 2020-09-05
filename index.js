const endPoint = "http://localhost:3000/api/v1/journal_entries"

document.addEventListener('DOMContentLoaded', (event) => {
   getJournalEntry()

   let createJournalEntryForm = document.querySelector('#create-journalEntry-form')

   createJournalEntryForm.addEventListener('submit', (e) => createFormHandler(e))
})

function getJournalEntry() {
    fetch(endPoint)
    .then(response => response.json())
    .then(journal_entries => {
        journal_entries.data.forEach(journal_entry => {
            const journalEntryMarkup = `
              <div data-id=${journal_entry.id}>
                <img src=${journal_entry.attributes.image_url} height="200" width="250">
                <h3>${journal_entry.attributes.meal}</h3>
                <p>${journal_entry.attributes.description}</p>
                <p>${journal_entry.attributes.calorie_count}</p>
                <p>${journal_entry.attributes.calendar_date.date}</p>
                <button data-id=${journal_entry.id}>edit</button>
              </div>
              <br><br>`;
    
              document.querySelector('#journalEntry-container'
              ).innerHTML += journalEntryMarkup
          })
        })
};
