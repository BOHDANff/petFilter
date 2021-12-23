import React from 'react';
import UserItem from "./UserItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const UserList = ({users, title}) => {

    if (!users.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Users not found!
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>

            {users.map((post, index) =>

                <UserItem classNames="post" key={index} number={index + 1} post={post}/>
            )}

        </div>
    );
};

export default UserList;
