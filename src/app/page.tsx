export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        <li>
          <a href="/intro">Intro to Google Maps in React</a>
        </li>
        <li>
          <a href="/markers">Clustered Markers</a>
        </li>
        <li>
          <a href="/directions">Directions</a>
        </li>
      </ul>
    </main>
  );
}
