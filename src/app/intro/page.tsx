"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function Intro() {
  const position = { lat: 53.54992, lng: 10.00678 };
  return (
    <div className="w-screen h-screen">
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <Map center={position} zoom={9} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
          <Marker position={position} />
        </Map>
      </APIProvider>
    </div>
  );
}
