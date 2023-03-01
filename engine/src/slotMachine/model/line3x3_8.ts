import { TableLinesOptions } from "./line_base";

export const lineModel: TableLinesOptions = {
	row: 1,
	column: 9,
	payLines: [
		[0, 1, 0, 0, 1, 0, 0, 1, 0],
		[1, 0, 0, 1, 0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0, 1, 0, 0, 1],
		[1, 1, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 1, 1, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 1],
		[0, 0, 1, 0, 1, 0, 1, 0, 0]
	]
}
