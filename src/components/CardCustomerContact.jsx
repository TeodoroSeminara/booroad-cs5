import Accordion from 'react-bootstrap/Accordion';


function CardCustomerContact({ customerProp }) {
    const { id, name, surname, phone, email, cf, img } = customerProp;
    return (
        <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
                <Accordion.Header>{name} {surname}</Accordion.Header>
                <Accordion.Body>
                    <p>{phone}</p>
                    <p>{email}</p>
                    <p>{cf}</p>
                    <img src={img} alt={name} />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default CardCustomerContact;