import useBoxPosition from 'hooks/useBoxPosition';
import { useRouter } from 'next/router';
import React from 'react';
import { navItems } from 'utils/constants';
import { ListItemButton } from '@mui/material';
import { isActive } from 'utils/utility';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import List from '@mui/material/List';
import classes from './HeaderNavItems.module.scss';

const HeaderNavItems = () => {
  const { asPath: currentUrl } = useRouter();
  const { boxRef, boxPosition } = useBoxPosition<HTMLAnchorElement, string>(currentUrl);

  return (
    <List
      disablePadding
      component='nav'
      className={`${classes.navbarInner} transform-gpu`}
      style={boxPosition}
    >
      {navItems.map(({id, text, exact, path}) =>
        <Link
          href={path}
          passHref
          key={id}
        >
          <ListItemButton
            {...(isActive(path, currentUrl, exact) && { ref: boxRef })}
            className={`${classes.listItem}`}
            component='a'
            disableRipple
          >
            <ListItemText primary={text} />
          </ListItemButton>
        </Link>
      )}
    </List>
  );
};

export default React.memo(HeaderNavItems);