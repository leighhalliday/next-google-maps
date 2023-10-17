"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { Markers } from "../../components/markers";
import trees from "../../data/trees";

export default function Intro() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <Map
          center={{ lat: trees[0].lat, lng: trees[0].lng }}
          zoom={10}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
        >
          <Markers points={trees} />
        </Map>
      </APIProvider>
    </div>
  );
}
