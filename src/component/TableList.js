import React, { Component } from "react";
class TableList extends Component{

    render(){
        let {stt,tasksValue} = this.props;
        return(
            <tr>
                <td>{stt+1}</td>
                <td>{tasksValue.name}</td>
                <td className="text-center">
                    <span className={tasksValue.status == true ? "label label-success": "label label-warning"}>
                        {tasksValue.status == true ?"Kích hoạt":"Ẩn"}
                    </span>
                </td>
                <td className="text-center">
                <button type="button" className="btn btn-warning">
                    <span className="fa fa-pencil mr-5"></span>Sửa
                </button>
                    &nbsp;
                <button type="button" className="btn btn-danger">
                    <span className="fa fa-trash mr-5"></span>Xóa
                </button>
                </td>
            </tr>
        );
    }
} 

export default TableList;