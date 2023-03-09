import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useTypesSelector } from '../hooks/useTypesSelector';
import { fetchUsers } from '../store/action-creators/user';

const UserList: React.FC = () =>  {
    const {users, error, loading} = useTypesSelector(state => state.user)
    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(fetchUsers() as any)
    }, [])

    if (loading) {
      return <h1>Идёт загрузка...</h1>
    }

    if (error) {
      return <h1>{error}</h1>
    }

    
    
    return (
      <div>
        {users.map(user =>
          <div key={user.id}>{user.name}</div>
        )}
      </div>
    )
}

export default UserList