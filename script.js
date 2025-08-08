document.addEventListener('DOMContentLoaded', () => {

    const itemGrid = document.getElementById('item-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.querySelector('.search-input');
    
    let items = []; // We will store the fetched items here

    // This function will build the item cards from a given array.
    const renderItems = (itemsToRender) => {
        // Clear any existing content in the grid.
        itemGrid.innerHTML = '';
        
        // If there are no items to render, display a message.
        if (itemsToRender.length === 0) {
            itemGrid.innerHTML = '<p style="text-align: center; margin-top: 2rem; font-style: italic; color: #a0aec0;">No items found in this category.</p>';
            return;
        }

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
                        <span class="item-value">$${item.value}</span>
                        <span class="item-value-label">(Estimated Value)</span>
                    </div>
                </div>
            `;

            // Add the newly created card to the item grid container.
            itemGrid.appendChild(card);
        });
    };

    // Use fetch() to get the item data from the new JSON file.
    fetch('items.json')
        .then(response => {
            // Check if the response is ok (status code 200)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Parse the JSON data from the response.
            return response.json();
        })
        .then(data => {
            // Store the fetched data in the 'items' variable.
            items = data;
            
            // Initial render of all items when the page loads.
            renderItems(items);

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

            // Add search functionality
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                
                // Find the currently active filter button
                const activeFilter = document.querySelector('.filter-btn.active');
                const activeCategory = activeFilter.dataset.category;

                // Filter items based on both category and search term
                let filteredItems = items;
                if (activeCategory !== 'all') {
                    filteredItems = items.filter(item => item.category === activeCategory);
                }

                const finalFilteredItems = filteredItems.filter(item => 
                    item.name.toLowerCase().includes(searchTerm)
                );

                renderItems(finalFilteredItems);
            });

        })
        .catch(e => {
            // Log any errors that occurred during the fetch.
            console.error('There was a problem fetching the items data:', e);
            itemGrid.innerHTML = '<p style="text-align: center; margin-top: 2rem; font-style: italic; color: #ff5252;">Failed to load items. Please try again.</p>';
        });
});
