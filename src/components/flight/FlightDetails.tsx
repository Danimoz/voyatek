import FlightCard from "./FlightCard"

interface FlightDetailsProps {
  flights: Flight[]
}

export default function FlightDetails({ flights }: FlightDetailsProps){
  return (
    <div className="flex flex-col gap-4">
      {flights?.map((flight) => (
        <FlightCard key={flight.id} flight={flight}/>
      ))}
    </div>
  )
}