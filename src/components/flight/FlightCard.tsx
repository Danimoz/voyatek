import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button"
import { 
  PiAirplaneLanding,
  PiX,
  PiSuitcaseRolling,
  PiFilmSlate,
  PiForkKnife,
  PiUsb
} from "react-icons/pi"
import MidRect from '@assets/midrect.svg'
import Image from "next/image"


interface FlightCardProps {
  flight: Flight
}

export default function FlightCard({ flight }: FlightCardProps){
  return (
    <Card className="bg-white p-0 m-0">
      <CardContent className="p-0 relative w-full pr-14">
        <div className="flex items-center gap-x-4 w-full p-4">
          <div className="flex items-center gap-x-2 w-full">
            <div className="flex justify-center items-center">
              <Image 
                src={flight.photoUri} 
                height={64} 
                width={64} 
                alt={`flight-${flight.id}`} 
                className="flex items-center rounded-lg"
                style={{ aspectRatio: '40/40'}}
              />
            </div>
            <div>
              <h5 className='text-[#1d2433] font-semibold text-xl font-[family-name:var(--font-poppinsBold)]'>{flight.name}</h5>
              <div className="flex items-center gap-x-4">
                <p>{flight.code}</p>
                <Button className="text-white h-7 bg-[#0a369d] px-2 py-1">First class</Button>
              </div>
            </div>
          </div>

          <div className="flex gap-x-4 w-full">
            <div>
              <h5 className="text-xl font-semibold text-[#1d2433] text-center font-[family-name:var(--font-poppinsBold)]">08:35</h5>
              <p className="text-[#676e7e] font-normal text-sm whitespace-nowrap">Sun, 20 Aug</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <PiAirplaneLanding />
                <h6 className="text-sm font-normal text-[#676e7e]">Duration: 1h 45m</h6>
                <PiAirplaneLanding />
              </div>
              <Image alt="rect" src={MidRect} />
              <div className="flex justify-between">
                <h6 className="text-base font-semibold font-[family-name:var(--font-poppinsBold)]">LOS</h6>
                <p>Direct</p>
                <h6 className="text-base font-semibold font-[family-name:var(--font-poppinsBold)]">SIN</h6>
              </div>
            </div>
            <div>
              <h5 className="text-xl font-semibold text-[#1d2433] text-center font-[family-name:var(--font-poppinsBold)]">09:55</h5>
              <p className="text-[#676e7e] font-normal text-sm whitespace-nowrap">Sun, 20 Aug</p>
            </div>
          </div>

          <div className="w-full text-end">
            <h6 className="font-semibold text-[28px] font-[family-name:var(--font-poppinsBold)]">N123,450.00</h6>
          </div>             
        </div>
        <hr />
        <div className="p-4">
          <p className="inline-flex gap-x-2 items-center font-medium text-sm"> 
            Facilities
            <PiSuitcaseRolling size={20}/>
            Baggage: 20kg, Cabin Baggage: 8kg
            <PiFilmSlate size={20} />
            In flight entertainment
            <PiForkKnife size={20} />
            In flight meal
            <PiUsb size={20} />
            USB Port
          </p>
        </div>
        <hr />
        <div className="p-4">

        </div>
        <div className="absolute right-0 top-0 h-full px-4 bg-[#fbeae9] flex justify-center items-center">
          <PiX />
        </div>
      </CardContent>
    </Card>
  )
}