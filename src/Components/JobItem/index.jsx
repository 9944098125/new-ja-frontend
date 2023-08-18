import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function JobItem({ item }) {
    // console.log(item && item)
    return (
        <React.Fragment>
            <Link to={`/jobs/${item.id}`} style={{ textDecoration: 'none', color: 'inherit', width: 'inherit', display: 'inherit', flexDirection: 'inherit', alignItems: 'inherit' }}>
                <div className="item-container mb-5">
                    <img src={item?.company_logo} alt="" height={100} width={200} />
                    <div className="col-md-5">
                        <h4 className="company-name">
                            {item?.company_name}
                        </h4>
                        <p className="role">
                            {item?.job_role}
                        </p>
                        <p className="job-type">
                            {item?.job_type}
                        </p>
                    </div>
                    <h1>{'>'}</h1>
                </div>
            </Link>
        </React.Fragment>
    )
}