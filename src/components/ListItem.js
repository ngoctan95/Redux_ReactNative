import React,{Component} from 'react';
import {
    View,Text, TouchableHighlight,LayoutAnimation
}from 'react-native';
import CardSection from './common/CardSection';
import {connect} from 'react-redux';
import * as action from '../actions';
import {styles} from '../../style/styleSheet';

class ListItem extends Component{
    componentWillMount(){
        console.log(this.props);
        console.log(this.state);
    } 
    componentWillUpdate(){
        LayoutAnimation.spring();
        //easeInOut()
        //spring()
    }
    render(){
        const {library, selectedId}=this.props;
        const {id,title}=this.props.library;
        return(
            <TouchableHighlight
                onPress={()=>{
                    this.props.selectedLibIdAction(id);
                }}>
                <CardSection >
                    <Text>{title}</Text>
                    {
                        (this.props.library.id === this.props.selectedIdReducer)?
                            <Text style={styles.text}>{this.props.library.description}</Text>:
                        null
                    }
                </CardSection>
                
            </TouchableHighlight> 
        )
    } 
} 

const mapStateToProps=state=>{
    return {
        selectedIdReducer: state.selectedIdReducer
    }
};
export default connect(mapStateToProps,action)(ListItem);