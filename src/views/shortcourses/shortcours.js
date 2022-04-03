import React,{Component} from "react";
import Sidebar from "../../layout/sidebar";
import { Link } from 'react-router-dom';

export default class ShortCours extends Component {

    render() {
        const {show} = this.props;
        return(
            <div className="page-content-wrapper">
            <Sidebar show={show} />
				<div className="page-content">
					<div className="page-bar">
						<div className="page-title-breadcrumb">
							<div className="pull-left">
								<div className="page-title">All Short Courses List</div>
							</div>
							<ol className="breadcrumb page-breadcrumb pull-right">
								<li><i className="fa fa-home"></i>&nbsp;<Link className="parent-item"
										to={'/'}>Home</Link>&nbsp;<i className="fa fa-angle-right"></i>
								</li>
								<li><a className="parent-item" href="#">Short Courses</a>&nbsp;<i className="fa fa-angle-right"></i>
								</li>
								<li className="active">All Short Courses List</li>
							</ol>
						</div>
					</div>
					<div className="row">
						<div className="card-box">
							<div className="card-head">
								<header>All Short Courses</header>
                                <div className="pull-right">
                                <button type="button"
									className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-info m-3">Add Short Cours</button>
                                </div>
							</div>
							<div className="card-body ">
								
								<div className="row">
									<div className="col-lg-3 col-md-6 col-12 col-sm-6">
										<div className="blogThumb">
											<div className="thumb-center"><img className="img-responsive" alt="user"
													src="../assets/img/course/course1.jpg" /></div>
											<div className="course-box">
												<h4>Short Course 1</h4>
												
												<p><span><i className="ti-alarm-clock"></i> Duration: 6 Months</span></p>
												<p><span><i className="ti-user"></i> Professor: Jane Doe</span></p>
												<p><span><i className="fa fa-graduation-cap"></i> Students: 200+</span></p>
												<button type="button"
													className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-info">details</button>
                                                <div className="pull-right">
                                                    <button type="button"
													    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-light mx-2">
                                                        <i className="fa fa-edit"></i>
                                                    </button>
                                                    <button type="button"
													    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-pink mx-2">
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-12 col-sm-6 ">
										<div className="blogThumb">
											<div className="thumb-center"><img className="img-responsive" alt="user"
													src="../assets/img/course/course2.jpg" /></div>
											<div className="course-box">
												<h4>Short Cours 2</h4>
												
												<p><span><i className="ti-alarm-clock"></i> Duration: 6 Months</span></p>
												<p><span><i className="ti-user"></i> Professor: Jane Doe</span></p>
												<p><span><i className="fa fa-graduation-cap"></i> Students: 200+</span></p>
												<button type="button"
													className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-info">details</button>
                                                <div className="pull-right">
                                                    <button type="button"
													    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-light mx-2">
                                                        <i className="fa fa-edit"></i>
                                                    </button>
                                                    <button type="button"
													    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-pink mx-2">
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                                </div>
											</div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-12 col-sm-6">
										<div className="blogThumb">
											<div className="thumb-center"><img className="img-responsive" alt="user"
													src="../assets/img/course/course3.jpg" /></div>
											<div className="course-box">
												<h4>Short Cours 3</h4>
												<p><span><i className="ti-alarm-clock"></i> Duration: 6 Months</span></p>
												<p><span><i className="ti-user"></i> Professor: Jane Doe</span></p>
												<p><span><i className="fa fa-graduation-cap"></i> Students: 200+</span></p>
												<button type="button"
													className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-info">details</button>
                                                <div className="pull-right">
                                                    <button type="button"
													    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-light mx-2">
                                                        <i className="fa fa-edit"></i>
                                                    </button>
                                                    <button type="button"
													    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-pink mx-2">
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-12 col-sm-6">
										<div className="blogThumb">
											<div className="thumb-center"><img className="img-responsive" alt="user"
													src="../assets/img/course/course4.jpg" /></div>
											<div className="course-box">
												<h4>Short Cours 4</h4>
												
												<p><span><i className="ti-alarm-clock"></i> Duration: 6 Months</span></p>
												<p><span><i className="ti-user"></i> Professor: Jane Doe</span></p>
												<p><span><i className="fa fa-graduation-cap"></i> Students: 200+</span></p>
												<button type="button"
													className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-info">details</button>
                                                <div className="pull-right">
                                                    <button type="button"
													    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-light mx-2">
                                                        <i className="fa fa-edit"></i>
                                                    </button>
                                                    <button type="button"
													    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-pink mx-2">
                                                        <i className="fa fa-trash"></i>
                                                    </button>
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