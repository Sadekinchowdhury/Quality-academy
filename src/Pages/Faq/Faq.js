import Accordion from 'react-bootstrap/Accordion';
const Faq = () => {

    return (
        <div className="a">

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is premium access</Accordion.Header>
                    <Accordion.Body>
                        Premium accsess is only paid course and higher level .
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is payment method </Accordion.Header>
                    <Accordion.Body>
                        You can paid bkash,rocket,paypal,bitcoin,binance etc.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What about us?</Accordion.Header>
                    <Accordion.Body>
                        You can communication with us.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>When expired course</Accordion.Header>
                    <Accordion.Body>
                        It is Liftime course
                    </Accordion.Body>
                </Accordion.Item>



            </Accordion>
        </div>
    );
};

export default Faq;