import '../styles/globals.css';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query'


// create a query client
const queryclient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryclient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  ) 
}

export default MyApp
