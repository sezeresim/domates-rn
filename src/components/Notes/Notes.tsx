import React from 'react';
import {
  Card,
  Text,
  Divider,
  List,
  Button,
  Layout,
  Icon,
} from '@ui-kitten/components';
import styles from './Notes.styles';
interface Props {
  notes: string[];
  onComplate: (task: string) => void;
  onDelete: (task: string) => void;
}

const Notes: React.FC<Props> = ({notes, onDelete, onComplate}) => {
  return (
    <List
      style={styles.container}
      data={notes}
      ItemSeparatorComponent={Divider}
      renderItem={({item, index}: {item: any; index: number}) => (
        <Card key={index} status={item.completed ? 'success' : 'danger'}>
          <Layout style={styles.cardLayout}>
            <Text style={styles.note}>{item.description}</Text>
            <Layout style={styles.buttons}>
              {!item.completed && (
                <Button
                  accessoryLeft={<Icon name="done-all-outline" />}
                  size="tiny"
                  appearance="ghost"
                  status="success"
                  onPress={() => onComplate(item.id)}
                />
              )}
              <Button
                accessoryLeft={<Icon name="trash-outline" />}
                size="tiny"
                appearance="ghost"
                status="warning"
                onPress={() => onDelete(item.id)}
              />
            </Layout>
          </Layout>
        </Card>
      )}
    />
  );
};

export default Notes;
