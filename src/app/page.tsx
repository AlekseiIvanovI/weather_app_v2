'use client'

import Image from "next/image";
import Navbar from "./components/Navbar";
import { useQuery } from "react-query";
import axios from "axios";

// https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=d95922d13cd8a9465a7af0e13e0db93b&cnt=56


interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherEntry[];
  city: {
      id: number;
      name: string;
      coord: {
          lat: number;
          lon: number;
      };
      country: string;
      population: number;
      timezone: number;
      sunrise: number;
      sunset: number;
  };
}

interface WeatherEntry {
  dt: number;
  main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
  };
  weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
  }[];
  clouds: {
      all: number;
  };
  wind: {
      speed: number;
      deg: number;
      gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
      pod: string;
  };
  dt_txt: string;
}


export default function Home() {

  const { isLoading, error, data } = useQuery<WeatherData>("repoData", async () =>
  {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56`)
    return data;
  }
  );

  console.log("data", data)

  if (isLoading) return <div className="flex items-center min-h-screen justify-center">
    <p className="animated-bounce">Loading...</p>
  </div>;


  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
    </div>
  );
}
