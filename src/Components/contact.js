import { Button} from 'react-bootstrap';
const Contact = () => {
    return(
        <div>
            <div className="contact-row">
                <h5 className='contact-col-1'>email:</h5>
                <h5>chelmer1223@gmail</h5>
            </div>
            <div className="contact-row">
                <h5 className='contact-col-1'>phone:</h5>
                <h5>518-225-6160</h5>
            </div>
            <div className="contact-row-bottom">
                <Button href='https://github.com/ChelseaMerrill' target='empty'><h4>GitHub</h4></Button>
                <Button href='https://www.linkedin.com/in/chelsea-merrill/' target='empty'><h4>LinkedIn</h4></Button>
            </div>
        </div>
    );
}

export default Contact