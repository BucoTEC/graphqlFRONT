import BookList from "./components/BookList";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});



function App() {
  return (
    <ApolloProvider client={client}>

    <div >
      <h1>test</h1>
      <BookList/>
    </div>
    </ApolloProvider>
  );
}

export default App;
