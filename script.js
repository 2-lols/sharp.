document.addEventListener('DOMContentLoaded', () => {

    // The item data is now defined directly within this script.
    const items = [
        {
            "name": "Golden Tiger",
            "category": "Pets",
            "value": 15000,
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Golden+Tiger"
        },
        {
            "name": "Diamond Grimoire",
            "category": "Books",
            "value": 250000,
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Diamond+Grimoire"
        },
        {
            "name": "Cosmic Sword",
            "category": "Weapons",
            "value": 75000,
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Cosmic+Sword"
        },
        {
            "name": "Lucky Cat",
            "category": "Pets",
            "value": 5000,
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Lucky+Cat"
        }
    ];

    // This function will build the item cards from the 'items' variable.
    const renderItems = () => {
        // Get the container where the item cards will be placed.
        const itemGrid = document.getElementById('item-grid');
        // Clear any existing content in the grid.
        itemGrid.innerHTML = '';

        // Loop through each item in the data array.
        items.forEach(item => {
            // Create a new div element for the item card.
            const card = document.createElement('div');
            // Use the new class name for the card.
            card.className = 'item-card';

            // Set the inner HTML of the card using a template literal.
            // This builds the card's content with data from the 'items' variable.
            card.innerHTML = `
                <img class="item-card-image" src="${item.imageUrl}" alt="${item.name} Image" onerror="this.onerror=null;this.src='https://placehold.co/600x400/1f2937/d1d5db?text=Image+Not+Found';">
                <div class="item-card-content">
                    <h3 class="item-name">${item.name}</h3>
                    <p class="item-category">Category: ${item.category}</p>
                    <div class="item-value-container">
                        <span class="item-value">$${item.value.toLocaleString()}</span>
                        <span class="item-value-label">(Estimated Value)</span>
                    </div>
                </div>
            `;

            // Add the newly created card to the item grid container.
            itemGrid.appendChild(card);
        });
    };

    // Call the function to render the items when the page loads.
    renderItems();
});
