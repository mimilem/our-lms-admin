import React,{Component} from "react";
import Sidebar from "../layout/sidebar";

export default class Home extends Component {
    render() {
        return(
            <div className="page-container">
                <Sidebar />
                <p>acceuil</p>
            </div>
        )
    }
}