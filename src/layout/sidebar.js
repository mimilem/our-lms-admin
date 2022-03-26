import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar ({show}) {
    return(
        <div className="sidebar-container">
				<div className="sidemenu-container navbar-collapse fixed-menu">
					<div id="remove-scroll" className="left-sidemenu">
						<ul className="sidemenu  page-header-fixed slimscroll-style" data-keep-expanded="false"
							data-auto-scroll="true" data-slide-speed="200" style={{PaddingTop: '20px'}}>
							<li className="sidebar-toggler-wrapper hide">
								<div className="sidebar-toggler">
									<span></span>
								</div>
							</li>
							<li className="nav-item start active open">
								<Link to={'/'} className="nav-link nav-toggle">
									<i className="material-icons">dashboard</i>
									<span className="title">Dashboard</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={'/generalstaff'} className="nav-link nav-toggle"> 
									<i className="material-icons">group</i>
									<span className="title">General Staff</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={'/campuses'} className="nav-link nav-toggle"> 
									<i className="material-icons">store</i>
									<span className="title">Campuses</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={'/calender'} className="nav-link nav-toggle"> 
									<i className="material-icons">event</i>
									<span className="title">General calender</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={'/fees'} className="nav-link nav-toggle"> 
									<i className="material-icons">monetization_on</i>
									<span className="title">Fees</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={'/notication'} className="nav-link nav-toggle"> 
									<i className="material-icons">email</i>
									<span className="title">General notifications</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={'/event'} className="nav-link nav-toggle"> 
									<i className="material-icons">event</i>
									<span className="title">General events</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link to={'/library'} className="nav-link nav-toggle">
								    <i className="material-icons">local_library</i>
									<span className="title">Library</span> 
								</Link>
							</li>
							{show?
								<>
									
								<li className="nav-item start active open">
									<a className="nav-link nav-toggle">
										<i className="material-icons">dashboard</i>
										<span className="title">Dashboard</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link nav-toggle"> <i className="material-icons">business</i>
										<span className="title">Faculte</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link nav-toggle"> <i className="material-icons">view_quilt</i>
										<span className="title">Module shelf</span> <span className="arrow"></span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link nav-toggle"> <i className="material-icons">group</i>
										<span className="title">Students</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link nav-toggle"> <i className="material-icons">group</i>
										<span className="title">Manage users</span> 
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link nav-toggle"> <i className="material-icons">description</i>
										<span className="title">Exams</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link nav-toggle"> <i className="material-icons">slideshow</i>
										<span className="title">media</span>
									</a>
								</li>
								</>
							: ''}

						</ul>
					</div>
				</div>
			</div>
    )
}