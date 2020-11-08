/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function FreeSolo(props) {
  console.log(props);
  return (
   
      <Autocomplete
        // 
        freeSolo
        id="free-solo-2-demo"
        onChange={props.onChange}
        name="stories"
        disableClearable
        options={props.list.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            
            name="stories"
            className="SearchText"
            label="Filter by stories" 
            type="search" 
            variant="filled"
            
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    
  );
}