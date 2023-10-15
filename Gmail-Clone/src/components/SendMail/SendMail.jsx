import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";

import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async (formData) => {
    console.log(formData);

    try {
      const docRef = await addDoc(collection(db, "emails"), {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    dispatch(closeSendMessage());
  };

  const dispatch = useDispatch();

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>

        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="email"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {/* {errors.to && <p cla ssName="sendMail__error">To is required</p>} */}
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {/* {errors.to && <p className="sendMail__error">Subject is required</p>} */}
        <input
          name="message"
          type="text"
          className="sendMail__message"
          {...register("message", { required: true })}
        />
        {/* {errors.to && <p className="sendMail__error">Message is required</p>} */}
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
