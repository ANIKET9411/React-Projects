import "./Contact.css";
import data from "./contact_data/";
function Contact() {
  return (
    <div className="contact">
      {data.map((ele) => {
        return (
          <div key={ele.desc} className="card">
            <div className="card_upper">
              <img key={ele.desc} src={ele.image} alt="" />
              <p>{ele.numbers}</p>
            </div>
            <p>{ele.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Contact;
