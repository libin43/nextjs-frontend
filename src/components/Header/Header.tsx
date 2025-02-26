'use client'
import { GET_ALL_POSTS } from "@/lib/graphql/queries/getAllPost"
import { useQuery } from "@apollo/client"

export const Header = () => {

    const {data, loading, error} = useQuery(GET_ALL_POSTS, {variables: {page: 1, limit: 5}})

    console.log(data, 'data got in header')


    if(loading){
        return<>Loading.......</>
    }
    if(data){
        console.log(data, 'got data')
    }
    return(
        <>
        <h1>Header</h1>
        </>
    )
}