import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="myHeading">Contact</h1>
      <p>
        Interested in hiring me for your company and your project or just want
        to say hi? You can fill in the contact form below or send me an email to
        <strong>
          <Link> mrbiswajitmondal24@gmail.com</Link>
        </strong>
        <br />
        Follow me on the social channels below.
      </p>
    </div>
  );
};

export default Contact;
