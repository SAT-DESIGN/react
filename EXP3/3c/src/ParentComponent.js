// Child Component
function ChildComponent(props) {
  return (
    <div style={{ padding: "20px", backgroundColor: "blue", borderRadius: "12px", boxShadow: "0 2px 6px rgba(0,0,0,0.2)" }}>
      <h2>Child Component</h2>
      <p>Message from Parent: {props.message}</p>
    </div>
  );
}

// Parent Component
function ParentComponent() {
 const parentMessage = "Hello, I am data passed from Parent to Child!";

 return (
  <div style={{ padding: "30px", borderRadius: "12px", backgroundColor: "lightgray", border: "2px solid black", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center",justifyContent: "center"}}>
   <h1>Parent Component</h1>
   <ChildComponent message={parentMessage} />
  </div>
 );
}

export default ParentComponent;

