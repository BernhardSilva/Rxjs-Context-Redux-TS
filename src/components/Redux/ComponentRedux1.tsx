//Redux

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser, modifyUser, resetUser } from '../../redux/store'

const ComponentRedux1 = () => {

    const dispatcher = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    return (
        <div>
            <div>
                <button onClick={() => {
                    dispatcher(createUser({
                        name: 'Juan',
                        email: 'juan@gmail.com'
                    }))
                }}>CREATE USER</button>
            </div>
            <hr />
            <div>
                <label>Name: </label><input value={name} onChange={(e) => setName(e.target.value)} />
                <label>Email: </label><input value={email} onChange={(e) => setEmail(e.target.value)} />

                <button onClick={() => {
                    dispatcher(modifyUser({
                        name,
                        email
                    }))
                }}>MODIFY USER</button>
            </div>
            <hr />
            <div>
                <button onClick={() => {
                    dispatcher(resetUser())
                }}>RESET USER</button>
            </div>


        </div>
    )
}

export default ComponentRedux1