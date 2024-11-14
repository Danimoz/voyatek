import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchWithAPIKey(url: string, options?: RequestInit){
  options = {
    ...options,
    headers : {
      ...options?.headers,
      'x-rapidapi-key': process.env.X_RAPIDAPI_KEY as string,
      'x-rapidapi-host': process.env.X_RAPIDAPI_HOST as string
    }
  }

  try {
    const response = await fetch(url, options)
    return response
  } catch(error) {
    console.log(error)
  }
}