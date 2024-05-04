import "./Work.css";
function Work() {
  return (
    <div className="work">
      <div className="work_img">
        <i className="fa-solid fa-briefcase"></i>
        <p>WORK</p>
      </div>
      <div className="work_items">
        <div className="work_item">
          <h3>Present</h3>
          <div className="work_com">
            <div className="work_company">
              <h3>Jessica Greene Marketing</h3>
              <li>Freelence Writer</li>
            </div>
            <p>
              Create blog posts,landing pages ,e-books and case studies for
              clients
            </p>
          </div>
        </div>
        <div className="work_item">
          <h3>2016</h3>
          <div className="work_com">
            <div className="work_company">
              <h3>Jessica Greene Marketing</h3>
              <li>Freelence Writer</li>
            </div>
            <p>
              Created and socialised best practices for Agile Software
              Development
            </p>
          </div>
        </div>
        <div className="work_item">
          <h3>2013-2015</h3>
          <div className="work_com">
            <div className="work_company">
              <h3>Jessica Greene Marketing</h3>
              <li>Freelence Writer</li>
            </div>
            <p>
              Oversaw the implementation of six major web developments projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Work;
