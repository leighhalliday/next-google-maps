"use client";

import { useEffect, useState } from "react";

import {
  APIProvider,
  Map,
  useDirectionsService,
} from "@vis.gl/react-google-maps";

export default function Intro() {
  const position = { lat: 43.6532, lng: -79.3832 };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <Map
          center={position}
          zoom={9}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
          fullscreenControl={false}
        >
          <Directions />
        </Map>
      </APIProvider>
    </div>
  );
}

function Directions() {
  const { renderRoute, setRenderedRouteIndex } = useDirectionsService({
    renderOnMap: true,
  });
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  useEffect(() => {
    if (!renderRoute) return;

    renderRoute({
      origin: "100 Front St, Toronto, ON",
      destination: "500 College St, Toronto, ON",
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true,
    }).then((response) => {
      setRoutes(response.routes);
    });
  }, []);

  return (
    <>
      {leg && (
        <div className="absolute w-80 right-0 top-0 p-4 m-4 bg-slate-900 text-white rounded">
          <h2 className="text-xl">{selected.summary}</h2>
          <p>
            {leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}
          </p>
          <p>
            <small>Distance: {leg.distance?.text}</small>
          </p>
          <p>
            <small>Duration: {leg.duration?.text}</small>
          </p>

          {routes.length > 0 && (
            <>
              <h2 className="pt-4 text-xl">Other Routes</h2>
              <ul>
                {routes.map((route, index) => (
                  <li key={route.summary}>
                    <button
                      className="text-yellow-100"
                      onClick={() => {
                        setRouteIndex(index);
                        setRenderedRouteIndex?.(index);
                      }}
                    >
                      {index === routeIndex ? (
                        <strong>{route.summary}</strong>
                      ) : (
                        route.summary
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
}
