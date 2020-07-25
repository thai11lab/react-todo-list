import React,{Component} from 'react';
import Header from "./component/Header";
import FormAdd from "./component/FormAdd";
import Table from "./component/Table";
import Control from "./component/Control";
class App extends Component {

    state={
      taskList:[],
      isDisplay:false
    };
  
    
  onGenarate=()=>{
    const taskListTest=[
      {
        "id":"1",
        "name":"Khóa học Reactjs",
        "status":true
      },
      {
        "id":"2",
        "name":"Khóa học Agular",
        "status":false
      },
      {
        "id":"3",
        "name":"Khóa học Java",
        "status":false
      },
    ]
    this.setState({
      taskList:taskListTest,
    });

    localStorage.setItem('taskListTest',taskListTest);
    console.log(localStorage.getItem('taskListTest'));
  }


  componentWillMount(){
    if(localStorage.getItem('taskListTest') ){ 
      let tasks = JSON.parse(localStorage.getItem('taskListTest'));
      this.setState({
        taskList:tasks,
      })
      console.log("Thai");  
    }
  }

  
  render(){
    let {taskList} = this.state;
    return (
      <div className="container">
          <Header/>  
          <FormAdd/>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <button type="button" className="btn btn-primary">
                      <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                  </button>
                  <button type="button" 
                          className="btn btn-warning"
                          onClick={this.onGenarate}
                  >
                      <span className=""></span>Genarate
                  </button>
                  <Control/>
                  <Table taskList={ taskList } />
            </div>
        </div>
    );
  }
  
}

export default App;
