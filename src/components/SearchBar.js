import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SearchBar = ({ onChangeHandler }) => {
	return (
		<div className="search-bar">
			<Box
				component="form"
				sx={{
					'& > :not(style)': { m: 1, width: '80%' }
				}}
			>
				<TextField
					type="text"
					className="search-bar"
					onChange={onChangeHandler}
					id="standard-basic"
					label="Search"
					placeholder="Enter Keyword"
					variant="standard"
				/>
			</Box>
		</div>
	);
};

export default SearchBar;
