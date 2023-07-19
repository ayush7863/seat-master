import React, { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import axios from "axios"; // Import axios for making HTTP requests
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const navigate = useNavigate(); // Access the navigate object from React Router

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to the login API endpoint
    axios
      .post("http://localhost:5000/login", formData)
      .then((response) => {
        // Handle the response, e.g., redirect to dashboard or store token in localStorage
        console.log(response.data);
        setShowSuccessAlert(true);
        setShowErrorAlert(false);
        setFormData({
          username: "",
          password: "",
        });
        navigate("/"); // Redirect to the home page
      })
      .catch((error) => {
        // Handle the error, e.g., show error message or display form validation errors
        console.error(error);
        setShowSuccessAlert(false);
        setShowErrorAlert(true);
      });
  };

  return (
    <Box maxWidth="500px" mx="auto" mt={8} p={4} border="1px" borderColor="gray.200" borderRadius="md" boxShadow="md">
      <Heading mb={4}>Login Page</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </FormControl>

        <Button type="submit" colorScheme="blue" mt={4} w="100%">
          Login
        </Button>
      </form>
      {showSuccessAlert && (
        <Alert status="success" mt={4}>
          <AlertIcon />
          Login Successful!
        </Alert>
      )}

      {/* Error Alert */}
      {showErrorAlert && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          Invalid username or password.
        </Alert>
      )}
    </Box>
  );
};

export default Login;