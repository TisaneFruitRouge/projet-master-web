import * as React from "react";

interface MapComponentProps {
    city: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ city }) => {
    const mapFilePath = `/${city}_plot.html`;

    return (
        <iframe src={mapFilePath} width="100%" height="400"></iframe>
    );
};

export default MapComponent;
