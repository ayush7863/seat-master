import React, { useState } from 'react';
import { Box, Flex, Button, Image, Text, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handleProfileClick = () => {
    onOpen();
  };

  const randomUserImage = 'https://randomuser.me/api/portraits/men/1.jpg'; // Replace with actual random user image API or URL

  const user = {
    name: 'John Doe',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet mauris eu est sagittis, non auctor lectus malesuada. Nunc ultrices libero non pulvinar dignissim.'
  };

  return (
    <Flex align="center" justify="space-between" px={4} py={2} bg="gray.800" color="white">
      <Box>
        <Text fontSize="xl" fontWeight="bold"><Link to="/">SeatMaster</Link></Text>
      </Box>
      <Box>
        <Flex align="center">
          <Link to="/movies" style={{ marginRight: '1rem' }}>Movies</Link>
           <Link to="/" style={{ marginRight: '1rem' }}>Events</Link>
          <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>
          <Link to="/register" style={{ marginRight: '1rem' }}>Signup</Link>
          <Button variant="link" onClick={handleProfileClick} style={{ marginRight: '1rem' }}>Profile</Button>
          <Button as={Link} to="/admin" colorScheme="blue">Admin</Button>
        </Flex>
      </Box>

      {/* Profile Dialog */}
      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay />
        <AlertDialogContent mt={8}>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Profile Details
          </AlertDialogHeader>
          <AlertDialogBody>
            <Flex align="center" justify="center" direction="column" spacing={4}>
              <Image src={randomUserImage} alt="User" boxSize={64} borderRadius="full" />
              <Text fontWeight="bold">{user.name}</Text>
              <Text>{user.bio}</Text>
            </Flex>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme="blue" ref={cancelRef} onClick={onClose}>
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Flex>
  );
};

export default Navbar;





