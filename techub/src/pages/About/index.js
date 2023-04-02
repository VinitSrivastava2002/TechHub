import React from 'react';
// import "bootstrap/dist/css/bootstrap.css";
import "./style.module.css";

function About() {
  return (
    <div>
      
  {/* ======= About Section ======= */}
  <section id="about" className="about">
    <div className="container" >
      <div className="row position-relative">
        <div
          className="col-lg-7 about-img"
           style={{ backgroundImage: "url(assets/img/download.png)" }}
        />
        <div className="col-lg-7">
          <h3 className>Consequatur eius et magnam</h3>
          <div className="our-story">
            <h4>On 2022</h4>
            <h3>Our Story</h3>
            <p>
              Inventore aliquam beatae at et id alias. Ipsa dolores amet
              consequuntur minima quia maxime autem. Quidem id sed ratione.
              Tenetur provident autem in reiciendis rerum at dolor. Aliquam
              consectetur laudantium temporibus dicta minus dolor.
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle" />{" "}
                <span>Ullamco laboris nisi ut aliquip ex ea commo</span>
              </li>
              <li>
                <i className="bi bi-check-circle" />{" "}
                <span>Duis aute irure dolor in reprehenderit in</span>
              </li>
              <li>
                <i className="bi bi-check-circle" />{" "}
                <span>Ullamco laboris nisi ut aliquip ex ea</span>
              </li>
            </ul>
            <p>
              Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non
              nesciunt suscipit repellendus porro in quo eveniet. Molestias in
              maxime doloremque.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End About Section */}
  {/* ======= Stats Counter Section ======= */}
  <section id="stats-counter" className="stats-counter section-bg">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-3 col-md-6">
          <div className="stats-item d-flex align-items-center w-100 h-100">
            <i className="bi bi-emoji-smile color-blue flex-shrink-0" />
            <div>
              <span
                data-purecounter-start={0}
                data-purecounter-end={232}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Web Development</p>
            </div>
          </div>
        </div>
        {/* End Stats Item */}
        <div className="col-lg-3 col-md-6">
          <div className="stats-item d-flex align-items-center w-100 h-100">
            <i className="bi bi-journal-richtext color-orange flex-shrink-0" />
            <div>
              <span
                data-purecounter-start={0}
                data-purecounter-end={521}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Android Development</p>
            </div>
          </div>
        </div>
        {/* End Stats Item */}
        <div className="col-lg-3 col-md-6">
          <div className="stats-item d-flex align-items-center w-100 h-100">
            <i className="bi bi-headset color-green flex-shrink-0" />
            <div>
              <span
                data-purecounter-start={0}
                data-purecounter-end={1463}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Game Development</p>
            </div>
          </div>
        </div>
        {/* End Stats Item */}
        <div className="col-lg-3 col-md-6">
          <div className="stats-item d-flex align-items-center w-100 h-100">
            <i className="bi bi-people color-pink flex-shrink-0" />
            <div>
              <span
                data-purecounter-start={0}
                data-purecounter-end={15}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Machine Learning</p>
            </div>
          </div>
        </div>
        {/* End Stats Item */}
      </div>
    </div>
  </section>
  {/* End Stats Counter Section */}
  {/* ======= Alt Services Section ======= */}
 
  {/* End Alt Services Section */}
  {/* ======= Alt Services Section 2 ======= */}
  <section id="alt-services-2" className="alt-services section-bg">
    <div className="container" >
      <div className="row justify-content-around gy-4">
        <div className="col-lg-5 d-flex flex-column justify-content-center">
          <h3>
            Non quasi officia eum nobis et rerum epudiandae rem voluptatem
          </h3>
          <p>
            Maxime quia dolorum alias perspiciatis. Earum voluptatem sint at
            non. Ducimus maxime minima iste magni sit praesentium assumenda
            minus. Amet rerum saepe tempora vero.
          </p>
          <div
            className="icon-box d-flex position-relative"
            
          >
            <i className="bi bi-easel flex-shrink-0" />
            <div>
              <h4>
                <a href="" className="stretched-link">
                  Web Development
                </a>
              </h4>
              <p>
              Web development is designing and coding a functional layout for your site, making sure it's compatible with all browsers, mobile devices, and other devices that might access the site
              </p>
            </div>
          </div>
          {/* End Icon Box */}
          <div
            className="icon-box d-flex position-relative"
            
          >
            <i className="bi bi-patch-check flex-shrink-0" />
            <div>
              <h4>
                <a href="" className="stretched-link">
                  Android Development
                </a>
              </h4>
              <p>  
              Android development is a form of software engineering dedicated specifically to creating applications for devices that run on the Android platform.
              </p>
            </div>
          </div>
          {/* End Icon Box */}
          <div
            className="icon-box d-flex position-relative"
            
          >
            <i className="bi bi-brightness-high flex-shrink-0" />
            <div>
              <h4>
                <a href="" className="stretched-link">
                  Machine Learning
                </a>
              </h4>
              <p>
                Explicabo est voluptatum asperiores consequatur magnam. Et
                veritatis odit. Sunt aut deserunt minus aut eligendi omnis
              </p>
            </div>
          </div>
          {/* End Icon Box */}
          <div
            className="icon-box d-flex position-relative"
            
          >
            <i className="bi bi-brightness-high flex-shrink-0" />
            <div>
              <h4>
                <a href="" className="stretched-link">
                  Game Development
                </a>
              </h4>
              <p>
                Est voluptatem labore deleniti quis a delectus et. Saepe dolorem
                libero sit non aspernatur odit amet. Et eligendi
              </p>
            </div>
          </div>
          {/* End Icon Box */}
        </div>
        <div
          className="col-lg-6 img-bg"
          style={{ backgroundImage: "url(assets/img/images.jpg)" }}
          
        />
      </div>
    </div>
  </section>
  {/* End Alt Services Section 2 */}
  {/* ======= Our Team Section ======= */}
  <section id="team" className="team">
    <div className="container">
      <div className="section-header">
        <h2>Our Team</h2>
        <p>
          Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro
          incidunt dolores placeat sunt id nobis omnis tiledo stran delop
        </p>
      </div>
      <div className="row gy-5">
        <div
          className="col-lg-4 col-md-6 member"
        
        >
          <div className="member-img">
            <img
              src="assets/img/team/team-1.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="social">
              <a href="#">
                <i className="bi bi-twitter" />
              </a>
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
          <div className="member-info text-center">
            <h4>Vanya Rastogi</h4>
            <span>Team Leader</span>
            <p>
              Aliquam iure quaerat voluptatem praesentium possimus unde
              laudantium vel dolorum distinctio dire flow
            </p>
          </div>
        </div>
        {/* End Team Member */}
        <div
          className="col-lg-4 col-md-6 member"
          
        >
          <div className="member-img">
            <img
              src="assets/img/team/stt.png"
              className="img-fluid"
              alt=""
            />
            <div className="social">
              <a href="#">
                <i className="bi bi-twitter" />
              </a>
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
          <div className="member-info text-center">
            <h4>Rana Pratap Singh</h4>
            <span>Product Manager</span>
            <p>
              Labore ipsam sit consequatur exercitationem rerum laboriosam
              laudantium aut quod dolores exercitationem ut
            </p>
          </div>
        </div>
        {/* End Team Member */}
        <div
          className="col-lg-4 col-md-6 member"
          
        >
          <div className="member-img">
            <img
              src="assets/img/team/team-3.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="social">
              <a href="#">
                <i className="bi bi-twitter" />
              </a>
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
          <div className="member-info text-center">
            <h4>Shivankur Singh</h4>
            <span>UI Developer</span>
            <p>
              Illum minima ea autem doloremque ipsum quidem quas aspernatur modi
              ut praesentium vel tque sed facilis at qui
            </p>
          </div>
        </div>
        {/* End Team Member */}
        <div
          className="col-lg-4 col-md-6 member"
          
        >
          <div className="member-img">
            <img
              src="assets/img/team/team-4.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="social">
              <a href="#">
                <i className="bi bi-twitter" />
              </a>
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
          <div className="member-info text-center">
            <h4>Vinit Srivastava</h4>
            <span>GitHub Handler</span>
            <p>
              Magni voluptatem accusamus assumenda cum nisi aut qui dolorem
              voluptate sed et veniam quasi quam consectetur
            </p>
          </div>
        </div>
        {/* End Team Member */}
        <div
          className="col-lg-4 col-md-6 member"
          
        >
          <div className="member-img">
            <img
              src="assets/img/team/team-5.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="social">
              <a href="#">
                <i className="bi bi-twitter" />
              </a>
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
          <div className="member-info text-center">
            <h4>Shail Dubey</h4>
            <span>Coordinator</span>
            <p>
              Qui consequuntur quos accusamus magnam quo est molestiae eius
              laboriosam sunt doloribus quia impedit laborum velit
            </p>
          </div>
        </div>
        {/* End Team Member */}
        <div
          className="col-lg-4 col-md-6 member"
           
        >
          <div className="member-img">
            <img
              src="assets/img/team/team-6.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="social">
              <a href="#">
                <i className="bi bi-twitter" />
              </a>
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
          <div className="member-info text-center">
            <h4>Shubha Jain</h4>
            <span>HOD</span>
            <p>
              Sint sint eveniet explicabo amet consequatur nesciunt error enim
              rerum earum et omnis fugit eligendi cupiditate vel
            </p>
          </div>
        </div>
        {/* End Team Member */}
      </div>
    </div>
  </section>
  {/* End Our Team Section */}


    </div>
  )
}

export default About
