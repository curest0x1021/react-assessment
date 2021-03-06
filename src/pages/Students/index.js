import React, { useEffect, useState } from "react";
import { Box, List } from "@material-ui/core";
import { SearchTextField } from "../../components";
import StudentItem from "./StudentItem";
import { useStudents } from "../../hooks";
import { useStyles } from "../../theme/styles/pages/mainStyles";

const Students = () => {
  const classes = useStyles();
  const { students, getStudentsF } = useStudents();
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    if (students.length === 0) {
      getStudentsF();
    }
  }, [students, name, tag]);

  function handleOnChangeName(event) {
    setName(event.target.value.trim().toLowerCase());
  }

  function handleOnChangeTag(event) {
    setTag(event.target.value.trim().toLowerCase());
  }

  const filterData = () => {
    if (name === "" && tag === "") {
      return students;
    } else {
      return students.filter(item => {
        if (name !== "") {
          const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
          if (!fullName.includes(name)) {
            return false;
          }
        }
        
        if (tag !== "") {
          if (item.tags) {
            const tags = item.tags.join("|").toLowerCase();
            return tags.includes(tag);
          } else {
            return false;
          }
        }

        return true;
      });
    }
  }

  return (
    <Box className={classes.container}>
      <SearchTextField
        id="search-name"
        label="Search by name"
        className={classes.searchName}
        size="medium"
        onChange={handleOnChangeName} />
      <SearchTextField
        id="search-tag"
        label="Search by tag"
        className={classes.searchTag}
        size="medium"
        onChange={handleOnChangeTag} />
      <List>
        {filterData().map(item => {
          return (
            <StudentItem 
              key={item.id} 
              {...item} />
          );
        })}
      </List>
    </Box>
  );
};

export default Students;
