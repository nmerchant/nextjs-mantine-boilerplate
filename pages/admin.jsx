import { createStyles, Group, Button, Modal } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  myCustomButton: {
    ...theme.fn.focusStyles(),
  },
}));

export default function HomePage() {
  const [opened, setOpened] = useState(false);

  return (
    <>
    <Button
      className="mr-3"
      variant="outline"
      onClick={() =>
        showNotification({
          title: 'Default notification',
          message: 'Hey there, your code is awesome! 🤥',
        })
      }
    >
      Show notification
    </Button>
      <Button
        variant="outline"
        onClick={() => setOpened(true)}
      >
        Open Modal
      </Button>

      
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
        >
        {/* Modal content */}
      </Modal>
    </>
  );
}
