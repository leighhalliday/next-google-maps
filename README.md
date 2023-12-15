# Google Maps in React

- Intro: `src/app/intro/page.tsx`

## Setup

* Clone the project `git clone git@github.com:leighhalliday/next-google-maps.git`
* Navigate to the project's root `cd next-google-maps`
* Create a `.env.local` file and add the MAP_ID and API Key
  ```
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=...
    NEXT_PUBLIC_MAP_ID=...
    ```
* Install the dependencies `npm install`
* Start the development server `npm run dev`
* Open your browser and go to one of the following pages:
  * `localhost:3000/intro`
  * `localhost:3000/markers`
  * `localhost:3000/directions`


## Troubleshooting
If you encounter the error below when running `npm run dev`:
```
> next dev

sh: 1: next: not found
```
Make sure to install "next" through `npm install next`
