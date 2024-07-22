const Contact = () => {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto'}}>
        <h2>Contact Us</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3>Phone</h3>
          <p>(123) 456-7890</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Email</h3>
          <p>your.email@example.com</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Address</h3>
          <p>123 Your Street<br />
          Your City, Your State, Your Country<br />
          ZIP Code</p>
        </div>
      </div>
    );
  };
  
  export default Contact;