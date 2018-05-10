import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, ListView} from 'react-native';
import ListItem from './ListItem';

class Library extends Component{
    componentWillMount(){
        const ds=new ListView.DataSource({
            rowHasChanged: (r1,r2)=> r1!==r2
        });
        this.dataSource = ds.cloneWithRows(this.props.libraryReducer)
    }
    _renderRow(libraryReducer){
        return (
            <ListItem library={libraryReducer}/>
        )
    }
    render(){
        return(
       <ListView 
       dataSource={this.dataSource}
       renderRow={this._renderRow}/>
         ) }
}
const mapStateToProps=state=>{
    //console.log(state);
    return { 
        libraryReducer : state.libraryReducer
    };
}; 
//trong nay chua state => muon dua tu list =>item can phai thanh props => mapstate to props 
export default connect(mapStateToProps)(Library);