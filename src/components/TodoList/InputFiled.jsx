import { Box, Input, InputGroup, FormLabel, FormControl, Center, Button, Flex, useColorMode, Checkbox, Select, Text, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { taskAction } from "../../redux-store/taskSlice";
import { Form } from "react-router-dom";

const InputFiled = () => {
     const { colorMode, toggleColorMode } = useColorMode();
     const taskValue = useSelector((state) => state.taskReducer.taskValue);
     const addTodoListTask = useSelector((state) => state.taskReducer.addTodoListTask);
     const dispatch = useDispatch();
     const taskHandler = () => {
          const id = uuidv4();
          dispatch(taskAction.addTask({ id: id }));
     };
     const taskValueHandler = (e) => {
          dispatch(taskAction.readTask(e.target.value));
     };
     const openTodoListTaskHandler = () => {
          dispatch(taskAction.openTodoListTaskBox(false));
     };
     const closeAddTodoTaskHandler = () => {
          dispatch(taskAction.closeTodoListTaskBox());
     };
     return (
          <Box m="auto" py="5" mx="2">
               <Center>
                    <Flex flexDir="column">
                         {addTodoListTask === false && (
                              <Button variant="primary" w="100%" onClick={openTodoListTaskHandler}>
                                   ADD TODO LIST
                              </Button>
                         )}
                         {addTodoListTask === true && (
                              <Box bgGradient="linear(to-br, #E80A89, #F15B2A)" borderRadius="md" p="3px" my={3}>
                                   <Box
                                        px="3"
                                        border="2px solid"
                                        bgGradient="linear(to-br, #E80A89, #F15B2A)"
                                        borderRadius="md"
                                        borderColor="transparent"
                                        bg={colorMode === "dark" ? "black" : "white"}
                                   >
                                        <Box width={["sm", "md", "lg", "xl"]}>
                                             <FormControl my={2}>
                                                  <FormLabel>Enter Task</FormLabel>
                                                  <Input
                                                       type="text"
                                                       width={["sm", "md", "lg", "xl"]}
                                                       placeholder="Add Your Task"
                                                       _placeholder={{
                                                            color: colorMode === "dark" ? "white" : "black",
                                                            fontWeight: "semiBold",
                                                       }}
                                                       borderColor={colorMode === "dark" ? "white" : "black"}
                                                  />
                                             </FormControl>
                                             <FormControl my={2}>
                                                  <FormLabel>Task Priority</FormLabel>
                                                  <Select borderColor={colorMode === "dark" ? "white" : "black"}>
                                                       <option value="low">Low</option>
                                                       <option value="medium">Medium</option>
                                                       <option value="high">High</option>
                                                  </Select>
                                             </FormControl>
                                             {
                                                  //  If priority===high then show time
                                             }
                                             <FormControl>
                                                  <FormLabel>Time Alert</FormLabel>
                                                  <Input type="time" borderColor={colorMode === "dark" ? "white" : "black"} />
                                             </FormControl>

                                             <HStack my={2}>
                                                  <Button variant="primary" w="50%">
                                                       UPDATE
                                                  </Button>
                                                  <Button variant="primary" w="50%" onClick={closeAddTodoTaskHandler}>
                                                       CANCEL
                                                  </Button>
                                             </HStack>
                                        </Box>
                                   </Box>
                              </Box>
                         )}
                    </Flex>
                    {/* <FormControl width={["sm", "md", "lg", "xl"]}>
                         <Flex gap="3">
                              <Input
                                   type="text"
                                   placeholder="Add Your Todo List"
                                   _placeholder={{
                                        color:
                                             colorMode === "dark"
                                                  ? "primary"
                                                  : "black",
                                        fontWeight: "bold",
                                   }}
                                   border="none"
                                  
                                   // borderColor="linear(to-br, #E80A89, #F15B2A)"
                                   value={taskValue}
                                   bgColor="linear(to-br, #E80A89, #F15B2A)"
                                   onChange={taskValueHandler}
                              />
                              <Button variant="primary" onClick={taskHandler}>
                                   <FaPlus />
                              </Button>
                         </Flex>
                    </FormControl> */}
               </Center>
          </Box>
     );
};

export default InputFiled;
