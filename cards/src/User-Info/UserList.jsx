// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import styles from './UserList.module.css'

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className={styles.userListContainer}>
      <h2 className={styles.listTitle}>User List</h2>
      <table className={styles.userTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Subscription</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan='6' className={styles.emptyMessage}>
                No users added yet
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={index}>
                <td>{`${user.firstName} ${user.lastName}`}</td>
                <td>{user.email}</td>
                <td>{user.phone || '-'}</td>
                <td>{user.gender || '-'}</td>
                <td>{user.isSub ? 'Yes' : 'No'}</td>
                <td>
                  <button
                    onClick={() => onEdit(user)}
                    className={styles.actionButton}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(user)}
                    className={styles.actionButton}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string,
      gender: PropTypes.string,
      isSub: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default UserList
