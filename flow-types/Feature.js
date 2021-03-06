// @flow
type Latitude = number
type Longitude = number

export type Category =
    | 'onstreetBus'
    | 'onstreetTram'
    | 'airport'
    | 'railStation'
    | 'metroStation'
    | 'busStation'
    | 'coachStation'
    | 'tramStation'
    | 'harbourPort'
    | 'ferryPort'
    | 'ferryStop'
    | 'liftStation'
    | 'vehicleRailInterchange'
    | 'other'
    | 'GroupOfStopPlaces'
    | 'poi'
    | 'Vegadresse'
    | 'street'
    | 'tettsteddel'
    | 'bydel'

export type Feature = {
    geometry: {
        coordinates: [Longitude, Latitude],
        type: 'Point',
    },
    properties: {
        id: string,
        name: string,
        label?: string,
        borough: string,
        accuracy: 'point',
        layer: 'venue' | 'address',
        borough_gid: string,
        category: Array<Category>,
        country_gid: string,
        county: string,
        county_gid: string,
        gid: string,
        housenumber?: string,
        id: string,
        locality: string,
        locality_gid: string,
        name: string,
        postalcode: string,
        source: string,
        source_id: string,
        street: string,
    }
}
