import React, {useState} from "react";

export default {
    title: 'react memo demo'
}

const MessageCounter = (props: { count: number }) => {
    return (<div>
            {props.count}
        </div>
    )
}


const UsersArrayToRender = (props: {users: Array<string>})=> {

    console.log('UsersRendered')
    return( <div>
        {props.users.map( (u) => <div>{u}</div>)}
    </div>)

}

const Users = React.memo(UsersArrayToRender)

export const Example1 = ()=> {
    const [counter, setCounter] = useState(5)
    const [usersIntValue, setUsersInitValue] = useState(['Artem', 'Ivan', 'Ilya'])

    return ( <div>
            <button onClick={()=>{setCounter(counter + 1)}}>Add</button>
            <MessageCounter count={counter}/>
            <Users users={usersIntValue}/>
        </div>
        )
}



