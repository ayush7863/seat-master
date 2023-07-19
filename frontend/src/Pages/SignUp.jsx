
import React, { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Heading,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import axios from "axios"; // Import axios for making HTTP requests

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    user_status: true,
    gender: "",
    membership_type: "",
    bio: "",
    date_of_birth: "",
    
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to the registration API endpoint
    axios
      .post("http://localhost:5000/register", formData)
      .then((response) => {
        // Handle the response, e.g., show success message or redirect to another page
        console.log(response);
        setShowSuccessAlert(true);
        setFormData({
          username: "",
          password: "",
          user_status: true,
          gender: "",
          membership_type: "",
          bio: "",
          date_of_birth: "",
          
        });
      })
      .catch((error) => {
        // Handle the error, e.g., show error message or display form validation errors
        console.error(error);
      });
  };

  return (
    <Box maxWidth="500px" mx="auto" mt={8} p={4} border="1px" borderColor="gray.200" borderRadius="md" boxShadow="md">
      <Heading mb={2}>Sign Up Page</Heading>
      <form onSubmit={handleSubmit}>
        {/* Form inputs */}
             <FormControl mb={2}>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>Gender</FormLabel>
          <Select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Select>
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>Membership Type</FormLabel>
          <Select
            name="membership_type"
            value={formData.membership_type}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Membership Type</option>
            <option value="Regular">Regular</option>
            <option value="Premium">Premium</option>
            <option value="VIP">VIP</option>
          </Select>
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>Bio</FormLabel>
          <Input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl mb={2}>
          <FormLabel>Date of Birth</FormLabel>
          <Input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleInputChange}
            required
          />
        </FormControl>

        {/* <FormControl mb={4}>
          <FormLabel>Role</FormLabel>
          <Select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Select>
        </FormControl> */}
        
        <Button type="submit" colorScheme="blue" mt={4} w="100%">
          Register
        </Button>
      </form>

      {/* Success Alert */}
      {showSuccessAlert && (
        <Alert status="success" mt={4}>
          <AlertIcon />
          Registration Successful!
        </Alert>
      )}
    </Box>
  );
};

export default SignUp;