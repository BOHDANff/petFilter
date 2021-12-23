import React from 'react';
import MyInput from "./UI/input/MyInput";

const UserFilter = ({filter, sortBy, setFilter, isCheckm, setIsCheckm, setIsCheckf, isCheckf}) => {
    return (
        <div>
            <div>Имя
            <MyInput
                onBlur={e => {
                    e.target.value=''
                    setFilter({...filter, query: ''})}
                }
                onChange={e => sortBy('name',e)}
                placeholder="Поиск..."
            />

            </div>
            <div>Фамилия
                <MyInput
                    onBlur={e => {
                        e.target.value=''
                        setFilter({...filter, query: ''})}
                    }
                    onChange={e => sortBy('lastname',e)}
                    placeholder="Поиск..."
                />
            </div>

            <div>Возраст
                <MyInput
                    onBlur={e => {
                        e.target.value=''
                        setFilter({...filter, query: '', sort:''})}
                    }
                    onChange={e => {sortBy('age',e)
                    console.log(filter)}}
                    placeholder="Поиск..."
                />
            </div>
            <div>
                <span style={{paddingRight: 20}}>Пол</span>
                м
                <input style={{marginRight: 5}} type="checkbox"
                       checked={isCheckm}
                        onChange={e => {setIsCheckm(prev=>!prev)
                        console.log(isCheckm)
                       if(isCheckm){
                           setFilter({...filter, query: '', sort: ''})
                       }
                       else{setFilter({...filter, query: '', sort: ''})
                           setFilter(({...filter, query: 'm', sort: 'sex'}))

                       }}}
                       onBlur={() => {
                           setFilter({...filter, query: ''})
                           setIsCheckm(false)
                       }
                       }
                />
                ж
                <input type="checkbox"
                       checked={isCheckf}
                       onChange={e => {setIsCheckf(prev=>!prev)
                           console.log(isCheckf)
                           if(isCheckf){
                               setFilter({...filter, query: '', sort: ''})
                           }
                           else{setFilter({...filter, query: '', sort: ''})
                               setFilter(({...filter, query: 'f', sort: 'sex'}))

                           }}}
                       onBlur={() => {
                           setFilter({...filter, query: ''})
                           setIsCheckf(false)
                       }
                       }
                />
            </div>

        </div>
    );
};

export default UserFilter;
