import { FC } from "react";

interface IPagination {
    startIndex: number,
    maxResult: number,
    totalItems: number,
    handlePage: (page: number) => void
}

const Pagination: FC<IPagination> = ({
    startIndex,
    maxResult,
    totalItems,
    handlePage
}) => {

    const currentPage = startIndex;
    const totalPages = Math.ceil(totalItems / maxResult);

    return (
        <div className="pagination__container">
            <button onClick={() => handlePage(currentPage - 1)} disabled={currentPage <= 1}>Prev</button>
            {
                currentPage > 3 ?
                    <>
                        ...
                        {
                            Array.from(Array(3).keys()).reverse().map(key => (
                                <button key={"prev" + key} onClick={() => handlePage(currentPage - key - 1)}>{currentPage - key - 1}</button>
                            ))
                        }
                    </>
                    :
                    currentPage > 1 ? <>,,,</> : null
            }
            <button onClick={() => handlePage(currentPage)} className="currentPage">{currentPage}</button>
            {
                currentPage < totalPages - 3 ?
                    <>
                        {

                            Array.from(Array(3).keys()).map(key => (
                                <button key={"next" + key} onClick={() => handlePage(currentPage + key + 1)}>{currentPage + key + 1}</button>
                            ))
                        }
                        ...
                    </>
                    :
                    currentPage < totalPages ? <>,,,</> : null
            }
            <button onClick={() => handlePage(currentPage + 1)} disabled={currentPage >= totalPages}>Next</button>
        </div>
    )
}

export default Pagination;