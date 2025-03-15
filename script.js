document.addEventListener('DOMContentLoaded', () => {
    // Expanded date ideas list for Escondido, San Marcos, Vista, Carlsbad, and Oceanside
    const defaultDateIdeas = [
        // Escondido - Couple Ideas
        { name: "Sunset Picnic at Kit Carson Park", description: "Enjoy a picnic with sunset views at this scenic park.", tags: ["outdoor", "relaxing", "romantic"], preference: "both", category: "relaxation", locationName: "Kit Carson Park", address: "3333 Bear Valley Pkwy, Escondido, CA 92025", hours: "6:00 AM - 10:00 PM", costs: "Free", lat: 33.1045, lon: -117.0568, icon: "fas fa-picnic", mood: "romantic" },
        { name: "Wine Tasting at Orfila Vineyards", description: "Sample local wines at this picturesque vineyard.", tags: ["indoor", "food", "romantic"], preference: "both", category: "food", locationName: "Orfila Vineyards", address: "13455 San Pasqual Rd, Escondido, CA 92025", hours: "11:00 AM - 7:00 PM", costs: "$20-30 per person", lat: 33.0825, lon: -117.0188, icon: "fas fa-wine-glass", mood: "romantic" },
        { name: "Hike at Elfin Forest", description: "Explore a challenging trail with panoramic views.", tags: ["outdoor", "active", "hike"], preference: "both", category: "adventure", locationName: "Elfin Forest Recreational Reserve", address: "8833 Harmony Grove Rd, Escondido, CA 92029", hours: "8:00 AM - 6:00 PM", costs: "Free", lat: 33.0869, lon: -117.1468, icon: "fas fa-hiking", mood: "adventurous" },
        { name: "Craft Beer at Stone Brewing", description: "Taste award-winning beers at this iconic brewery.", tags: ["indoor", "food"], preference: "both", category: "food", locationName: "Stone Brewing World Bistro & Gardens", address: "1999 Citracado Pkwy, Escondido, CA 92029", hours: "11:00 AM - 9:00 PM", costs: "$15-25 per person", lat: 33.1125, lon: -117.1123, icon: "fas fa-beer", mood: "relaxed" },
        { name: "Stargazing at Dixon Lake", description: "Bring a blanket and gaze at the stars by the lake.", tags: ["outdoor", "relaxing", "romantic"], preference: "both", category: "nature", locationName: "Dixon Lake", address: "1700 N La Honda Dr, Escondido, CA 92027", hours: "6:00 AM - 8:00 PM", costs: "$5 parking", lat: 33.1604, lon: -117.0451, icon: "fas fa-star", mood: "romantic" },
        { name: "Trivia Night at Plan 9 Alehouse", description: "Test your knowledge over craft beers.", tags: ["indoor", "entertainment"], preference: "both", category: "entertainment", locationName: "Plan 9 Alehouse", address: "155 E Grand Ave, Escondido, CA 92025", hours: "11:00 AM - 10:00 PM", costs: "$10-20 per person", lat: 33.1218, lon: -117.0795, icon: "fas fa-brain", mood: "playful" },
        { name: "Historic Tour at San Pasqual Battlefield", description: "Explore history with a scenic walk.", tags: ["outdoor", "cultural"], preference: "both", category: "nature", locationName: "San Pasqual Battlefield State Historic Park", address: "15808 San Pasqual Valley Rd, Escondido, CA 92027", hours: "10:00 AM - 5:00 PM (weekends)", costs: "Free", lat: 33.0925, lon: -116.9970, icon: "fas fa-landmark", mood: "relaxed" },

        // Escondido - Family Ideas
        { name: "Safari Park Adventure", description: "Explore wildlife with the family at this expansive park.", tags: ["outdoor", "entertainment", "kid-friendly-only"], preference: "both", category: "family", locationName: "San Diego Zoo Safari Park", address: "15500 San Pasqual Valley Rd, Escondido, CA 92027", hours: "9:00 AM - 5:00 PM", costs: "$60 per adult, $50 per child", lat: 33.0959, lon: -116.9972, icon: "fas fa-paw", mood: "playful" },
        { name: "Picnic at Grape Day Park", description: "Enjoy a family picnic with playgrounds nearby.", tags: ["outdoor", "relaxing", "kid-friendly-only"], preference: "both", category: "family", locationName: "Grape Day Park", address: "321 N Broadway, Escondido, CA 92025", hours: "6:00 AM - 10:00 PM", costs: "Free", lat: 33.1247, lon: -117.0819, icon: "fas fa-picnic", mood: "playful" },
        { name: "Skate Night at Escondido Sports Center", description: "Roller skate under disco lights with the kids.", tags: ["indoor", "entertainment", "kid-friendly-only"], preference: "both", category: "family", locationName: "Escondido Sports Center", address: "3315 Bear Valley Pkwy, Escondido, CA 92025", hours: "6:00 PM - 9:00 PM (Fri)", costs: "$10-15 per person", lat: 33.1040, lon: -117.0560, icon: "fas fa-skating", mood: "playful" },
        { name: "Fishing at Lake Wohlford", description: "Fish with the family at this tranquil lake.", tags: ["outdoor", "relaxing", "kid-friendly-only"], preference: "both", category: "family", locationName: "Lake Wohlford", address: "25453 Lake Wohlford Rd, Escondido, CA 92027", hours: "6:00 AM - 7:00 PM", costs: "$5-10 per person", lat: 33.1715, lon: -117.0135, icon: "fas fa-fish", mood: "playful" },
        { name: "Kids’ Art Workshop at California Center", description: "Create art projects together.", tags: ["indoor", "cultural", "kid-friendly-only"], preference: "both", category: "family", locationName: "California Center for the Arts", address: "340 N Escondido Blvd, Escondido, CA 92025", hours: "10:00 AM - 4:00 PM (varies)", costs: "$10-15 per child", lat: 33.1230, lon: -117.0810, icon: "fas fa-paint-brush", mood: "playful" },

        // San Marcos - Couple Ideas
        { name: "Kayaking at Lake San Marcos", description: "Paddle together on this serene lake.", tags: ["outdoor", "active"], preference: "both", category: "adventure", locationName: "Lake San Marcos", address: "1025 La Bonita Dr, San Marcos, CA 92078", hours: "9:00 AM - 5:00 PM", costs: "$20-30 per person", lat: 33.1267, lon: -117.1985, icon: "fas fa-water", mood: "adventurous" },
        { name: "Dinner at Old California Restaurant Row", description: "Dine at a cozy spot in this historic dining area.", tags: ["indoor", "food", "romantic"], preference: "both", category: "food", locationName: "Old California Restaurant Row", address: "1020 San Marcos Blvd, San Marcos, CA 92078", hours: "11:00 AM - 10:00 PM", costs: "$20-40 per person", lat: 33.1355, lon: -117.1925, icon: "fas fa-utensils", mood: "romantic" },
        { name: "Sunset Hike at Double Peak", description: "Hike to a stunning viewpoint for sunset.", tags: ["outdoor", "active", "hike"], preference: "both", category: "adventure", locationName: "Double Peak Park", address: "900 Double Peak Dr, San Marcos, CA 92078", hours: "Open 24 hours", costs: "Free", lat: 33.1172, lon: -117.1795, icon: "fas fa-hiking", mood: "romantic" },
        { name: "Trivia Night at Churchill’s Pub", description: "Test your knowledge over drinks.", tags: ["indoor", "entertainment"], preference: "both", category: "entertainment", locationName: "Churchill’s Pub & Grille", address: "887 W San Marcos Blvd, San Marcos, CA 92078", hours: "11:00 AM - 11:00 PM", costs: "$10-20 per person", lat: 33.1358, lon: -117.1905, icon: "fas fa-brain", mood: "playful" },
        { name: "Yoga at Discovery Lake", description: "Join a sunrise yoga session by the lake.", tags: ["outdoor", "wellness"], preference: "both", category: "wellness", locationName: "Discovery Lake", address: "650 Discovery Lake Dr, San Marcos, CA 92078", hours: "Open 24 hours", costs: "$10-15 per person", lat: 33.1327, lon: -117.1910, icon: "fas fa-spa", mood: "relaxed" },
        { name: "Hot Air Balloon Ride", description: "Soar above San Marcos for a thrilling date.", tags: ["outdoor", "adventure", "romantic"], preference: "both", category: "adventure", locationName: "Sky’s the Limit Ballooning", address: "1051 W San Marcos Blvd, San Marcos, CA 92078", hours: "6:00 AM - 8:00 PM", costs: "$150-200 per person", lat: 33.1350, lon: -117.1860, icon: "fas fa-hot-air-balloon", mood: "adventurous" },
        { name: "Coffee Date at Decoy Dockside", description: "Sip coffee with lake views.", tags: ["indoor", "food"], preference: "both", category: "food", locationName: "Decoy Dockside", address: "1035 La Bonita Dr, San Marcos, CA 92078", hours: "8:00 AM - 9:00 PM", costs: "$10-15 per person", lat: 33.1260, lon: -117.1980, icon: "fas fa-coffee", mood: "relaxed" },

        // San Marcos - Family Ideas
        { name: "Fishing at Lake San Marcos", description: "Fish with the family at this peaceful lake.", tags: ["outdoor", "relaxing", "kid-friendly-only"], preference: "both", category: "family", locationName: "Lake San Marcos", address: "1025 La Bonita Dr, San Marcos, CA 92078", hours: "6:00 AM - 8:00 PM", costs: "$5-10 per person", lat: 33.1267, lon: -117.1985, icon: "fas fa-fish", mood: "playful" },
        { name: "Playtime at Jack’s Pond Park", description: "Enjoy playgrounds and open spaces.", tags: ["outdoor", "active", "kid-friendly-only"], preference: "both", category: "family", locationName: "Jack’s Pond Park", address: "1600 S Rancho Santa Fe Rd, San Marcos, CA 92078", hours: "6:00 AM - 10:00 PM", costs: "Free", lat: 33.1235, lon: -117.2098, icon: "fas fa-child", mood: "playful" },
        { name: "Science Day at CSUSM", description: "Explore interactive science exhibits on campus.", tags: ["indoor", "educational", "kid-friendly-only"], preference: "both", category: "educational", locationName: "Cal State San Marcos", address: "333 S Twin Oaks Valley Rd, San Marcos, CA 92096", hours: "Varies (check events)", costs: "Free-$10", lat: 33.1298, lon: -117.1595, icon: "fas fa-flask", mood: "playful" },
        { name: "Mini Golf at Boomers", description: "Play a round of mini golf with the kids.", tags: ["outdoor", "entertainment", "kid-friendly-only"], preference: "both", category: "family", locationName: "Boomers Vista", address: "1525 W Vista Way, Vista, CA 92083", hours: "11:00 AM - 9:00 PM", costs: "$10-15 per person", lat: 33.1819, lon: -117.2788, icon: "fas fa-golf-ball", mood: "playful" },
        { name: "Farm Visit at Hollandia Dairy", description: "Tour a local dairy farm with the family.", tags: ["outdoor", "educational", "kid-friendly-only"], preference: "both", category: "family", locationName: "Hollandia Dairy", address: "6221 Mission Rd, San Marcos, CA 92069", hours: "9:00 AM - 5:00 PM", costs: "$5-10 per person", lat: 33.1420, lon: -117.1560, icon: "fas fa-cow", mood: "playful" },

        // Vista - Couple Ideas
        { name: "Moonlight Beach Stroll", description: "Walk hand-in-hand along this quiet beach.", tags: ["outdoor", "relaxing", "romantic"], preference: "both", category: "relaxation", locationName: "Moonlight State Beach", address: "400 B St, Encinitas, CA 92024", hours: "Open 24 hours", costs: "Free", lat: 33.0478, lon: -117.2975, icon: "fas fa-moon", mood: "romantic" },
        { name: "Brewery Hopping at Vista Village", description: "Sample craft beers at local breweries.", tags: ["indoor", "food"], preference: "both", category: "food", locationName: "Vista Village", address: "224 Main St, Vista, CA 92084", hours: "12:00 PM - 10:00 PM", costs: "$15-25 per person", lat: 33.2025, lon: -117.2438, icon: "fas fa-beer", mood: "relaxed" },
        { name: "Hike at Rancho Guajome Adobe", description: "Explore trails around this historic site.", tags: ["outdoor", "active", "hike"], preference: "both", category: "adventure", locationName: "Rancho Guajome Adobe", address: "2210 N Santa Fe Ave, Vista, CA 92083", hours: "8:00 AM - 4:00 PM", costs: "Free", lat: 33.2326, lon: -117.2568, icon: "fas fa-hiking", mood: "adventurous" },
        { name: "Live Music at Vista’s Broadway Theater", description: "Catch a local show in an intimate venue.", tags: ["indoor", "entertainment"], preference: "both", category: "entertainment", locationName: "Broadway Theater", address: "340 E Broadway, Vista, CA 92084", hours: "Varies (check schedule)", costs: "$20-30 per person", lat: 33.2018, lon: -117.2405, icon: "fas fa-music", mood: "romantic" },
        { name: "Picnic at Brengle Terrace Park", description: "Relax with a picnic in this lush park.", tags: ["outdoor", "relaxing"], preference: "both", category: "relaxation", locationName: "Brengle Terrace Park", address: "1200 Vale Terrace Dr, Vista, CA 92084", hours: "6:00 AM - 10:00 PM", costs: "Free", lat: 33.2055, lon: -117.2388, icon: "fas fa-picnic", mood: "relaxed" },
        { name: "Archery at Vista Range", description: "Try your hand at archery together.", tags: ["outdoor", "active"], preference: "both", category: "adventure", locationName: "Vista Archery Range", address: "2060 W Vista Way, Vista, CA 92083", hours: "9:00 AM - 5:00 PM", costs: "$20-30 per person", lat: 33.1830, lon: -117.2810, icon: "fas fa-bullseye", mood: "adventurous" },
        { name: "Sunrise Coffee at Backfence Society", description: "Enjoy coffee at this artsy co-op.", tags: ["indoor", "food"], preference: "both", category: "food", locationName: "Backfence Society", address: "110 S Citrus Ave, Vista, CA 92084", hours: "7:00 AM - 3:00 PM", costs: "$5-10 per person", lat: 33.2020, lon: -117.2440, icon: "fas fa-coffee", mood: "relaxed" },

        // Vista - Family Ideas
        { name: "Alta Vista Botanical Gardens", description: "Discover kid-friendly gardens and trails.", tags: ["outdoor", "nature", "kid-friendly-only"], preference: "both", category: "family", locationName: "Alta Vista Botanical Gardens", address: "1270 Vale Terrace Dr, Vista, CA 92084", hours: "8:00 AM - 5:00 PM", costs: "$5 per person", lat: 33.2065, lon: -117.2380, icon: "fas fa-seedling", mood: "playful" },
        { name: "Wave Waterpark Day", description: "Cool off with slides and pools.", tags: ["outdoor", "entertainment", "kid-friendly-only"], preference: "both", category: "family", locationName: "The Wave Waterpark", address: "101 Wave Dr, Vista, CA 92083", hours: "10:00 AM - 6:00 PM (seasonal)", costs: "$20-25 per person", lat: 33.1985, lon: -117.2490, icon: "fas fa-water", mood: "playful" },
        { name: "Vista Farmers Market", description: "Explore fresh produce and crafts with kids.", tags: ["outdoor", "food", "kid-friendly-only"], preference: "both", category: "family", locationName: "Vista Farmers Market", address: "325 S Melrose Dr, Vista, CA 92081", hours: "8:00 AM - 1:00 PM (Sat)", costs: "Free", lat: 33.1925, lon: -117.2475, icon: "fas fa-shopping-basket", mood: "playful" },
        { name: "Nature Day at Buena Vista Park", description: "Play and explore nature trails.", tags: ["outdoor", "active", "kid-friendly-only"], preference: "both", category: "family", locationName: "Buena Vista Park", address: "1601 Shadowridge Dr, Vista, CA 92081", hours: "6:00 AM - 10:00 PM", costs: "Free", lat: 33.1670, lon: -117.2510, icon: "fas fa-tree", mood: "playful" },
        { name: "Kids’ Movie at Cinepolis", description: "Catch a family-friendly film.", tags: ["indoor", "entertainment", "kid-friendly-only"], preference: "both", category: "family", locationName: "Cinepolis Luxury Cinemas", address: "25 Main St, Vista, CA 92083", hours: "12:00 PM - 10:00 PM", costs: "$10-15 per person", lat: 33.2020, lon: -117.2450, icon: "fas fa-film", mood: "playful" },

        // Carlsbad - Couple Ideas
        { name: "Sunset at Carlsbad State Beach", description: "Watch the sunset from this beautiful beach.", tags: ["outdoor", "relaxing", "romantic"], preference: "both", category: "relaxation", locationName: "Carlsbad State Beach", address: "2680 Carlsbad Blvd, Carlsbad, CA 92008", hours: "Open 24 hours", costs: "Free", lat: 33.1498, lon: -117.3418, icon: "fas fa-cloud-sun", mood: "romantic" },
        { name: "Paddleboarding at Agua Hedionda Lagoon", description: "Paddle through calm waters together.", tags: ["outdoor", "active"], preference: "both", category: "adventure", locationName: "Agua Hedionda Lagoon", address: "1580 Cannon Rd, Carlsbad, CA 92008", hours: "9:00 AM - 5:00 PM", costs: "$40-50 per person", lat: 33.1384, lon: -117.3113, icon: "fas fa-water", mood: "adventurous" },
        { name: "Dinner at The Compass", description: "Savor a romantic meal with local flavors.", tags: ["indoor", "food", "romantic"], preference: "both", category: "food", locationName: "The Compass", address: "300 Carlsbad Village Dr, Carlsbad, CA 92008", hours: "11:00 AM - 9:00 PM", costs: "$30-50 per person", lat: 33.1590, lon: -117.3505, icon: "fas fa-utensils", mood: "romantic" },
        { name: "Flower Fields Walk", description: "Stroll through vibrant flower fields (seasonal).", tags: ["outdoor", "nature"], preference: "both", category: "nature", locationName: "The Flower Fields", address: "5704 Paseo Del Norte, Carlsbad, CA 92008", hours: "9:00 AM - 6:00 PM (Mar-May)", costs: "$20-25 per person", lat: 33.1177, lon: -117.3116, icon: "fas fa-seedling", mood: "relaxed" },
        { name: "Jazz Night at The Landings", description: "Listen to live jazz over drinks.", tags: ["indoor", "entertainment"], preference: "both", category: "entertainment", locationName: "The Landings at Carlsbad", address: "2198 Palomar Airport Rd, Carlsbad, CA 92008", hours: "5:00 PM - 10:00 PM", costs: "$15-25 per person", lat: 33.1230, lon: -117.2790, icon: "fas fa-music", mood: "romantic" },
        { name: "Cold Plunge at Float Spa", description: "Refresh with a cold plunge therapy session.", tags: ["indoor", "wellness"], preference: "both", category: "wellness", locationName: "Float Spa Carlsbad", address: "2780 State St, Carlsbad, CA 92008", hours: "10:00 AM - 8:00 PM", costs: "$40-60 per person", lat: 33.1610, lon: -117.3490, icon: "fas fa-tint", mood: "relaxed" },
        { name: "Sunrise Yoga at Ponto Beach", description: "Start the day with yoga by the ocean.", tags: ["outdoor", "wellness"], preference: "both", category: "wellness", locationName: "South Ponto Beach", address: "3400 Carlsbad Blvd, Carlsbad, CA 92008", hours: "Open 24 hours", costs: "$10-15 per person", lat: 33.1070, lon: -117.3180, icon: "fas fa-spa", mood: "relaxed" },

        // Carlsbad - Family Ideas
        { name: "LEGOLAND Exploration", description: "Build and play at this kid-friendly theme park.", tags: ["outdoor", "entertainment", "kid-friendly-only"], preference: "both", category: "family", locationName: "LEGOLAND California", address: "1 Legoland Dr, Carlsbad, CA 92008", hours: "10:00 AM - 6:00 PM", costs: "$80-100 per person", lat: 33.1260, lon: -117.3120, icon: "fas fa-cubes", mood: "playful" },
        { name: "South Carlsbad State Beach Camping", description: "Camp with the family by the ocean.", tags: ["outdoor", "relaxing", "kid-friendly-only"], preference: "both", category: "family", locationName: "South Carlsbad State Beach", address: "7201 Carlsbad Blvd, Carlsbad, CA 92008", hours: "Open 24 hours", costs: "$35-50 per night", lat: 33.1025, lon: -117.3185, icon: "fas fa-tent", mood: "playful" },
        { name: "K1 Speed Go-Karting", description: "Race electric go-karts with the kids.", tags: ["indoor", "entertainment", "kid-friendly-only"], preference: "both", category: "family", locationName: "K1 Speed Carlsbad", address: "6212 Corte Del Abeto, Carlsbad, CA 92011", hours: "11:00 AM - 10:00 PM", costs: "$25-35 per person", lat: 33.1215, lon: -117.3190, icon: "fas fa-car", mood: "playful" },
        { name: "Carlsbad Strawberry Company", description: "Pick strawberries with the family.", tags: ["outdoor", "food", "kid-friendly-only"], preference: "both", category: "family", locationName: "Carlsbad Strawberry Company", address: "1050 Cannon Rd, Carlsbad, CA 92008", hours: "9:00 AM - 6:00 PM", costs: "$10-20 per person", lat: 33.1320, lon: -117.3150, icon: "fas fa-strawberry", mood: "playful" },
        { name: "Kids’ Beach Day at Tamarack", description: "Build sandcastles and swim.", tags: ["outdoor", "relaxing", "kid-friendly-only"], preference: "both", category: "family", locationName: "Tamarack State Beach", address: "1010 Tamarack Ave, Carlsbad, CA 92008", hours: "Open 24 hours", costs: "Free", lat: 33.1510, lon: -117.3420, icon: "fas fa-umbrella-beach", mood: "playful" },

        // Oceanside - Couple Ideas
        { name: "Sunset Surf at Oceanside Pier", description: "Catch waves or watch the sunset from the pier.", tags: ["outdoor", "active"], preference: "both", category: "adventure", locationName: "Oceanside Pier", address: "300 The Strand N, Oceanside, CA 92054", hours: "Open 24 hours", costs: "Free", lat: 33.1925, lon: -117.3825, icon: "fas fa-water", mood: "adventurous" },
        { name: "Dinner at 333 Pacific", description: "Savor seafood with ocean views.", tags: ["indoor", "food", "romantic"], preference: "both", category: "food", locationName: "333 Pacific", address: "333 N Pacific St, Oceanside, CA 92054", hours: "4:00 PM - 10:00 PM", costs: "$40-60 per person", lat: 33.1955, lon: -117.3820, icon: "fas fa-utensils", mood: "romantic" },
        { name: "Harbor Kayak Tour", description: "Paddle through Oceanside Harbor.", tags: ["outdoor", "active"], preference: "both", category: "adventure", locationName: "Oceanside Harbor", address: "1540 Harbor Dr N, Oceanside, CA 92054", hours: "9:00 AM - 5:00 PM", costs: "$50-60 per person", lat: 33.2050, lon: -117.3915, icon: "fas fa-water", mood: "adventurous" },
        { name: "Art Walk at Artist Alley", description: "Explore local art in a cozy setting.", tags: ["outdoor", "cultural"], preference: "both", category: "entertainment", locationName: "Artist Alley", address: "300 N Coast Hwy, Oceanside, CA 92054", hours: "6:00 PM - 9:00 PM (1st Fri)", costs: "Free", lat: 33.1965, lon: -117.3795, icon: "fas fa-paint-brush", mood: "relaxed" },
        { name: "Beach Bonfire at Harbor Beach", description: "Cozy up with a bonfire by the sea.", tags: ["outdoor", "relaxing", "romantic"], preference: "both", category: "relaxation", locationName: "Oceanside Harbor Beach", address: "1540 Harbor Dr N, Oceanside, CA 92054", hours: "Open 24 hours", costs: "Free", lat: 33.2050, lon: -117.3915, icon: "fas fa-fire", mood: "romantic" },
        { name: "Sunrise Meditation at Buccaneer Beach", description: "Meditate as the sun rises over the ocean.", tags: ["outdoor", "wellness"], preference: "both", category: "wellness", locationName: "Buccaneer Beach", address: "1506 S Pacific St, Oceanside, CA 92054", hours: "Open 24 hours", costs: "Free", lat: 33.1810, lon: -117.3700, icon: "fas fa-sun", mood: "relaxed" },
        { name: "Taco Night at Local Tap House", description: "Enjoy tacos and craft beer.", tags: ["indoor", "food"], preference: "both", category: "food", locationName: "Local Tap House", address: "308 S Coast Hwy, Oceanside, CA 92054", hours: "11:00 AM - 10:00 PM", costs: "$15-25 per person", lat: 33.1935, lon: -117.3780, icon: "fas fa-taco", mood: "playful" },

        // Oceanside - Family Ideas
        { name: "Oceanside Pier Fishing", description: "Fish off the pier with the family.", tags: ["outdoor", "relaxing", "kid-friendly-only"], preference: "both", category: "family", locationName: "Oceanside Pier", address: "300 The Strand N, Oceanside, CA 92054", hours: "Open 24 hours", costs: "Free", lat: 33.1925, lon: -117.3825, icon: "fas fa-fish", mood: "playful" },
        { name: "Heritage Park Exploration", description: "Discover history with kid-friendly exhibits.", tags: ["outdoor", "educational", "kid-friendly-only"], preference: "both", category: "family", locationName: "Heritage Park", address: "220 Peyri Dr, Oceanside, CA 92057", hours: "9:00 AM - 4:00 PM", costs: "Free", lat: 33.2345, lon: -117.3080, icon: "fas fa-book", mood: "playful" },
        { name: "Bike Ride at Guajome Park", description: "Cycle through trails with the kids.", tags: ["outdoor", "active", "kid-friendly-only"], preference: "both", category: "family", locationName: "Guajome Regional Park", address: "3000 Guajome Lake Rd, Oceanside, CA 92057", hours: "6:00 AM - 7:00 PM", costs: "$3 parking", lat: 33.2450, lon: -117.2705, icon: "fas fa-bicycle", mood: "playful" },
        { name: "Kids’ Day at Oceanside Museum", description: "Explore art exhibits with family activities.", tags: ["indoor", "cultural", "kid-friendly-only"], preference: "both", category: "family", locationName: "Oceanside Museum of Art", address: "704 Pier View Way, Oceanside, CA 92054", hours: "10:00 AM - 4:00 PM", costs: "$10 per person", lat: 33.1970, lon: -117.3790, icon: "fas fa-paint-brush", mood: "playful" },
        { name: "Beach Play at Tyson Street Park", description: "Enjoy playgrounds and waves.", tags: ["outdoor", "relaxing", "kid-friendly-only"], preference: "both", category: "family", locationName: "Tyson Street Park", address: "200 Tyson St, Oceanside, CA 92054", hours: "Open 24 hours", costs: "Free", lat: 33.1950, lon: -117.3810, icon: "fas fa-umbrella-beach", mood: "playful" }
    ];

    // Load data from local storage or use defaults
    let dateIdeas = JSON.parse(localStorage.getItem('dateIdeas')) || defaultDateIdeas;
    let dateHistory = JSON.parse(localStorage.getItem('dateHistory')) || [];
    let upcomingDates = JSON.parse(localStorage.getItem('upcomingDates')) || [];
    let points = JSON.parse(localStorage.getItem('points')) || 0;
    let streak = JSON.parse(localStorage.getItem('streak')) || 0;
    let challenges = JSON.parse(localStorage.getItem('challenges')) || [{ name: "Try 3 outdoor dates this month", goal: 3, progress: 0, reward: "Outdoor Enthusiast" }];
    let currentIdeas = JSON.parse(localStorage.getItem('currentIdeas')) || [];

    // Save data to local storage
    const saveData = () => {
        localStorage.setItem('dateIdeas', JSON.stringify(dateIdeas));
        localStorage.setItem('dateHistory', JSON.stringify(dateHistory));
        localStorage.setItem('upcomingDates', JSON.stringify(upcomingDates));
        localStorage.setItem('points', JSON.stringify(points));
        localStorage.setItem('streak', JSON.stringify(streak));
        localStorage.setItem('challenges', JSON.stringify(challenges));
        localStorage.setItem('currentIdeas', JSON.stringify(currentIdeas));
    };

    // Wellness tips based on tags
    const wellnessTips = {
        "active": "Post-activity stretch: Try a 5-minute yoga flow to relax muscles.",
        "relaxing": "Mindfulness tip: Take 10 deep breaths to enhance relaxation.",
        "cultural": "Reflection tip: Discuss your favorite part of the experience.",
        "wellness": "Hydration tip: Drink water to recharge after this activity."
    };

    // Simulated weather (replace with real API in production)
    const getWeather = (location) => `Weather at ${location}: Sunny, 70°F (simulated)`; // Placeholder

    // Generate personalized justifications
    const generateJustification = (dateIdea) => {
        const { tags, locationName } = dateIdea;
        return `This date at ${locationName} is great because it involves ${tags[0]}, something you’ll both enjoy, and it's a top spot in North County San Diego.`;
    };

    // Get a random date idea with filters
    const getRandomDateIdea = (kidFriendly, coupleOnly, typeFilters, categoryFilters, budgetFilter, moodFilter) => {
        let filteredIdeas = dateIdeas.filter(idea => idea.preference === "both");
        
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
                const costRange = idea.costs.match(/\$?(\d+)-?\$?(\d+)?/);
                if (!costRange) return idea.costs === "Free" && budgetFilter === "0-20";
                const minCost = costRange[1] ? parseInt(costRange[1]) : 0;
                const maxCost = costRange[2] ? parseInt(costRange[2]) : minCost;
                if (budgetFilter === "0-20") return maxCost <= 20 || idea.costs === "Free";
                if (budgetFilter === "20-50") return maxCost > 20 && maxCost <= 50;
                if (budgetFilter === "50+") return maxCost > 50;
            });
        }

        if (moodFilter !== "all") {
            filteredIdeas = filteredIdeas.filter(idea => idea.mood === moodFilter);
        }

        const now = new Date();
        const hour = now.getHours();
        const timeOfDay = hour < 12 ? "morning" : hour < 17 ? "afternoon" : "evening";
        filteredIdeas = filteredIdeas.filter(idea => 
            !idea.tags.includes('morning') && !idea.tags.includes('afternoon') && !idea.tags.includes('evening') || 
            idea.tags.includes(timeOfDay)
        );

        const month = now.getMonth() + 1;
        const season = month >= 3 && month <= 5 ? "spring" : month >= 6 && month <= 8 ? "summer" : month >= 9 && month <= 11 ? "fall" : "winter";
        filteredIdeas = filteredIdeas.filter(idea => 
            !idea.tags.some(tag => tag.startsWith('seasonal-')) || 
            idea.tags.includes(`seasonal-${season}`)
        );

        if (filteredIdeas.length === 0) return [];
        const shuffled = filteredIdeas.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    };

    // Recommend date ideas based on history
    const getRecommendedIdeas = () => {
        const highRated = dateHistory.filter(item => Math.max(item.ratingAustin || 0, item.ratingJacquie || 0) >= 4).map(item => item.name);
        if (highRated.length === 0) return [];
        return dateIdeas.filter(idea => 
            !highRated.includes(idea.name) && 
            highRated.some(rated => {
                const ratedIdea = dateIdeas.find(d => d.name === rated);
                return ratedIdea && (ratedIdea.tags.some(tag => idea.tags.includes(tag)) || ratedIdea.category === idea.category);
            })
        ).slice(0, 3);
    };

    // Initialize map (lazy-loaded)
    let map = null;
    const initMap = () => {
        if (!map) {
            map = L.map('map').setView([33.1215, -117.2873], 10);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);
        }
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

        const selectedIdeas = ideas.length ? ideas : getRandomDateIdea(kidFriendly, coupleOnly, typeFilters, categoryFilters, budgetFilter, moodFilter);
        currentIdeas = selectedIdeas;
        saveData();
        
        const displayIdea = (id, idea) => {
            const card = document.getElementById(id);
            if (idea) {
                document.getElementById(`${id}-icon`).innerHTML = `<i class="${idea.icon}"></i>`;
                document.getElementById(`${id}-location-name`).textContent = `Location: ${idea.locationName}`;
                document.getElementById(`${id}-address`).textContent = `Address: ${idea.address}`;
                document.getElementById(`${id}-hours`).textContent = `Hours today: ${idea.hours}`;
                document.getElementById(`${id}-costs`).textContent = `Costs: ${idea.costs}`;
                document.getElementById(`${id}-weather`).textContent = getWeather(idea.locationName);
                document.getElementById(`${id}-wellness`).textContent = `Wellness Tip: ${wellnessTips[idea.tags.find(tag => wellnessTips[tag]) || 'active']}`;
                document.getElementById(`${id}-description`).textContent = idea.description;
                document.getElementById(`${id}-justification`).textContent = generateJustification(idea);
                if (!map) initMap();
                L.marker([idea.lat, idea.lon]).addTo(map).bindPopup(idea.name);
            } else {
                document.getElementById(`${id}-icon`).innerHTML = "";
                document.getElementById(`${id}-location-name`).textContent = "";
                document.getElementById(`${id}-address`).textContent = "";
                document.getElementById(`${id}-hours`).textContent = "";
                document.getElementById(`${id}-costs`).textContent = "";
                document.getElementById(`${id}-weather`).textContent = "";
                document.getElementById(`${id}-wellness`).textContent = "";
                document.getElementById(`${id}-description`).textContent = `No ${id.replace('idea', 'Idea ')} date ideas match your filters. Adjust your selections.`;
                document.getElementById(`${id}-justification`).textContent = "";
            }
        };

        if (selectedIdeas.length === 0) {
            alert("No date ideas match your current filters. Please adjust your selections.");
            displayIdea('idea1', null);
            displayIdea('idea2', null);
            displayIdea('idea3', null);
        } else {
            displayIdea('idea1', selectedIdeas[0]);
            displayIdea('idea2', selectedIdeas[1] || null);
            displayIdea('idea3', selectedIdeas[2] || null);
            document.getElementById('date-ideas-container').style.opacity = 0;
            setTimeout(() => {
                document.getElementById('date-ideas-container').style.opacity = 1;
            }, 10);
            alert('Date ideas generated!');
            updateHistory();
            updateGamification();
            updateRecommended();
            updateUpcoming();
            updateTagged();
        }
    };

    // Surprise Me function
    const surpriseMe = () => {
        const kidFriendly = document.getElementById('kid-friendly-toggle').checked;
        const coupleOnly = document.getElementById('couple-only-toggle').checked;
        const typeFilters = Array.from(document.querySelectorAll('.type-filters input[name="type"]:checked')).map(input => input.value);
        const categoryFilters = Array.from(document.querySelectorAll('.category-filters input[name="category"]:checked')).map(input => input.value);
        const budgetFilter = document.getElementById('budget-filter').value;
        const moodFilter = document.getElementById('mood-filter').value;
        const ideas = getRandomDateIdea(kidFriendly, coupleOnly, typeFilters, categoryFilters, budgetFilter, moodFilter);
        if (ideas && ideas.length > 0) {
            displayDateIdeas(ideas);
        } else {
            alert("No date ideas match your current filters. Please adjust your selections.");
        }
    };

    // Update history with partner feedback
    const updateHistory = () => {
        const historyList = document.getElementById('history-list');
        historyList.innerHTML = dateHistory.map(h => 
            `<li>${h.name} (Austin: ${h.ratingAustin || 'N/A'}/5, Jacquie: ${h.ratingJacquie || 'N/A'}/5) - ${h.notes || 'No notes'} - Tags: ${h.customTags ? h.customTags.join(', ') : 'None'}${h.image ? ` <img src="${h.image}" alt="${h.name}">` : ''}</li>`
        ).join('');
    };

    // Update gamification with streak and challenges
    const updateGamification = () => {
        document.getElementById('points').textContent = `Points: ${points}`;
        const badges = [];
        if (points >= 50) badges.push("Explorer");
        if (points >= 100) badges.push("Adventurer");
        document.getElementById('badges').textContent = `Badges: ${badges.length ? badges.join(', ') : 'None'}`;
        document.getElementById('streak').textContent = `Streak: ${streak} days`;
        const challengeProgress = challenges.map(c => {
            const progress = dateHistory.filter(h => h.category === "adventure" && new Date(h.timestamp).getMonth() === new Date().getMonth()).length;
            c.progress = progress;
            return `${c.name}: ${c.progress}/${c.goal} (${c.progress >= c.goal ? 'Completed - ' + c.reward : 'In Progress'})`;
        });
        document.getElementById('challenges').textContent = `Challenges: ${challengeProgress.join(', ')}`;
    };

    // Update recommended ideas
    const updateRecommended = () => {
        const recommendedList = document.getElementById('recommended-list');
        const recommendedIdeas = getRecommendedIdeas();
        recommendedList.innerHTML = recommendedIdeas.map(idea => 
            `<li><i class="${idea.icon}"></i> ${idea.name} - ${idea.description}</li>`
        ).join('');
    };

    // Update upcoming dates
    const updateUpcoming = () => {
        const upcomingList = document.getElementById('upcoming-list');
        upcomingList.innerHTML = upcomingDates.map(date => 
            `<li><i class="fas fa-calendar-alt"></i> ${date.name} on ${date.dateTime}</li>`
        ).join('');
    };

    // Update tagged dates
    const updateTagged = () => {
        const taggedList = document.getElementById('tagged-list');
        const taggedIdeas = dateHistory.filter(h => h.customTags && h.customTags.length > 0);
        taggedList.innerHTML = taggedIdeas.map(idea => 
            `<li><i class="${dateIdeas.find(d => d.name === idea.name)?.icon || 'fas fa-star'}"></i> ${idea.name} - Tags: ${idea.customTags.join(', ')}</li>`
        ).join('');
    };

    // Theme toggle and customization
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    document.getElementById('custom-theme-btn').addEventListener('click', () => {
        const headerColor = prompt("Enter header color (e.g., #4CAF50):", "#4CAF50");
        const buttonColor = prompt("Enter button color (e.g., #008CBA):", "#008CBA");
        if (headerColor && buttonColor) {
            document.documentElement.style.setProperty('--header-bg', `linear-gradient(to right, ${headerColor}, ${buttonColor})`);
            document.documentElement.style.setProperty('--button-bg', buttonColor);
            localStorage.setItem('customHeaderColor', headerColor);
            localStorage.setItem('customButtonColor', buttonColor);
        }
    });

    // Load saved theme and custom colors
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
    const customHeaderColor = localStorage.getItem('customHeaderColor');
    const customButtonColor = localStorage.getItem('customButtonColor');
    if (customHeaderColor && customButtonColor) {
        document.documentElement.style.setProperty('--header-bg', `linear-gradient(to right, ${customHeaderColor}, ${customButtonColor})`);
        document.documentElement.style.setProperty('--button-bg', customButtonColor);
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
            let filteredIdeas = getRandomDateIdea(kidFriendly, coupleOnly, typeFilters, categoryFilters, budgetFilter, moodFilter);
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
            const idea = dateIdeas.find(idea => idea.name === document.getElementById(`${section}-description`).textContent);
            if (idea) {
                window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(idea.address)}`, '_blank');
            }
        });
    });

    document.getElementById('upload-photo-btn').addEventListener('click', () => {
        document.getElementById('photo-upload').click();
    });

    document.getElementById('photo-upload').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const lastDate = dateHistory[dateHistory.length - 1];
                if (lastDate) {
                    lastDate.image = event.target.result;
                    saveData();
                    updateHistory();
                    alert('Photo added to your last date!');
                }
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('date-idea-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const tags = document.getElementById('tags').value.split(',').map(tag => tag.trim());
        const preference = "both";
        const category = document.getElementById('category').value;
        const locationName = document.getElementById('location-name').value;
        const address = document.getElementById('address').value;
        const hours = document.getElementById('hours').value;
        const costs = document.getElementById('costs').value;
        const icon = document.getElementById('icon').value;
        const lat = parseFloat(prompt("Enter latitude (e.g., 33.1215):"));
        const lon = parseFloat(prompt("Enter longitude (e.g., -117.2873):"));
        const mood = prompt("Enter mood (e.g., adventurous, relaxed, romantic, playful):", "relaxed");

        try {
            if (!name || !description || !tags.length || !category || !locationName || !address || !hours || !costs || !icon || isNaN(lat) || isNaN(lon) || !mood) {
                throw new Error("Please fill in all fields correctly.");
            }
            const newDateIdea = { name, description, tags, preference, category, locationName, address, hours, costs, lat, lon, icon, mood };
            dateIdeas.push(newDateIdea);
            saveData();
            alert('Date idea added successfully!');
            document.getElementById('date-idea-form').reset();
        } catch (error) {
            alert(error.message);
        }
    });

    // Offline mode check
    if (!navigator.onLine) {
        alert("You are offline. Using cached data.");
    }
    window.addEventListener('online', () => alert("Back online!"));
    window.addEventListener('offline', () => alert("You are offline. Using cached data."));

    // Initial setup with persisted ideas
    displayDateIdeas(currentIdeas.length ? currentIdeas : []);
    updateRecommended();
    updateUpcoming();
    updateTagged();
});