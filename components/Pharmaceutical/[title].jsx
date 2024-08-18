import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const MachineDetail = () => {
    const router = useRouter();
    const { title } = router.query;

    // Fetch machine data based on the title here, if needed
    const [machineData, setMachineData] = useState(null);

    useEffect(() => {
        if (title) {
            // Fetch machine details based on the title
            // For example:
            // fetch(`/api/machines/${title}`).then(res => res.json()).then(data => setMachineData(data));
        }
    }, [title]);

    if (!machineData) return <p>Loading...</p>;

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-4">Machine: {title}</h1>
            {/* Render machine details based on the title */}
            <p>{machineData.description}</p>
            <Image src={machineData.image} alt={title} width={500} height={300} />
        </div>
    );
};

export default MachineDetail;
