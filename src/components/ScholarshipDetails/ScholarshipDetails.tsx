import React from "react";

function ScholarshipDetails() {
  return (
    <section className="container mt-5 mb-5">
      <h4
        className="text-center mb-4"
        style={{ fontWeight: 600, fontSize: "25px", color: "#a4123f" }}
      >
        Amrita MBA Scholarship Details
      </h4>

      <ul className="nav nav-tabs" id="scholarshipTab" role="tablist">
        {["amritapuri", "bengaluru", "kochi", "amaravati", "coimbatore", "mysuru"].map(
          (campus, i) => (
            <li className="nav-item" role="presentation" key={campus}>
              <button
                className={`nav-link ${i === 0 ? "active" : ""}`}
                id={`${campus}-scholarship-tab`}
                data-toggle="tab"
                data-target={`#${campus}-scholarship`}
                type="button"
                role="tab"
                aria-controls={`${campus}-scholarship`}
                aria-selected={i === 0 ? "true" : "false"}
                style={{ color: "#a4123f" }}
              >
                {campus.charAt(0).toUpperCase() + campus.slice(1)}
              </button>
            </li>
          )
        )}
      </ul>

      <div className="tab-content" id="scholarshipTabContent">
        {/* Amritapuri */}
        <div
          className="tab-pane fade show active p-3"
          id="amritapuri-scholarship"
          role="tabpanel"
          aria-labelledby="amritapuri-scholarship-tab"
        >
          <h6 style={{ color: "#a4123f" }}>
            PROPOSED TERMS AND CONDITIONS FOR AWARD OF SCHOLARSHIP:
          </h6>
          <p>Scholarship Fees. The eligibility criterion is as below. For the 1st year</p>
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th style={{ color: "#a4123f" }}>Category</th>
                <th style={{ color: "#a4123f" }}>Merit Criteria</th>
                <th style={{ color: "#a4123f" }}>Tuition Fee Waiver</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={3} style={{ fontWeight: "bold", color: "#a4123f" }}>
                  ACAT
                </td>
              </tr>
              <tr>
                <td>Slab 1</td>
                <td>Top 3 Rank holders ? (Needs to be decided)</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>Slab 2</td>
                <td>Above 85 percentile ? (Needs to be decided)</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>Slab 3</td>
                <td>Above 75 percentile ? (Needs to be decided)</td>
                <td>25%</td>
              </tr>
              <tr>
                <td colSpan={3} style={{ fontWeight: "bold", color: "#a4123f" }}>
                  CAT
                </td>
              </tr>
              <tr>
                <td>Slab 1</td>
                <td>Above 85 percentile</td>
                <td>70%</td>
              </tr>
              <tr>
                <td>Slab 2</td>
                <td>Above 75 to 85 percentile</td>
                <td>70%</td>
              </tr>
              <tr>
                <td>Slab 3</td>
                <td>70 to 75 percentile</td>
                <td>25%</td>
              </tr>
              <tr>
                <td colSpan={3} style={{ fontWeight: "bold", color: "#a4123f" }}>
                  MAT
                </td>
              </tr>
              <tr>
                <td>Slab 1</td>
                <td>Above 90 percentile</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>Slab 2</td>
                <td>Above 80 to 90 percentile</td>
                <td>25%</td>
              </tr>
              <tr>
                <td colSpan={3} style={{ fontWeight: "bold", color: "#a4123f" }}>
                  KMAT
                </td>
              </tr>
              <tr>
                <td>Slab 1</td>
                <td>Above 350 marks out of 720 marks</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>Slab 2</td>
                <td>300 to 350 marks out of 720 marks</td>
                <td>25%</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>1st year:</strong> The scholarship will be available to the top 10% of
            sanctioned intake
          </p>
          <p>
            <strong>2nd year:</strong> The scholarship will be available to students with a
            CGPA 8.5 and higher – subject to a maximum of 10% of the sanctioned intake
          </p>
          <h6 className="mt-3" style={{ color: "#a4123f" }}>
            RENEWAL OF SCHOLARSHIP FEES:
          </h6>
          <p>Renewal of scholarship Fees for subsequent years is subject to meeting the following conditions:</p>
          <ol>
            <li>Consistent Academic performance by securing a Cumulative Grade Point Average (CGPA) of at least 8.5 at the end of the first year of the programme.</li>
            <li>A certificate of good conduct from the Principal. S/he will take into account if any disciplinary action was taken against the student during the period of study in the University.</li>
            <li>Clearing each semester without any arrear.</li>
            <li>Failing to meet the above conditions 1,2 and 3, the candidate will be required to pay the full fees in the second year.</li>
          </ol>
        </div>

        {/* Bengaluru */}
        <div
          className="tab-pane fade p-3"
          id="bengaluru-scholarship"
          role="tabpanel"
          aria-labelledby="bengaluru-scholarship-tab"
        >
          <h5 style={{ color: "#a4123f" }}>Scholarship</h5>
          <p>Scholarship Waiver on Tuition Fee for 10% of the class.</p>
          <p>Up to 70% waiver in tuition fee for top scorers in Amrita Common Aptitude Test or CAT.</p>
          <ul>
            <li>70% waiver for CAT percentile above 85</li>
            <li>50% waiver for CAT percentile above 75 to 85</li>
          </ul>
          <p className="mt-3"><strong>Renewal of Scholarship for subsequent year is subject to meeting the following conditions:</strong></p>
          <ul>
            <li>Consistent Academic performance by securing a CGPA of at least 8 in the first year.</li>
            <li>A certificate of good conduct from the Chairman.</li>
            <li>Clearing each trimester without any arrears.</li>
          </ul>
        </div>

        {/* Kochi */}
        <div
          className="tab-pane fade p-3"
          id="kochi-scholarship"
          role="tabpanel"
          aria-labelledby="kochi-scholarship-tab"
        >
          <h6 style={{ color: "#a4123f" }}>
            PROPOSED TERMS AND CONDITIONS FOR AWARD OF SCHOLARSHIP:
          </h6>
          <p>Scholarship Fees. The eligibility criterion is as below. For the 1st year</p>
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th style={{ color: "#a4123f" }}>Category</th>
                <th style={{ color: "#a4123f" }}>Merit Criteria</th>
                <th style={{ color: "#a4123f" }}>Tuition Fee Waiver</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={3} style={{ fontWeight: "bold", color: "#a4123f" }}>
                  ACAT
                </td>
              </tr>
              <tr>
                <td>Slab 1</td>
                <td>Top 3 Rank holders ? (Needs to be decided)</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>Slab 2</td>
                <td>Above 85 percentile ? (Needs to be decided)</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>Slab 3</td>
                <td>Above 75 percentile ? (Needs to be decided)</td>
                <td>25%</td>
              </tr>
              <tr>
                <td colSpan={3} style={{ fontWeight: "bold", color: "#a4123f" }}>
                  CAT
                </td>
              </tr>
              <tr>
                <td>Slab 1</td>
                <td>Above 85 percentile</td>
                <td>70%</td>
              </tr>
              <tr>
                <td>Slab 2</td>
                <td>Above 75 to 85 percentile</td>
                <td>70%</td>
              </tr>
              <tr>
                <td>Slab 3</td>
                <td>70 to 75 percentile</td>
                <td>25%</td>
              </tr>
              <tr>
                <td colSpan={3} style={{ fontWeight: "bold", color: "#a4123f" }}>
                  MAT
                </td>
              </tr>
              <tr>
                <td>Slab 1</td>
                <td>Above 90 percentile</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>Slab 2</td>
                <td>Above 80 to 90 percentile</td>
                <td>25%</td>
              </tr>
              <tr>
                <td colSpan={3} style={{ fontWeight: "bold", color: "#a4123f" }}>
                  KMAT
                </td>
              </tr>
              <tr>
                <td>Slab 1</td>
                <td>Above 350 marks out of 720 marks</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>Slab 2</td>
                <td>300 to 350 marks out of 720 marks</td>
                <td>25%</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>1st year:</strong> The scholarship will be available to the top 10% of sanctioned intake
          </p>
          <p>
            <strong>2nd year:</strong> The scholarship will be available to students with a CGPA 8.5 and higher – subject to a maximum of 10% of the sanctioned intake
          </p>
          <h6 className="mt-3" style={{ color: "#a4123f" }}>
            RENEWAL OF SCHOLARSHIP FEES:
          </h6>
          <p>Renewal of scholarship Fees for subsequent years is subject to meeting the following conditions:</p>
          <ol>
            <li>Consistent Academic performance by securing a Cumulative Grade Point Average (CGPA) of at least 8.5 at the end of the first year of the programme.</li>
            <li>A certificate of good conduct from the Principal. S/he will take into account if any disciplinary action was taken against the student during the period of study in the University.</li>
            <li>Clearing each semester without any arrear.</li>
            <li>Failing to meet the above conditions 1,2 and 3, the candidate will be required to pay the full fees in the second year.</li>
          </ol>
        </div>

        {/* Amaravati */}
        <div
          className="tab-pane fade p-3"
          id="amaravati-scholarship"
          role="tabpanel"
          aria-labelledby="amaravati-scholarship-tab"
        >
          <p>Scholarship Fees: The eligibility criterion is as below.<br />For the 1st year</p>
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th style={{ color: "#a4123f" }}>Category</th>
                <th style={{ color: "#a4123f" }}>Merit Criteria</th>
                <th style={{ color: "#a4123f" }}>Tuition Fee Waiver</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={3} style={{ fontWeight: "bold", color: "#a4123f" }}>CAT</td>
              </tr>
              <tr>
                <td>Slab 1</td>
                <td>Above 85 percentile in CAT</td>
                <td>70%</td>
              </tr>
              <tr>
                <td>Slab 2</td>
                <td>Above 75 to 85 percentile in CAT</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>Slab 3</td>
                <td>70 to 75 percentile in CAT</td>
                <td>25%</td>
              </tr>
              <tr>
                <td colSpan={3} style={{ fontWeight: "bold", color: "#a4123f" }}>MAT</td>
              </tr>
              <tr>
                <td>Slab 1</td>
                <td>Above 90 percentile in MAT</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>Slab 2</td>
                <td>Above 80 to 90 percentile in MAT</td>
                <td>25%</td>
              </tr>
              <tr>
                <td colSpan={3} style={{ fontWeight: "bold", color: "#a4123f" }}>KMAT</td>
              </tr>
              <tr>
                <td>Slab 1</td>
                <td>Above 350 marks out of 720</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>Slab 2</td>
                <td>300 to 350 marks out of 720</td>
                <td>25%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Coimbatore */}
        <div
          className="tab-pane fade p-3"
          id="coimbatore-scholarship"
          role="tabpanel"
          aria-labelledby="coimbatore-scholarship-tab"
        >
          <h5 style={{ color: "#a4123f" }}>Scholarship</h5>
          <p>
            Dedicated to recognizing and rewarding academic excellence, talent, and potential through our
            Admission Scholarship Policy. To be considered, applicants must demonstrate a consistent record of
            academic excellence across Class 10, Class 12, undergraduate studies, and one of the entrance exams
            (CAT, MAT, or ACAT). Based on the selection process, students may receive scholarships up to 100%.
            Applications meeting these criteria will be shortlisted, and selected candidates will be notified
            accordingly. The renewal of scholarships for the second year will be determined by the scholarship
            committee based on the student's academic performance in the first year of the MBA program.
            Scholarship terms are subject to change at the discretion of the scholarship committee. By fostering
            a diverse and dynamic community of scholars, we strive to support the aspirations of our students
            and contribute positively to society.
          </p>
        </div>

        {/* Mysuru */}
        <div
          className="tab-pane fade p-3"
          id="mysuru-scholarship"
          role="tabpanel"
          aria-labelledby="mysuru-scholarship-tab"
        >
          <h5 style={{ color: "#a4123f" }}>Scholarship</h5>
          <p>
            Scholarships are available for deserving students, ranging from 25% to 75% of the tuition fee,
            limited to 50% of the seats (30). Selection will be based on ACAT / MAT / CAT / CMAT scores and an
            interview.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ScholarshipDetails;
