import { Container, Flex, Text, HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import React from "react";

const Navbar = () => {

  return (
    <Container maxW={"1140px"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={{ base: 'column', sm:'row' }}>
            <Text
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            textAlign={"center"}
            >
              <Link to={"/"}>CRUD Product</Link>
            </Text>
            <HStack spacing={2} alignItems={"center"}>
              <Link to={"/create"}>
                <Button>
                  <FaPlus />
                </Button>
              </Link>
            </HStack>
        </Flex>
    </Container>
  );
};

export default Navbar;
