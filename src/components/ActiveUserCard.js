import { Card } from 'react-bootstrap';
import './ActiveUserCard.css'

function ActiveUserCard() {
    return (
        <Card className="active-card text-white">
            <Card.Body>
                <Card.Title>Active Users right now</Card.Title>
                <h1 className="mb-2">479</h1>
                <p>Page views per minute</p>
                <hr className="border-light"></hr>
                <Card.Link href="#" className="text-white">
                    Real Time Report
                </Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ActiveUserCard