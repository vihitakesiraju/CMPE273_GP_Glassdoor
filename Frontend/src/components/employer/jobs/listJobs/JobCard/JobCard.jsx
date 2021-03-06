import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './JobCard.styles.css'
class JobCard extends Component {
    state = {
    }
    componentDidMount() {
        console.log(this.props)
    }
    handleJobDetails = () => {
        localStorage.setItem("jobId", this.props.props.job._id);
        // console.log(this.props.props.props)
        this.props.props.props.history.push(
            {
                pathname: '/employer/jobs/edit',
                state: { job: { ...this.props.props.job } }
            }
        )
        // this.setState({
        //     redirect: true
        // })

    }
    handleViewApplicants = () => {
        localStorage.setItem("jobId", this.props.props.job._id);
        // console.log(this.props.props.props)
        this.props.props.props.history.push(
            {
                pathname: '/employer/jobs/applications',
                state: { job: { ...this.props.props.job } }
            }
        )
        // this.setState({
        //     redirect: true
        // })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/employer/jobs/edit' />
        }
    }
    render() {
        let data = this.props.props.job

        if (data.postedDate) {
            data.postedDate = data.postedDate.split('T')[0]
        }
        return (
            <div>
                <div class="card jobCard">
                    <h5 class="card-header">{data.companyName}</h5>
                    <div class="card-body">
                        <h5 class="card-title">{data.jobTitle}</h5>
                        <p class="card-text">Industry : {data.industry}</p>
                        <p class="card-text">Average Salary : {data.averageSalary}</p>
                        {/* <p class="card-text">Responsibilities : {data.responsibilities}</p> */}
                        {/* <p class="card-text">Location : {data.streetAddress},{data.city},{data.state},{data.country},{data.zip}</p> */}
                        <p class="card-text">Location :{data.city},{data.state},{data.country}</p>
                        <p class="card-text">Remote : {data.remote ? "Yes" : "No"}</p>
                        <p class="card-text">Applications Count : {data.applications.length}</p>
                        <p class="card-text"><small class="text-muted">{data.postedDate}</small></p>
                        <button onClick={this.handleJobDetails} style={{ marginRight: "10px" }} class="btn btn-success">Edit Job</button>
                        <button onClick={this.handleViewApplicants} class="btn btn-success">View Applications</button>

                    </div>
                </div>
            </div>
        );
    }
}

export default JobCard;