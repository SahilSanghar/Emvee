import React from 'react';
import { PiThermometerHotBold } from "react-icons/pi";
import { GrFanOption } from "react-icons/gr";
import { PiGear } from "react-icons/pi";

const Category = [
{
    title: "Air Conditioning",
    description: "Maintaining optimum temperature, be it residential, commercial or industrial area, is of utmost importance for productivity, relaxation and comfort of the occupants inside. Along with focus on the prevalent heat load of the area, we take into account other important parameters like positioning machines & supply vents, flow rate of fresh air & exhaust air, occupancy etc. to ensure that our system performs efficiently even in severe ambient conditions. We believe in providing economical solutions that have the least power consumption to reduce operational cost and environmental impact.",
    icon: <PiThermometerHotBold />
},
{
    title: "Ventilation",
    description: "Quality of air is of utmost importance in closed spaces and can be maintained only with perfectly designed Ventilation System. Depending on your requirement, Emvee can provide customized solutions with our vast experience in designing and execution of Ventilation Systems, be it Dry Ventilation for removal of smoke, heat, pollutants in areas like Basements, Parking Lots, Server Rooms etc. or be it Wet Ventilation to maintain specific %RH, Temperature, Control of VOC in areas like Pharmaceutical Warehouse, Textile Production Area, Printing Press etc.",
    icon: <GrFanOption />
},
{
    title: "HVAC Automation",
    description: "Real-Time parameter data monitoring and modification is a necessity in today’s time to save energy and thus the operational cost. Why waste time, money and energy on regular manual operations of advanced HVAC systems? We provide optimum self-sufficient automation solutions thus reducing the cost of recruiting large maintenance teams and increasing the efficiency of the system through data variation in real-time. Our advanced design teams can come up with tailored solutions for all your needs and provide the best in class automation to operate your HVAC systems seamlessly.",
    icon: <PiGear />
},
];

const Categories = () => {
return (
    <div className="max-w-4xl mx-auto">
    {Category.map((item, index) => (
        <div key={index} className="p-4 border rounded-lg shadow-md">
            <div className="">
                {item.icon}
            </div>
            <p className="text-xl font-semibold mb-2">{item.title}</p>
            <p className="text-gray-700 text-lg">{item.description}</p>
        </div>
    ))}
    </div>
);
};

export default Categories;
