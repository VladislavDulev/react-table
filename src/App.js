import { useEffect, useState } from 'react';
import { column } from './components/Table/Column';
import './App.css';
import axios from 'axios';
import Table from './components/Table/Table';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import SingleSelect from './components/SingleSelect';

function App() {
	const [ dataTable, setDataTable ] = useState([]);
	const [ query, setQuery ] = useState('');

	const [ currentPage, setCurrentPage ] = useState(1);
	const [ peoplePerPage, setPeoplePerPage ] = useState(3);

	useEffect(() => {
		axios('http://apis.chromeye.com:9191/people')
			.then((res) => setDataTable(res.data))
			.catch((err) => console.log(err));
	}, []);

	const search = (data) => {
		return data.filter(
			(item) => item.firstName.toLowerCase().includes(query) || item.lastName.toLowerCase().includes(query)
		);
	};

	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	const onChangeHandler = (e) => setQuery(e.target.value);

	const changePeoplePerPageValue = (newValue) => {
		setPeoplePerPage(newValue);
	};

	const indexOfLastPerson = currentPage * peoplePerPage;
	const indexOfFirstPerson = indexOfLastPerson - peoplePerPage;
	const currentPeople = dataTable.slice(indexOfFirstPerson, indexOfLastPerson);

	return (
		<div className="App">
			<div className="searchbar-wrapper">
				<SearchBar onChangeHandler={onChangeHandler} className="search-bar" />
				<SingleSelect changePeoplePerPage={changePeoplePerPageValue} totalPeople={dataTable.length} />
			</div>
			<Table data={search(currentPeople)} column={column} />
			<Pagination peoplePerPage={peoplePerPage} totalPeople={dataTable.length} paginate={paginate} />
			<div />
		</div>
	);
}

export default App;
