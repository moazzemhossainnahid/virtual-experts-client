import React, { useEffect, useState } from "react";
import WhyWeAreUniqueSinglData from "./WhyWeAreUniqueSingleData";

const AdminWhyWeAreUnique = () => {
  const [number, setNumber] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const aboutUniqueListResponse = await fetch(
        "https://virtual-experts-server.cyclic.app/aboutUniqueList"
      );
      const aboutUniquetListData = await aboutUniqueListResponse.json();
      setAnswers(aboutUniquetListData);
    };
    loadData();
  }, [number]);
  return (
    <section className="my-2 boxShadow bg-gray rounded me-3 p-3">
      <h1 className="fs-24 spacing-3 text-center py-3">Why We are unique Section</h1>
      {/* <h6 className="fs-18">Answers</h6> */}
      {answers.map((answer, index) => (
        <WhyWeAreUniqueSinglData
          key={answer._id}
          answer={answer}
          index={index}
          setNumber={setNumber}
        />
      ))}
    </section>
  );
};

export default AdminWhyWeAreUnique;
