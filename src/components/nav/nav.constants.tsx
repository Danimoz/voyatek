import { GoHome } from "react-icons/go";
import { 
  PiChartPieSlice, 
  PiHandCoinsLight, 
  PiBasketLight, 
  PiPlusSquareLight,
  PiRoadHorizon,
  PiBuildings,
  PiAirplaneTilt,
  PiStudent,
  PiNewspaperClipping,
  PiFirstAidKit,
  PiSuitcaseRolling,
  PiPackage,
  PiBell,
  PiWallet,
} from "react-icons/pi";
import { BsListCheck } from "react-icons/bs";

export const mainNav = [
  { icon: GoHome, label: 'Home', href: '#' },
  { icon: PiChartPieSlice, label: 'Dashboard', href: '#' },
  { icon: PiWallet, label: 'Wallet', href: '#' },
  { icon: BsListCheck, label: 'Plan a trip', href: '#' },
  { icon: PiHandCoinsLight, label: 'Commission for life', href: '#' },
]

export const otherNav = [
  { icon: PiBell, label: 'Notification', href: '#' },
  { icon: PiBasketLight, label: 'Carts', href: '#' },
  { icon: PiPlusSquareLight, label: 'Create', href: '#' },
]

export const sideNav = [
  { icon: PiRoadHorizon, label: 'Activities', href: '#' },
  { icon: PiBuildings, label: 'Hotels', href: '#' },
  { icon: PiAirplaneTilt, label: 'Flights', href: '#' },
  { icon: PiStudent, label: 'Study', href: '#' },
  { icon: PiNewspaperClipping, label: 'Visa', href: '#' },
  { icon: PiSuitcaseRolling, label: 'Immigration', href: '#' },
  { icon: PiFirstAidKit, label: 'Medical', href: '#' },
  { icon: PiPackage, label: 'Vacation Packages', href: '#' },
]