import { fetchActors } from '~/requests/users';

// import Example from '&/example/Client';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const actors = await fetchActors();

  return (
    <main>
      {/* <Example /> */}
      <div>
        {actors.map((res, index) => (
          <div key={index}>
            <div>User ID: {res.userId}</div>
            <div>User Name: {res.userName}</div>
            <div>E-mail : {res.email}</div>
            <div>Created At: {res.createdAt}</div>
            <div>Now Active : {res.isActive}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
