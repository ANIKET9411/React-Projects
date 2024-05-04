import "./Profile.css";
function Profile() {
  return (
    <div className="profile">
      <div className="profile_img">
        <i className="fa-regular fa-user"></i>
        <p>PROFILE</p>
      </div>
      <div className="profile_header">
        <h1>JESSICA GREENE</h1>
        <h3>FREELENCER WRITER</h3>
      </div>
      <div className="profile_summary">
        <p>
          I specialize in writing long-form blog content, case studies, e-books,
          and white papers for B2Bs, tech startups. and marketing agencies.
        </p>
        <div className="profile_item">
          <h3>Email:</h3>
          <p>jessicagreene234@gmail.com</p>
        </div>
        <div className="profile_item">
          <h3>Website:</h3>
          <p>jessicagreene.com</p>
        </div>
      </div>
    </div>
  );
}
export default Profile;
