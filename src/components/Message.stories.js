import React from 'react';
import BaseStyles from '../../stories/BaseStyles';
import {storiesOf} from '@kadira/storybook';
import {MessageListItem, Box, Flex, ListGroup, ListGroupItemAction} from '../components';

const book = storiesOf('Messages', module);

book.add('message list item', () => {
  return (
    <BaseStyles>
      <Flex p="5">
        <Box mx="2" col={12}>
          <ListGroup>
            <ListGroupItemAction>
              <MessageListItem
                name="website:register-action"
                description="Actor has registered for the target's website"
              />
            </ListGroupItemAction>
          </ListGroup>
        </Box>
      </Flex>
    </BaseStyles>
  )
});

export default book;