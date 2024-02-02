import { fetchActors } from '~/requests/actors';
import { addActor } from '~/requests/addActor';
import styles from './page.module.css';

export default async function Home() {
  const actors = await fetchActors();
  const add = await addActor('te', 'st');

  return (
    <main className={styles.main}>
      <div>
        {actors.map((res, index) => (
          <div key={index}>
            <div>ID: {res.actorId}</div>
            <div>First Name: {res.firstName}</div>
            <div>Last Name: {res.lastName}</div>
            <div>Last Update: {res.lastUpdate}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
