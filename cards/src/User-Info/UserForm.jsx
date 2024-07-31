// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './UserForm.module.css'

const UserForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    isSub: false,
  })
  const [error, setError] = useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError('Please fill in all required fields')
      return
    }
    onSubmit(formData)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      gender: '',
      isSub: false,
    })
    setError(null)
  }

  const handleInputChange = event => {
    const { name, value, type, checked } = event.target
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <button type='button' className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
      <h2 className={styles.formTitle}>User Form</h2>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            First Name
            <input
              type='text'
              value={formData.firstName}
              onChange={handleInputChange}
              name='firstName'
              required
              className={styles.input}
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Last Name
            <input
              type='text'
              value={formData.lastName}
              onChange={handleInputChange}
              name='lastName'
              required
              className={styles.input}
            />
          </label>
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Email
            <input
              type='email'
              value={formData.email}
              onChange={handleInputChange}
              name='email'
              required
              className={styles.input}
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Phone
            <input
              type='tel'
              value={formData.phone}
              onChange={handleInputChange}
              name='phone'
              className={styles.input}
            />
          </label>
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Gender
            <select
              value={formData.gender}
              onChange={handleInputChange}
              name='gender'
              className={styles.select}
            >
              <option value=''>Select a gender</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
          </label>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Subscribe News Letter
            <div className={styles.checkboxContainer}>
              <input
                type='checkbox'
                checked={formData.isSub}
                onChange={handleInputChange}
                name='isSub'
                id='isSub'
                className={styles.checkbox}
              />
              <label htmlFor='isSub' className={styles.checkboxLabel}>
                I would like to read news related to BTS
              </label>
            </div>
          </label>
        </div>
      </div>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.submitButtonContainer}>
        <button type='submit' className={styles.submitButton}>
          Save
        </button>
      </div>
    </form>
  )
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default UserForm
