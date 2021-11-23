import logo from './assets/images/d.jpg';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <div className="header">
        <nav style={{ width: "100%;", height: "20%;" }}>
          <a href="#">Cpfik.</a>
          <ul>
            <li>Home</li>
            <li>Post a job</li>
            <li>Feature</li>
            <li>About us</li>
            <li className="joinBtn">Join Now</li>
          </ul>
        </nav>
        <br />
        <div className="search">
          {/* Search Form */}
          <form className="searchJob">
            <h2>Your dream job is waiting here</h2>
            <br />
            <div className="input-field">
              <label className="labelFor1" for="job1">Jobs</label>
              <input type="text" id="job1" name="job1" className="inputSignup1" placeholder="Type Here" required />
              <div className="middle"></div>
              <label className="labelFor2" for="city1">Location</label>
              <input type="text" id="city1" name="city1" className="inputSignup2" placeholder="Search Here"
                required />
              <button className="searchBtn">Search</button>
            </div>
          </form>
          {/* Chart */}
          <div className="chart">
            <div className="waves">
              <div className="percentage">
                34%
                <svg
                  style={{ color: 'white' }}
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M256 32L20 464h472L256 32z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <svg viewBox="0 0 590 240">
                <path
                  fill="#fff"
                  fill-opacity="1"
                  d="M0,160L11.4,170.7C22.9,181,46,203,69,181.3C91.4,160,114,96,137,96C160,96,183,160,206,197.3C228.6,235,251,245,274,208C297.1,171,320,85,343,80C365.7,75,389,149,411,160C434.3,171,457,117,480,90.7C502.9,64,526,64,549,64C571.4,64,594,64,617,90.7C640,117,663,171,686,208C708.6,245,731,267,754,234.7C777.1,203,800,117,823,112C845.7,107,869,181,891,213.3C914.3,245,937,235,960,213.3C982.9,192,1006,160,1029,128C1051.4,96,1074,64,1097,53.3C1120,43,1143,53,1166,58.7C1188.6,64,1211,64,1234,85.3C1257.1,107,1280,149,1303,181.3C1325.7,213,1349,235,1371,229.3C1394.3,224,1417,192,1429,176L1440,160L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"
                >
                </path>
              </svg>
            </div>
            <div className="level">
              <div className="level1"></div>
              <div className="level2"></div>
              <div className="level3"></div>
              <div className="level4"></div>
              <div className="level5"></div>
            </div>
          </div>
          <div className="laptopGuy">
            <img src={logo} />
          </div>
          <div className="chart2">
            <div className="char2">
              <svg className='check'
                width="1em"
                height="1em"
                viewBox="0 0 15 15"
              >
                <g
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0zm7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768l3.392 2.827z"
                    fill="green"
                  />
                </g>
              </svg>
              <h6>Qualification</h6>
              <div class="flex-wpper">
                <div class="single-chart">
                  <svg viewBox="0 0 36 36" class="circular-chart yellow">
                    <path class="circle-bg"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path class="circle"
                      stroke-dasharray="90, 100"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">90%</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="bottom">
          <div className="bottom1"></div>
          <div className="bottom2"></div>
        </div>
        <div className="moreAboutUs">
          <div className="candidates">
            <div className="moreCandidates">
              <div className="ourMoreCandidates">
                <h3>Our More Candidates</h3>
                <div className="ourMoreCandidatesImgs">
                  <span className="ourMoreCandidatesImgIcon1">
                    <img className="ourMoreCandidatesImg" src={logo} />
                  </span>
                  <span className="ourMoreCandidatesImgIcon2">
                    <img className="ourMoreCandidatesImg" src={logo} />
                  </span>
                  <span className="ourMoreCandidatesImgIcon3">
                    <img className="ourMoreCandidatesImg" src={logo} />
                  </span>
                  <span className="ourMoreCandidatesImgIcon4">
                    <img className="ourMoreCandidatesImg" src={logo} />
                  </span>
                  <span className="ourMoreCandidatesImgIcon5">
                    <p>30+</p>
                  </span>
                </div>
              </div>
              <div className="ourDesign">
                <table>
                  <tr>
                    <td></td>
                    <td>
                      <p className="design1"></p>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <p className="design2"></p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="design3"></p>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <p className="design4"></p>
                    </td>
                    <td></td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="ourConnection">
              <div className="conic1">
                <div className="conicCircle1"></div>
              </div>
              <div className="ourLinks">
                <div className="ourLink">
                  <div className="ourLinksIcons">
                    <svg className="ourLinksIcon" width="1em" height="1em" viewBox="0 0 16 16">
                      <g fill="currentColor" fill-rule="evenodd">
                        <path
                          d="M8.048 0a8 8 0 1 0 .001 16.001A8 8 0 0 0 8.048 0zM8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14z" /><path d="M2.959 2.684c-.27 1.344.735 3.399 2.872 3.899c2.136.5 1.218.084.886-.583c-.334-.667-.035-1.167.482-1.333c.518-.167.387.293 1.155-.667c.194-2-1.472-.027-1.638-.86C8.366 1.223 5.95.5 5.249.75c-.701.25-2.02.589-2.29 1.934z" /><path d="M6.873 7.694c-.124.055-.702.416-.901.666c-.199.25-.286.778 0 1c.286.223-.016 1.279.755 1.473c.771.194 1.543.307 1.572.917c.027.61-.072 2.027-.443 2.167c.5.277 1.717-1.195 2.145-1.973c.429-.777.572-1.889.543-2.167c-.029-.277.171-.86.257-1.61c.085-.75-.57-.8-.655-1.133c-.087-.334-.203-.701-3.273.66z" /><path d="M13.125 4s-2.012.861-.644 2.14c1.366 1.277 2.062 2.49 1.995 2.768c-.062.276-1.38 1.706-.623 1.594c.761-.111 1.322-1.611 1.443-2.501c.119-.89-.924-2.639-.967-2.777c-.036-.141-.722-1.209-1.204-1.224z"
                        />
                      </g>
                    </svg>
                  </div>
                  <p>Global Connections</p>
                  <span className="underline"></span>
                </div>
                <div className="ourLink">
                  <div className="ourLinksIcons">
                    <svg className="ourLinksIcon" width="1em" height="1em" viewBox="0 0 24 24">
                      <path
                        class="uim-tertiary"
                        d="M12 18a3.5 3.5 0 1 1 3.5-3.5A3.504 3.504 0 0 1 12 18z" opacity=".5" fill="currentColor" /><path class="uim-primary" d="M14.64 16.772a3.452 3.452 0 0 1-5.28 0A4.988 4.988 0 0 0 7 21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1a4.988 4.988 0 0 0-2.36-4.228z" fill="currentColor" /><path class="uim-tertiary" d="M21 12a.996.996 0 0 1-.664-.252L12 4.338l-8.336 7.41a1 1 0 0 1-1.328-1.496l9-8a.999.999 0 0 1 1.328 0l9 8A1 1 0 0 1 21 12z" opacity=".5" fill="currentColor" /><path class="uim-quaternary" d="M12 4.338l-8 7.111V21a1 1 0 0 0 1 1h3a1 1 0 0 1-1-1a4.988 4.988 0 0 1 2.36-4.228A3.469 3.469 0 0 1 8.5 14.5a3.5 3.5 0 0 1 7 0a3.469 3.469 0 0 1-.86 2.272A4.988 4.988 0 0 1 17 21a1 1 0 0 1-1 1h3a1 1 0 0 0 1-1v-9.551z"
                          opacity=".25"
                          fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p>Work Remotely</p>
                  <span className="underline"></span>
                </div>
                <div className="ourLink">
                  <div className="ourLinksIcons">
                    <svg className="ourLinksIcon" width="1em" height="1em" viewBox="0 0 24 24">
                      <path
                        d="M20.145 8.27l1.563-1.563l-1.414-1.414L18.586 7c-1.05-.63-2.274-1-3.586-1c-3.859 0-7 3.14-7 7s3.141 7 7 7s7-3.14 7-7a6.966 6.966 0 0 0-1.855-4.73zM15 18c-2.757 0-5-2.243-5-5s2.243-5 5-5s5 2.243 5 5s-2.243 5-5 5z"
                        fill="currentColor"
                      />
                      <path
                        d="M14 10h2v4h-2zm-1-7h4v2h-4zM3 8h4v2H3zm0 8h4v2H3zm-1-4h3.99v2H2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p>Flexible Time Off</p>
                  <span className="underline"></span>
                </div>
              </div>
              <div className="conic2">
                <div className="conicCirle2"></div>
              </div>
            </div>
          </div>
          <div className="benefits">
            <div className="qualifiers">
              <div class="arrow">
                <div class="curve"></div>
                <div class="point"></div>
              </div>
              <div className="ourBenefit">
                <span className="ourMoreCandidatesImgIcon1">
                  <img className="ourMoreCandidatesImg" src={logo} />
                </span>
                <span className="ourMoreCandidatesImgIcon2">
                  <img className="ourMoreCandidatesImg" src={logo} />
                </span>
                <span className="ourMoreCandidatesImgIcon3">
                  <img className="ourMoreCandidatesImg" src={logo} />
                </span>
              </div>
            </div>
            <div className="platform">
              <h3>Benefits</h3>
              <p>You will get those specific benifits by working with us.</p>
              <div className="kplus">
                <p>150k+</p>
                <svg width="1em" height="1em" viewBox="0 0 24 24">
                  <path
                    d="M21.95 8.721l-.025-.168l-.026.006A4.5 4.5 0 1 0 17.5 14c.223 0 .437-.034.65-.065c-.069.232-.14.468-.254.68c-.114.308-.292.575-.469.844c-.148.291-.409.488-.601.737c-.201.242-.475.403-.692.604c-.213.21-.492.315-.714.463c-.232.133-.434.28-.65.35l-.539.222l-.474.197l.484 1.939l.597-.144c.191-.048.424-.104.689-.171c.271-.05.56-.187.882-.312c.317-.143.686-.238 1.028-.467c.344-.218.741-.4 1.091-.692c.339-.301.748-.562 1.05-.944c.33-.358.656-.734.909-1.162c.293-.408.492-.856.702-1.299c.19-.443.343-.896.468-1.336c.237-.882.343-1.72.384-2.437c.034-.718.014-1.315-.028-1.747a7.028 7.028 0 0 0-.063-.539zm-11 0l-.025-.168l-.026.006A4.5 4.5 0 1 0 6.5 14c.223 0 .437-.034.65-.065c-.069.232-.14.468-.254.68c-.114.308-.292.575-.469.844c-.148.291-.409.488-.601.737c-.201.242-.475.403-.692.604c-.213.21-.492.315-.714.463c-.232.133-.434.28-.65.35l-.539.222c-.301.123-.473.195-.473.195l.484 1.939l.597-.144c.191-.048.424-.104.689-.171c.271-.05.56-.187.882-.312c.317-.143.686-.238 1.028-.467c.344-.218.741-.4 1.091-.692c.339-.301.748-.562 1.05-.944c.33-.358.656-.734.909-1.162c.293-.408.492-.856.702-1.299c.19-.443.343-.896.468-1.336c.237-.882.343-1.72.384-2.437c.034-.718.014-1.315-.028-1.747a7.571 7.571 0 0 0-.064-.537z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="success">
                <span>Success Our Platform</span>
                <svg width="1em" height="1em" viewBox="0 0 24 24">
                  <g fill="none">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1zm4.768 9.14a1 1 0 1 0-1.536-1.28l-4.3 5.159l-2.225-2.226a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.475-.067l5-6z"
                      fill="#fbd23d"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
