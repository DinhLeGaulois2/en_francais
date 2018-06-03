import React from 'react'
import { mount } from 'enzyme'

import CommentList from 'components/CommentList'
import Root from 'Root'

let wrapped

beforeEach(() => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    }
    
    wrapped = mount(
        // "root" gives "CommentList" the permission to 
        // access to the "Provider" and the "store"...
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
})

it('creates on LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2)
})

it('shows the text from each comment', () => {
    expect(wrapped.render().text()).toContain('Comment 1')
    expect(wrapped.render().text()).toContain('Comment 2')
})