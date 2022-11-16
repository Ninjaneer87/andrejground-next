import React, { useEffect, useState } from 'react';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import { makeStyles, Tooltip } from '@material-ui/core';
import { selectText } from './../helpers/utility';
import { notify } from './Notification';

const useStyles = makeStyles(theme => ({
  root: {
    // marginLeft: 6,
    cursor: 'pointer',
    transition: 'color 250ms linear',
    '&:hover': {
      color: theme.palette.custom.accent
    }
  },
}))

const ClipboardCopy = React.forwardRef((props, ref) => {
  const [copied, setCopied] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (copied)
      setTimeout(() => {
        setCopied(false);
      }, 5000)
  }, [copied])

  const copyHandler = async () => {
    if (!navigator.clipboard) return selectText(ref.current);

    await navigator.clipboard.writeText(props.content);
    setCopied(true);
    notify('Copied to clipboard!', 'Success')
  }
  return (

    <span
      className={classes.root}
      onClick={!copied ? copyHandler : () => { }}
    >
      {copied ?
        <Tooltip title="Copied!" arrow>
          <CheckOutlinedIcon fontSize='small' />
        </Tooltip> :
        <Tooltip title="Click to copy" arrow>
          <FileCopyOutlinedIcon fontSize='small' />
        </Tooltip>}
    </span>

  );
});
ClipboardCopy.displayName = 'ClipboardCopy';
export default ClipboardCopy;