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
                <a href="https://github.com/ChelseaMerrill" target='_blank' className='contact-button'><h4>GitHub</h4></a>
                <a href="https://www.linkedin.com/in/chelsea-merrill/" target='_blank' className='contact-button'><h4>LinkedIn</h4></a>
            </div>
        </div>
    );
}

export default Contact