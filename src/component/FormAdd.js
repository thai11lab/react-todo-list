import React, { Component } from "react"

class FormAdd extends Component {

    state={
        id:"",
        name:"",
        status:false
    }
    
    handleChange=(e)=>{
        var name = e.target.name;
        var value = e.target.value;
        if(name=="status"){
            value = e.target.value == "fasle" ? false:true;
        }
        this.setState({
            [name]:value,
        })
    }

    onSubmit =(e)=>{
        e.preventDefault();
        this.props.getValue(this.state);
    }

    handleClose=()=>
    {
        this.props.onClose();
    }

    componentWillMount(){
        if(this.props.taskEdit){
            this.setState({
                id:this.props.taskEdit.id,
                name:this.props.taskEdit.name,
                status:this.props.taskEdit.status,
            })
        }
    }


    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        if(nextProps && nextProps.taskEdit){
            this.setState({
                id:nextProps.taskEdit.id,
                name:nextProps.taskEdit.name,
                status:nextProps.taskEdit.status,
            })
        }else{
            this.setState({
                id:"",
                name:"",
                status:"",
            })
        }
    }

    render(){
        let {id} = this.state;
        return(
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        { id ? " Cập nhật khóa học ": " Thêm khóa học "}
                        <span className="fas fa-times-circle text-right"    
                                onClick={this.handleClose}
                                style={{
                                    float:"right",
                                    cursor:"pointer"
                                }}
                        >đóng</span>
                    </h3>
                </div>
            <div className="panel-body">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input type="text" 
                        className="form-control" 
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                    </div>
                    <label>Trạng Thái :</label>
                    <select className="form-control" required="required" name="status" onChange={this.handleChange}>
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                <br/>
                <div className="text-center">
                    <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                    <button type="" className="btn btn-danger">Hủy Bỏ</button>
                </div>
            </form>
            </div>
            </div>
     </div>
       )
    }
  }
  
  export default FormAdd;