import { fetchWithAPIKey } from "./utils";

export async function getFlights() {
  const res = await fetchWithAPIKey('https://' + process.env.X_RAPIDAPI_HOST as string + '/api/v1/flights/searchDestination?query=new')
  const flights: APIResponse<Flight>  = await res?.json()
  return flights
}