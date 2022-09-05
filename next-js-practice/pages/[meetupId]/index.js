import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

const MeetUpDetails = ({ meetupData }) => {
  return (
    <MeetupDetail
      title={meetupData.title}
      image={meetupData.image}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
};

//getStaticPath=> [meetUpID] Url 를 generated
export const getStaticPaths = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_CLUSTER);
  const db = client.db();
  const meetupsCollection = db.collection("meetup");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); //find document object but only in _id fields

  client.close().then();

  return {
    fallback: false, //false로 두면 m3같은 다른 path로 들어오게되면 404에러
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

//staticProps -> pre-generated during build process
export const getStaticProps = async (context) => {
  //get id from [meetupId] Url
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(process.env.MONGODB_CLUSTER);
  const db = client.db();
  const meetupsCollection = db.collection("meetup");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close().then();

  //fetch Data for single meetup
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
};

export default MeetUpDetails;
