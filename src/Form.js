// import React, { useState } from 'react';
// import './form.css';
// import { Navigate, useNavigate } from 'react-router-dom';
// function FormComponent() {
//   const [formData, setFormData] = useState({
//     Name: '',
//     Age: '1',
//     Mobile_No: '',
//     Email: '',
//     Gender: '',
//   });
//   const navigate = useNavigate()
//   const [formErrors, setFormErrors] = useState({});
//   const [submit, setSubmit] = useState(0);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [submittedData, setSubmittedData] = useState(null);

//   const validateForm = () => {
//     const errors = {};

//     if (!formData.Name.trim()) {
//       errors.Name = 'This field is required';
//     }

//     if (!formData.Age) {
//       errors.Age = 'This field is required';
//     } else {
//       const age = parseInt(formData.Age, 10);
//       if (isNaN(age) || age < 1 || age > 30) {
//         errors.Age = 'Age must be between 1 and 30';
//       }
//     }

//     if (!formData.Email.trim()) {
//       errors.Email = 'This field is required';
//     } else {
//       const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
//       if (!emailRegex.test(formData.Email)) {
//         errors.Email = 'Invalid email format';
//       }
//     }

//     if (!formData.Mobile_No.trim()) {
//       errors.Mobile_No = 'This field is required';
//     } else if (!/^\d{10}$/.test(formData.Mobile_No)) {
//       errors.Mobile_No = 'Mobile number must be exactly 10 digits';
//     }

//     if (!formData.Gender) {
//       errors.Gender = 'This field is required';
//     }

//     return errors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     // Clear error as user types
//     setFormErrors((prev) => ({ ...prev, [name]: '' }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const errors = validateForm();
//     setFormErrors(errors);

//     if (Object.keys(errors).length > 0) {
//       return;
//     }

//     setSubmit((prevCount) => prevCount + 1);
//     setSuccessMessage('Form submitted successfully!');
//     setSubmittedData(formData);

//     setFormData({
//       Name: '',
//       Age: '1',
//       Mobile_No: '',
//       Email: '',
//       Gender: '',
//     });

//     setTimeout(() => setSuccessMessage(''), 3000);
//     navigate('/submitted', { state: formData });

//   };

//   return (
//     <div className="form-container">
//       <form onSubmit={handleSubmit} className="form">
//         <h2>Form</h2>

//         <div className="form-row">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="Name"
//             value={formData.Name}
//             onChange={handleChange}
//           />
//           {formErrors.Name && <span className="error">{formErrors.Name}</span>}
//         </div>

//         <div className="form-row">
//           <label>Age:</label>
//           <select name="Age" value={formData.Age} onChange={handleChange}>
//             <option value="">Select Age</option>
//             {Array.from({ length: 30 }, (_, i) => i + 1).map((age) => (
//               <option key={age} value={age}>{age}</option>
//             ))}
//           </select>
//           {formErrors.Age && <span className="error">{formErrors.Age}</span>}
//         </div>

//         <div className="form-row">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="Email"
//             value={formData.Email}
//             onChange={handleChange}
//           />
//           {formErrors.Email && <span className="error">{formErrors.Email}</span>}
//         </div>

//         <div className="form-row">
//           <label>Mobile No:</label>
//           <input
//   type="text"
//   name="Mobile_No"
//   value={formData.Mobile_No}
//   onChange={handleChange}
//   onInput={(e) => {
//     e.target.value = e.target.value.replace(/[^0-9]/g, '');
//   }}
//   maxLength="10"
// />

//           {formErrors.Mobile_No && <span className="error">{formErrors.Mobile_No}</span>}
//         </div>

//         <div className="form-row">
//           <label>Gender:</label>
//           <div className="radio-group">
//             {['Male', 'Female', 'Other'].map((gender) => (
//               <label key={gender} style={{ marginRight: '10px' }}>
//                 <input
//                   type="radio"
//                   name="Gender"
//                   value={gender}
//                   checked={formData.Gender === gender}
//                   onChange={handleChange}
//                 />
//                 {gender}
//               </label>
//             ))}
//           </div>
//           {formErrors.Gender && <span className="error">{formErrors.Gender}</span>}
//         </div>

//         <button type="submit">Submit</button>
//       </form>

//       {successMessage && <p className="success-message">{successMessage}</p>}

//       <div>
//         <p>The number of submissions is: {submit}</p>
//       </div>

//       {submittedData && (
//         <div className="submitted-data">
//           <h3>Submitted Data:</h3>
//           <p><strong>Name:</strong> {submittedData.Name}</p>
//           <p><strong>Age:</strong> {submittedData.Age}</p>
//           <p><strong>Email:</strong> {submittedData.Email}</p>
//           <p><strong>Mobile No:</strong> {submittedData.Mobile_No}</p>
//           <p><strong>Gender:</strong> {submittedData.Gender}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default FormComponent;



// Form.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './form.css';

// function Form({ setSubmittedData }) {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     Name: '',
//     Age: '1',
//     Mobile_No: '',
//     Email: '',
//     Gender: '',
//   });

//   const [formErrors, setFormErrors] = useState({});

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.Name.trim()) errors.Name = 'Required';
//     if (!formData.Age || isNaN(+formData.Age) || +formData.Age < 1 || +formData.Age > 30)
//       errors.Age = 'Age must be 1-30';
//     if (!formData.Email.trim() || !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(formData.Email))
//       errors.Email = 'Invalid email';
//     if (!/^\d{10}$/.test(formData.Mobile_No)) errors.Mobile_No = '10 digits required';
//     if (!formData.Gender) errors.Gender = 'Required';
//     return errors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setFormErrors({ ...formErrors, [name]: '' });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = validateForm();
//     setFormErrors(errors);
//     if (Object.keys(errors).length > 0) return;
//     setSubmittedData(formData);
//     navigate('/submitted');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form">
//       <h2>Registration Form</h2>
//       <div className="form-row">
//         <label>Name:</label>
//         <input type="text" name="Name" value={formData.Name} onChange={handleChange} />
//         {formErrors.Name && <span className="error">{formErrors.Name}</span>}
//       </div>

//       <div className="form-row">
//         <label>Age:</label>
//         <select name="Age" value={formData.Age} onChange={handleChange}>
//           <option value="">Select</option>
//           {[...Array(30)].map((_, i) => (
//             <option key={i + 1} value={i + 1}>{i + 1}</option>
//           ))}
//         </select>
//         {formErrors.Age && <span className="error">{formErrors.Age}</span>}
//       </div>

//       <div className="form-row">
//         <label>Email:</label>
//         <input type="email" name="Email" value={formData.Email} onChange={handleChange} />
//         {formErrors.Email && <span className="error">{formErrors.Email}</span>}
//       </div>

//       <div className="form-row">
//         <label>Mobile No:</label>
//         <input type="text" name="Mobile_No" maxLength="10"
//           value={formData.Mobile_No} onChange={handleChange}
//           onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ''))} />
//         {formErrors.Mobile_No && <span className="error">{formErrors.Mobile_No}</span>}
//       </div>

//       <div className="form-row">
//         <label>Gender:</label>
//         <div className="radio-group">
//           {['Male', 'Female', 'Other'].map(g => (
//             <label key={g}><input type="radio" name="Gender" value={g} checked={formData.Gender === g} onChange={handleChange} /> {g}</label>
//           ))}
//         </div>
//         {formErrors.Gender && <span className="error">{formErrors.Gender}</span>}
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;






// src/Form.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './form.css';

// export default function Form({ onSubmit }) {
//   const [formData, setFormData] = useState({
//     Name: '',
//     Age: '1',
//     Mobile_No: '',
//     Email: '',
//     Gender: '',
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validate = () => {
//     const errs = {};
//     if (!formData.Name.trim()) errs.Name = 'Required';
//     const age = parseInt(formData.Age, 10);
//     if (!formData.Age || isNaN(age) || age < 1 || age > 30)
//       errs.Age = '1–30';
//     if (!formData.Email) errs.Email = 'Required';
//     else if (!/^[^@]+@[^@]+\.[^@]+$/.test(formData.Email))
//       errs.Email = 'Invalid email';
//     if (!/^\d{10}$/.test(formData.Mobile_No))
//       errs.Mobile_No = '10 digits';
//     if (!formData.Gender) errs.Gender = 'Required';
//     return errs;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errs = validate();
//     setErrors(errs);
//     if (Object.keys(errs).length) return;

//     // lift data up
//     onSubmit(formData);

//     // clear or keep as you like…
//     setFormData({
//       Name: '',
//       Age: '1',
//       Mobile_No: '',
//       Email: '',
//       Gender: '',
//     });

//     // now navigate
//     navigate('/submitted');
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((p) => ({ ...p, [name]: value }));
//     setErrors((p) => ({ ...p, [name]: '' }));
//   };

//   return (
//     <form className="form" onSubmit={handleSubmit}>
//       <div className="form-row">
//         <label>Name:</label>
//         <input name="Name" value={formData.Name} onChange={handleChange} />
//         {errors.Name && <span className="error">{errors.Name}</span>}
//       </div>

//       <div className="form-row">
//         <label>Age:</label>
//         <select name="Age" value={formData.Age} onChange={handleChange}>
//           {Array.from({ length: 30 }, (_, i) => i + 1).map((n) => (
//             <option key={n} value={n}>{n}</option>
//           ))}
//         </select>
//         {errors.Age && <span className="error">{errors.Age}</span>}
//       </div>

//       <div className="form-row">
//         <label>Email:</label>
//         <input
//           type="email"
//           name="Email"
//           value={formData.Email}
//           onChange={handleChange}
//         />
//         {errors.Email && <span className="error">{errors.Email}</span>}
//       </div>

//       <div className="form-row">
//         <label>Mobile No:</label>
//         <input
//           type="text"
//           name="Mobile_No"
//           value={formData.Mobile_No}
//           onChange={(e) =>
//             setFormData((p) => ({
//               ...p,
//               Mobile_No: e.target.value.replace(/[^0-9]/g, ''),
//             }))
//           }
//           maxLength={10}
//         />
//         {errors.Mobile_No && <span className="error">{errors.Mobile_No}</span>}
//       </div>

//       <div className="form-row">
//         <label>Gender:</label>
//         <div className="radio-group">
//           {['Male', 'Female', 'Other'].map((g) => (
//             <label key={g}>
//               <input
//                 type="radio"
//                 name="Gender"
//                 value={g}
//                 checked={formData.Gender === g}
//                 onChange={handleChange}
//               />{' '}
//               {g}
//             </label>
//           ))}
//         </div>
//         {errors.Gender && <span className="error">{errors.Gender}</span>}
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }



// Git-hub Code


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';

export default function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    Name: '',
    Age: '1',
    Mobile_No: '',
    Email: '',
    Gender: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!formData.Name.trim()) errs.Name = 'Required';
    const age = parseInt(formData.Age, 10);
    if (!formData.Age || isNaN(age) || age < 1 || age > 30)
      errs.Age = '1–30';
    if (!formData.Email) errs.Email = 'Required';
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(formData.Email))
      errs.Email = 'Invalid email';
    if (!/^\d{10}$/.test(formData.Mobile_No))
      errs.Mobile_No = '10 digits';
    if (!formData.Gender) errs.Gender = 'Required';
    return errs;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;

    onSubmit(formData);
    navigate('/submitted');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
    setErrors(errs => ({ ...errs, [name]: '' }));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Name:</label>
        <input name="Name" value={formData.Name} onChange={handleChange} />
        {errors.Name && <span className="error">{errors.Name}</span>}
      </div>

      <div className="form-row">
        <label>Age:</label>
        <select name="Age" value={formData.Age} onChange={handleChange}>
          {Array.from({ length: 30 }, (_, i) => i + 1).map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
        {errors.Age && <span className="error">{errors.Age}</span>}
      </div>

      <div className="form-row">
        <label>Email:</label>
        <input
          type="email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
        />
        {errors.Email && <span className="error">{errors.Email}</span>}
      </div>

      <div className="form-row">
        <label>Mobile:</label>
        <input
          type="text"
          name="Mobile_No"
          value={formData.Mobile_No}
          onChange={e =>
            setFormData(fd => ({
              ...fd,
              Mobile_No: e.target.value.replace(/[^0-9]/g, '')
            }))
          }
          maxLength={10}
        />
        {errors.Mobile_No && <span className="error">{errors.Mobile_No}</span>}
      </div>

      <div className="form-row">
        <label>Gender:</label>
        <div className="radio-group">
          {['Male', 'Female', 'Other'].map(g => (
            <label key={g}>
              <input
                type="radio"
                name="Gender"
                value={g}
                checked={formData.Gender === g}
                onChange={handleChange}
              />
              {g}
            </label>
          ))}
        </div>
        {errors.Gender && <span className="error">{errors.Gender}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

