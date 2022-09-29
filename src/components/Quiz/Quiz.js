import Accordion from 'react-bootstrap/Accordion';
import './Quiz.css'

function Quiz() {
    return (
        <div className='quiz'>
            <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How does React work ?</Accordion.Header>
                    <Accordion.Body>
                        ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Difference between props and state.</Accordion.Header>
                    <Accordion.Body>
                        Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Where does useEffect use, without loading data ?</Accordion.Header>
                    <Accordion.Body>
                        useEffect after render: We know that, the useEffect() is used for causing side effects in functional components and it is also capable for handling componentDidMount(), componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Quiz;