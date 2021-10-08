import React from 'react';

import './SearchBar.css'

const SearchBar = ({placeholder}) => {
    return (
        <div className={'wrapper-for-searchBar'}>
        <div className="input-group mb-3">
            <input className="form-control mr-sm-2" type="search" placeholder={(placeholder === 'users' ? 'Имя, логин ...' :'Код, дата ...')} aria-label="Search"/>
        </div>
            <button className="btn btn-primary btn-lg" type="submit">Поиск</button>
        </div>
    );
};

export default SearchBar;