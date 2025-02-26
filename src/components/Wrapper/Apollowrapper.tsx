'use client'
import { ApolloProvider } from "@apollo/client"
import client from "@/lib/graphql/apollo-client"

export const Apollowrapper = ({children}: any) => {

    return <ApolloProvider client={client}>{children}</ApolloProvider>
}