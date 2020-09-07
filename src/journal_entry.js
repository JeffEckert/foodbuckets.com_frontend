class JournalEntry {
    constructor(id, journalEntryAttributes) {
        this.id = id;
        // debugger
        this.meal = journalEntryAttributes.meal;
        this.description = journalEntryAttributes.description;
        this.image_url = journalEntryAttributes.image_url;
        this.calorie_count = journalEntryAttributes.calorie_count;
        this.category = journalEntryAttributes.category;
        this.date = journalEntryAttributes.date;
        JournalEntry.all.push(this);
    }
    // renderJournalEntryCard() {
    //     return`
    //     <div data-id=${this.id}>
    //         <img src=${this.attributes.image_url} height="200" width="250">
    //         <h3>${this.attributes.meal}</h3>
    //         <p>${this.attributes.description}</p>
    //         <p>${this.attributes.calorie_count}</p>
    //         <p>${this.attributes.category.category}</p>
    //         <p>${this.attributes.date}</p>
    //         <button data-id=${this.id}>edit</button>
    //     </div>
    //     <br><br>`;
    // }
}

JournalEntry.all = [];