import React, { useEffect, useState } from "react";
import FBAServiceSingleData from "./FBAServiceSingleData";

const AdminFBAService = () => {
  const [number, setNumber] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const fbaServiceResponse = await fetch(
        "http://localhost:5000/fbaservice"
      );
      const fbaServiceData = await fbaServiceResponse.json();
      setAnswers(fbaServiceData);
    };
    loadData();
  }, [number]);
  return (
    <section className="my-2 boxShadow bg-gray rounded me-3 p-3">
      <h1 className="fs-24 spacing-3 text-center py-3">Amazon FBA Consultant Service</h1>
      {/* <h6 className="fs-18">Answers</h6> */}
      {answers.map((answer, index) => (
        <FBAServiceSingleData
          key={answer._id}
          answer={answer}
          index={index}
          setNumber={setNumber}
        />
      ))}
    </section>
  );
};

export default AdminFBAService;
