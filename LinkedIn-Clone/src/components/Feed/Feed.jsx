import { useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption/InputOption";
import { nanoid } from "nanoid";

//Icons
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Posts from "./Posts/Posts";
// import { db } from "../firebase/firebase";
// import firebase from "firebase";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) =>
  //     setPosts(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     )
  //   );
  // }, []);

  const sendPost = (e) => {
    e.preventDefault();

    setPosts((prevPosts) => [
      {
        id: nanoid(),
        name: "Debraj Dey",
        description: "This is a Description",
        message: input,
        photoUrl: "https://avatars.githubusercontent.com/u/81313461?v=4",
      },
      ...prevPosts,
    ]);

    setInput("");
    // db.collection("posts").add({
    //   name: "Debraj Dey",
    //   description: "This is a Description",
    //   message: input,
    //   photoUrl: "",
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // });

    // setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form onSubmit={sendPost}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Write a Post..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption Icon={ImageIcon} title="Photos" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7fc15e"
          />
        </div>
      </div>
      {/* Posts */}
      {posts.map(({ id, name, description, message, photoUrl }) => (
        <Posts
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}

      {/* <Posts
        name="Debraj Dey"
        photoUrl={"https://avatars.githubusercontent.com/u/81313461?v=4"}
        description={"Hi, This is my first post"}
        message={"Building a Linked in app in React using Redux and Firebase"}
      /> */}
    </div>
  );
}

export default Feed;
