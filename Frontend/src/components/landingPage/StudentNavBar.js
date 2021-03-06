import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import '../../App.css'
import './loggedInNav.css'
import glassdoor_font from '../../images/glassdoor_font.PNG'
var FontAwesome = require('react-fontawesome');

class StudentNavBar extends React.Component {
    constructor() {
        super()
        this.state = {
            searchParameter: '',
            selectedOption: "jobs",
            searchLocation: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleCategoryChange = this.handleCategoryChange.bind(this)
        this.submitSearch = this.submitSearch.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(event) {
        event.preventDefault();
        localStorage.clear();
        this.props.history.push('/')
    }

    handleChange(event) {
        event.preventDefault()
        this.setState({
            searchParameter: event.target.value
        })

    }

    handleCategoryChange(event) {
        event.preventDefault();
        this.setState({
            selectedOption: event.target.value
        })

    }

    submitSearch(event) {
        console.log("Previos", this.state.previousSearchParameter)
        console.log("Category", this.state.selectedOption)
        console.log("Parameter", this.state.searchParameter)
        event.preventDefault();
        if(this.state.searchParameter ===  undefined || this.state.searchParameter === null || this.state.searchParameter === ""){
            this.props.history.replace('/companyhomepage');
        }
        else if(this.state.selectedOption === "jobs"){
            this.props.history.replace({
                pathname: '/jobstab',
                state: {
                    detail: this.state.searchParameter
                }
            });
        }
        else if (this.state.selectedOption === "companies") {
            this.props.history.replace({
                pathname: '/companiestab',
                state: { detail: this.state.searchParameter }
            });
        }
        else if (this.state.selectedOption === "salaries") {
            this.props.history.replace({
                pathname: '/salariestab',
                state: { detail: this.state.searchParameter }
            });
        }
        else if (this.state.selectedOption === "interviews") {
            this.props.history.replace({
                pathname: '/interviewstab',
                state: { detail: this.state.searchParameter }
            });
        }
        window.location.reload()
    }

    render() {
        return (
            <header style={{ boxShadow: "inset 0 -1px 0 0 #dee0e3", background: "#fff", height: "178px", width: "100%" }}>
                <div style={{ boxShadow: "inset 0 -1px 0 0 #dee0e3", background: "#fff", height: "90px", width: "100%" }}>
                    <nav style={{ padding: "20px" }}>
                        <table style={{ width: "80%", marginLeft: '10%', marginRight: '10%' }}>
                            <tr>
                                <td style={{ width: "15%" }} >
                                    <Link to='/studenthomepage'><img src={glassdoor_font} style={{ width: "100%" }} /></Link>
                                </td>
                                <td style={{ width: "75%" }} >
                                    <form class="form-inline">

                                        <input class="inputSearch" style={{ width: "30%", marginLeft: "15px" }} name="searchParameter" onChange={this.handleChange} type="search" placeholder="Search" aria-label="Search" />
                                        <select class="inputSearch" value={this.state.selectedOption} style={{ width: "10%", marginLeft: "15px" }} onChange={this.handleCategoryChange} id="cars">
                                            <option name="jobs" value="jobs">Jobs</option>
                                            <option name="companies" value="companies">Companies</option>
                                            <option name="salaries" value="salaries">Salaries</option>
                                            <option name="interviews" value="interviews">Interviews</option>
                                        </select>
                                        <input class="inputSearch" style={{ width: "30%", marginLeft: "15px" }} name="searchLocation" onChange={this.handleChange} type="search" placeholder="location" aria-label="Search" />
                                        <button class="submitSearch" style={{ marginLeft: "15px" }} onClick={this.submitSearch} type="submit">Search</button>
                                    </form>
                                </td>
                                <td  >
                                    <button type="button" class="btn btn-success" onClick={this.handleLogout} title="Log Out">Logout</button>

                                </td>
                            </tr>
                        </table>
                    </nav>

                </div>
                <div style={{ background: "#fff", height: "82px" }}>
                    <h6 style={{ paddingTop: "5px", width: "80%", marginLeft: '11%', marginRight: '10%' }}> Hello, what do you want to explore today?</h6>
                    <nav class="navbar navbar-expand-lg navbar-light" style={{ padding: "10px", width: "80%", marginLeft: '10%', marginRight: '10%' }}>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav navbar2">
                                <li class="nav-item navWidth">

                                    <Link to= "/studenthomepage"
                                    class="nav-link navTab">

                                        <i class="fas fa-briefcase"> Jobs</i></Link>
                                    <a class="nav-link navTab" href="#"></a>
                                </li>
                                <li class="nav-item navWidth">
                                    <Link to="/companyhomepage"
                                        class="nav-link navTab">
                                        <i class="far fa-building"> Companies</i></Link>
                                    <a class="nav-link navTab" href="#"></a>
                                </li>
                                <li class="nav-item navWidth">
                                    <Link to="/studenthomepage" class="nav-link navTab">
                                        <i class="far fa-comment-dots">Interviews</i></Link>
                                    <a class="nav-link navTab" href="#"></a>
                                </li>
                                <li class="nav-item navWidth">
                                    <Link to="/studenthomepage" class="nav-link navTab">
                                        <i class="fas fa-money-check-alt">Salaries</i></Link>
                                    <a class="nav-link navTab" href="#"></a>
                                </li>
                                <li class="nav-item navWidth">
                                    <Link to='/student/profile' class="nav-link navTab">
                                        <i class="fas fa-user">Profile</i></Link>
                                    <a class="nav-link navTab" href="#"></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )

    }
}
export default withRouter(StudentNavBar);
