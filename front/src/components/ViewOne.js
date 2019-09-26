import React, {Fragment} from 'react';
import { getAllTeamMembers } from '../actions/fetchTeam';
import {connect} from 'react-redux'

const ViewOne = (props) => {
    
    
    console.log(props);
    console.log(props.data.memberList)
    let members = props.data.memberList;
return(
    <Fragment>
    <div onClick={()=>props.dispatch(getAllTeamMembers())}>
    lololol1
    </div>
    {props.data.memberList ? members.map((item)=>{
        return  <Fragment key={item.id}>
                    <div >{item.first_name}{' '}{item.last_name}</div>
                </Fragment>
    }): <div></div>}
    </Fragment>
)

}
const mapStateToProps = state => {
    return {
        data: state
    }
}
export default connect(mapStateToProps)(ViewOne);
