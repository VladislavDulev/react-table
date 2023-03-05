import './table.css';
import TableHeadItem from './TableHeadItem';
import TableRow from './TableRow';

const Table = ({ data, column }) => {
	return (
		<table className="table">
			<thead>
				<tr>{column.map((item) => <TableHeadItem item={item} />)}</tr>
			</thead>

			{data.map((item) => <TableRow item={item} column={column} />)}
		</table>
	);
};

export default Table;
