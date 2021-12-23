import React, {useEffect, useRef, useState} from 'react';
import './styles/App.css';
import {useUsers} from "./hooks/useUsers";
import {useFetching} from "./hooks/useFetching";
import UserService from "./API/UserService";
import {getPageCount} from "./utils/pages";
import {useObserver} from "./hooks/useObserver";
import UserFilter from "./components/UserFilter";
import UserList from "./components/UserList";
import Loader from "./components/UI/Loader/Loader";

function App() {
    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const sortedUsers = useUsers(users, filter.sort, filter.query);
    const [isCheckm, setIsCheckm] = useState(false);
    const [isCheckf, setIsCheckf] = useState(false);
    const lastElement = useRef()

    const [fetchUsers, isUsersLoading, userError] = useFetching(async (limit, page) => {
        const response = await UserService.getAll(limit, page);
        setUsers([...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })

    useObserver(lastElement, page < totalPages, isUsersLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchUsers(limit, page)
    }, [page, limit])

    function sortBy(sortParam,e){
        setFilter({...filter, query: '', sort: ''})
        setFilter(({...filter, query: e.target.value, sort: sortParam}))
    }


    return (
        <div className="App">
            <UserFilter
                filter={filter}
                sortBy={sortBy}
                setFilter={setFilter}
                isCheckm={isCheckm}
                setIsCheckm={setIsCheckm}
                isCheckf={isCheckf}
                setIsCheckf={setIsCheckf}

            />
            {userError &&
            <h1>Произошла ошибка ${userError}</h1>
            }
            <UserList title="Users" users={sortedUsers} f={filter}/>
            <div ref={lastElement}/>
            {isUsersLoading &&
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            }
        </div>
    );
}

export default App;
