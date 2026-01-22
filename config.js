var config = {
    // Map style - use any MapLibre-compatible style URL
    // Free options include:
    // - CartoCDN: https://basemaps.cartocdn.com/gl/positron-gl-style/style.json (light)
    // - CartoCDN: https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json (dark)
    // - CartoCDN: https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json (colorful)
    // - MapTiler (requires free API key): https://api.maptiler.com/maps/streets/style.json?key=YOUR_KEY
    // - OpenFreeMap: https://tiles.openfreemap.org/styles/liberty
    style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',

    // Show markers at the center of each chapter location
    showMarkers: true,
    markerColor: '#3FB1CE',

    // Enable inset minimap
    inset: true,
    insetStyle: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
    insetPosition: 'bottom-right', // Options: 'top-left', 'top-right', 'bottom-left', 'bottom-right'
    insetZoom: 1,
    insetOptions: {
        markerColor: 'orange'
    },

    // Theme for story panels: 'light' or 'dark'
    theme: 'dark',

    // Enable 3D terrain (requires terrain source)
    use3dTerrain: false,
    // For 3D terrain, you can use:
    // - AWS Terrain Tiles: 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'
    // - MapTiler (requires key): 'https://api.maptiler.com/tiles/terrain-rgb/tiles.json?key=YOUR_KEY'
    // terrainSource: 'https://api.maptiler.com/tiles/terrain-rgb/tiles.json?key=YOUR_KEY',
    // terrainExaggeration: 1.5,

    // Auto-advance through chapters
    auto: false,

    // Story metadata
    title: 'Your Story Title',
    subtitle: 'A scrollytelling map experience built with MapLibre GL JS',
    byline: 'By Your Name',
    footer: 'Source: Your data sources here. <br> Created using <a href="https://github.com/opengeos/maplibre-gl-storymaps" target="_blank">MapLibre Storytelling</a> template, inspired by <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>.',

    // Story chapters
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'San Francisco, California',
            image: './assets/san-francisco.jpg',
            description: 'San Francisco, a hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay, is known for its year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses. <br><br>The city is also known for its vibrant tech industry, diverse neighborhoods, and rich cultural scene.',
            location: {
                center: [-122.4194, 37.7749],
                zoom: 11,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // Example: show a layer when entering this chapter
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // Example: hide a layer when exiting this chapter
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-2',
            alignment: 'right',
            hidden: false,
            title: 'New York City, New York',
            image: './assets/new-york.jpg',
            description: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that\'s among the world\'s major commercial, financial and cultural centers. <br><br>Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park.',
            location: {
                center: [-74.0060, 40.7128],
                zoom: 11,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-3',
            alignment: 'left',
            hidden: false,
            title: 'Tokyo, Japan',
            image: './assets/tokyo.jpg',
            description: 'Tokyo, Japan\'s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. <br><br>The Imperial Palace sits amid large public gardens. The city\'s many museums offer exhibits ranging from classical art to a reconstructed kabuki theater.',
            location: {
                center: [139.6917, 35.6895],
                zoom: 10,
                pitch: 30,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-4',
            alignment: 'center',
            hidden: false,
            title: 'Sydney, Australia',
            image: './assets/sydney.jpg',
            description: 'Sydney, capital of New South Wales and one of Australia\'s largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. <br><br>Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby.',
            location: {
                center: [151.2093, -33.8688],
                zoom: 11,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-5',
            alignment: 'fully',
            hidden: false,
            title: 'Cape Town, South Africa',
            image: './assets/cape-town.jpg',
            description: 'Cape Town is a port city on South Africa\'s southwest coast, on a peninsula beneath the imposing Table Mountain. Slowly rotating cable cars climb to the mountain\'s flat top, from which there are sweeping views of the city, the busy harbor and boats headed for Robben Island, the infamous prison that once held Nelson Mandela. <br><br>You can add as many chapters as you need to tell your story.',
            location: {
                center: [18.4241, -33.9249],
                zoom: 10,
                pitch: 50,
                bearing: 30
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
