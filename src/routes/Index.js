import React from 'react';
import { Toast, PullToRefresh, ListView, Button, Carousel, Tabs, Badge, NavBar, ActivityIndicator, Progress, InputItem, List, WhiteSpace,Stepper} from 'antd-mobile';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import Auto from '../utils/Auto'
import {routerRedux} from 'dva/router';
import Constants from '../utils/Constants'
require('moment/locale/zh-cn');
var ScreenWidth = window.screen.width 
var ScreenHeight = window.screen.height

class Index extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
    this.state = {
      dataSource,
      cpuval: 1.6,
      netval: 1.6,
      timeval: 1.6,
      
    };
  }

  componentDidMount() {
   
  }

  onCpuChange = (cpuval) => {
    // console.log(val);
    this.setState({ cpuval });
  }

  onNetChange = (netval) => {
    // console.log(val);
    this.setState({ netval });
  }

  onTimeChange = (timeval) => {
    // console.log(val);
    this.setState({ timeval });
  }

  onbuysell = () => {
    this.props.dispatch(routerRedux.push({pathname: '/BuyandSell', query: {   }}))
  }

  description = () => {
    this.props.dispatch(routerRedux.push({pathname: '/GameDescription', query: {   }}))
  }
 
  render() {
    return (<div style={styles.rootDiv}>
      <div style={{background:'#FFFFFF', }}>
        <div style={styles.headtopout}>
          <p style={styles.headtoptext}>可出租资源:(EOS)</p>
          <Button type="ghost" onClick={this.onbuysell.bind(this)} style={styles.headtopbtn} activeStyle={{opacity: '0.5'}}>买卖</Button>
        </div>
        <div style={styles.headbottomout}>
          <p style={styles.headbottomtext}>12324</p>
          <Progress percent={40} position="normal" unfilled={true} style={styles.progress} barStyle={styles.barout}/>
          <div style={styles.rentout}>
            <p style={styles.renttext}>已出租：40</p>
            <p style={styles.renttext}>总量：284000</p>
          </div>
        </div>
      </div>
      <WhiteSpace size="lg" />

      <div style={styles.centerDiv}>
        <div style={styles.centertop}>
          <p style={styles.centertoptitle}>租用资源</p>
          <p style={styles.centertoptext}>我的余额：4000 EOS</p>
        </div>
        <List >
          <InputItem defaultValue="heiqi1234512" placeholder="please input content" data-seed="logId">付款账户：</InputItem>
          <InputItem clear placeholder="请输入接收账户" ref={el => this.autoFocusInst = el}>接收账户：</InputItem>
        </List>
      </div>
      <WhiteSpace size="lg" />

      <div style={styles.centerDiv}>
        <div style={styles.centertop}>
          <p style={styles.centertoptitle}>租赁费用</p>
          <Button type="ghost"  style={styles.centertopbtn} onClick={_el => this.description()}
          activeStyle={{opacity: '0.5'}} icon={<img src={'../img/help.png'}  style={styles.reportimg} />} />
        </div>
        <List>
          <List.Item wrap
            extra={<Stepper style={{ width: '100%', minWidth: '100px' }} showNumber max={10} 
              min={0.1} step={0.1} value={this.state.cpuval} onChange={this.onCpuChange}/>}
          >CPU</List.Item>
          <List.Item wrap
            extra={<Stepper style={{ width: '100%', minWidth: '100px' }} showNumber max={10}
              min={0.1} step={0.1} value={this.state.netval} onChange={this.onNetChange}/>}
          >NET</List.Item>
          <List.Item wrap
            extra={<Stepper style={{ width: '100%', minWidth: '100px' }} showNumber max={10}
              min={0.1} step={0.1} value={this.state.timeval} onChange={this.onTimeChange}/>}
          >租用时长(天)</List.Item>
        </List>
      </div>

      <div style={styles.footDiv}>
        <p style={styles.description}>订单确认：</p>
        <div style={styles.explaintext}>heiqi1234512为wddadddwd租赁抵押30天，花费1.6 EOS租赁CPU 27.96 EOS，花费1.5 EOS租赁NET 28.96 EOS。</div>
        <Button type="ghost" style={styles.footbtn} activeStyle={{opacity: '0.5'}}>一键租赁</Button>
      </div>
    </div>)
  }
} 

export default connect(({ }) => ({ }))(injectIntl(Index));

const styles = { 
  rootDiv:{
    width: ScreenWidth,
    height: ScreenHeight,
    background:"#F8F8F8",
    boxSizing: 'border-box', 
  },

  headtopout: {
    height: Auto.WHT(88), 
    paddingLeft: Auto.WHT(30), 
    paddingRight: Auto.WHT(30), 
    display:"flex", 
    flexDirection: 'row', 
    alignItems: 'center',  
  },
  headtoptext: {
    flex: 1, 
    color: '#000000', 
    fontSize: Auto.WHT(34), 
    lineHeight: Auto.WHT(42),
  },
  headtopbtn: {
    width: Auto.WHT(164), 
    height: Auto.WHT(60), 
    lineHeight: Auto.WHT(60), 
    background: '#FFFFFF', 
    border: '1px #108EE9 solid', 
    textDecoration: 'none', 
    borderRadius: Auto.WHT(10), 
    fontSize: Auto.WHT(26), 
    color: '#108EE9', 
  },
  headbottomout: {
    display: 'flex', 
    flexDirection: 'column', 
    padding: Auto.WHT(30), 
    paddingTop: Auto.WHT(10),
  },
  headbottomtext: {
    color: '#000000', 
    fontSize: Auto.WHT(48), 
    lineHeight: Auto.WHT(67), 
    paddingBottom: Auto.WHT(22),
  },
  progress: {
    height: Auto.WHT(34), 
    background: '#FFFFFF', 
    border: '1PX solid #E9E9E9', 
    borderRadius: Auto.WHT(17)
  },
  barout: {
    background: '#108EE9', 
    borderWidth: Auto.WHT(17), 
    borderStyle: 'solid', 
    borderColor: '#108EE9', 
    borderRadius: Auto.WHT(17)
  },
  rentout: {
    width: '100%', 
    display:"flex", 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingTop: Auto.WHT(30), 
  },
  renttext: {
    color: '#888888', 
    fontSize: Auto.WHT(30), 
    lineHeight: Auto.WHT(34),
  },

  centerDiv: {
    display: 'flex', 
    flexDirection: 'column',
    background: '#FFFFFF',
  },
  centertop: {
    height: Auto.WHT(88), 
    display:"flex", 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    borderBottom: '1px solid #DDDDDD',
  },
  centertoptitle: {
    color: '#000000', 
    fontSize: Auto.WHT(34), 
    lineHeight: Auto.WHT(42), 
    paddingLeft: Auto.WHT(30),
  },
  centertoptext: {
    color: '#888888', 
    fontSize: Auto.WHT(30), 
    lineHeight: Auto.WHT(34), 
    paddingRight: Auto.WHT(30),
  },
  centertopbtn: {
    border: 'none', 
    borderRadius: 0,
    color: '#D9D9D9', 
    padding: '0 0.4rem',
    height: Auto.WHT(36),
    textDecoration: 'none', 
  },
  reportimg: {
    width: Auto.WHT(30),
    height: Auto.WHT(30),
    margin: 0,
  },

  footDiv: {
    flex: 1, 
    padding: Auto.WHT(30), 
  },
  description: {
    color: '#000000', 
    fontSize: Auto.WHT(28), 
    paddingTop: Auto.WHT(10), 
    paddingBottom: Auto.WHT(10),
  },
  explaintext: {
    color: '#888888', 
    fontSize: Auto.WHT(28), 
    lineHeight: Auto.WHT(40),
  },
  footbtn: {
    width: '100%', 
    height: Auto.WHT(94), 
    lineHeight: Auto.WHT(94), 
    background: '#108EE9', 
    border: 'none', 
    textDecoration: 'none', 
    borderRadius: Auto.WHT(10), 
    fontSize: Auto.WHT(36), 
    color: '#FFFFFF',
    marginTop: Auto.WHT(40),
    marginBottom: Auto.WHT(40),
  },
}
