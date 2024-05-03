import "./Body.css";
export function Body() {
  return (
    <div className="body">
      <img
        src="https://plus.unsplash.com/premium_photo-1663036933982-2f7463b40591?q=80&w=1816&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
}
export function Section1() {
  return (
    <div className="section1">
      <h1>Think Health. Think Massage.</h1>
      <p>
        We are open 9am to 6pm; Monday through Sunday. If you would like to
        schedule an appointment with us, please call us at 987-654-3210 today!
      </p>
      <button>LEARN MORE ABOUT US</button>
      <button>CONTACT US TODAY</button>
    </div>
  );
}
export function Section2() {
  return (
    <div className="section2">
      <p>
        Are you looking for a professional, registered massage therapist? Sample
        Massage Therapy has 4 registered massage therapists who can provide
        clinical massage.
      </p>
      <p>
        We are committed to your long term health and well-being. Our
        multi-disciplinary clinic provides a balanced approach to a healthy
        lifestyle. Enhance your health and improve your performance with our
        treatments.
      </p>
      <p>
        We welcome you to come explore all the benefits you'll enjoy as one of
        our valued guests. Our professional staff is committed to offering the
        best massage therapy in Mainland.
      </p>
    </div>
  );
}
export function Section3() {
  return (
    <div className="section3">
      <h1>Family Wellness Massage Therapy</h1>
      <p>9876 Main Street, Suite 123, Mainland, ML12345</p>
      <p>Phone: 987-654-3210</p>
    </div>
  );
}
Body();
Section1();
Section2();
Section3();
// export default Body;
