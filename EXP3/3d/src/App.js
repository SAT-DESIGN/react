import React, { useState } from "react";

function App() {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

const [submitted, setSubmitted] = useState(false);

  // Handle input change
const handleChange = (e) => {
const{ name, value } = e.target;
setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
const handleSubmit = (e) => {
e.preventDefault(); // prevent page refresh
setSubmitted(true);
  };

  return (
<div style={{ maxWidth: "400px", margin: "50px auto" }}>
<h1>React Form Example</h1>
<form onSubmit={handleSubmit}>
        {/* Name Input */}
<div style={{ marginBottom: "10px" }}>
<label>Name:</label>
<input
            type="text"
            name="name"
            value={formData.name}
onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
</div>

        {/* Email Input */}
<div style={{ marginBottom: "10px" }}>
<label>Email:</label>
<input
            type="email"
            name="email"
            value={formData.email}
onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            required
          />
</div>

        {/* Message Input */}
<div style={{ marginBottom: "10px" }}>
<label>Message:</label>
<textarea
            name="message"
            value={formData.message}
onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
            rows="4"
            required
          />
</div>

        {/* Submit Button */}
<button type="submit" style={{ padding: "10px 15px" }}>
          Submit
</button>
</form>

      {/* Display submitted data */}
      {submitted && (
<div style={{ marginTop: "20px", padding: "10px", border: "1px solid gray" }}>
<h3>Form Data Submitted:</h3>
<p><strong>Name:</strong> {formData.name}</p>
<p><strong>Email:</strong> {formData.email}</p>
<p><strong>Message:</strong> {formData.message}</p>
</div>
      )}
</div>
  );
}

export default App;