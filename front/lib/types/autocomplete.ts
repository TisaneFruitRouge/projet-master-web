export type AutocompleteResponse = Array<Address>;

export type Address = {
    geometry: Geometry;
    properties: Properties;
    type: string;
}

type Geometry = {
    coordinates: [number, number];
    type: string;
}

type Properties = {
    city: string;
    citycode: string
    context: string;
    housenumber: string;
    id: string;
    importance: number;
    label: string;
    name: string;
    postecode: string;
    score: number;
    rue: string;
    x: number;
    y: number;
}