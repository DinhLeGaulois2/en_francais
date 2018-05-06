import React from 'react'
import PropTypes from 'prop-types'

import '../../style.scss'

import Modal from '../../common/modal/modal'

import cst from '../../constants/DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD/cst'

const FFFFFFFFItem = ({  }) =>
    <td style={{ 'backgroundColor': 'black', 'color': 'cyan', 'padding': '10px', 'margin': '5px', 'borderStyle': 'solid', 'borderColor': 'gray' }}>

    </td>

const FFFFFFFFList = ({  }) => (
    <div>
        <table align="center" style={{ 'width': '80%' }}><tbody>
            {HHHHHHHHHHHHH.map((HHHH, index) =>
                <tr key={index}>
                    <FFFFFFFFItem
                        key={HHHH.id}
                        {...HHHH}
                        HHHH={onClickDelete}
                    />
                </tr>
            )}
        </tbody></table>
    </div>
)

FFFFFFFFItem.propTypes = {
}

FFFFFFFFList.propTypes = {
    onClickDelete: PropTypes.func.isRequired
}

export default FFFFFFFF