const TableRow = ({ item, column }) => (
	<tr>
		{column.map((columnItem) => {
			if (columnItem.value.includes('.')) {
				const itemSplit = columnItem.value.split('.');

				if (itemSplit[0] === 'avatar') {
					return (
						<div>
							<img
								alt=""
								src={`http://apis.chromeye.com:9191${item[itemSplit[0]][itemSplit[1]]}`}
								className="avatar"
							/>
						</div>
					);
				}

				return <td>{item[itemSplit[0]][itemSplit[1]]}</td>;
			}

			if (columnItem.value === 'email') {
				return (
					<td>
						<a href={`mail to:${item[`${columnItem.value}`]}`}>{item[`${columnItem.value}`]}</a>
					</td>
				);
			}

			return <td>{item[`${columnItem.value}`]}</td>;
		})}
	</tr>
);

export default TableRow;
