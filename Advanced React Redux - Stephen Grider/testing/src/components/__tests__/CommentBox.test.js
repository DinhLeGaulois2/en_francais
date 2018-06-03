import React from 'react'
import { mount } from 'enzyme'

import Root from 'Root.js'

import CommentBox from 'components/CommentBox'

let wrapped;

beforeEach(() => {
    // "mount" --> Full DOM
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    )
})

afterEach(() => {
    wrapped.unmount()
})

it('has a text area and two button', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(2)
})

describe('the text area', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        })

        // forcing component to update!
        wrapped.update()
    })

    it('has a text area that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    })

    it('when form is submitted, text area gets emptied', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')

        wrapped.find('form').simulate('submit', {
            target: { value: '' }
        })

        // forcing component to update! After emptying...
        wrapped.update()

        expect(wrapped.find('textarea').prop('value')).toEqual('')
    })
})