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

function createFormHandler(e) {
    e.preventDefault()
    const mealInput = document.querySelector('#input-meal').value
    const descriptionInput = document.querySelector('#input-description').value
    const imageInput = document.querySelector('#input-url').value
    const calorieInput = document.querySelector('#input-calorieCount').value
    const dateInput = document.querySelector('#input-date').value
    const calendarDateId = parseInt(dateInput)
    postJournalEntry(mealInput, descriptionInput, imageInput, calorieInput, dateInput)
}

function postJournalEntry(meal, description, image_url, calorie_count, calendar_date_id) {
    // console.log(meal, description, image_url, calorie_count, calendar_date_id);

    let bodyData = {meal, description, image_url, calorie_count, calendar_date_id}

    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(journal_entry => {
        console.log(journal_entry)
        // const journalEntryData = journal_entry.data
        // const journalEntryMarkup = `
        // <div data-id=${journal_entry.id}>
        //         <img src=${journal_entry.attributes.image_url} height="200" width="250">
        //         <h3>${journal_entry.attributes.meal}</h3>
        //         <p>${journal_entry.attributes.description}</p>
        //         <p>${journal_entry.attributes.calorie_count}</p>
        //         <p>${journal_entry.attributes.calendar_date.date}</p>
        //         <button data-id=${journal_entry.id}>edit</button>
        //       </div>
        //  <br><br>`;

        //  document.querySelector('#journalEntry-container'
        //  ).innerHTML += journalEntryMarkup
    
    })
    };
