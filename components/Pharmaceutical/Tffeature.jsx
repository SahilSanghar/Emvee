import React from 'react';

const Tffeature = ({ sections }) => {

return (
    <div className='text-lg text-left grid md:grid-cols-3 grid-cols-1 gap-14 pb-20 max-w-5xl mx-auto'>
    {sections.map((section, index) => (
        <ul key={index}>
        <span className='font-bold text-xl'>{section.title}</span>
        {section.items.map((item, itemIndex) => (
            <li key={itemIndex} className='list-disc ml-4'>
                {item}
            </li>
        ))}
        </ul>
    ))}
    </div>
);
};

export default Tffeature;
