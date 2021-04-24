import React, { useEffect, useState } from 'react'
import axios from '../axios'
import dayjs from 'dayjs'
import { Card } from 'react-bootstrap';
import './DataCard.css'

const DataCard = (props) => {
    const [datas, setDatas] = useState()
    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(props.url);
                setDatas(request.data);
            } catch(error) {
                console.log(error.message);
            }
        }

        fetchData()
    }, [props.url])

    function changeDateFormat(date) {
        return dayjs(date).format("MMMM D, YYYY h:mm A");
    }

    return (
        <Card className="data-card text-black">
            <Card.Body>
               <div className="row">
                   <div className="col-lg-3">
                        <Card.Title className="data-title">Confirmed</Card.Title>
                        <h2 className="mb-2 value-title">{datas && datas.confirmed.value}</h2>
                   </div>
                   <div className="col-lg-3">
                        <Card.Title className="data-title">Under Treatment</Card.Title>
                        <h2 className="mb-2 value-title">{datas && datas.confirmed.value - datas.recovered.value - datas.deaths.value}</h2>
                   </div>
                   <div className="col-lg-3">
                        <Card.Title className="data-title">Recovered</Card.Title>
                        <h2 className="mb-2 value-title">{datas && datas.recovered.value}</h2>
                   </div>
                   <div className="col-lg-3">
                        <Card.Title className="data-title">Deaths</Card.Title>
                        <h2 className="mb-2 value-title">{datas && datas.deaths.value}</h2>
                   </div>
               </div>
               <div>
                   <p className="value-title">Last update : {datas && changeDateFormat(datas.lastUpdate)}</p>
               </div>
            </Card.Body>
        </Card>
    )
}

export default DataCard