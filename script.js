document.addEventListener('DOMContentLoaded', () => {

    // The item data is now defined directly within this script.
    const items = [
        {
            "name": "Golden Tiger",
            "category": "Funtimes",
            "value": 15000,
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Golden+Tiger"
        },
        {
            "name": "Lucky Cat",
            "category": "Funtimes",
            "value": 5000,
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Lucky+Cat"
        },
        {
            "name": "Diamond Grimoire",
            "category": "Ultimates",
            "value": 250000,
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Diamond+Grimoire"
        },
        {
            "name": "Ancient Scroll",
            "category": "Ultimates",
            "value": 150000,
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Ancient+Scroll"
        },
        {
            "name": "Cosmic Sword",
            "category": "Mythicals",
            "value": 75000,
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Cosmic+Sword"
        },
        {
            "name": "Shadow Scythe",
            "category": "Mythicals",
            "value": 90000,
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Shadow+Scythe"
        }
    ];

    const itemGrid = document.getElementById('item-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // This function will build the item cards from a given array.
    const renderItems = (itemsToRender) => {
        // Clear any existing content in the grid.
        itemGrid.innerHTML = '';

        // Loop through each item in the data array.
        itemsToRender.forEach(item => {
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

    // Add event listeners to each filter button.
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the category from the data-category attribute.
            const category = button.dataset.category;

            // Remove 'active' class from all buttons and add it to the clicked one.
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter the items based on the category.
            let filteredItems = [];
            if (category === 'all') {
                filteredItems = items;
            } else {
                filteredItems = items.filter(item => item.category === category);
            }

            // Render the filtered items.
            renderItems(filteredItems);
        });
    });

    // Initial render of all items when the page loads.
    renderItems(items);
});
