import React,{Component} from "react";
import Search from "./Search";
import Sort from "./Sort";

class Control extends Component{
    render(){
        let {onSearch} = this.props;
        return(
            <div className="row mt-15">
                <Search onSearch={onSearch}></Search>
                <Sort></Sort>
            </div>
        );
    }
}

export default Control;