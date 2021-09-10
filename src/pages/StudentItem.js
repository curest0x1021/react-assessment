import React from "react";
import {Box, Typography} from "@material-ui/core";
import PropTypes from "prop-types";

const StudentItem = props => {
  return (
    <Box>
      <img src={props.pic} />
      <Typography variant="h2">
        {`${props.firstName} ${props.lastName}`}
      </Typography>
      <Typography variant="body1">{`Email: ${props.email}`}</Typography>
      <Typography variant="body1">{`Company: ${props.company}`}</Typography>
      <Typography variant="body1">{`Skill: ${props.skill}`}</Typography>
      <Typography variant="body1">{`Average: ${props.id}`}</Typography>
    </Box>
  );
};

StudentItem.propTypes = {
  city: PropTypes.string,
  company: PropTypes.string,
  email: PropTypes.string,
  firstName: PropTypes.string,
  grades: PropTypes.array,
  id: PropTypes.string,
  lastName: PropTypes.string,
  pic: PropTypes.string,
  skill: PropTypes.string,
}


export default StudentItem;
