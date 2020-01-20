import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import GoalItem from "./components/goal-item";
import GoalInput from "./components/goal-input";

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]); 

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(courseGoals => [...courseGoals, {id: Math.random(), value: `${enteredGoal}`}]);
  }

  const removeGoalHandler = (goalId) => {
    console.log(goalId);
    setCourseGoals(courseGoals => {
      return courseGoals.filter((goal) => goal.id != goalId);
    });
  }

  return (
    <View style = {styles.root}>
      <GoalInput
      addGoalHandler={addGoalHandler}
      />
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={courseGoals}
      renderItem={itemData => <GoalItem onDelete={removeGoalHandler.bind(this, itemData.item.id)}
      title={itemData.item.value}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { 
    padding: 50 
  }
  });
