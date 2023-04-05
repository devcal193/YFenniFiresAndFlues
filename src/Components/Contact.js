export const Contact = () => {
  return (
    <div className="Contact">
      <h2>Contact Us</h2>
      <h3>Contact Details</h3>
      <h4>Phone Number</h4>
      <p>0000000000</p>
      <h4>Email</h4>
      <p>kevinbeever@yfennifires&flues.com</p>
      <h3>Send us an email</h3>
      <form>
        <label htmlFor="name_input">Name: </label>
        <input id="name_input" />
        <br />
        <label htmlFor="email_input">Email: </label>
        <input id="email_input" />
        <br />
        <label htmlFor="message_input">Message: </label>
        <input id="message_input" />
      </form>
    </div>
  );
};
