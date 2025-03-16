import { useProductStore } from "@/store/product";
import { Box, Button, Container, Heading, Input, VStack, } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster"
import { useState } from "react";
import React from "react";

const CreatePage = () => {

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  })

  const {createProduct} = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);

    toaster.create({
      title: success ? "Success" : "Error",
      description: message,
      status: success ? "success" : "error",
      isCloseable: true,
      type: success ? "success" : "error",
    });

  };

  return (
    <Container maxW={'container.sm'}>
      <VStack spacing={0}>
        <Heading as={'h1'} size={'2xl'} textAlign={'center'} mb={8}>
          Create New Product
        </Heading>
        <Box w={'full'} p={6} rounded={'lg'} shadow={'md'}>
          <VStack spacing={4}>

            <Input 
            placeholder="Input product name" 
            name="name" 
            value={newProduct.name} 
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})}/>

            <Input 
            placeholder="Input product price" 
            name="price" 
            value={newProduct.price} 
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})}/>

            <Input 
            placeholder="Input product image" 
            name="image" 
            value={newProduct.image} 
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}/>

            <Button colorScheme='blue' onClick={handleAddProduct}>Add Product</Button>

          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
