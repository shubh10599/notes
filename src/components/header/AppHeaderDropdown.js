import React from 'react'
import { CAvatar, CDropdown } from '@coreui/react'

import avatar2 from './../../assets/images/avatars/2.jpg'

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      {/* <CDropdownToggle placement="bottom-end" className="py-0" caret={false}> */}
      <CAvatar src={avatar2} size="md" />
      {/* </CDropdownToggle> */}
    </CDropdown>
  )
}

export default AppHeaderDropdown
