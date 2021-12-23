import {useMemo} from "react";



export const useUsers = (users, sortBy, query) => {


    const sortedUsers = useMemo(() => {
        if (sortBy=='name'){
        return users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()))}
        else if(sortBy=='lastname'){
            return users.filter(user => user.lastname.toLowerCase().includes(query.toLowerCase()))}
        else if(sortBy=='age'){
            return users.filter(user => user.age.toString().includes(query))}
        else if(sortBy=='sex'){
            return users.filter(user => user.sex.includes(query))}
    }, [query])

    if (sortedUsers == undefined ) {
        return users}
    else {
        return sortedUsers;
    }
}
