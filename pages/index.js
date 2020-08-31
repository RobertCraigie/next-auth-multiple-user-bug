import useSWR from 'swr';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Page() {
  const [session, loading] = useSession();

  const { data } = useSWR('/api/users', (url) => fetch(url).then((r) => r.json()))

  if (session) {
    return (
      <div>
        <p>Signed in as {session.user.name || session.user.email}</p>
        <button onClick={signIn}>Sign in</button>
        <button onClick={signOut}>Sign out</button>
        <pre>{JSON.stringify({ users: data }, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div>
      <p>Not signed in</p>
      <button onClick={signIn}>Sign in</button>
    </div>
  );
}
