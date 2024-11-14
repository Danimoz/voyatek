import Image from "next/image";
import BannerImg from "@assets/banner.png"
import UserBoxImg from '@assets/big.png'
import { 
  PiArrowLeft, 
  PiCalendarBlank,
  PiArrowRight,
  PiUserPlus,
  PiDotsThree,
  PiAirplaneInFlight
} from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { details } from "./constants";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { getFlights } from "@/lib/fetch";
import FlightDetails from "@/components/flight/FlightDetails";

export default async function Home() {
  const flights = await getFlights();
  return (
    <main className="min-h-screen bg-white p-8 font-[family-name:var(--font-poppins)]">
      <section className="relative">
        <Image alt="banner" src={BannerImg} />
        <div className="absolute left-4 top-4 p-2 bg-gradient-r from-white to-transparent">
          <PiArrowLeft fill="#344054" size={24}/>
        </div>
      </section>

      <section>
        <div className="py-4 flex justify-between">
          <div>
            <div className="inline-flex items-center gap-x-2 pt-1 px-2 bg-[#fef4e6]">
              <PiCalendarBlank size={16} />
              21 March 2024 <span><PiArrowRight /></span> 21 April 2024 
            </div>
            <div className="mt-2">
              <h5 className="text-2xl font-semibold font-[family-name:var(--font-poppinsBold)]">Bahamas Family Trip</h5>
              <p className="text-[#676e7e] text-base font-medium">
                New York, United States of America | Solo Trip
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-x-4">
              <Button variant='ghost' className="bg-[#e7f0ff] px-24 py-2">
                <PiUserPlus size={20} fill="#0D6EFD" />
              </Button>
              <PiDotsThree fill="#344054" size={20} />
            </div> 
            <div className="flex justify-center mt-6">
              <Image alt='user' src={UserBoxImg} />
            </div>         
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="flex col-span-2">
            {details.map(detail => (
              <Card 
                key={detail.title}
                style={{ background: `${detail.bgColor}`, color: `${detail.textColor}`}}
              >
                <CardHeader className="text-base font-semibold">{detail.title}</CardHeader>
                <CardContent className="text-sm font-normal flex-1">{detail.description}</CardContent>
                <CardFooter >
                  <Button
                    className="w-full" 
                    style={{ background: `${detail.btnColor}`, color: `${detail.btnTextColor}`}}
                  >
                    {detail.footer}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div>
          <h6 className="text-[#1d2433] font-semibold text-xl font-[family-name:var(--font-poppinsBold)]">Trip Itineraries</h6>
          <p className="text-[#647995] font-normal text-sm">Your trip itineraries are placed here</p>
        </div>

        <div className="bg-[#f0f2f5] p-4 mt-4">
          <div className="flex items-center justify-between">
            <div className="inline-flex gap-x-2.5 items-center">
              <PiAirplaneInFlight size={24} />
              <h6 className="text-lg font-semibold font-[family-name:var(--font-poppinsBold)]">Flights</h6>
            </div>
            <div>
              <Button className="bg-white text-primary font-semibold text-sm">Add Flights</Button>
            </div>
          </div>
          <div className="mt-4">
            <FlightDetails flights={flights.data.slice(0, 2)} />        
          </div>
        </div>
      </section>

    </main>
  );
}
