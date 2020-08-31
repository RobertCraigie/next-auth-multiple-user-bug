import '../styles/globals.css'

import { Provider } from 'next-auth/client';

function App({ Component, pageProps }) {
  return (
    <Provider
      options={{
        // Update session cache every 1 minute
        clientMaxAge: 60,
        keepAlive: 0,
      }}
      session={pageProps.session}
    >
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
