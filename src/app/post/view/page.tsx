'use client'

import { TablePagination } from "@/components/Pagination/TablePagination";
import { PostTable } from "@/components/Table/PostTable";
import { GET_ALL_POSTS } from "@/lib/graphql/queries/getAllPost";
import { useQuery } from "@apollo/client";

export default function ViewPost() {

    const page = 1
    const limit = 5
    const {data, loading, error} = useQuery(GET_ALL_POSTS, {variables: {page, limit}})
    if(loading) return <h1>Loading...</h1>

    if(!data || error) return <h1>Something went wrong..</h1>
    
    if(data){
        return (
            <>
                <h1>View Post</h1>
                <div className="text-4xl">
    
                <PostTable data = {data.getAllPosts.data}/>
                </div>
                <div>
                    <TablePagination totalCount={data.getAllPosts.totalCount} limit={limit}/>
                </div>
            </>
        )
    }


}