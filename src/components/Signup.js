import React from 'react';
import {Input, Button, Block,Box, Flex} from './index';

class Signup extends React.Component {
  render() {
    return (
      <Block style={{width:'320px', margin:'auto'}}>
        <form style={{width: '100%'}}>
          <Input
            name="name"
            type="text"
            label={"Name"}
            placeholder={"Your full name"}
          />
          <Input
            name="email"
            type="email"
            label={"Email"}
            placeholder={"you@yours.com"}
          />
          <Input
            type="text"
            label="Username"
            name="name"
            placeholder="username (username.yodata.me)"
          />
          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
          />
          <Flex justify="space-between">
            <Box>
              <Button>Signup</Button>
            </Box>
            <Box>
              <a href="#">Login</a>
            </Box>
          </Flex>
        </form>
      </Block>
    )
  }
}

export default Signup;

