import React from 'react'
import PropTypes from 'prop-types'
import { SvgIconProps } from '@material-ui/core/SvgIcon'

// React runtime PropTypes
export const AppMenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
}

// TypeScript compile-time props type, infered from propTypes
// https://dev.to/busypeoples/notes-on-typescript-inferring-react-proptypes-1g88
export type AppMenuItemProps = PropTypes.InferProps<
  typeof AppMenuItemPropTypes
> & {
  Icon?: React.ComponentType<SvgIconProps>
  items?: AppMenuItemProps[]
}

const AppMenuItem: React.FC<AppMenuItemProps> = (props) => {
  return (
    <div>

    </div>
  )
}

export default AppMenuItem
