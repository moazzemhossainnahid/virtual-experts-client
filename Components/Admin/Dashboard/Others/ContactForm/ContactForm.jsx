import React, { useEffect, useState } from "react";
import ContactFormSingleData from "./ContactFormSingleData";

const AdminContactForm = () => {
    const [number, setNumber] = useState(0);
    const [infoData, setInfoData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const contactFormResponse = await fetch(
                "https://virtual-experts-server.cyclic.app/contactform"
            );
            const contactFormData = await contactFormResponse.json();
            setInfoData(contactFormData);
        };
        loadData();
    }, [number]);
    return (
        <section className="my-2 boxShadow bg-gray rounded me-3 p-3">
            <h1 className="fs-24 spacing-3 text-center py-3">Let's Talk Info</h1>
            <div className="row">
                    {infoData.map((info, index) => (
                        <ContactFormSingleData
                            key={info._id}
                            info={info}
                            infoData={infoData}
                            setInfoData={setInfoData}
                            index={index}
                            setNumber={setNumber}
                        />
                    ))}
            </div>
        </section>
    );
};

export default AdminContactForm;
