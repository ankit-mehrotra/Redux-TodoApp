import {connect} from 'react-redux';
import { setVisibiityFilter } from '../actions';
import Link from '../components/Link';


const mapStateToProps = (state,ownProps)=> ({
    active: ownProps.filter === state.visibiltyFilter
})

const mapDispatchToProps = (dispatch,ownProps) =>({
   onClick : () => dispatch(setVisibiityFilter(ownProps.filter))
})

export default connect(mapStateToProps,mapDispatchToProps)(Link)