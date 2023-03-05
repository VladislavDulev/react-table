import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Pagination = ({ peoplePerPage, totalPeople, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPeople / peoplePerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className="pagination">
				{pageNumbers.map((number) => (
					<ButtonGroup variant="outlined" aria-label="outlined button group">
						<Button onClick={() => paginate(number)} variant="text">
							{number}
						</Button>
					</ButtonGroup>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
