import React,{Component} from "react";
import Sidebar from "../layout/sidebar";

export default class Home extends Component {
    state = {
        show: false
    }
    render() {
        const {show} = this.state;
        return(
            <div className="page-container">
                <Sidebar show={show} />
                <div className="page-content-wrapper">
                    <div className="page-content">
                        <div className="page-bar">
                            <div className="page-title-breadcrumb">
                                <div className=" pull-left">
                                    <div className="page-title">General Details</div>
                                </div>
                                <ol className="breadcrumb page-breadcrumb pull-right">
                                    <li><i className="fa fa-home"></i>&nbsp;<a className="parent-item"
                                            href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right"></i>
                                    </li>
                                    <li className="active">Dashboard</li>
                                </ol>
                            </div>
                        </div>

                        <div className="row">
                            <div className="card-box">
                                <div className="card-head">
                                    <header>Vinco-eLearning</header>
                                    <button id="panel-button"
                                            className="mdl-button mdl-js-button mdl-button--icon pull-right"
                                            data-upgraded=",MaterialButton">
                                            <i className="material-icons">more_vert</i>
                                        </button>
                                        <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                                            data-mdl-for="panel-button">
                                            <li className="mdl-menu__item"><i className="material-icons">assistant_photo</i>modifier
                                            </li>
                                        </ul>
                                </div>
                                <div className="card-body row">
                                    <div className="col-lg-6 p-t-20">
                                        <div
                                            className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <input className="mdl-textfield__input" type="text"
                                                id="txtFirstName"/>
                                            <label className="mdl-textfield__label">Institution name</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div
                                            className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <input className="mdl-textfield__input" type="number"
                                                id="txtLasttName"/>
                                            <label className="mdl-textfield__label">Academic Year</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div
                                            className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <input className="mdl-textfield__input" type="text" id="txtRollNo"/>
                                            <label className="mdl-textfield__label">Phone</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div
                                            className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <input className="mdl-textfield__input" type="email"
                                                id="txtemail"/>
                                            <label className="mdl-textfield__label">Email</label>
                                            <span className="mdl-textfield__error">Enter Valid Email Address!</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 p-t-20">
                                        <div
                                            className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <input className="mdl-textfield__input" type="text"
                                                id="date"/>
                                            <label className="mdl-textfield__label">Adress</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 p-t-20 text-center">
                                        <button type="button"
                                            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Submit</button>
                                        <button type="button"
                                            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}