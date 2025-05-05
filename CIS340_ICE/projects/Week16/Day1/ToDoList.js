import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';

// Main App component
export default function App() {

  const [taskInput, setTaskInput] = useState('');
  const [taskList, setTaskList] = useState([]);

  function addTask() {
    if (taskInput.trim()) {
      const updatedList = [...taskList, taskInput];
      setTaskList(updatedList);
      setTaskInput('');
    }
  }

  function deleteTask(indexToDelete) {
    const updatedList = taskList.filter((_, index) => index !== indexToDelete);
    setTaskList(updatedList);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={taskInput}
        onChangeText={setTaskInput}
      />

      <Button title="Add Task" onPress={addTask} />

      <FlatList
        data={taskList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item}</Text>
            <Button title="Delete" onPress={() => deleteTask(index)} />
          </View>
        )}
      />
    </View>
  );
}

// Styles used in the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#999',
    padding: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 18,
    flex: 1,
  },
});