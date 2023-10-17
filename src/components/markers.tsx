import { MarkerClusterer } from "@googlemaps/markerclusterer";
import type { Marker as ClusterMarker } from "@googlemaps/markerclusterer";
import { useMap, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import React, { useEffect, useState, useRef } from "react";

type Point = google.maps.LatLngLiteral & { name: string; key: string };
type Props = { points: Point[] };

export const Markers = ({ points }: Props) => {
  const map = useMap();
  const [markers, setMarkers] = useState<{ [key: string]: ClusterMarker }>({});
  const clusterer = useRef<MarkerClusterer | null>(null);

  useEffect(() => {
    if (!map) return;

    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({
        map,
        markers: [],
      });
    }

    clusterer.current.clearMarkers();
    clusterer.current.addMarkers(Object.values(markers));

    return () => {
      if (clusterer.current) {
        clusterer.current.clearMarkers();
      }
    };
  }, [map, markers]);

  const setMarkerRef = (marker: ClusterMarker | null, point: Point) => {
    if (marker && markers[point.key]) return;
    if (!marker && !markers[point.key]) return;

    setMarkers((old) => {
      if (!marker) {
        const newMarkers = { ...old };
        delete newMarkers[point.key];
        return newMarkers;
      } else {
        return { ...old, [point.key]: marker };
      }
    });
  };

  return (
    <>
      {points.map((point) => (
        <AdvancedMarker
          position={point}
          key={point.key}
          ref={(marker) => setMarkerRef(marker, point)}
        >
          <Pin
            background={"#FBBC04"}
            glyphColor={"#000"}
            borderColor={"#000"}
          />
        </AdvancedMarker>
      ))}
    </>
  );
};
