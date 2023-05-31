export interface StoreProps {
	columns: any
	dataSource: object
	bordered: boolean
	originColumns: any
	leftFixedColumns: any
	rightFixedColumns: any
	normalColumns: any
	leftFixedOffset: number
}

export interface Column {
	title: string
	dataIndex: string
	key?: string
}
