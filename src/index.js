const endPoint = "http://localhost:3000/api/v1/journal_entries"

document.addEventListener('DOMContentLoaded', () => {
   getJournalEntry()

   const createJournalEntryForm = document.querySelector('#create-journalEntry-form')
    createJournalEntryForm.addEventListener('submit', (e) => createFormHandler(e))

    const deleteJournalEntryForm = document.querySelector('#journalEntry-container')
    deleteJournalEntryForm.addEventListener('submit', e => {
    const id = parseInt(e.target.dataset.id);
    const journal_entry = JournalEntry.findById(id);
    console.log(journal__entry);
    deleteFormHandler(e);
    })
});

function getJournalEntry() {
    fetch(endPoint)
    .then(response => response.json())
    .then(journal_entries => {
        journal_entries.data.forEach(journal_entry => {

            // debugger

            let newJournalEntry = new JournalEntry(journal_entry, journal_entry.attributes)

            document.querySelector('#journalEntry-container').innerHTML += newJournalEntry.renderJournalEntryCard();
        })
    })
}

function createFormHandler(e) {
    e.preventDefault()
    const mealInput = document.querySelector('#input-meal').value
    const descriptionInput = document.querySelector('#input-description').value
    const imageInput = document.querySelector('#input-url').value
    const calorieCountInput = document.querySelector('#input-calorieCount').value
    const categoryInput = document.querySelector('#categories').value
    const categoryId = parseInt(categoryInput)
    const dateInput = document.querySelector('#input-date').value
    postJournalEntry(mealInput, descriptionInput, imageInput, calorieCountInput, categoryInput, dateInput)
}

function deleteFormHandler(e) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const journalEntry= JournalEntry.findById(id);
    const meal = e.target.querySelector('#input-meal').value;
    const description = e.target.querySelector('#input-description').value;
    const image_url = e.target.querySelector('#input-url').value;
    const calorieCount = e.target.querySelector('#input-calorieCount').value;
    const category_id = parseInt(e.target.querySelector('#categories').value);
    const date = e.target.querySelector('#input-date').value;
    deleteJournalEntry(journalEntry, meal, description, image_url, calorieCount, category_id, date)
  }


function postJournalEntry(meal, description, image_url, calorie_count, category_id, date) {
    
    let bodyData = {meal, description, image_url, calorie_count, category_id, date}

     fetch(endPoint, {
        // POST request
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(journal_entry => {
        console.log(journal_entry)
        const newJournalEntry = new JournalEntry(journal_entry.data.id, journal_entry.data.attributes)
        

        document.querySelector('#journalEntry-container').innerHTML += newJournalEntry.renderJournalEntryCard();
    })
};

function deleteJournalEntry(journalEntry, meal, description, image_url, calorieCount, category_id, date) {

    let bodyData = {journalEntry, meal, description, image_url, calorieCount, category_id, date}

    fetch(endPoint, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => {
        if (res.ok) {
            return Promise.resolve('User deleted.');
        } else {
            return Promise.reject('An error occurred.');
        }
    })
    .then(response => console.log(res));

};


