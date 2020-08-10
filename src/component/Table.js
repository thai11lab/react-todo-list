import React, { Component } from 'react';
import TableList from "./TableList";
class Table extends Component {

    state={
        filterName:"",
        filterStatus:-1,
    }
    
    handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]:value
        });
    }

    render(){
        let {taskList,onDelete} = this.props;
        const {filterName,filterStatus}=this.state;
        let elementList = taskList.map((item,index)=>
             <TableList 
                        key={index}
                        stt={index}
                        tasksValue={item} 
                        updateStatus={this.props.updateStatusApp}
                        onDelete={onDelete}
                        onUpdate={this.props.onUpdate}
            />
                        
        );
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table Nametable-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Trạng Thái</th>
                                <th className="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" 
                                        className="form-control" 
                                        value={filterName}
                                        onChange={this.handleChange}
                                        name="filterName"
                                    />
                                </td>
                                <td>
                                    <select className="form-control" 
                                    name="filterStatus" 
                                    onChange={this.handleChange}
                                    >
                                        <option value={-1}>Tất Cả</option>
                                        <option value={0}>Ẩn</option>
                                        <option value={1}>Kích Hoạt</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            {elementList}
                         </tbody>
                    </table>
                </div>
            </div>
          );
    }
}

export default Table;
