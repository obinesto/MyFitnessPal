import { useState} from "react";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import Generator from "./components/Generator";
import { generateWorkout } from './utils/functions'

function App() {
  const [workout, setWorkout] = useState(null)
  const [workoutType, setWorkoutType] = useState('individual')
  const [muscleGroups, setMuscleGroups] = useState([])
  const [goal, setGoal] = useState('strength_power')

  function updateWorkout() {
    if (muscleGroups.length < 1) {
      return
    }
    let newWorkout = generateWorkout({ workoutType, muscleGroups, goal })
    console.log(newWorkout);
    
    setWorkout(newWorkout)

    window.location.href = '#workout'
  }

  return (
    <main
      className="min-h-screen flex flex-col bg-gradient-to-r
     from-slate-800 to-slate-950 text-white text-sm sm:text-base"
    >
      <Hero />
      <Generator
        workoutType={workoutType}
        setWorkoutType={setWorkoutType}
        muscleGroups={muscleGroups}
        setMuscleGroups={setMuscleGroups}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
}

export default App;
