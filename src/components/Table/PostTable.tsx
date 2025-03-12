export const PostTable = ({ data }: any) => {
    console.log(data, 'its data')
    return (
        <>
            <h1>Post table</h1>

            <table className="border border-gray-950 w-full text-left bg-white shadow-lg rounded-lg">
                <thead className="bg-gray-200 text-gray-700">
                    <tr>
                        <th className="px-6 py-3 border-b">Id</th>
                        <th className="px-6 py-3 border-b">Title</th>
                        <th className="px-6 py-3 border-b">Author</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-300">
                    {
                        data.map((item: any, index: number) => (
                            <tr key={`${item.id}-${index}`} className="hover:bg-gray-100">
                                <td className="px-6 py-4">{item.id}</td>
                                <td className="px-6 py-4">{item.title}</td>
                                <td className="px-6 py-4">{item.author.fname} {item.author.lname}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </>
    )
}