import React, { Component } from "react";
class TableList extends Component{

    handleUpdateStatus=()=>{
        console.log(this.props.tasksValue.id);
        console.log(this.props);
        this.props.updateStatus(this.props.tasksValue.id);
    }
    handleDelete=()=>{
        this.props.onDelete(this.props.tasksValue.id);
    }
    handleUpdateUser=()=>{
        this.props.onUpdate(this.props.tasksValue.id);
    }
    render(){
        let {stt,tasksValue} = this.props;
        return(
            <tr>
                <td>{stt+1}</td>
                <td>{tasksValue.name}</td>
                <td className="text-center">
                    <span className={tasksValue.status === true ? "label label-success " : "label label-warning"}
                            onClick={this.handleUpdateStatus}
                            style={{
                                cursor:"pointer"
                            }}
                    >
                        {tasksValue.status === true ? "Kích hoạt" : "Ẩn"}
                    </span>
                </td>
                <td className="text-center">
                <button type="button" className="btn btn-warning" onClick={this.handleUpdateUser}>
                    <span className="fa fa-pencil mr-5"
                            
                    ></span>Sửa
                </button>
                    &nbsp;
                <button type="button" className="btn btn-danger" onClick={(e)=>{
                         if (window.confirm('Bạn có chắc muốn xóa chứ ?')) this.handleDelete()                 
                    }}>
                        
                    <span className="fa fa-trash mr-5"
                           
                    ></span>Xóa
                </button>
                </td>
            </tr>
        );
    }
} 

export default TableList;