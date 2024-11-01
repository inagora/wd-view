const isFuction = (obj) => {
	return obj instanceof Function;
};
const isArray = (obj) => {
	return Array.isArray(obj);
};
// 拉平嵌套对象的函数
const flattenObject = (obj, parentKey = '') => {
	return Object.keys(obj).reduce((acc, key) => {
		const prefixedKey = parentKey ? `${parentKey}.${key}` : key;
		if (
			typeof obj[key] === 'object' &&
			!Array.isArray(obj[key]) &&
			obj[key] !== null
		) {
			Object.assign(acc, flattenObject(obj[key], prefixedKey));
		} else {
			acc[prefixedKey] = obj[key];
		}
		return acc;
	}, {});
};
let hasExportRender = false;
const download = async (columns, records = []) => {
	// 使用exceljs导出
	const workbook = new ExcelJS.Workbook();
	workbook.created = new Date();
	workbook.modified = new Date();
	const sheet = workbook.addWorksheet('default');
	sheet.properties.defaultRowHeight = 25;
	let _columns = [];
	let enumColumns = null;
	columns.forEach((column) => {
		if (column.exportRender) {
			hasExportRender = true;
		}
	});
	for (let i = 0; i < columns.length; i++) {
		const column = columns[i];
		if ((column.dataIndex || column.title) && column.dataIndex !== 'action') {
			_columns.push({
				header: column.title || column.dataIndex,
				key: column.dataIndex,
			});
			if (column.exportRender) {
				_columns[_columns.length - 1].exportRender = column.exportRender;
			}
			if (column.valueEnum) {
				if (enumColumns === null) enumColumns = {};
				let valueEnum = {};
				if (isFuction(column.valueEnum)) {
					valueEnum = await Promise.resolve(column.valueEnum());
				} else {
					valueEnum = column.valueEnum;
				}
				if (isArray(valueEnum)) {
					valueEnum = valueEnum.reduce((prev, curr) => {
						prev[curr.value] = curr.label;
						return prev;
					}, {});
				}
				enumColumns[column.dataIndex] = valueEnum;
			}
		}
	}
	let _records = [];
	if (enumColumns) {
		_records = records.map((record) => {
			let item = {};
			Object.keys(record).forEach((key) => {
				if (enumColumns[key]) {
					item[key] = enumColumns[key][record[key]] || record[key];
				} else {
					item[key] = record[key];
				}
			});
			item = flattenObject(item);
			return item;
		});
	} else {
		_records = records.map((r) => {
			return flattenObject(r);
		});
	}
	if (hasExportRender) {
		_records = _records.map((record) => {
			let item = {};
			Object.keys(record).forEach((key) => {
				let column = _columns.find((column) => column.key === key);
				if (column && column.exportRender) {
					item[key] = column.exportRender(record[key], record);
				} else {
					item[key] = record[key];
				}
			});
			return item;
		});
	}
	sheet.columns = _columns;
	let data = _records;
	sheet.addRows(data);
	// columns.forEach((column) => {
	//   const col = sheet.getColumn(column.dataIndex);
	//   col.eachCell((cell, rowNumber) => {
	//     if (column.bgColor) {
	//       cell.fill = {
	//         type: "gradient",
	//         gradient: "angle",
	//         degree: 0,
	//         stops: [{ position: 0, color: { argb: column.bgColor } }],
	//       };
	//       cell.alignment = {
	//         wrapText: true,
	//       };
	//       cell.border = {
	//         top: { style: "thin" },
	//         left: { style: "thin" },
	//         bottom: { style: "thin" },
	//         right: { style: "thin" },
	//       };
	//       if (rowNumber === 1) {
	//         cell.alignment = {
	//           vertical: "middle",
	//           horizontal: "center",
	//           wrapText: true,
	//         };
	//       }
	//     }
	//   });
	// });
	const file = Date.now() + '.xlsx';

	workbook.xlsx.writeBuffer(file).then(function (value) {
		const blob = new Blob([value], {
			type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		});
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.style.display = 'none';
		link.href = url;
		link.setAttribute('download', file);

		document.body.appendChild(link);
		link.click();
		//释放URL对象所占资源
		window.URL.revokeObjectURL(url);
		//用完即删
		document.body.removeChild(link);
	});
};
export default download;
