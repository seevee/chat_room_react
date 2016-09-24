import React, { Component } from 'react'
import { GenericScrollBox, FastTrack } from 'react-scroll-box'
import User from './user'

export default class UserTray extends Component {
  render() {
    return (
      <GenericScrollBox scrollableY fastTrack={FastTrack.PAGING} className='user-scroll'>
        <div className='scroll-box__viewport user-tray'>
          <User />
          <User />
          <User />
          <User />
          <User />
        </div>
      </GenericScrollBox>
    )
  }
}
