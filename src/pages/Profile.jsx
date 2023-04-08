import React, { useState, Suspense } from "react";
import Popup from "../components/Popup";
import { ReactComponent as ChatIcon } from "../assets/chatbox.svg";

import { useOutletContext, useLocation } from "react-router-dom";
import locationImg from "../assets/location.png";
import Chatbox from "../components/Chatbox";
export function Profile() {
  const context = useOutletContext();
  const [popup, setPopup] = useState(false);
  const [user, setUser] = useState({ user: "", toggle: false });
  function togglePopup() {
    setPopup((prev) => !prev);
  }
  function saveUser(e) {
    setUser((prev) => ({ ...prev, user: e, toggle: true }));
  }
  const dialogue = [
    "hi",
    "hi",
    "how are you?",
    "I'm good, what about you?",
    `I'm good too`,
  ];
  const usersElement = context.state.usersData.users || "";
  const name = context.state?.user.name || "";
  const {
    profilepicture: image,
    username: userName,
    email,
    phone,
    website: webSite,
  } = context.state?.user;
  const { bs, catchPhrase, name: companyGroup } = context.state?.user.company;
  const { city, suite, street, zipcode } = context.state?.user.address;

  return (
    <>
      <div className="container profile-container">
        <div className="profile row">
          <h3 className="h3-black semi-bold">Profile</h3>
          <div className="profile-pic-container row" onClick={togglePopup}>
            <img src={image} alt="profilepic" className="user-image" />
            <h3 className="h3-black semi-bold">{name}</h3>
            {popup && <Popup users={context} onClose={togglePopup} />}
          </div>
        </div>
        <div className="line"></div>
        <div className="profile-details-container">
          <div className="profile-left">
            <img src={image} alt="user-image" className="user-image" />
            <h3 className="h3-black semi-bold">{name}</h3>

            <p>
              Username : <span>{userName}</span>
            </p>
            <p>
              e-mail :<span>{email}</span>
            </p>
            <p>
              Phone : <span>{phone}</span>
            </p>
            <p>
              Website: <span>{webSite}</span>
            </p>
            <div className="line"></div>
            <p>Company</p>
            <p>
              Username : <span>{bs}</span>
            </p>
            <p>
              e-mail :<span>{catchPhrase}</span>
            </p>
            <p>
              Phone : <span>{companyGroup}</span>
            </p>
          </div>

          <div className="profile-right">
            <div className="line"></div>
            <div className="profile-right-body">
              <p>Address</p>
              <p>
                Street : <span>{street}</span>
              </p>
              <p>
                Suite :<span>{suite}</span>
              </p>
              <p>
                City : <span>{city}</span>
              </p>
              <p>
                Zipcode: <span>{zipcode}</span>
              </p>

              <img src={locationImg} alt="location image" />
              <div className="chat-box-container">
                <Chatbox
                  render={({ on, toggle }) => (
                    <>
                      <div className="chatbox-header">
                        <ChatIcon className="chat-icon" />
                        <span>Chats</span>
                        <span
                          className={on ? "chat-arrows-up" : "chat-arrows-down"}
                          onClick={toggle}
                        ></span>
                      </div>
                      <div className="chatbox-active-users">
                        {usersElement.map((e) => (
                          <div
                            className="chatbox-users"
                            key={e.id}
                            onClick={() => saveUser(e)}
                          >
                            <img src={e.profilepicture} alt="userImage" />
                            <p>{e.name}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                />
              </div>
              {user.toggle && (
                <div className="chat-box-user-container">
                  <Chatbox
                    render={({ on, toggle }) => (
                      <>
                        <div className="chatbox-header">
                          <img src={user.user.profilepicture} alt="" />
                          <span className="chat-user">{user.user.name}</span>
                          <span
                            className="close-arrow"
                            onClick={() =>
                              setUser((prev) => ({
                                ...prev,
                                toggle: false,
                              }))
                            }
                          ></span>
                        </div>
                        <div className="dialogue-box">
                          {dialogue.map((words, i) => (
                            <div
                              className={
                                i % 2 == 0 ? "dialogue-text" : "dialogue-left"
                              }
                            >
                              {words}
                            </div>
                          ))}
                        </div>
                        <div className="text-area"></div>
                      </>
                    )}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
