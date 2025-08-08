document.addEventListener('DOMContentLoaded', () => {

    // This is the complete and updated list of items with Funtimes, Mythicals, and Ultimates.
    const items = [
        // Funtimes Items
        {
            "name": "Banana gun",
            "category": "Funtimes",
            "value": "N/A",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Banana+Gun"
        },
        {
            "name": "Get coined",
            "category": "Funtimes",
            "value": "N/A",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Get+coined"
        },
        {
            "name": "Get diced",
            "category": "Funtimes",
            "value": "N/A",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Get+diced"
        },
        {
            "name": "Comically large knife",
            "category": "Funtimes",
            "value": "N/A",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Comically+large+knife"
        },
        {
            "name": "Stop sign",
            "category": "Funtimes",
            "value": "N/A",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Stop+sign"
        },
        {
            "name": "Comically large gun",
            "category": "Funtimes",
            "value": "N/A",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Comically+large+gun"
        },
        {
            "name": "The sniper",
            "category": "Funtimes",
            "value": "N/A",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=The+sniper"
        },
        {
            "name": "Warning sign",
            "category": "Funtimes",
            "value": "N/A",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Warning+sign"
        },
        // Mythicals Items
        {
            "name": "Whirlpool knife",
            "category": "Mythicals",
            "value": "50-55k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Whirlpool+knife"
        },
        {
            "name": "Whirlpool gun",
            "category": "Mythicals",
            "value": "50-55k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Whirlpool+gun"
        },
        {
            "name": "Fairy wand",
            "category": "Mythicals",
            "value": "50-55k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Fairy+wand"
        },
        {
            "name": "Ancient wand",
            "category": "Mythicals",
            "value": "50-55k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Ancient+wand"
        },
        {
            "name": "Commando knife",
            "category": "Mythicals",
            "value": "50-55k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Commando+knife"
        },
        {
            "name": "Silenced pistol",
            "category": "Mythicals",
            "value": "50-55k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Silenced+pistol"
        },
        {
            "name": "Kyber",
            "category": "Mythicals",
            "value": "50-55k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Kyber"
        },
        {
            "name": "Heavy blaster",
            "category": "Mythicals",
            "value": "50-55k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Heavy+blaster"
        },
        {
            "name": "Katana",
            "category": "Mythicals",
            "value": "50-55k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Katana"
        },
        {
            "name": "Galaxy Sniper",
            "category": "Mythicals",
            "value": "50-55k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Galaxy+Sniper"
        },
        {
            "name": "Lucky katana",
            "category": "Mythicals",
            "value": "25-30k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Lucky+katana"
        },
        {
            "name": "Overseer sniper",
            "category": "Mythicals",
            "value": "25-30k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Overseer+sniper"
        },
        {
            "name": "Sakura katana",
            "category": "Mythicals",
            "value": "30k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Sakura+katana"
        },
        {
            "name": "Bad kitten",
            "category": "Mythicals",
            "value": "30k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Bad+kitten"
        },
        {
            "name": "Dark sunset",
            "category": "Mythicals",
            "value": "30k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Dark+sunset"
        },
        {
            "name": "Dragonbreath",
            "category": "Mythicals",
            "value": "30k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Dragonbreath"
        },
        // Ultimates Items
        {
            "name": "Mad tyrant",
            "category": "Ultimates",
            "value": "N/A",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Mad+tyrant"
        },
        {
            "name": "Steampunk blade",
            "category": "Ultimates",
            "value": "110-120k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Steampunk+blade"
        },
        {
            "name": "Steampunk ray",
            "category": "Ultimates",
            "value": "110-120k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Steampunk+ray"
        },
        {
            "name": "Lafis knife",
            "category": "Ultimates",
            "value": "40k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Lafis+knife"
        },
        {
            "name": "Lafis gun",
            "category": "Ultimates",
            "value": "40k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Lafis+gun"
        },
        {
            "name": "Scorch torch",
            "category": "Ultimates",
            "value": "35k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Scorch+torch"
        },
        {
            "name": "Hotshot",
            "category": "Ultimates",
            "value": "35k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Hotshot"
        },
        {
            "name": "Chess club",
            "category": "Ultimates",
            "value": "N/A",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Chess+club"
        },
        {
            "name": "Checkmate",
            "category": "Ultimates",
            "value": "N/A",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Checkmate"
        },
        {
            "name": "Squeaky mallet",
            "category": "Ultimates",
            "value": "50k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Squeaky+mallet"
        },
        {
            "name": "Squeaky piggy",
            "category": "Ultimates",
            "value": "50k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Squeaky+piggy"
        },
        {
            "name": "Rock candy",
            "category": "Ultimates",
            "value": "50k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Rock+candy"
        },
        {
            "name": "Gumball",
            "category": "Ultimates",
            "value": "50k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Gumball"
        },
        {
            "name": "Furnace",
            "category": "Ultimates",
            "value": "50k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Furnace"
        },
        {
            "name": "Double trouble",
            "category": "Ultimates",
            "value": "50k",
            "imageUrl": "https://placehold.co/600x400/1f2937/d1d5db?text=Double+trouble"
        }
    ];

    const itemGrid = document.getElementById('item-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.querySelector('.search-input');

    const renderItems = (itemsToRender) => {
        itemGrid.innerHTML = '';
        
        if (itemsToRender.length === 0) {
            itemGrid.innerHTML = '<p style="text-align: center; margin-top: 2rem; font-style: italic; color: #a0aec0;">No items found in this category.</p>';
            return;
        }

        itemsToRender.forEach(item => {
            const card = document.createElement('div');
            card.className = 'item-card';

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

            itemGrid.appendChild(card);
        });
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            let filteredItems = (category === 'all') ? items : items.filter(item => item.category === category);
            renderItems(filteredItems);
        });
    });

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        const activeFilter = document.querySelector('.filter-btn.active');
        const activeCategory = activeFilter.dataset.category;

        let filteredItems = (activeCategory === 'all') ? items : items.filter(item => item.category === activeCategory);

        const finalFilteredItems = filteredItems.filter(item => 
            item.name.toLowerCase().includes(searchTerm)
        );

        renderItems(finalFilteredItems);
    });

    renderItems(items);
});
