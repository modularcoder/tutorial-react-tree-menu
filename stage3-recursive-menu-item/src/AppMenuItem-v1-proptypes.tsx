import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'

// React runtime PropTypes
export const SidebarNavListItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
}

const AppMenuItem = () => {
  return (
    <div>

    </div>
  )
}

export default AppMenuItem
