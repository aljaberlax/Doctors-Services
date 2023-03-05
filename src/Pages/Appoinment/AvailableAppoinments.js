import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppoinments = ({ date, setDate }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)
    const formatedDate = format(date, 'PP');
    const { data: services, isLoading,refetch } = useQuery(['available',formatedDate], () => fetch(`https://doctor-service-server.onrender.com/available?date=${formatedDate}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }


    // useEffect(() => {
    //     
    //         .then(data => setServices(data))
    // }, [formatedDate])
    // const { data: services, isLoading } = useQuery('available',
    //     () => fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //         .then(res => res.json()))

    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h4 className='text-center text-xl text-primary'> Available Appoinment on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id} service={service}
                        setTreatment={setTreatment}
                    >

                    </Service>)
                }
            </div>
            {treatment && <BookingModal
                setTreatment={setTreatment}
                date={date}
                treatment={treatment}
                refetch={refetch}>
            </BookingModal>}
        </div>
    );
};

export default AvailableAppoinments;