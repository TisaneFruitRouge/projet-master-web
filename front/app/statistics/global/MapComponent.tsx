"use client";
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

function MapComponent() {
    useEffect(() => {
        // Initialize Mapbox map
        mapboxgl.accessToken = 't';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11', // Choose a Mapbox style
            center: [-74.006, 40.7128], // New York City coordinates
            zoom: 10 // Initial zoom level
        });

        // Add any additional customization or layers to the map if needed

        return () => {
            // Cleanup function
            map.remove();
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div id="map" style={{ width: '100%', height: '400px' }}></div> // Div container for the map
    );
}

export default MapComponent;
