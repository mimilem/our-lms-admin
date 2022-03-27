import React,{Component} from "react";
import Sidebar from "../../layout/sidebar";
import { Link } from 'react-router-dom';

export default class Fees extends Component {

    render() {
        const {show} = this.props;
        return(
            <div className="page-content-wrapper">
            <Sidebar show={show} />
				<div className="page-content">
					<div className="page-bar">
						<div className="page-title-breadcrumb">
							<div className="pull-left">
								<div className="page-title">General Fees</div>
							</div>
							<ol className="breadcrumb page-breadcrumb pull-right">
								<li><i className="fa fa-home"></i>&nbsp;<Link className="parent-item"
										to={'/'}>Home</Link>&nbsp;<i className="fa fa-angle-right"></i>
								</li>
								<li><a className="parent-item" href="#">Fees</a>&nbsp;<i className="fa fa-angle-right"></i>
								</li>
								<li className="active">General Fees</li>
							</ol>
						</div>
					</div>
					<div className="row">
						<div className="card-box">
							<div className="card-head">
								<header>General Fees</header>
							</div>
							<div className="card-body ">
								
								<div className="row">
									<div className="col-lg-8 col-md-6 col-12 col-sm-6">
										<div className="blogThumb">
											<div className="course-box">
                                                <div className="card-head">
                                                    <header>Academic year: 2022</header>
                                                </div>
                                                <div className="card-body row">
                                                    <div className="panel">
                                                        <div className="panel-body">Richfield-Pricing-Booklet.pdf</div>
                                                    </div>
                                                </div>
                                            </div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6 col-12 col-sm-6 ">
										<div className="card-box">
                                            <div className="card-head">
                                                <header>Add Document</header>
                                            </div>
                                            <div className="card-body row">
                                                <div className="col-lg-12 p-t-20">
                                                    <div
                                                        className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                                        <input className="mdl-textfield__input" type="text"
                                                            id="txtFirstName"/>
                                                        <label className="mdl-textfield__label">Name</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 p-t-20">
                                                    <div
                                                        className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                                        <input className="mdl-textfield__input" type="file"
                                                            id="txtLasttName"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 p-t-20 text-center">
                                                    <button type="button"
                                                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-primary">Submit</button>
                                                    <button type="button"
                                                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default">Cancel</button>
                                                </div>
                                            </div>
										</div>
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