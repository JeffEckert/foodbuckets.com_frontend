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
    renderJournalEntryCard() {
        return`
        <div data-id=${this.id}>
            <img src=${this.image_url} height="200" width="250">
            <h3>${this.meal}</h3>
            <p>${this.description}</p>
            <p>${this.calorie_count}</p>
            <p>${this.category.category}</p>
            <p>${this.date}</p>
            <button data-id=${this.id}>edit</button>
        </div>
        <br><br>`;
    }
}

JournalEntry.all = [];