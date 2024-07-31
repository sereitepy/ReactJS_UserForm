// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import UserList from './User-Info/UserList'
import UserForm from './User-Info/UserForm'
import styles from './App.module.css'

function App() {
  const [users, setUsers] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingUser, setEditingUser] = useState(null)

  const handleAddUser = () => {
    setShowForm(true)
    setEditingUser(null)
  }

  const handleSubmit = formData => {
    if (editingUser) {
      setUsers(users.map(user => (user === editingUser ? formData : user)))
    } else {
      setUsers([...users, formData])
    }
    setShowForm(false)
    setEditingUser(null)
  }

  const handleEdit = user => {
    setEditingUser(user)
    setShowForm(true)
  }

  const handleDelete = userToDelete => {
    setUsers(users.filter(user => user !== userToDelete))
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setEditingUser(null)
  }

  return (
    <div className={styles.appContainer}>
      <button onClick={handleAddUser} className={styles.addUserButton}>
        Add User
      </button>
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
      {showForm && (
        <UserForm
          onSubmit={handleSubmit}
          onClose={handleCloseForm}
          initialData={editingUser}
        />
      )}
    </div>
  )
}

export default App
