"use client"

import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


interface PropertyLocationMapProps {
    long: number;
    lat: number;
}

const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoidGlzYW5lZnJ1aXRyb3VnZSIsImEiOiJjbHc5bjJ5dWgwNHF2MmlwbHVqajQ0NzJiIn0.yc2TNBMgHDGqCTzw1xfzhg'
});

export default function PropertyLocationMap({long, lat}:PropertyLocationMapProps) {

    return (
        <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: '256px',
                width: '256px'
            }}
            center={[lat, long]}
            zoom={[16]}
        >
            {/* <Marker coordinates={[lat, long]}>
                <div className='w-12 h-12 bg-red-500'>Test</div>
            </Marker> */}
        </Map>
    )
}