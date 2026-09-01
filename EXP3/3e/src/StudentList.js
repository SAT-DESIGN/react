import React from "react";

function StudentList() {
  // Array of students
const students = ["Alice", "Bob", "Charlie", "David", "Emma"];

  return (
<div
      style={{
        padding: "30px",
borderRadius: "12px",
backgroundColor: "lightgray",
        border: "2px solid black",
minHeight: "100vh",
        display: "flex",
flexDirection: "column",
alignItems: "center",
      }}
>
<h1>Student List</h1>

      {/* Iterative rendering using map() */}
<ul style={{ listStyleType: "none", padding: 0 }}>
        {students.map((student, index) => (
<li
            key={index}
            style={{
              margin: "10px",
              padding: "10px",
              width: "200px",
textAlign: "center",
              border: "1px solid blue",
borderRadius: "8px",
backgroundColor: "lightblue",
            }}
>
            {student}
</li>
        ))}
</ul>
</div>
  );
}

export default StudentList;