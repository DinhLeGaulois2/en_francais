import React from 'react'
import { connect } from 'react-redux'

import actions from '../../actions/FFFFFFFF/actions'
import AddGGGGGGGGG from '../../components/FFFFFFFF/AddGGGGGGGGG'

const mapStateToProps = (state) => ({
    data: state.UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU,
})

const mapDispatchToProps = (dispatch) => ({
    onClickBBBBBBBBBBBBB: (data) => { dispatch(actions.XXXXXXXXXXXXX(data)) },
})

// You have to connect() to any reducers that you wish to connect to yourself
const AddBBBBBBBBBBBBBContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddGGGGGGGGG)

export default AddBBBBBBBBBBBBBContainer