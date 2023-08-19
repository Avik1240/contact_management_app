import React from "react";
import { useSelector } from "react-redux";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import ContactList from "../components/ContactList";

const ContactPage: React.FC = () => {
  const { contactList } = useSelector((state: RootState) => state.contact);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-center items-center my-12 gap-44">
        <button
          className="rounded-lg bg-blue-600 p-3 text-white"
          onClick={() => navigate("/create-contact")}
        >
          Create Contact
        </button>
        {contactList?.length > 0 ? (
          <ContactList contactList={contactList} />
        ) : (
          <div className="flex font-bold text-lg gap-6 border border-black p-8">
            <div>
              <MdCancel size={"4rem"} />
            </div>
            <div>
              <p>No Contact Found</p>
              <p>Please add contact from Create Contact Button</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactPage;
