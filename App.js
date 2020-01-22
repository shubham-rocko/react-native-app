import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from "./components/goal-item";
import GoalInput from "./components/goal-input";

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]); 
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(courseGoals => [
      ...courseGoals, 
      {id: Math.random().toString(), value: enteredGoal}]
      );
      setIsAddMode(false);
  }

  const removeGoalHandler = (goalId) => {
    console.log(goalId);
    setCourseGoals(courseGoals => {
      return courseGoals.filter((goal) => goal.id != goalId);
    });
  }

  return (
    <View style = {styles.root}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode}
      addGoalHandler={addGoalHandler}
      cancelGoalHandler={() => setIsAddMode(false)}
      />
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={courseGoals}
      renderItem={itemData => {
        return <GoalItem onDelete={removeGoalHandler.bind(this, itemData.item.id)} title={itemData.item.value}/>
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { 
    padding: 50 
  }
  });
