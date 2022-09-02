import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Sz%C3%A9chenyi_Chain_Bridge_in_Budapest_at_night.jpg/1920px-Sz%C3%A9chenyi_Chain_Bridge_in_Budapest_at_night.jpg",
    address: "Hungary, some road",
    description: "This is first meet up",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Vajdahunyad_v%C3%A1ra_%2816291._sz%C3%A1m%C3%BA_m%C5%B1eml%C3%A9k%29_14.jpg/1280px-Vajdahunyad_v%C3%A1ra_%2816291._sz%C3%A1m%C3%BA_m%C5%B1eml%C3%A9k%29_14.jpg",
    address: "Hungary, some road, 1324",
    description: "This is second meet up",
  },
];

const Homepage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export const getServerSideProps = async (context) => {
//   const request = context.req
//   const response = context.res
//
//   //fetch Data from API
//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// };

export const getStaticProps = async () => {
  //fetch Data from API
  return {
    props: { meetups: DUMMY_MEETUPS },
  };
};

export default Homepage;
