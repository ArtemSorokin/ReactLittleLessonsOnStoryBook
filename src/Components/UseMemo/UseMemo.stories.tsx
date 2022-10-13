import React, {useCallback, useMemo, useState} from "react";

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

export const UseMemo = ()=> {

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




export const UseMemoaSuSEcALLBACK = ()=> {
    console.log('UseMemoaSuSEcALLBACK')

    const [counter, setCounter] = useState(5)
    const [books, setBooks] = useState(['React', 'Css', 'JS', 'TS'] )


    const addBook =  ()=>{
        let newBook = [...books, 'Angular']
        setBooks(newBook)
    }

    const memory = useMemo(()=>{
        return addBook
    }, [books])

    const memory2= useCallback( ()=>{
        let newBook = [...books, 'Angular']
        setBooks(newBook)
        },   [books] )

    return ( <>
            <button onClick={()=>{setCounter(counter + 1)}}>AddCount</button>
            {counter}
            <Book addBook={memory2}/>
        </> )
}

type BookSecretType = {
    // books:Array<string>
    addBook: ()=>void
}

export const BookSecret = (props:BookSecretType)=> {

    console.log('BooksRendered')
    return( <div>
        <button onClick={()=>props.addBook}>AddBook</button>


        {/*{props.books.map( (b)=> <div>{b}</div>)}*/}
    </div>)

}

const Book = React.memo(BookSecret)
