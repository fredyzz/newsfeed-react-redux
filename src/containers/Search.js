import { connect } from 'react-redux'
import { getRepos, clearRepos } from '../actions'
import SearchBar from '../components/SearchBar'

const mapStateToProps = (state, ownProps) => ({
	defaultUser: ownProps.user
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	onGet: (input) => dispatch(getRepos(input)),
	onClear: () => dispatch(clearRepos())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
