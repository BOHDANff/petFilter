import React from 'react';

const UserItem = (props) => {


    return (
        <div className="post">
            <div className="post__content">
                <div>Name: {props.post.name}</div>
                <div>Last name: {props.post.lastname}</div>
                <div>Age: {props.post.age}</div>
                <div>Sex: {props.post.sex}</div>
            </div>

        </div>
    );
};

export default UserItem;
