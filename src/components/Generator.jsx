import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/fitness";
import Button from "./Button";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text- base mx-auto">{description}</p>
    </div>
  );
}

export default function Generator(props) {
  const {workoutType, setWorkoutType, muscleGroups, setMuscleGroups, goal, setGoal, updateWorkout} = props;
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateMuscleGroups(muscleGroup) {
    if (muscleGroups.includes(muscleGroup)) {
      setMuscleGroups(muscleGroups.filter((group) => group !== muscleGroup));
      return;
    }
    if (muscleGroups.length > 2) {
      return;
    }
    if (workoutType !== "individual") {
      setMuscleGroups([muscleGroup]);
      setShowModal(false);
      return;
    }
    setMuscleGroups([...muscleGroups, muscleGroup]);
    if (muscleGroups.length === 2) {
      setShowModal(false);
    }
  }

  return (
    <SectionWrapper
      id={"generate"}
      header={"generate your workout"}
      title={["It's", "Build", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Choose your workout"}
        description={"Select the type of workout you want to do"}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setMuscleGroups([]);
                setWorkoutType(type)
              }}
              key={typeIndex}
              className={
                "bg-slate-950 font-semibold py-4 px-6 outline rounded-md " +
                "transition-all duration-300 overflow-hidden " +
                (type === workoutType
                  ? "outline-blue-600 hover:-translate-y-2 hover:shadow-lg  hover:shadow-blue-600"
                  : " ")
              }
              type="button"
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"select the muscle groups you want to target"}
      />
      <div className="bg-slate-950 p-3 border border-solid border-blue-600 rounded-lg flex flex-col">
        <button
          onClick={toggleModal}
          className="relative p-3 flex items-center justify-center"
        >
          <p className="capitalize">{muscleGroups.length == 0 ? "Select muscle groups" : muscleGroups.join(" ")}</p>
          <i className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer fa-solid fa-caret-down"></i>
        </button>
        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {workoutType === "individual"
              ? WORKOUTS[workoutType].map((muscleGroup, muscleGroupIndex) => {
                  return (
                    <button
                      onClick={() => {
                        updateMuscleGroups(muscleGroup);
                      }}
                      key={muscleGroupIndex}
                      className={
                        "hover:text-blue-400 duration-200 py-2" +
                        (muscleGroups.includes(muscleGroup)
                          ? " text-blue-400"
                          : " text-slate-400")
                      }
                    >
                      <i className="fa-solid fa-check-circle mr-2"></i>
                      <p className="uppercase">{muscleGroup.replaceAll("_", " ")}</p>
                    </button>
                  );
                })
              : Object.keys(WORKOUTS[workoutType]).map(
                  (muscleGroup, muscleGroupIndex) => {
                    return (
                      <button
                        onClick={() => {
                          updateMuscleGroups(muscleGroup);
                        }}
                        key={muscleGroupIndex}
                        className={
                          "hover:text-blue-400 duration-200 py-2" +
                          (muscleGroups.includes(muscleGroup)
                            ? " text-blue-400"
                            : " text-slate-400")
                        }
                      >
                        <i className="fa-solid fa-check-circle mr-2"></i>
                        <p className="uppercase">
                          {muscleGroup.replaceAll("_", " ")}
                        </p>
                      </button>
                    );
                  }
                )}
          </div>
        )}
      </div>
      <Header
        index={"03"}
        title={"Become a beast"}
        description={"Select your ultimate objective"}
      />
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => setGoal(scheme)}
              key={schemeIndex}
              className={
                "bg-slate-950 font-semibold py-4 px-6 outline rounded-md " +
                "transition-all duration-300 " +
                (scheme === goal
                  ? "outline-blue-600 hover:-translate-y-2 hover:shadow-lg  hover:shadow-blue-600"
                  : " ")
              }
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button func={updateWorkout} text={"Formulate"}></Button>
    </SectionWrapper>
  );
}
