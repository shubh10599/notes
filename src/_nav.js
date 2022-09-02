import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilPencil } from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  // {
  //   component: CNavItem,
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  {
    component: CNavItem,
    name: 'Notes',
    to: '/',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
]

export default _nav
