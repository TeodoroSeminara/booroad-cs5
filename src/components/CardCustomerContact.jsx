import Accordion from 'react-bootstrap/Accordion';

function CardCustomerContact({ customerProp }) {
    const { name, surname, phone, email, cf, img } = customerProp;
    return (
        <>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <strong>{name} {surname}</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="customer-info">
                            <div className="customer-details">
                                <div className="customer-detail">
                                    <strong>📞 Telefono:</strong>
                                    <span>{phone}</span>
                                </div>
                                <div className="customer-detail">
                                    <strong>📧 Email:</strong>
                                    <span>{email}</span>
                                </div>
                                <div className="customer-detail">
                                    <strong>🆔 Codice Fiscale:</strong>
                                    <span>{cf}</span>
                                </div>
                            </div>
                            <img src={img} alt={name} className="customer-avatar" />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default CardCustomerContact;