import React from 'react';
import classes from './Flipper.module.css';

const Flipper = (props) => {
  return (
    <div className={classes.flip_container}>
      <div className={classes.flip_parent}>
        <div className={classes.flip_front}>
          <h3 className={classes.flip_title}>
            <span>{props.title}</span>
          </h3>
        </div>
        <div className={classes.flip_back}>
          <div className={classes.flip_content}>
            {props.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Flipper);