// import {
//   Box,
//   Container,
//   Tab,
//   TabList,
//   TabPanel,
//   TabPanels,
//   Tabs,
//   Text,
//   Image,
//   Flex,
// } from "@chakra-ui/react";
// import { useEffect } from "react";
// import { useHistory } from "react-router";
// import Login from "../components/Authentication/Login";
// import Signup from "../components/Authentication/signup";

// function Homepage() {
//   const history = useHistory();

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("userInfo"));

//     if (user) history.push("/chats");
//   }, [history]);

//   return (
//     <Container maxW="xl" centerContent>
//       <Box
//         d="flex"
//         p={2}
//         bg="black"
//         w="100%"
//         m="40px 0 15px 0"
//         borderRadius="lg"
//         borderWidth="4px"
//       >
//         <Flex alignItems="center" justifyContent="space-between">
//           <Text fontSize="3xl" fontFamily="Work sans" color="white">
//             TextZ
//           </Text>
//           <Box w="15%">
//             <Image src="LOGO.png" alt="TEXTZ LOGO" />
//           </Box>
//         </Flex>
//       </Box>
//       <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
//         <Tabs isFitted variant="soft-rounded" colorScheme="blackAlpha">
//           <TabList mb="1em">
//             <Tab>Login</Tab>
//             <Tab>Sign Up</Tab>
//           </TabList>
//           <TabPanels>
//             <TabPanel>
//               <Login />
//             </TabPanel>
//             <TabPanel>
//               <Signup />
//             </TabPanel>
//           </TabPanels>
//         </Tabs>
//       </Box>
//     </Container>
//   );
// }

// export default Homepage;
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Image,
  Flex,
}             from "@chakra-ui/react";                   /*for ui*/
import Login  from "../components/authentication/logIn"; /*for login front end*/
import Signup from "../components/authentication/signUp";/*for signin front end*/
import { useEffect } from "react";                    /*for react hooks*/
import { useHistory } from "react-router";            /*for history*/

function Homepage() {

  const history = useHistory();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    //setUser(userInfo);
    if (!userInfo) history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        p={2}
        bg="black"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="4px"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="3xl" fontFamily="Work sans" color="white">
            TextZ
          </Text>
          <Box w="15%">
            <Image src="logo.png" alt="TEXTZ LOGO" />
          </Box>
        </Flex>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded" colorScheme="blackAlpha">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}
export default Homepage;
