import React from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { taskAction } from "../redux-store/taskSlice";

export const ShowTask = (props) => {
     const dispatch = useDispatch();

     const deleteHandler = (e) => {
          console.log(e.target.id);
          dispatch(taskAction.deleteTask({ id: e.target.id }));
     };
     const editHandler = (e) => {
          dispatch(taskAction.editTask(e.target.id));
     };
     return (
          <Flex gap={[1, 1, 2, 3]} justifyContent="center" alignItems="center">
               <Text flex="1" fontWeight={["semibold", "bold"]}>
                    {props.value}
               </Text>

               <Button
                    variant="primary"
                    size={["sm", "md"]}
                    onClick={editHandler}
                    id={props.id}
               >
                    <AiFillEdit />
               </Button>
               <Button
                    variant="primary"
                    size={["sm", "md"]}
                    onClick={deleteHandler}
                    id={props.id}
               >
                    <AiFillDelete />
               </Button>
          </Flex>
     );
};