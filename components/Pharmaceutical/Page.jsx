import React from 'react'
import Introduction from './Introduction'
import Machine from './Machine'
import Intro2 from './Intro2'
import Vid from './Vid'
import Tffeature from './Tffeature'
import { TubeFilling } from '../../data/Pharmaceutical';

const TffeatureSections = [
    {
    title: 'Salient Features:',
    items: [
        'Compact design & Simple Operation',
        'In compliance with cGMP & WHO',
        'SS316 & Teflon Contact Parts',
        "'No tube - No Fill' Mechanism",
        'Auto tube Orientation',
        'PLC based operations',
        'Safety interlocks',
        'System to cut-off the rat-tail by air burst',
        'Easy to clean and maintain',
        'Shut-off nozzles to prevent dripping',
    ],
    },
    {
    title: 'Operations:',
    items: [
        'Tube Cleaning',
        'Tube Feeding',
        'Tube Orientation',
        'Filling',
        'Heating',
        'Sealing',
        'Cutting',
        'Tube Discharging',
    ],
    },
    {
    title: 'Optional Features:',
    items: [
        'Chilling block for improved sealing in high Speed machines',
        'Mechanism to link with carbonator',
        'Level sensor to maintain minimum product level in hopper',
        'In-built tube cleaning operation by air and vacuum before filling',
        'Jacketed hopper and stirrer',
    ],
    },
];

const TffeatureSections1 = [
    {
    title: 'SALIENT FEATURES',
    items: [
        'Continuous motion loading enables gradual and smooth product insertion.',
        'Safety features to protect the machine against mechanical and electrical overloads.',
        'Programmable operational time for key machine functions.',
        'HMI enables fast and easy troubleshooting of issues reducing downtime.',
        'Programmable user profiles to restrict HMI access based on user level.',
        'Variable speed drive allows to match cartooning speed with upstream equipment such as a tube filling or bottle filling machine.',
    ],
    },
    {
    title: 'INTERLOCKS',
    items: [
        'No Product - No Leaflet',
        'No Leaflet - No Carton',
        'No Carton - Pusher Bypass',
        'Low Air Pressure - Machine Stop',
        'Pusher Overload - Machine Stop',
        'Low Carton Level - Alarm',
        'Low Leaflet Level - Alarm',
    ],
    },
    {
    title: 'OPTIONAL FEATURES',
    items: [
        'Pre-folded leaflet insertion unit.',
        'Online printing or debossing with stereos.',
        'Safety guards with/without door switch interlock.',
        'Bottle transfer or tube transfer link mechanism.',
    ],
    },
];

const Pharmaceutical = () => {
return (
    <div>
        <div className="flex">
            <p className='text-orange-500 font-extralight px-10'>_________________________________</p>
            <p className='text-3xl'>
                Pharmaceutical Machines
            </p>
            <p className='text-orange-500 font-extralight px-10'>______________________________</p>
        </div>
        <Introduction
        // title="Pharmaceutical Machines"
        highlight="Emveematic Tube Filling Machine"
        description="The Rotary Tube Filling and Sealing Machine is a highly efficient and versatile piece of equipment used in various industries. It is designed to automatically fill and seal tubes in a continuous rotary motion. With its advanced technology and precision, it ensures accurate filling, reliable sealing, and high production output. This machine is a reliable solution for efficient and streamlined tube packaging processes."
        description1="We proudly offer four highly capable tube filling and sealing machines known for their efficiency. Our machines have a production range starting from as low as 35 tubes per minute and going up to 150 tubes per minute. These state-of-the-art machines have been carefully designed and built to deliver optimal performance and productivity in tube packaging processes. With our range of top-performing machines, we provide reliable solutions to meet various production needs and ensure efficient operations."
        />
        <Machine data={TubeFilling} />
        <Tffeature sections={TffeatureSections} />
        <Vid videoSrc="/pharmaceuticalvid.mp4" description="Video Description Here" />
        <Introduction
        // title="Pharmaceutical Machines"
        highlight="Emveematic Cartoning Machine"
        description="The Rotary Tube Filling and Sealing Machine is a highly efficient and versatile piece of equipment used in various industries. It is designed to automatically fill and seal tubes in a continuous rotary motion. With its advanced technology and precision, it ensures accurate filling, reliable sealing, and high production output. This machine is a reliable solution for efficient and streamlined tube packaging processes."
        description1="We proudly offer four highly capable tube filling and sealing machines known for their efficiency. Our machines have a production range starting from as low as 35 tubes per minute and going up to 150 tubes per minute. These state-of-the-art machines have been carefully designed and built to deliver optimal performance and productivity in tube packaging processes. With our range of top-performing machines, we provide reliable solutions to meet various production needs and ensure efficient operations."
        />
        <Intro2 />
        <Tffeature sections={TffeatureSections1} />
        <Vid videoSrc="/cartoning.mp4" description="Video Description Here" />
    </div>
)
}

export default Pharmaceutical