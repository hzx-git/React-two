import React,{Component} from 'react';
import Cell from "../components/cell";
export default class Column extends Component{
    state={
        column : []
    };

    async componentDidMount(){
        this.isMount = true;
        let res =  await React.axios({url:'/api/goods/column',params:{_page:1,_limit:6}});
        if(this.isMount){
            console.log(res);
            this.setState({column:res.data.data})
        }
    }
    componentWillUnmount = () => {
        this.isMount = false;
    }
    render(){
        let {column}=this.state;
        return (
            <div className="pt">

                {
                    column.map(item=>(
                        <Cell
                            key={item._id}
                            data={item}
                            to={{pathname:'/detail',apiname:'column'}}
                        />
                    ))
                }
            </div>
        )
    }
}