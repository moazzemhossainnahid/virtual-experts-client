import React, { useEffect, useState } from "react";
import ContactFormSingleData from "./ContactFormSingleData";

const AdminContactForm = () => {
    const [number, setNumber] = useState(0);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const contactFormResponse = await fetch(
                "http://localhost:5000/contactform"
            );
            const contactFormData = await contactFormResponse.json();
            setInfo(contactFormData);
        };
        loadData();
    }, [number]);
    return (
        <section className="my-2 boxShadow bg-gray rounded me-3 p-3">
            <h1 className="fs-24 spacing-3 text-center py-3">Let's Talk Info</h1>
            <div className="row">
                    {info.map((info, index) => (
                        <ContactFormSingleData
                            key={info._id}
                            info={info}
                            index={index}
                            setNumber={setNumber}
                        />
                    ))}
            </div>
        </section>
    );
};

export default AdminContactForm;
