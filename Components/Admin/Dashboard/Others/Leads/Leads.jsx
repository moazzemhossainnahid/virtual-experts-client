import React, { useEffect, useState } from "react";

const AdminLeads = () => {
    const [number, setNumber] = useState(0);
    const [leadData, setLeadData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const leadsResponse = await fetch(
                "http://localhost:5000/leads"
            );
            const leadsData = await leadsResponse.json();
            setLeadData(leadsData);
        };
        loadData();
    }, [number]);
    return (
        <section className="my-2 boxShadow bg-gray rounded me-3 p-3">
            <h1 className="fs-24 spacing-3 text-center py-3">Lead's Info</h1>
            <div className="row">
                    {leadData.map((lead, index) => (
                        <ContactFormSingleData
                            key={info._id}
                            lead={lead}
                            leadData={leadData}
                            setLeadData={setLeadData}
                            index={index}
                            setNumber={setNumber}
                        />
                    ))}
            </div>
        </section>
    );
};

export default AdminLeads;
