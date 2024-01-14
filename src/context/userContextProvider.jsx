import React, { useState, useEffect } from "react";
import userContext from "./userCotext";
import axios from "axios";

let baseURL = "http://localhost:3000";

const UserContextProvider = ({ children }) => {
  const [profile, setProfileData] = useState(null);
  const token = localStorage.getItem("Sign");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await axios.get(`${baseURL}/api/profileGet`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          console.log(response.data);
          setProfileData(response.data);
        }
      } catch (error) {
        // Handle errors here
        console.error("Error fetching profile:", error);
        // You might want to handle or log the error appropriately
      }
    };
    fetchData();
  }, [token]);

  return (
    <userContext.Provider value={{ profile }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
