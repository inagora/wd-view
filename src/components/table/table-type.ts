export interface StoreProps {
    columns: any,
    dataSource: object,
    bordered: boolean
}

export interface Column {
    title: string,
    dataIndex: string,
    key?: string
}