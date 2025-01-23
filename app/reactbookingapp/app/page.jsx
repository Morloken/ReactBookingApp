
// import rooms from "@/data/rooms.json";

import getAllRooms from './actions/getAllRooms';

import RoomCard from "@/components/RoomCard";
import Heading from "@/components/Heading";
export default async function Home() {
  const rooms = await getAllRooms();

  return (
    <>
      <Heading title="Available Rooms" />
      {rooms.length > 0 ? 
        rooms.map((room) => (
          <RoomCard /*key={room.id}*/ room={room}  key = {room.$id}/>
        ))
       : 
       (
        <p>No rooms available</p>


      )}
    </>
  );
}
