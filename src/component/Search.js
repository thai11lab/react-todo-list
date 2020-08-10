import React, { Component } from "react";

class Search extends Component{

    state={
        keyWord:""
    }
    handleChane=(e)=>{
        const name = e.target.name;
        const value=e.target.value;
        this.setState({
            [name]:value,
        })
    }
    handleClick=()=>{
        this.props.onSearch(this.state.keyWord);
    }
    render(){
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                                <input type="text" className="form-control" placeholder="Nhập từ khóa..." name="keyWord" value={this.state.keyWord} onChange={this.handleChane} />
                                <span className="input-group-btn">
                                <button className="btn btn-primary" type="button" onClick={this.handleClick}>
                                            <span className="fa fa-search mr-5"></span>Tìm
                                </button>
                                </span>
                </div>
             </div>
        );
    }
}
export default Search;