import React from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Layout, TopNavigation} from '@ui-kitten/components';
import {AddNote, Notes} from '../../components';
import {addTask, deleteTask, updateTask} from '../../store/notes/actions';
import {RootState} from '../../store/store';
import styles from './Notes.styles';

const Todo: React.FC = () => {
  const {data} = useSelector((state: RootState) => state.notes);
  const dispatch = useDispatch();

  const addNoteHandler = (note: any) => {
    dispatch(addTask(note));
  };

  const deleteNoteHandler = (id: any) => {
    dispatch(deleteTask(id));
  };

  const completeNoteHandler = (id: any) => {
    dispatch(updateTask(id));
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TopNavigation
        title="Check List"
        subtitle={'Manage Your Notes'}
        alignment="center"
      />
      <Layout style={styles.layout}>
        <Notes
          notes={data}
          onDelete={deleteNoteHandler}
          onComplate={completeNoteHandler}
        />
        <AddNote onAdd={addNoteHandler} />
      </Layout>
    </SafeAreaView>
  );
};

export default Todo;
