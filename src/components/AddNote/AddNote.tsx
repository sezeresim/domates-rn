import React, {useState} from 'react';
import {Layout, Input, Button, Icon} from '@ui-kitten/components';
import styles from './AddNote.styles';

interface Props {
  onAdd: (task: string) => void;
}

const AddNote: React.FC<Props> = ({onAdd}) => {
  const [value, setValue] = useState('');

  return (
    <Layout style={styles.layout}>
      <Input
        style={styles.input}
        placeholder={'Add new task'}
        value={value}
        onChangeText={nextValue => setValue(nextValue)}
        multiline={true}
      />
      <Button
        style={styles.button}
        onPress={() => {
          onAdd(value);
          setValue('');
        }}
        accessoryLeft={<Icon name="plus-outline" />}
        disabled={value.length <= 0}
      />
    </Layout>
  );
};

export default AddNote;
