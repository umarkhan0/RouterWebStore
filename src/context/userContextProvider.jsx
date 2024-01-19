import React, { useState, useEffect } from "react";
import userContext from "./userCotext";
import axios from "axios";
import { base_URL } from "../constant/const";
import AppRouter from "../config/router";
const UserContextProvider = ({ children }) => {
  const [profile, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("Sign");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await axios.get(`${base_URL}/api/profileGet`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          console.log(response.data);
          setProfileData(response.data);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <userContext.Provider value={{ profile }}>
      <AppRouter />
    </userContext.Provider>
  );
};

export default UserContextProvider;
