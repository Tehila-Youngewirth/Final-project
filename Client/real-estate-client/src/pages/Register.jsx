// export default function Register() {
//   return (
//     <div className="container">
//       <h1 className="title">Register</h1>

//       <input className="input" placeholder="Name" />
//       <input className="input" placeholder="Email" />
//       <input className="input" type="password" placeholder="Password" />

//       <button className="button">Create Account</button>
//     </div>
//   )
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({ fullName: "", email: "", passwordHash: "", role: "Customer" });
  const navigate = useNavigate();

  const handleRegister = async () => {
    const response = await fetch('https://localhost:7190/api/User', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert("נרשמת בהצלחה!");
      navigate("/login");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Register</h1>
      <input className="input" placeholder="Name" onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
      <input className="input" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
      <input className="input" type="password" placeholder="Password" onChange={(e) => setFormData({...formData, passwordHash: e.target.value})} />
      <button className="button" onClick={handleRegister}>Create Account</button>
    </div>
  );
}