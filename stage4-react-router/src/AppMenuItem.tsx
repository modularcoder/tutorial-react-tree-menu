import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { NavLink, NavLinkProps } from 'react-router-dom'

import List from '@material-ui/core/List'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'

import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'

// NavLinkProps
type MenuItemComponentProps = NavLinkProps & ListItemProps

const MenuItemComponent = forwardRef<HTMLElement, Partial<MenuItemComponentProps>>(
  (props: any, ref: any) => {
    if (props.to && typeof props.to === 'string') {
      return (
        <NavLink innerRef={ref as any} to={'/test'} {...props}>
          {props.children}
        </NavLink>
      )
    } else {
      return <div {...props} />
    }
  },
)

// React runtime PropTypes
export const AppMenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
}

// TypeScript compile-time props type, infered from propTypes
// https://dev.to/busypeoples/notes-on-typescript-inferring-react-proptypes-1g88
export type AppMenuItemProps = PropTypes.InferProps<typeof AppMenuItemPropTypes> & {
  Icon?: React.ComponentType<SvgIconProps>
  items?: AppMenuItemProps[]
}

const AppMenuItem: React.FC<AppMenuItemProps> = props => {
  const { name, link = '', Icon, items = [] } = props
  const classes = useStyles()
  const isExpandable = items && items.length > 0
  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }

  const MenuItemRoot = (
    <ListItem
      button
      className={classes.menuItem}
      onClick={handleClick}
      to={link ? link : undefined}
      component={MenuItemComponent}
    >
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon className={classes.menuItemIcon}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </ListItem>
  )

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item, index) => (
          <AppMenuItem {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  )
}

const useStyles = makeStyles(theme =>
  createStyles({
    menuItem: {},
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

export default AppMenuItem
