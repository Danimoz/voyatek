interface Flight {
  id: string;
  type: string
  name: string;
  code: string;
  city: string;
  cityName: string;
  regionName: string;
  country: string;
  countryName: string;
  countryNameShort: string;
  photoUri: string;
  distanceToCity: {
    distance: number; // Assuming the distanceToCity object contains a 'distance' key with a numeric value.
    unit: string; // Assuming there's a unit, e.g., 'km' or 'miles'.
  };
  parent: string;
}

interface APIResponse<T> {
  data: T[],
  status: boolean,
  message: string
}