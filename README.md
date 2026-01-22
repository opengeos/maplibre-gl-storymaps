# MapLibre GL Storytelling

An open-source, scroll-driven storytelling template using [MapLibre GL JS](https://maplibre.org/). Create beautiful, interactive map-based stories without proprietary dependencies or API keys.

![MapLibre Storytelling Demo](https://github.com/user-attachments/assets/85f391db-8d21-4167-9719-e44a41d0bd58)

## Features

- **Free and Open Source**: No API keys required for basic usage
- **Scroll-Driven Navigation**: Smooth transitions between map locations as you scroll
- **Multiple Free Map Styles**: Choose from various free tile providers (Carto, OpenFreeMap, etc.)
- **Customizable Chapters**: Define your story with chapters containing text, images, and map views
- **3D Terrain Support**: Optional terrain visualization with MapLibre's terrain capabilities
- **Inset Minimap**: Optional overview map showing current location
- **Responsive Design**: Works on desktop and mobile devices
- **Layer Control**: Show/hide map layers as chapters change
- **Rotate Animation**: Optional slow rotation effect for dramatic views
- **Location Helper**: Built-in tool to capture map coordinates

## Live Demo

View the demo by opening `index.html` in a web browser with a local development server.

## Quick Start

### Prerequisites

- A text editor (VS Code, Sublime Text, etc.)
- A local development server (Live Server extension for VS Code, Python's `http.server`, etc.)
- A web browser

### Getting Started

1. **Clone or download this repository**

   ```bash
   git clone https://github.com/opengeos/maplibre-gl-storymaps.git
   cd maplibre-gl-storymaps
   ```

2. **Start a local development server**

   Using Python:
   ```bash
   python -m http.server 8000
   ```

   Or using Node.js:
   ```bash
   npx serve .
   ```

   Or use the Live Server extension in VS Code.

3. **Open in browser**

   Navigate to `http://localhost:8000` (or the port shown by your server).

4. **Customize your story**

   Edit `config.js` to add your own content and locations.

## Configuration

All story configuration is done in `config.js`. Here's the structure:

### Global Options

```javascript
var config = {
    // Map style URL (required)
    style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',

    // Show markers at chapter locations
    showMarkers: true,
    markerColor: '#3FB1CE',

    // Inset minimap
    inset: true,
    insetPosition: 'bottom-right', // 'top-left', 'top-right', 'bottom-left', 'bottom-right'
    insetZoom: 1,
    insetStyle: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',

    // Theme for story panels: 'light' or 'dark'
    theme: 'dark',

    // 3D terrain
    use3dTerrain: false,
    terrainSource: 'terrain-source-url',
    terrainExaggeration: 1.5,

    // Auto-advance through chapters
    auto: false,

    // Story metadata
    title: 'Your Story Title',
    subtitle: 'Your subtitle',
    byline: 'By Your Name',
    footer: 'Source information and credits',

    // Story chapters (array)
    chapters: [...]
};
```

### Chapter Options

Each chapter in the `chapters` array has these properties:

| Option                | Type    | Description                                                        |
| --------------------- | ------- | ------------------------------------------------------------------ |
| `id` (required)       | String  | Unique identifier for the chapter (used as HTML id)                |
| `alignment`           | String  | Position of story panel: `'left'`, `'right'`, `'center'`, `'full'` |
| `hidden`              | Boolean | Hide the chapter panel (map still transitions)                     |
| `title`               | String  | Chapter title                                                      |
| `image`               | String  | Path to chapter image                                              |
| `description`         | String  | Chapter content (supports HTML)                                    |
| `location` (required) | Object  | Map view settings (see below)                                      |
| `mapAnimation`        | String  | Animation type: `'flyTo'`, `'easeTo'`, `'jumpTo'`                  |
| `rotateAnimation`     | Boolean | Enable slow rotation after transition                              |
| `callback`            | String  | Name of a JavaScript function to call                              |
| `onChapterEnter`      | Array   | Layer opacity changes when entering chapter                        |
| `onChapterExit`       | Array   | Layer opacity changes when exiting chapter                         |

### Location Object

```javascript
location: {
    center: [-122.4194, 37.7749], // [longitude, latitude]
    zoom: 11,
    pitch: 45, // 0-85 degrees
    bearing: 0, // 0-360 degrees
    speed: 0.5, // flyTo speed (optional)
    curve: 1 // flyTo curve (optional)
}
```

### Layer Opacity Control

Control layer visibility as chapters change:

```javascript
onChapterEnter: [
    {
        layer: 'my-layer-name',
        opacity: 1,
        duration: 3000 // transition duration in ms
    }
],
onChapterExit: [
    {
        layer: 'my-layer-name',
        opacity: 0
    }
]
```

## Free Map Styles

MapLibre works with any compatible vector tile source. Here are some free options:

### CartoCDN (No API key required)
- **Voyager (colorful)**: `https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json`
- **Positron (light)**: `https://basemaps.cartocdn.com/gl/positron-gl-style/style.json`
- **Dark Matter**: `https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`

### OpenFreeMap (No API key required)
- **Liberty**: `https://tiles.openfreemap.org/styles/liberty`
- **Bright**: `https://tiles.openfreemap.org/styles/bright`
- **Positron**: `https://tiles.openfreemap.org/styles/positron`

### MapTiler (Free tier with API key)
- **Streets**: `https://api.maptiler.com/maps/streets/style.json?key=YOUR_KEY`
- **Satellite**: `https://api.maptiler.com/maps/satellite/style.json?key=YOUR_KEY`
- **Terrain**: `https://api.maptiler.com/maps/terrain/style.json?key=YOUR_KEY`

Sign up for a free API key at [maptiler.com](https://www.maptiler.com/).

## Using the Location Helper

The `helper.html` file provides an interactive tool to find map coordinates:

1. Open `helper.html` in your browser
2. Navigate the map to your desired view:
   - **Pan**: Click and drag
   - **Zoom**: Scroll or use +/- buttons
   - **Rotate**: Right-click + drag
   - **Pitch**: Ctrl + drag
3. The location data updates automatically
4. Click "Copy to Clipboard" to copy the config snippet
5. Paste into your chapter's `location` object

## Adding Custom Layers

You can add custom GeoJSON or other data layers to your map. Add them in the `map.on('load')` callback in `index.html`:

```javascript
map.on("load", function () {
    // Add a GeoJSON source
    map.addSource('my-data', {
        type: 'geojson',
        data: 'path/to/your/data.geojson'
    });

    // Add a layer
    map.addLayer({
        id: 'my-layer',
        type: 'fill',
        source: 'my-data',
        paint: {
            'fill-color': '#088',
            'fill-opacity': 0 // Start hidden, control with onChapterEnter
        }
    });

    // ... rest of the code
});
```

## 3D Terrain

To enable 3D terrain, you'll need a terrain tile source. Options include:

### MapTiler Terrain (Free tier available)

```javascript
use3dTerrain: true,
terrainSource: 'https://api.maptiler.com/tiles/terrain-rgb/tiles.json?key=YOUR_KEY',
terrainExaggeration: 1.5,
```

### AWS Terrain Tiles (Free)

For AWS terrain tiles, you'll need to modify the terrain source configuration in `index.html`:

```javascript
map.addSource('terrain-dem', {
    'type': 'raster-dem',
    'tiles': ['https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'],
    'encoding': 'terrarium',
    'tileSize': 256
});
```

## Deployment

The storytelling map is entirely client-side and can be hosted on any static file hosting service.

### GitHub Pages (Recommended)

This repository includes a GitHub Actions workflow for automatic deployment to GitHub Pages:

1. Push your code to GitHub
2. Go to your repository's **Settings** > **Pages**
3. Under "Build and deployment", select **GitHub Actions** as the source
4. The workflow will automatically deploy on every push to the `main` branch

Your site will be available at `https://<username>.github.io/<repository-name>/`

### Other Hosting Options

- **Netlify**: Drag and drop the folder or connect to Git
- **Vercel**: Import from Git repository
- **AWS S3**: Upload files and enable static website hosting
- **Any web server**: Just upload the files

## Project Structure

```
maplibre-gl-storymaps/
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Pages deployment workflow
├── assets/               # Images and media
│   └── *.jpg             # Chapter images
├── config.js             # Story configuration
├── helper.html           # Location finder tool
├── index.html            # Main storytelling page
├── LICENSE               # MIT License
└── README.md             # This file
```

## Browser Support

MapLibre GL JS supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Built With

- [MapLibre GL JS](https://maplibre.org/) - Open-source map rendering library
- [Scrollama](https://github.com/russellsamora/scrollama) - Scroll-driven interactions

## Credits

This template is inspired by and based on the [Mapbox Storytelling](https://github.com/mapbox/storytelling) template by [Mapbox](https://www.mapbox.com/). The original template was created by John Branigan and the Mapbox Solutions Architecture Team.

This version has been adapted to use the open-source [MapLibre GL JS](https://maplibre.org/) library, removing the dependency on proprietary services and API keys for basic functionality.

Special thanks to:
- The [Mapbox Storytelling](https://github.com/mapbox/storytelling) team for the original concept and implementation
- The [MapLibre](https://maplibre.org/) community for maintaining the open-source fork of Mapbox GL JS
- [Scrollama](https://github.com/russellsamora/scrollama) by Russell Samora for scroll-driven interactions

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Troubleshooting

### Map doesn't load
- Ensure you're using a local development server (not opening the file directly)
- Check the browser console for errors
- Verify the map style URL is accessible

### Scroll doesn't work
- Make sure Scrollama is loaded
- Check that chapter IDs are unique
- Ensure the page isn't inside an iframe

### 3D terrain doesn't show
- Verify your terrain source URL and API key (if required)
- Check that `use3dTerrain` is set to `true`
- Some terrain sources require specific encoding settings

## Resources

- [MapLibre GL JS Documentation](https://maplibre.org/maplibre-gl-js/docs/)
- [MapLibre Examples](https://maplibre.org/maplibre-gl-js/docs/examples/)
- [Scrollama Documentation](https://github.com/russellsamora/scrollama)
- [Free Tile Sources](https://github.com/maplibre/awesome-maplibre#basemap-styles)
