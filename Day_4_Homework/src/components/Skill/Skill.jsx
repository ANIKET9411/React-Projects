import "./Skill.css";
function Skill() {
  return (
    <div className="skill">
      <div className=" skill_img">
        <i className="fa-regular fa-user"></i>
        <p>SKILL & SAMPLES</p>
      </div>
      <div className="skill_lists">
        <div className="skill_list">
          <h4>Writing</h4>
          <div className="skill_rating">
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
          </div>
        </div>
        <div className="skill_list">
          <h4>Editing</h4>
          <div className="skill_rating">
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
          </div>
        </div>
        <div className="skill_list">
          <h4>Social Media</h4>
          <div className="skill_rating">
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
          </div>
        </div>
        <div className="skill_list">
          <h4>Researching</h4>
          <div className="skill_rating">
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
          </div>
        </div>
        <div className="skill_list">
          <h4>SEO</h4>
          <div className="skill_rating">
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
            <i className="fa-solid fa-circle"></i>
          </div>
        </div>
      </div>
      <div className="skill_samples">
        <div className="skill_sample">
          <h4>Zapier</h4>
          <p>Organise Your life with the Agile Method </p>
        </div>
        <div className="skill_sample">
          <h4>Spoke</h4>
          <p>
            in 40 hours a week too much? here's what history and science say.{" "}
          </p>
        </div>
        <div className="skill_sample">
          <h4>nDash</h4>
          <p> Why Generalist writers lead to Lost profits in B2B Tech. </p>
        </div>
      </div>
    </div>
  );
}
export default Skill;
