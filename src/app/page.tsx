import Example from '&/example/Client';
import { fetchActors } from '~/requests/actors';

export default async function Home() {
  const actors = await fetchActors();

  return (
    <main>
      {/* <Example /> */}
      {/* <div>
        {actors.map((res, index) => (
          <div key={index}>
            <div>ID: {res.actorId}</div>
            <div>First Name: {res.firstName}</div>
            <div>Last Name: {res.lastName}</div>
            <div>Last Update: {res.lastUpdate}</div>
          </div>
        ))}
      </div> */}
    </main>
  );
}
