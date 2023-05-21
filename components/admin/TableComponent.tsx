import {
    Column,
    Table as ReactTable,
    PaginationState,
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    ColumnDef,
    OnChangeFn,
    flexRender,
} from '@tanstack/react-table'
import React from 'react'

export default function TableComponent({ data, displayData }: any) {
    const columns = React.useMemo<ColumnDef<any>[]>(
        () => [
            {
                header: '상품명',
                accessorKey: 'productName',
                // @ts-ignore
                cell: info => info.getValue(),
            },
            {
                header: '제조사',
                accessorKey: 'manufacturerName',
                // @ts-ignore
                cell: info => info.getValue(),
            },
            {
                header: '판매종류(대분류)',
                accessorKey: 'productCategory',
                // @ts-ignore
                cell: info => info.getValue(),
            },
            {
                header: '주문번호',
                accessorKey: 'orderId', //바꿔야된다;;;
                // @ts-ignore
                cell: info => info.getValue(),
            },
            {
                header: '주문일자',
                accessorKey: 'deliveryTime',
                // @ts-ignore
                cell: info => info.getValue(),
            },
            {
                header: '처리상태',
                accessorKey: 'deliveryState',
                // @ts-ignore
                cell: info => info.getValue(),
            },
            {
                header: '주문갯수',
                accessorKey: 'quantity',
                // @ts-ignore
                cell: info => info.getValue(),
            },
            {
                header: '주문금액',
                accessorKey: 'cost',
                // @ts-ignore
                cell: info => info.getValue(),
            },
            {
                header: '송장번호',
                accessorKey: 'paymentId',
                // @ts-ignore
                cell: info => info.getValue(),
            },
        ],
        []
    )

    // 검색 결과에 따라 data 값을 설정
    return (
        <>
            <Table
                {...{
                    data,
                    columns,
                    displayData
                }}
            />
            <hr />
        </>
    )
}

function Table({
    data,
    columns,
    displayData
}: {
    data: any
    columns: ColumnDef<any>[],
    displayData: any
}) {
    const tableData = React.useMemo(() => {
        if (displayData) {
            // 검색 결과가 있으면 displayData를 사용
            return displayData;
        } else {
            // 검색 결과가 없으면 기존의 data.histories를 사용
            return data?.histories;
        }
    }, [data, displayData]);


    const pageCount = Math.ceil(data.dataTotalCount / 10)

    const table = useReactTable({
        data: tableData,
        columns,
        pageCount,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        debugTable: true,
    });
    return (
        <div className="p-2">
            <div className="h-2" />
            <table className="w-full mt-10 py-5">
                <thead>
                    {/* @ts-ignore */}
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr
                            className="border"
                            key={headerGroup.id}
                        >
                            {/* @ts-ignore */}
                            {headerGroup.headers.map(header => {
                                return (
                                    <th
                                        className="px-10 py-5 border-r"
                                        key={header.id} colSpan={header.colSpan}>
                                        {header.isPlaceholder ? null : (
                                            <div>
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                            </div>
                                        )}
                                    </th>
                                )
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {/* @ts-ignore */}
                    {table.getRowModel().rows.map(row => {
                        return (
                            <tr
                                className="border text-center h-10 text-sm"
                                key={row.id}>
                                {/* @ts-ignore */}
                                {row.getVisibleCells().map(cell => {
                                    return (
                                        <td
                                            className="border"
                                            key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="h-2" />
            <div className="flex items-center gap-2 absolute bottom-3">
                <button
                    className="border rounded p-1"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<<'}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<'}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {'>'}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                >
                    {'>>'}
                </button>
                <span className="flex items-center gap-1">
                    <div>Page</div>
                    <strong>
                        {table.getState().pagination.pageIndex + 1} of{' '}
                        {table.getPageCount()}
                    </strong>
                </span>
            </div>
        </div>
    )
}