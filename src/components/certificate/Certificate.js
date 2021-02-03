import React from 'react'
import Big from '../../images/bioaidlogo.svg'
import { Link } from 'react-router-dom'

const date = new Date()

function Certificate(props) {

    const user = JSON.parse(localStorage.getItem('User'))

    const { certified } = props

    if (certified) {

        return (
            <div>
                <div className="context">
                    <div>Congratulations</div>
                    <p className="one">Certificate of Validation</p>
                    <p className="two">Given by Bio Aid enterprise to</p>
                    <p className="three">{`${user.firstName} ${user.lastName}`}</p>
                    <p className="four">{`on the ${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`}</p>
                    <p className="two">as a reward for passing our exam at 80% and above</p>
                </div>
                <img src={Big} alt="medal-img" className='logo-img' />
            </div>
        )
    } else {
        return (
            <div className='guest'>
                <p className='guest-talk'>To See Certificate you have to take the Exam</p>
                <Link to="/allQuestions" className="link">
                    Start Exam
            </Link>
            </div>
        )
    }

}

export default Certificate
