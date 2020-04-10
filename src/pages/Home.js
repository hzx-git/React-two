
import React,{Component} from 'react';

import UcSwiper from "../components/uc-swiper";
import Cell from "../components/cell";
import UcButton from "../components/uc-button";


export default class Home extends Component{

    state={
        banner:[],
        home:[]
    };

    constructor(props){
        super(props);

        //读取数据
    }

    show=()=>{
        alert(1)
    };

    async componentDidMount(){
        //读取数据

        let res = await this.axios({url:'/api/goods/home',params:{_page:1,_limit:10}});
        console.log('home',res)
        // this.setState({banner:res.data.data})

        let res2 = await this.axios({url:'/mock/home',params:{_page:1,_limit:15}});
        console.log('mock',res2)

    }

    render(){
        return (
            <div className="Home">

                <UcSwiper
                    data={[
                        {_id:'1',title:'alex',sub_title:'alex123',banner:'/images/img_1.jpg'},
                        {_id:'2',banner:'/images/img_1.jpg'},
                    ]}
                    to={{pathname:'/detail',apiname:'banner'}}
                />

                <Cell
                    index={0}
                    data={{_id:"1",title:'asdfsdf',des:'是打发打发的'}}
                    to={{pathname:'/detail',apiname:'home'}}
                >
                    <UcButton style={{float:'right'}} size="mini" clickHandler={this.show}>+</UcButton>
                </Cell>
                <Cell
                    data={{_id:"1",title:'asdfsdf',des:'是打发打发的'}}
                >
                    <button style={{float:'right'}}>按钮</button>
                </Cell>



            </div>
        )
    }

}







