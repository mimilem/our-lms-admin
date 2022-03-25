import React from "react";

export default function Header () {

    return(
        <div className="page-header navbar navbar-fixed-top">
			<div className="page-header-inner ">
				<div className="page-logo">
					<a href="index.html">
						<span className="logo-icon material-icons fa-rotate-45">school</span>
						<span className="logo-default">Vinco</span> </a>
				</div>
				<ul className="nav navbar-nav navbar-left in">
					<li><a href="#" className="menu-toggler sidebar-toggler"><i className="icon-menu"></i></a></li>
				</ul>
				<a className="menu-toggler responsive-toggler" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
					<span></span>
				</a>
				<div className="top-menu">
					<ul className="nav navbar-nav pull-right">
						<li><a className="fullscreen-btn"><i className="fa fa-arrows-alt"></i></a></li>
						
						<li className="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">
							<a className="dropdown-toggle" data-bs-toggle="dropdown" data-hover="dropdown"
								data-close-others="true">
								<i className="fa fa-bell-o"></i>
								<span className="badge headerBadgeColor1"> 6 </span>
							</a>
							<ul className="dropdown-menu">
								<li className="external">
									<h3><span className="bold">Notifications</span></h3>
									<span className="notification-label purple-bgcolor">New 6</span>
								</li>
								<li>
									<ul className="dropdown-menu-list small-slimscroll-style" data-handle-color="#637283">
										<li>
											<a>
												<span className="time">just now</span>
												<span className="details">
													<span className="notification-icon circle deepPink-bgcolor"><i
															className="fa fa-check"></i></span>
													Congratulations!. </span>
											</a>
										</li>
										<li>
											<a>
												<span className="time">3 mins</span>
												<span className="details">
													<span className="notification-icon circle purple-bgcolor"><i
															className="fa fa-user o"></i></span>
													<b>John Micle </b>is now following you. </span>
											</a>
										</li>
										<li>
											<a>
												<span className="time">7 mins</span>
												<span className="details">
													<span className="notification-icon circle blue-bgcolor"><i
															className="fa fa-comments-o"></i></span>
													<b>Sneha Jogi </b>sent you a message. </span>
											</a>
										</li>
										<li>
											<a>
												<span className="time">12 mins</span>
												<span className="details">
													<span className="notification-icon circle pink"><i
															className="fa fa-heart"></i></span>
													<b>Ravi Patel </b>like your photo. </span>
											</a>
										</li>
										<li>
											<a>
												<span className="time">15 mins</span>
												<span className="details">
													<span className="notification-icon circle yellow"><i
															className="fa fa-warning"></i></span> Warning! </span>
											</a>
										</li>
										<li>
											<a>
												<span className="time">10 hrs</span>
												<span className="details">
													<span className="notification-icon circle red"><i
															className="fa fa-times"></i></span> Application error. </span>
											</a>
										</li>
									</ul>
									<div className="dropdown-menu-footer">
										<a> All notifications </a>
									</div>
								</li>
							</ul>
						</li>
						
						<li className="dropdown dropdown-user">
							<a className="dropdown-toggle" data-bs-toggle="dropdown" data-hover="dropdown"
								data-close-others="true">
								<span className="username username-hide-on-mobile"> Kiran </span>
								<i className="fa fa-angle-down"></i>
							</a>
							<ul className="dropdown-menu dropdown-menu-default">
								<li>
									<a href="user_profile.html">
										<i className="icon-user"></i> Profile </a>
								</li>
								<li>
									<a href="login.html">
										<i className="icon-logout"></i> Log Out </a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
    )
}