import React,{Component} from 'react';
import Cell from "../components/cell";


export default class Follow extends Component{

    state={
        follow : []
    };

    async componentDidMount(){
        this.isMount = true
        let res =  await React.axios({url:'/api/goods/follow',params:{_page:1,_limit:8}});
        if(this.isMount){
            this.setState({follow:res.data.data})
        }
    }
    // componentDidMount(){
    //     React.axios({url:'/api/goods/follow',params:{_page:1,_limit:8}}).then(
    //         res => this.setState({follow:res.data.data})
    //     )
    // }
    componentWillUnmount(){
        this.isMount = false;
    }

    render(){
        let {follow}=this.state;
        return (
            <div className="pt">
                {
                    follow.map((item,index) => (
                        <Cell
                            key={item._id}
                            index={index}
                            data={item}
                            to={{pathname:'/detail',apiname:'follow'}}
                        >
                            <button style={{float:'right'}}>++</button>
                        </Cell>
                    ))
                }

            </div>
        )
    }
}