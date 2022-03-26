import React,{Component} from "react";
import Sidebar from "../../layout/sidebar";
import { Link } from 'react-router-dom';

export default class Notication extends Component {

    render() {
        const {show} = this.props;
        return(
            <div className="page-content-wrapper">
            <Sidebar show={show} />
				<div className="page-content">
					<div className="page-bar">
						<div className="page-title-breadcrumb">
							<div className="pull-left">
								<div className="page-title">General Notifications</div>
							</div>
							<ol className="breadcrumb page-breadcrumb pull-right">
								<li><i className="fa fa-home"></i>&nbsp;<Link className="parent-item"
										to={'/'}>Home</Link>&nbsp;<i className="fa fa-angle-right"></i>
								</li>
								<li><a className="parent-item" href="#">Notifications</a>&nbsp;<i className="fa fa-angle-right"></i>
								</li>
								<li className="active">General Notifications</li>
							</ol>
						</div>
					</div>
					<div className="row">
						<div className="card-box">
							<div className="card-head">
								<header>General Notifications</header>
                                <div className="pull-right">
                                <button type="button"
									className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-info m-3">Add Notification</button>
                                </div>
							</div>
							<div className="card-body ">
								
								<div className="row">
									<div className="col-lg-3 col-md-6 col-12 col-sm-6">
										<div className="blogThumb">
											<div className="course-box">
												<h4>Campus 1</h4>
												
												<p><span><i className="ti-alarm-clock"></i> Duration: 6 Months</span></p>
												<p><span><i className="ti-user"></i> Professor: Jane Doe</span></p>
												<div class="text-muted"><span class="m-r-10">April 23</span></div>
												<button type="button"
													className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-pink"><i className="fa fa-trash"></i></button>
                                                
                                            </div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-12 col-sm-6 ">
										<div className="blogThumb">
											<div className="course-box">
												<h4>Campus 2</h4>
												
												<p><span><i className="ti-alarm-clock"></i> Duration: 6 Months</span></p>
												<p><span><i className="ti-user"></i> Professor: Jane Doe</span></p>
												<div class="text-muted"><span class="m-r-10">April 23</span></div>
												<button type="button"
													className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-pink"><i className="fa fa-trash"></i></button>
                                                
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-12 col-sm-6">
										<div className="blogThumb">
											<div className="course-box">
												<h4>Campus 3</h4>
												<p><span><i className="ti-alarm-clock"></i> Duration: 6 Months</span></p>
												<p><span><i className="ti-user"></i> Professor: Jane Doe</span></p>
												<div class="text-muted"><span class="m-r-10">April 23</span></div>
												<button type="button"
													className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-pink"><i className="fa fa-trash"></i></button>
                                                
                                            </div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-12 col-sm-6">
										<div className="blogThumb">
											<div className="course-box">
												<h4>Campus 4</h4>
												
												<p><span><i className="ti-alarm-clock"></i> Duration: 6 Months</span></p>
												<p><span><i className="ti-user"></i> Professor: Jane Doe</span></p>
												<div class="text-muted"><span class="m-r-10">April 23</span></div>
												<button type="button"
													className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-pink"><i className="fa fa-trash"></i></button>
                                                
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