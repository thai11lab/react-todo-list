import React,{Component} from 'react';
import Header from "./component/Header";
import FormAdd from "./component/FormAdd";
import Table from "./component/Table";
import Control from "./component/Control";

class App extends Component {

    state={
      taskList:[],
      isDisplay:false,
      taskEdit:null,
      Filter:{
        name:"",
        status:-1
      },

      keyword:""
    };
  
    
  onGenarate=()=>{
    localStorage.removeItem("tasks");   
  }

  
    componentDidMount(){
    if(localStorage.getItem("tasks") ){ 
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        taskList:tasks,
      });
    }
  }

  s4(){
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  }
  gernarate(){
    return this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4();
  }

  onSubmit=(data)=>{
    var {taskList} = this.state;
    if(data.id){
        const index = this.findIndex(data.id);
        taskList[index]=data;
    }else{
      data.id = this.gernarate();
      taskList.push(data);
      this.setState({
        taskList:taskList, 
        taskEdit:" ",
      })
    }
    localStorage.setItem('tasks',JSON.stringify(this.state.taskList));
    this.handleClose();
  }  

  handleDisPlay =()=>{
    if(this.state.taskEdit){
      this.setState({
        isDisplay:true,
        taskEdit:null,
      })
      
    }else{
      this.setState({
        isDisplay:true,
        taskEdit:null,
      });
    }
  }

  handleClose=()=>{
    this.setState({
      isDisplay:false,
    });
  }

  handleUpdateStatus =(id)=>{
    const newTask = this.state.taskList;
    newTask.map(data =>{
      if(data.id === id){
          data.status = !data.status;
      }
    })
    this.setState({
         taskList:newTask,
    });
      
  
    localStorage.setItem("tasks",JSON.stringify(this.state.taskList));
  }
  handleDelete=(id)=>{
      const newTask = this.state.taskList;
      newTask.map((data,index)  =>{
      if(data.id == id){
          newTask.splice(index,1);
        }
      })
      this.setState({
        taskList:newTask,
      })
      localStorage.setItem('tasks',JSON.stringify(this.state.taskList));
  }
  
  findIndex =(id)=>{
    const {taskList}= this.state;
    let result = -1;
    taskList.forEach((data,index) => {
      if(data.id==id){
        result=index;
      }
    });
    return result;
  }
  handleUpdate=(id)=>{
    const index = this.findIndex(id);
    const {taskList} = this.state;
    const taskEditing = taskList[index];
    this.setState({
      isDisplay:true,
      taskEdit:taskEditing,
    });
  }

  handleFilter=(filterName,filterStatus)=>{
    const status=parseInt(filterStatus,10)
    this.setState({
      Filter:{
        name:filterName.toLowerCase(),
        status:status,
      }
    })
    console.log(status);
  }
  handleSearch=(key)=>{
    this.setState({
      keyword:key.toLowerCase(),
    })
  }
  render(){
    let {taskList,isDisplay,taskEdit,Filter,keyword} = this.state;
    
    if(Filter){
      if(Filter.name){
        taskList=taskList.filter(data=>{
          return data.name.toLowerCase().indexOf(Filter.name) !==-1;
        })
      }
    
      taskList=taskList.filter(data=>{
        if(Filter.status==-1) return data;
        else{
          return data.status ===(Filter.status === 1 ? true:false);
        }
      })
    }
    
    if(keyword){
      taskList= taskList.filter(data=>{
        return data.name.toLowerCase().indexOf(keyword) !==-1;
      })
    }
    var form = isDisplay == true ? <FormAdd getValue={this.onSubmit} onClose={this.handleClose} taskEdit={taskEdit}/> : " ";
    return (
      <div className="container">
          <Header/>  
          {form}
          <div className={ isDisplay == true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "container"} >
                  <button type="button" className="btn btn-primary" onClick={(e)=>{this.handleDisPlay()}} style={{marginTop:"10px"}}>
                      <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                  </button>
                  <button type="button" 
                          style={{marginLeft:"10px",marginTop:"10px"}}
                          className="btn btn-danger"
                          onClick={(e)=>{
                            if(window.confirm("Bạn có chắc muốn xóa toàn bộ !"));
                            this.onGenarate();
                            window.location.reload();
                          }}
                  >
                      <span className=""></span>Xóa toàn bộ
                  </button>
                  <Control onSearch={this.handleSearch}/>
                  <Table  taskList={ taskList }
                          updateStatusApp={this.handleUpdateStatus}
                          onDelete={this.handleDelete}
                          onUpdate={this.handleUpdate}
                          onFilter={this.handleFilter}
                  />
            </div>
        </div>
    );
  }
  
}

export default App;
