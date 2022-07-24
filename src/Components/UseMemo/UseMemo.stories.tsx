import React, {useMemo, useState} from "react";

export default {
    title: 'react UseMemo'
}

const MessageCounter = (props: { count: number }) => {
    console.log('MessageCountRender')
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

export const Example = ()=> {

    const [counter, setCounter] = useState(5)
    const [usersIntValue, setUsersInitValue] = useState(['Artem', 'Ivan', 'Ilya', 'Igor'])


    let newUsersArray = useMemo(()=> {
        const newUsersArray = usersIntValue.filter(u=> u.toLocaleLowerCase().indexOf('a') > -1)
        return newUsersArray
    }, [usersIntValue])



    const addNewUser =  ()=>{
        let newUSer = [...usersIntValue, 'sveta']
        setUsersInitValue(newUSer)
    }



    return ( <div>
            <button onClick={()=>{setCounter(counter + 1)}}>AddCount</button>
            <button onClick={()=>addNewUser()}>AddUserToArray</button>
            {counter}
            <MessageCounter count={counter}/>
            <Users users={newUsersArray}/>
        </div>
        )
}



