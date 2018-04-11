/**
 * @jest-environment node
 */
/* global it, describe, beforeEach, before, after, afterEach, expect */
/* eslint no-unused-vars: "off" */
import React from 'react'
import { shallow } from 'enzyme'
import MenuBar from '../components/MenuAppBar'

describe('Menu Bar', () => {
  it('It should render menu bar', () => {
    const menuBar = shallow(<MenuBar />)
    expect(menuBar.getElements()).toMatchSnapshot()
  })
})
