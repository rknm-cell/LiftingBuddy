import { Stack } from "expo-router";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://kaltenfliess.us-east-a.ibm.stepzen.net/api/right-camel/__graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization:
        'apikey kaltenfliess::local.net+1000::2244442da8e14345ca4fa07fbfd9085eadda1bc34ba2007f641a539534a2b46b'
    }
  });


const RootLayout = () => {
    return (
    <ApolloProvider client={client}>
    <Stack />
    </ApolloProvider>
    )
}

export default RootLayout;