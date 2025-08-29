
import type React from 'react';
import placementImg from '../../assets/images/placement.png'
import { useAccordionListMutation } from '../../app/service/axios';
import Lottie from "lottie-react";
import loading from "../../assets/images/Loading/Loading.json";
import { useEffect } from 'react';


const AccordionSection: React.FC = () => {



  const [accordionList, { data, error, isLoading }] = useAccordionListMutation();
  useEffect(() => {
    const fetchData = async () => {
      await accordionList({ id: "" })
    }
    fetchData();
  }, [accordionList])
  if (isLoading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="m-0">Dual data is Loading.....</p>
        <Lottie animationData={loading} loop={true} />
      </div>
    )
  }

  if (error) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="m-0">Dual data is Loading.....</p>
      </div>
    )
  }

  const accordion = data?.data;
  console.log("List of accordion", accordion);

  return (
    <section className="container mb-5">
      <div className="accordion" id="accordionExample">



        {/* List of Important of amrita*/}
        {accordion?.map((item, index) => {
          const headingId = `heading-${index}`;
          const collapseId = `collapse-${index}`;
          return (
            <div className="card mt-3" style={{ borderRadius: "12px" }} key={item.id}>
              <div
                className="card-header"
                id={headingId}
                style={{ background: "linear-gradient(135deg, #a4123f, #d91b4d)" }}
              >
                <h6
                  className="text-white d-flex justify-content-between align-items-center"
                  data-toggle="collapse"
                  data-target={`#${collapseId}`}
                  aria-expanded="false"
                  aria-controls={collapseId}
                  style={{ cursor: "pointer" }}
                >
                  {item.title}
                  <span className="arrow" style={{ transition: "transform 0.3s" }}>
                    ▼
                  </span>
                </h6>
              </div>
              <div
                id={collapseId}
                className="collapse"
                aria-labelledby={headingId}
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <div dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AccordionSection;
