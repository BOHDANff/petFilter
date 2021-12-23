import {useMemo} from "react";



export const useUsers = (users, sortBy, query) => {


    const sortedUsers = useMemo(() => {
        if (sortBy=='name'){
            console.log(users.filter(user => user.name.toLowerCase().includes(query.toLowerCase())))
        return users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()))}
        else if(sortBy=='lastname'){
            return users.filter(user => user.lastname.toLowerCase().includes(query.toLowerCase()))}
        else if(sortBy=='age' && query.length>0){
            console.log(query.length)
            console.log(users.filter(user => user.age.toString()==query))
            return (users.filter(user => user.age.toString()==query))}
        else if(sortBy=='sex'){
            return users.filter(user => user.sex.includes(query))}
        else if(sortBy=='age' && query.length==0){
            return users}
    }, [query])

    if (sortedUsers == undefined ) {
        return users}
    else {
        return sortedUsers;
    }
}
