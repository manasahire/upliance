import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { saveUserData } from '../features/user/userSlice';
import { v4 as uuidv4 } from 'uuid';
import './userDataForm.css'; // Import the custom CSS file

const UserDataForm = () => {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    name: '',
    address: '',
    email: '',
    phone: '',
  });
  const [isDirty, setIsDirty] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setIsDirty(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveUserData(formData));
    localStorage.setItem('userData', JSON.stringify(formData));
    console.log(formData)
    setIsDirty(false);
    alert('User data saved!');
  };

  return (
    <form onSubmit={handleSubmit} className="user-data-form p-4 rounded">
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Address:</label>
        <input
          type="text"
          className="form-control"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone:</label>
        <input
          type="tel"
          className="form-control"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" onClick={() => handleSubmit} className="btn btn-primary">Submit</button>
    </form>
  );
};

export default UserDataForm;
