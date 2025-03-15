document.addEventListener('DOMContentLoaded', () => {
    // Date ideas list
    const dateIdeas = [
        // Escondido - Couple Ideas
        { name: "Sunset Picnic at Kit Carson Park", description: "Pack a blanket and watch the sunset.", tags: ["outdoor", "relaxing", "romantic"], preference: "both", category: "relaxation", locationName: "Kit Carson Park", address: "3333 Bear Valley Pkwy, Escondido, CA 92025", hours: "6:00 AM - 10:00 PM", costs: "Free", icon: "fas fa-picnic", mood: "romantic" },
        { name: "Wine Tasting at Orfila Vineyards", description: "Sip local wines in a cozy vineyard.", tags: ["indoor", "food", "romantic"], preference: "both", category: "food", locationName: "Orfila Vineyards", address: "13455 San Pasqual Rd, Escondido, CA 92025", hours: "11:00 AM - 7:00 PM", costs: "$20-30 per person", icon: "fas fa-wine-glass", mood: "romantic" },
        { name: "Hike at Elfin Forest", description: "Trek a scenic trail with great views.", tags: ["outdoor", "active", "hike"], preference: "both", category: "adventure", locationName: "Elfin Forest Recreational Reserve", address: "8833 Harmony Grove Rd, Escondido, CA 92029", hours: "8:00 AM - 6:00 PM", costs: "Free", icon: "fas fa-hiking", mood: "adventurous" },
        { name: "Craft Beer at Stone Brewing", description: "Taste beers at this famous brewery.", tags: ["indoor", "food"], preference: "both", category: "food", locationName: "Stone Brewing World Bistro & Gardens", address: "1999 Citracado Pkwy, Escondido, CA 92029", hours: "11:00 AM - 9:00 PM", costs: "$15-25 per person", icon: "fas fa-beer", mood: "relaxed" },
        { name: "Stargazing at Dixon Lake", description: "Gaze at stars by the lake shore.", tags: ["outdoor", "relaxing", "romantic"], preference: "both", category: "nature", locationName: "Dixon Lake", address: "1700 N La Honda Dr, Escondido, CA 92027", hours: "6:00 AM - 8:00 PM", costs: "$5 parking", icon: "fas fa-star", mood: "romantic" },
        { name: "Trivia Night at Plan 9 Alehouse", description: "Have fun with trivia and drinks.", tags: ["indoor", "entertainment"], preference: "both", category: "entertainment", locationName: "Plan 9 Alehouse", address: "155 E Grand Ave, Escondido, CA 92025", hours: "11:00 AM - 10:00 PM", costs: "$10-20 per person", icon: "fas fa-brain", mood: "playful" },
        { name: "Historic Tour at San Pasqual", description: "Walk through history together.", tags: ["outdoor", "cultural"], preference: "both", category: "nature", locationName: "San Pasqual Battlefield State Historic Park", address: "15808 San Pasqual Valley Rd, Escondido, CA 92027", hours: "10:00 AM - 5:00 PM (weekends)", costs: "Free", icon: "fas fa-landmark", mood: "relaxed" },

        // Escondido - Family Ideas
        { name: "Picnic at Grape Day Park", description: "Relax with playgrounds for kids.", tags: ["outdoor", "relaxing", "kid-friendly-only"], preference: "both", category: "family", locationName: "Grape Day Park", address: "321 N Broadway, Escondido, CA 92025", hours: "6:00 AM - 10:00 PM", costs: "Free", icon: "fas fa-picnic", mood: "playful" },
        { name: "Fishing at Lake Wohlford", description: "Fish as a family at this lake.", tags: ["outdoor", "relaxing", "kid-friendly-only"], preference: "both", category: "family", locationName: "Lake Wohlford", address: "25453 Lake Wohlford Rd, Escondido, CA 92027", hours: "6:00 AM - 7:00 PM", costs: "$5-10 per person", icon: "fas fa-fish", mood: "playful" },

        // San Marcos - Couple Ideas
        { name: "Kayaking at Lake San Marcos", description: "Paddle on a calm lake.", tags: ["outdoor", "active"], preference: "both", category: "adventure", locationName: "Lake San Marcos", address: "1025 La Bonita Dr, San Marcos, CA 92078", hours: "9:00 AM - 5:00 PM", costs: "$20-30 per person", icon: "fas fa-water", mood: "adventurous" },
        { name: "Dinner at Restaurant Row", description: "Eat at a cozy historic spot.", tags: ["indoor", "food", "romantic"], preference: "both", category: "food", locationName: "Old California Restaurant Row", address: "1020 San Marcos Blvd, San Marcos, CA 92078", hours: "11:00 AM - 10:00 PM", costs: "$20-40 per person", icon: "fas fa-utensils", mood: "romantic" },
        { name: "Sunset Hike at Double Peak", description: "Hike to a stunning sunset view.", tags: ["outdoor", "active", "hike"], preference: "both", category: "adventure", locationName: "Double Peak Park", address: "900 Double Peak Dr, San Marcos, CA 92078", hours: "Open 24 hours", costs: "Free", icon: "fas fa-hiking", mood: "romantic" },
        { name: "Trivia at Churchill’s Pub", description: "Enjoy trivia and drinks.", tags: ["indoor", "entertainment"], preference: "both", category: "entertainment", locationName: "Churchill’s Pub & Grille", address: "887 W San Marcos Blvd, San Marcos, CA 92078", hours: "11:00 AM - 11:00 PM", costs: "$10-20 per person", icon: "fas fa-brain", mood: "playful" },
        { name: "Yoga at Discovery Lake", description: "Do sunrise yoga by the lake.", tags: ["outdoor", "wellness"], preference: "both", category: "wellness", locationName: "Discovery Lake", address: "650 Discovery Lake Dr, San Marcos, CA 92078", hours: "Open 24 hours", costs: "$10-15 per person", icon: "fas fa-spa", mood: "relaxed" },
        { name: "Coffee at Decoy Dockside", description: "Sip coffee with lake views.", tags: ["indoor", "food"], preference: "both", category: "food", locationName: "Decoy Dockside", address: "1035 La Bonita Dr, San Marcos, CA 92078", hours: "8:00 AM - 9:00 PM", costs: "$10-15 per person", icon: "fas fa-coffee", mood: "relaxed" },

        // San Marcos - Family Ideas
        { name: "Fishing at Lake San Marcos", description: "Fish with the kids.", tags: ["outdoor", "relaxing", "kid-friendly-only"], preference: "both", category: "family", locationName: "Lake San Marcos", address: "1025 La Bonita Dr, San Marcos, CA 92078", hours: "6:00 AM - 8:00 PM", costs: "$5-10 per person", icon: "fas fa-fish", mood: "playful" },
        { name: "Play at Jack’s Pond Park", description: "Enjoy playgrounds and space.", tags: ["outdoor", "active", "kid-friendly-only"], preference: "both", category: "family", locationName: "Jack’s Pond Park", address: "1600 S Rancho Santa Fe Rd, San Marcos, CA 92078", hours: "6:00 AM - 10:00 PM", costs: "Free", icon: "fas fa-child", mood: "playful" },

        // Vista - Couple Ideas
        { name: "Moonlight Beach Stroll", description: "Walk along a quiet beach.", tags: ["outdoor", "relaxing", "romantic"], preference: "both", category: "relaxation", locationName: "Moonlight State Beach", address: "400 B St, Encinitas, CA 92024", hours: "Open 24 hours", costs: "Free", icon: "fas fa-moon", mood: "romantic" },
        { name: "Brewery Hop at Vista Village", description: "Taste local craft beers.", tags: ["indoor", "food"], preference: "both", category: "food", locationName: "Vista Village", address: "224 Main St, Vista, CA 92084", hours: "12:00 PM - 10:00 PM", costs: "$15-25 per person", icon: "fas fa-beer", mood: "relaxed" },
        { name: "Hike at Guajome Adobe", description: "Trek around a historic site.", tags: ["outdoor", "active", "hike"], preference: "both", category: "adventure", locationName: "Rancho Guajome Adobe", address: "2210 N Santa Fe Ave, Vista, CA 92083", hours: "8:00 AM - 4:00 PM", costs: "Free", icon: "fas fa-hiking", mood: "adventurous" },
        { name: "Music at Broadway Theater", description: "Catch a local show.", tags: ["indoor", "entertainment"], preference: "both", category: "entertainment", locationName: "Broadway Theater", address: "340 E Broadway, Vista, CA 92084", hours: "Varies (check schedule)", costs: "$20-30 per person", icon: "fas fa-music", mood: "romantic" },
        { name: "Picnic at Brengle Park", description: "Relax in a lush park.", tags: ["outdoor", "relaxing"], preference: "both", category: "relaxation", locationName: "Brengle Terrace Park", address: "1200 Vale Terrace Dr, Vista, CA 92084", hours: "6:00 AM - 10:00 PM", costs: "Free", icon: "fas fa-picnic", mood: "relaxed" },
        { name: "Coffee at Backfence", description: "Enjoy coffee at an artsy spot.", tags: ["indoor", "food"], preference: "both", category: "food", locationName: "Backfence Society", address: "110 S Citrus Ave, Vista, CA 92084", hours: "7:00 AM - 3:00 PM", costs: "$5-10 per person", icon: "fas fa-coffee", mood: "relaxed" },

        // Vista - Family Ideas
        { name: "Gardens at Alta Vista", description: "Explore kid-friendly trails.", tags: ["outdoor", "nature", "kid-friendly-only"], preference: "both", category: "family", locationName: "Alta Vista Botanical Gardens", address: "1270 Vale Terrace Dr, Vista, CA 92084", hours: "8:00 AM - 5:00 PM", costs: "$5 per person", icon: "fas fa-seedling", mood: "playful" },
        { name: "Farmers Market in Vista", description: "Shop fresh produce with kids.", tags: ["outdoor", "food", "kid-friendly-only"], preference: "both", category: "family", locationName: "Vista Farmers Market", address: "325 S Melrose Dr, Vista, CA 92081", hours: "8:00 AM - 1:00 PM (Sat)", costs: "Free", icon: "fas fa-shopping-basket", mood: "playful" },

        // Carlsbad - Couple Ideas
        { name: "Sunset at Carlsbad Beach", description: "Watch the sunset by the sea.", tags: ["outdoor", "relaxing", "romantic"], preference: "both", category: "relaxation", locationName: "Carlsbad State Beach", address: "2680 Carlsbad Blvd, Carlsbad, CA 92008", hours: "Open 24 hours", costs: "Free", icon: "fas fa-cloud-sun", mood: "romantic" },
        { name: "Paddleboarding at Agua Hedionda", description: "Paddle calm lagoon waters.", tags: ["outdoor", "active"], preference: "both", category: "adventure", locationName: "Agua Hedionda Lagoon", address: "1580 Cannon Rd, Carlsbad, CA 92008", hours: "9:00 AM - 5:00 PM", costs: "$40-50 per person", icon: "fas fa-water", mood: "adventurous" },
        { name: "Dinner at The Compass", description: "Enjoy a cozy meal together.", tags: ["indoor", "food", "romantic"], preference: "both", category: "food", locationName: "The Compass", address: "300 Carlsbad Village Dr, Carlsbad, CA 92008", hours: "11:00 AM - 9:00 PM", costs: "$30-50 per person", icon: "fas fa-utensils", mood: "romantic" },
        { name: "Flower Fields Walk", description: "Stroll through colorful fields.", tags: ["outdoor", "nature"], preference: "both", category: "nature", locationName: "The Flower Fields", address: "5704 Paseo Del Norte, Carlsbad, CA 92008", hours: "9:00 AM - 6:00 PM (Mar-May)", costs: "$20-25 per person", icon: "fas fa-seedling", mood: "relaxed" },
        { name: "Jazz at The Landings", description: "Listen to jazz with drinks.", tags: ["indoor", "entertainment"], preference: "both", category: "entertainment", locationName: "The Landings at Carlsbad", address: "2198 Palomar Airport Rd, Carlsbad, CA 92008", hours: "5:00 PM - 10:00 PM", costs: "$15-25 per person", icon: "fas fa-music", mood: "romantic" },
        { name: "Yoga at Ponto Beach", description: "Do yoga by the ocean.", tags: ["outdoor", "wellness"], preference: "both", category: "wellness", locationName: "South Ponto Beach", address: "3400 Carlsbad Blvd, Carlsbad, CA 92008", hours: "Open 24 hours", costs: "$10-15 per person", icon: "fas fa-spa", mood: "relaxed" },

        // Carlsbad - Family Ideas
        { name: "Beach Day at Tamarack", description: "Build sandcastles and swim.", tags: ["outdoor", "relaxing", "kid-friendly-only"], preference: "both", category: "family", locationName: "Tamarack State Beach", address: "1010 Tamarack Ave, Carlsbad, CA 92008", hours: "Open 24 hours", costs: "Free", icon: "fas fa-umbrella-beach", mood: "playful" },
        { name: "Strawberry Picking", description: "Pick berries with the kids.", tags: ["outdoor", "food", "kid-friendly-only"], preference: "both", category: "family", locationName: "Carlsbad Strawberry Company", address: "1050 Cannon Rd, Carlsbad, CA 92008", hours: "9:00 AM - 6:00 PM", costs: "$10-20 per person", icon: "fas fa-strawberry", mood: "playful" },

        // Oceanside - Couple Ideas
        { name: "Sunset Surf at Oceanside Pier", description: "Surf or watch the sunset.", tags: ["outdoor", "active"], preference: "both", category: "adventure", locationName: "Oceanside Pier", address: "300 The Strand N, Oceanside, CA 92054", hours: "Open 24 hours", costs: "Free", icon: "fas fa-water", mood: "adventurous" },
        { name: "Dinner at 333 Pacific", description: "Eat seafood with ocean views.", tags: ["indoor", "food", "romantic"], preference: "both", category: "food", locationName: "333 Pacific", address: "333 N Pacific St, Oceanside, CA 92054", hours: "4:00 PM - 10:00 PM", costs: "$40-60 per person", icon: "fas fa-utensils", mood: "romantic" },
        { name: "Harbor Kayak Tour", description: "Kayak through the harbor.", tags: ["outdoor", "active"], preference: "both", category: "adventure", locationName: "Oceanside Harbor", address: "1540 Harbor Dr N, Oceanside, CA 92054", hours: "9:00 AM - 5:00 PM", costs: "$50-60 per person", icon: "fas fa-water", mood: "adventurous" },
        { name: "Art Walk at Artist Alley", description: "Check out local art.", tags: ["outdoor", "cultural"], preference: "both", category: "entertainment", locationName: "Artist Alley", address: "300 N Coast Hwy, Oceanside, CA 92054", hours: "6:00 PM - 9:00 PM (1st Fri)", costs: "Free", icon: "fas fa-paint-brush", mood: "relaxed" },
        { name: "Bonfire at Harbor Beach", description: "Cozy up by a beach fire.", tags: ["outdoor", "relaxing", "romantic"], preference: "both", category: "relaxation", locationName: "Oceanside Harbor Beach", address: "1540 Harbor Dr N, Oceanside, CA 92054", hours: "Open 24 hours", costs: "Free", icon: "fas fa-fire", mood: "romantic" },
        { name: "Meditation at Buccaneer", description: "Meditate at sunrise.", tags: ["outdoor", "wellness"], preference: "both", category: "wellness", locationName: "Buccaneer Beach", address: "1506 S Pacific St, Oceanside, CA 92054", hours: "Open 24 hours", costs: "Free", icon: "fas fa-sun", mood: "relaxed" },

        // Oceanside - Family Ideas
        { name: "Pier Fishing in Oceanside", description: "Fish off the pier with kids.", tags: ["outdoor", "relaxing", "kid-friendly-only"], preference: "both", category: "family", locationName: "Oceanside Pier", address: "300 The Strand N, Oceanside, CA 92054", hours: "Open 24 hours", costs: "Free", icon: "fas fa-fish", mood: "playful" },
        { name: "Bike Ride at Guajome", description: "Cycle trails as a family.", tags: ["outdoor", "active", "kid-friendly-only"], preference: "both", category: "family", locationName: "Guajome Regional Park", address: "3000 Guajome Lake Rd, Oceanside, CA 92057", hours: "6:00 AM - 7:00 PM", costs: "$3 parking", icon: "fas fa-bicycle", mood: "playful" }
    ];

    // Load current ideas and theme from local storage
    let currentIdeas = JSON.parse(localStorage.getItem('currentIdeas')) || [];

    // Save data to local storage
    const saveData = () => {
        localStorage.setItem('currentIdeas', JSON.stringify(currentIdeas));
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    };

    // Get random date ideas with filters
    const getRandomDateIdeas = (kidFriendly, coupleOnly, typeFilters, categoryFilters, budgetFilter, moodFilter) => {
        let filteredIdeas = dateIdeas.slice(); // Clone array
        
        if (kidFriendly && coupleOnly) {
            filteredIdeas = filteredIdeas.filter(idea => 
                (idea.tags.includes('kid-friendly') || idea.tags.includes('kid-friendly-only')) && 
                idea.tags.includes('couple-only')
            );
        } else if (kidFriendly) {
            filteredIdeas = filteredIdeas.filter(idea => 
                idea.tags.includes('kid-friendly') || idea.tags.includes('kid-friendly-only')
            );
        } else if (coupleOnly) {
            filteredIdeas = filteredIdeas.filter(idea => 
                idea.tags.includes('couple-only') && 
                !idea.tags.includes('kid-friendly-only')
            );
        } else {
            filteredIdeas = filteredIdeas.filter(idea => 
                !idea.tags.includes('kid-friendly-only')
            );
        }

        if (typeFilters.length > 0) {
            filteredIdeas = filteredIdeas.filter(idea => 
                typeFilters.some(filter => idea.tags.includes(filter))
            );
        }

        if (categoryFilters.length > 0) {
            filteredIdeas = filteredIdeas.filter(idea => 
                categoryFilters.includes(idea.category)
            );
        }

        if (budgetFilter !== "all") {
            filteredIdeas = filteredIdeas.filter(idea => {
                if (idea.costs === "Free") return budgetFilter === "0-20";
                const costRange = idea.costs.match(/\$(\d+)-?\$?(\d+)?/);
                if (!costRange) return false;
                const minCost = parseInt(costRange[1]);
                const maxCost = costRange[2] ? parseInt(costRange[2]) : minCost;
                if (budgetFilter === "0-20") return maxCost <= 20;
                if (budgetFilter === "20-50") return maxCost > 20 && maxCost <= 50;
                if (budgetFilter === "50+") return maxCost > 50;
                return false;
            });
        }

        if (moodFilter !== "all") {
            filteredIdeas = filteredIdeas.filter(idea => idea.mood === moodFilter);
        }

        if (filteredIdeas.length === 0) return [];
        const shuffled = filteredIdeas.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    };

    // Display date ideas
    const displayDateIdeas = (ideas = []) => {
        const kidFriendly = document.getElementById('kid-friendly-toggle').checked;
        const coupleOnly = document.getElementById('couple-only-toggle').checked;
        const typeFilters = Array.from(document.querySelectorAll('.type-filters input[name="type"]:checked')).map(input => input.value);
        const categoryFilters = Array.from(document.querySelectorAll('.category-filters input[name="category"]:checked')).map(input => input.value);
        const budgetFilter = document.getElementById('budget-filter').value;
        const moodFilter = document.getElementById('mood-filter').value;

        const title = document.getElementById('date-ideas-title');
        title.textContent = kidFriendly ? "For the Family" : "For Both";

        const selectedIdeas = ideas.length ? ideas : getRandomDateIdeas(kidFriendly, coupleOnly, typeFilters, categoryFilters, budgetFilter, moodFilter);
        currentIdeas = selectedIdeas;
        saveData();

        const displayIdea = (id, idea) => {
            const card = document.getElementById(id);
            if (idea) {
                document.getElementById(`${id}-icon`).innerHTML = `<i class="${idea.icon}"></i>`;
                document.getElementById(`${id}-location-name`).textContent = `Location: ${idea.locationName}`;
                document.getElementById(`${id}-address`).textContent = `Address: ${idea.address}`;
                document.getElementById(`${id}-hours`).textContent = `Hours: ${idea.hours}`;
                document.getElementById(`${id}-costs`).textContent = `Cost: ${idea.costs}`;
                document.getElementById(`${id}-description`).textContent = idea.description;
            } else {
                document.getElementById(`${id}-icon`).innerHTML = "";
                document.getElementById(`${id}-location-name`).textContent = "";
                document.getElementById(`${id}-address`).textContent = "";
                document.getElementById(`${id}-hours`).textContent = "";
                document.getElementById(`${id}-costs`).textContent = "";
                document.getElementById(`${id}-description`).textContent = `No ${id.replace('idea', 'Idea ')} matches your filters. Try again!`;
            }
        };

        displayIdea('idea1', selectedIdeas[0] || null);
        displayIdea('idea2', selectedIdeas[1] || null);
        displayIdea('idea3', selectedIdeas[2] || null);

        document.getElementById('date-ideas-container').style.opacity = 0;
        setTimeout(() => {
            document.getElementById('date-ideas-container').style.opacity = 1;
        }, 10);
    };

    // Surprise Me function
    const surpriseMe = () => {
        const kidFriendly = document.getElementById('kid-friendly-toggle').checked;
        const coupleOnly = document.getElementById('couple-only-toggle').checked;
        const typeFilters = Array.from(document.querySelectorAll('.type-filters input[name="type"]:checked')).map(input => input.value);
        const categoryFilters = Array.from(document.querySelectorAll('.category-filters input[name="category"]:checked')).map(input => input.value);
        const budgetFilter = document.getElementById('budget-filter').value;
        const moodFilter = document.getElementById('mood-filter').value;
        const ideas = getRandomDateIdeas(kidFriendly, coupleOnly, typeFilters, categoryFilters, budgetFilter, moodFilter);
        displayDateIdeas(ideas);
    };

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        saveData();
    });

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Quick filters
    const quickFilters = {
        'quick-kid-friendly': 'kid-friendly-toggle',
        'quick-outdoor': null,
        'quick-free': null,
        'quick-couple': 'couple-only-toggle'
    };

    Object.keys(quickFilters).forEach(id => {
        const btn = document.getElementById(id);
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            const toggleId = quickFilters[id];
            if (toggleId) {
                const toggle = document.getElementById(toggleId);
                toggle.checked = btn.classList.contains('active');
            }
            const kidFriendly = document.getElementById('kid-friendly-toggle').checked;
            const coupleOnly = document.getElementById('couple-only-toggle').checked;
            const typeFilters = Array.from(document.querySelectorAll('.type-filters input[name="type"]:checked')).map(input => input.value);
            const categoryFilters = Array.from(document.querySelectorAll('.category-filters input[name="category"]:checked')).map(input => input.value);
            const budgetFilter = document.getElementById('budget-filter').value;
            const moodFilter = document.getElementById('mood-filter').value;
            let filteredIdeas = getRandomDateIdeas(kidFriendly, coupleOnly, typeFilters, categoryFilters, budgetFilter, moodFilter);
            if (id === 'quick-outdoor') {
                filteredIdeas = filteredIdeas.filter(idea => idea && idea.tags.includes('outdoor'));
            } else if (id === 'quick-free') {
                filteredIdeas = filteredIdeas.filter(idea => idea && idea.costs === "Free");
            }
            displayDateIdeas(filteredIdeas);
        });
    });

    // Tutorial
    if (!localStorage.getItem('tutorialShown')) {
        document.getElementById('tutorial').classList.remove('hidden');
        localStorage.setItem('tutorialShown', 'true');
    }
    document.getElementById('close-tutorial').addEventListener('click', () => {
        document.getElementById('tutorial').classList.add('hidden');
    });

    // Event listeners
    document.getElementById('generate-btn').addEventListener('click', () => displayDateIdeas());
    document.getElementById('surprise-btn').addEventListener('click', surpriseMe);

    document.querySelectorAll('.directions-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.dataset.section;
            const idea = dateIdeas.find(idea => idea.description === document.getElementById(`${section}-description`).textContent);
            if (idea) {
                window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(idea.address)}`, '_blank');
            }
        });
    });

    // Offline mode check
    if (!navigator.onLine) {
        console.log("Offline mode: Using cached ideas.");
    }

    // Initial setup with persisted ideas
    displayDateIdeas(currentIdeas.length ? currentIdeas : []);
});