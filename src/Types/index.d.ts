declare module 'haversine-distance';

declare interface Aircraft {
  model: string;
  speed: number;
  passengerCapacity: {
    total: number;
    main: number;
    first: number;
  };
}

declare interface Airport {
  code: string; // Airport code, typically 3 characters
  city: string; // Airport city name
  timezone: string; // IANA timezone string
  location: Location;
}

declare interface Location {
  latitude: number;
  longitude: number;
}

declare interface FlightDuration {
  hours: number;
  minutes: number;
  locale: string;
}

declare interface Temperature{
  currentTemperature: number;
}

declare interface SeatPitch{
  totalSeatPitch: number;
}

declare interface Accomodations{
  wifi: boolean;
  power: boolean;
  overhead: boolean;
  seatback: boolean;
}

declare interface Flight {
  flightNumber: string;
  aircraft: Aircraft;
  origin: Airport;
  destination: Airport;
  distance: number;
  duration: FlightDuration;
  departureTime: string;
  arrivalTime: string;
  temperature: Temperature;
  seatPitch: SeatPitch;
  accomodies: Accomodations;
}

declare interface FlightQueryParams {
  date: string;
  origin?: string;
  destination?: string;
}
