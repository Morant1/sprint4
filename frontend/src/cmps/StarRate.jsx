import React from 'react';
import Rating from '@material-ui/lab/Rating';


export function StarRate() {
  const [value, setValue] = React.useState(2);

  return (
    <div className="star-rating">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
    </div>
  );
}

