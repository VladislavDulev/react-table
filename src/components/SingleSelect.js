import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const SingleSelect = ({ changePeoplePerPage, totalPeople }) => {
	const [ itemsPerPage, setItemsPerPage ] = useState('');

	const handleChange = (event) => {
		setItemsPerPage(event.target.value);
		changePeoplePerPage(event.target.value);
	};

	return (
		<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
			<InputLabel id="demo-simple-select-standard-label">Per page</InputLabel>
			<Select value={itemsPerPage} onChange={handleChange}>
				<MenuItem value={1}>1</MenuItem>
				<MenuItem value={3}>3</MenuItem>
				<MenuItem value={5}>5</MenuItem>
				<MenuItem value={totalPeople}>all</MenuItem>
			</Select>
		</FormControl>
	);
};

export default SingleSelect;
