export const TablePagination = ({ totalCount, limit }: { totalCount: number, limit: number }) => {
    const totalPages = Math.ceil(totalCount / limit)

    return (
        <>
            <div className="text-2xl">
                {
                    [...Array(totalPages)].map((_, index) => (
                        <button key={index} className="border border-gray-950 p-5">{index+1}</button>
                    ))
                }

            </div>
        </>
    )
}