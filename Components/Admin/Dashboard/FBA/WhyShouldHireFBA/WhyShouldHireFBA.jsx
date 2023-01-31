import React, { useEffect, useState } from "react";
import WhyShouldHireFBASingleData from "./WhyShouldHireFBASingleData";

const AdminWhyShouldHireFBA = () => {
  const [number, setNumber] = useState(0);
  const [hires, setHires] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const whyShouldHireResponse = await fetch(
        "http://localhost:5000/whyshouldhire"
      );
      const whyShouldHireData = await whyShouldHireResponse.json();
      setHires(whyShouldHireData);
    };
    loadData();
  }, [number]);
  return (
    <section className="my-3 boxShadow bg-gray rounded me-3 p-3">
      <h1 className="fs-24 spacing-3 text-center py-3">Why Should Hire FBA</h1>
      {hires?.map((hire, index) => (
        <WhyShouldHireFBASingleData
          key={hire._id}
          hire={hire}
          index={index}
          setNumber={setNumber}
        />
      ))}
    </section>
  );
};

export default AdminWhyShouldHireFBA;
