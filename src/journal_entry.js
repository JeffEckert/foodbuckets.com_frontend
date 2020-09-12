class JournalEntry {
    constructor(id, journalEntryAttributes) {
        this.id = id;
        this.meal = journalEntryAttributes.meal;
        this.description = journalEntryAttributes.description;
        this.image_url = journalEntryAttributes.image_url;
        this.calorie_count = journalEntryAttributes.calorie_count;
        this.category = journalEntryAttributes.category;
        this.date = journalEntryAttributes.date;
        JournalEntry.all.push(this);
        ;
        
    }
    renderJournalEntryCard() {
        return `
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <img src="${this.image_url}" class="card-img-top" alt="...">
                    <div class="card-body" >
                        <h5 class="card-title">${this.meal}</h5>
                        <p class="card-text">${this.description}</p>
                        <p class="card-text">${this.category.category}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            
                            <button type="submit" class="btn btn-sm btn-outline-secondary" onclick="handleDelete(${this.id.id})">Delete</button>
                            </div>
                            <small class="text-muted">Calories ${this.calorie_count}</small>
                            <div id='cardId'>${this.id.id}</div>
                        </div>
                    
                    </div>
                    </div>
            
            </div>
       `

    }
    static findById(id) {
        return this.all.find(journal_entry => journal_entry.id === id);
    }

   
}

function handleDelete(id){
           fetch("http://localhost:3000/api/v1/journal_entries/" + id, {
           method: "DELETE",
           headers: {"Content-Type": "application/json"},
    })
    .then(response => {
        console.log(response)
    })
    .then(err => console.log(err));
}


JournalEntry.all = [];