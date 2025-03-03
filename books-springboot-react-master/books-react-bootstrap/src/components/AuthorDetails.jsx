import React, { useEffect, useState, useCallback } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { getAuthor } from '../services/authorService';

function AuthorDetails(props) {
    const [data, setData] = useState([]);

    const getData = useCallback(async () => {
        try {
            const result = await getAuthor(props.match.params.id);
            setData(result.data.data);
        } catch (ex) {
            if (ex.response && ex.response.status === 404) {
                props.history.replace('/not-found');
            }
        }
    }, [props.match.params.id, props.history]); // Ensure dependencies are stable

    useEffect(() => {
        getData();
    }, [getData]); // Now useEffect is properly tracking dependencies

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 1
            }}
        />
    );

    const handleBackToBooks = () => {
        props.history.push('/authors');
    };

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item onClick={handleBackToBooks}>Authors</Breadcrumb.Item>
                <Breadcrumb.Item active>{data.fullName}</Breadcrumb.Item>
            </Breadcrumb>

            <Row>
                <Col sm={3}></Col>
                <Col sm={9}>
                    <h1>{data.fullName}</h1>
                    <h5>
                        <ColoredLine color="black" />
                        Born: <label style={{ color: 'green' }}>{data.born}</label>
                    </h5>
                    <ColoredLine color="black" />
                    <h5>
                        <Row>
                            <Col sm={6}>
                                <Badge pill bg="primary">
                                    {data.type}
                                </Badge>
                            </Col>
                            <Col sm={6} align="right">
                                Years Active: {data.yearsActive}
                            </Col>
                        </Row>
                        <ColoredLine color="black" />
                        <p></p>
                        Books: {data.books}
                    </h5>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Description</Accordion.Header>
                            <Accordion.Body>{data.description}</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Row>
                        <Col md={{ span: 3, offset: 4 }}>
                            <Button variant="primary" onClick={handleBackToBooks}>
                                Back
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default AuthorDetails;

// import React, {useEffect, useState} from 'react';
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Accordion from 'react-bootstrap/Accordion'
// import Button from 'react-bootstrap/Button'
// import Badge from 'react-bootstrap/Badge'
// import Breadcrumb from 'react-bootstrap/Breadcrumb'
// import { getAuthor } from "../services/authorService";

// function AuthorDetails(props) {
//     const [data, setData] = useState([]);

//     const getData = async () => {
//         try {
//             const result = await getAuthor(props.match.params.id);
//             setData(result.data.data);
//         } catch (ex) {
//             if (ex.response && ex.response.status === 404)
//             props.history.replace("/not-found");
//         }
//     }

//     useEffect(() =>{
//         getData();
//      }, []);

//     const ColoredLine = ({ color }) => (
//         <hr
//             style={{
//                 color: color,
//                 backgroundColor: color,
//                 height: 1
//             }}
//         />
//     );

//     const handelBackToBooks = () =>{
//         props.history.push('/authors')
//     }

//     return (
//         <div>
//             <Breadcrumb>
//                 <Breadcrumb.Item onClick={handelBackToBooks}>Authors</Breadcrumb.Item>
//                 <Breadcrumb.Item active>{data.fullName}</Breadcrumb.Item>
//             </Breadcrumb>

//             <Row>
//             <Col sm={3}>
//             </Col>
//             <Col sm={9}>
//                 <h1>
//                     {data.fullName}
//                 </h1>
//                 <p></p>
//                 <h5>
//                     <ColoredLine color="black" />
//                         Born: &nbsp;
//                         <label style={{color:'green' }}>
//                             {data.born}
//                         </label>
//                 </h5>
//                 <ColoredLine color="black" />
//                 <h5>
//                 <Row>
//                     <Col sm={6}>
//                         <Badge pill bg="primary">
//                             {data.type}
//                         </Badge>
//                     </Col>
//                     <Col sm={6} align="right">
//                         Years Active: {data.yearsActive}
//                     </Col>
//                 </Row>
//                     <ColoredLine color="black" />
//                     <p></p>
//                     Books: {data.books}
//                 </h5>
//                 <p></p>
//                 <Accordion defaultActiveKey="0">
//                     <Accordion.Item eventKey="0">
//                         <Accordion.Header>Description</Accordion.Header>
//                         <Accordion.Body>
//                             {data.description}
//                         </Accordion.Body>
//                     </Accordion.Item>
//                 </Accordion>

//                 <p></p>
//                 <Row>
//                     <Col md={{ span: 3, offset: 4 }}>
//                         <p>
//                         <Button variant="primary" onClick={handelBackToBooks}>Back</Button>{''}
//                         </p>
//                     </Col>
//                 </Row>
//             </Col>
//         </Row>
//     </div>
//     )
// }


// export default AuthorDetails


