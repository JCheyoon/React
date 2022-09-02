import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUp = () => {

  const addMeetUpHandler = (enteredMeetUpData) => {
    console.log(enteredMeetUpData)
  }

  return <NewMeetupForm onAddMeetup={addMeetUpHandler}/>
}

export default NewMeetUp