# Geocoding Example

Example of using `useMapsLibrary` to load the geocoding library. It is important to nest `useMapsLibrary` within the `APIProvider` that contains your `apiKey`. Without this, the library will not be loaded.

```jsx
import { useEffect, useState } from "react";
import { APIProvider, useMapsLibrary } from "@vis.gl/react-google-maps";

export default function Page() {
  return (
    <APIProvider apiKey={"your api key"}>
      <MyComponent />
    </APIProvider>
  );
}

function MyComponent() {
  const geocodingApiLoaded = useMapsLibrary("geocoding");
  const [geocodingService, setGeocodingService] = useState();

  useEffect(() => {
    if (!geocodingApiLoaded) return;
    setGeocodingService(new window.google.maps.Geocoder());
  }, [geocodingApiLoaded]);

  useEffect(() => {
    if (!geocodingService) return;
    // Use geocoding service
  }, [geocodingService]);

  return <></>;
}
```
