'use client'

import { useEffect, useState, createContext } from "react";
import axios from "axios";


export const PostContext = createContext({});


export const PostProvider = ({ children }) => {
    const [aboutData, setAboutData] = useState();
    const [user, setUser] = useState({});
    const [skills, setSkills] = useState([]);
    const [certification , setCertification] = useState([]);
    const [experience , setExperience] = useState([]);
    const [education , setEducation] = useState([]);

    useEffect(() => {
        const fetchAbout = async () => {
          try {
            const response = await axios.get("/api/users/about");
            console.log('Fetched About:', response.data);
            setAboutData(response.data.about);
          } catch (error) {
            console.error('Error fetching About:', error);
            
          } finally {
            console.log('Done fetching About');
          }
        };
    
        fetchAbout();
      }, [setAboutData]);

      useEffect(() => {
        const fetchUser = async () => {
          try {
            const response = await axios.get("/api/users/detail");
            console.log('Fetched User:', response.data.data);
            setUser(response.data.data);
          } catch (error) {
            console.error('Error fetching User:', error);
            
          } finally {
            console.log('Done fetching User');
          }
        };
    
        fetchUser();
      }, [setUser]);


      useEffect(() => {
        const fetchSkill = async () => {
          try {
            const response = await axios.get("/api/users/skill");
            console.log('Fetched Skill:', response.data[0].skillsToAdd);
            setSkills(response.data[0].skillsToAdd);
          } catch (error) {
            console.error('Error fetching Skill:', error);
            
          } finally {
            console.log('Done fetching Skill');
          }
        };
    
        fetchSkill();
      }, [setSkills]);

      useEffect(() => {
        const fetchCertification = async () => {
          try {
            const response = await axios.get("/api/users/certification");
            console.log('Fetched Certification:', response.data[0]);
            setCertification(response.data[0]);
          } catch (error) {
            console.error('Error fetching Certification:', error);
            
          } finally {
            console.log('Done fetching Certification');
          }
        };
    
        fetchCertification();
      }, [setCertification]);


      useEffect(() => {
        const fetchExperience = async () => {
          try {
            const response = await axios.get("/api/users/experience");
            console.log('Fetched Experience:', response.data);
            setExperience(response.data[0]);
          } catch (error) {
            console.error('Error fetching Experience:', error);
            
          } finally {
            console.log('Done fetching Experience');
          }
        };
    
        fetchExperience();
      },[setExperience])

        useEffect(() => {
            const fetchEducation = async () => {
              try {
                const response = await axios.get("/api/users/education");
                console.log('Fetched Education:', response.data[0]);
                setEducation(response.data[0]);
              } catch (error) {
                console.error('Error fetching Education:', error);
                
              } finally {
                console.log('Done fetching Education');
              }
            };
        
            fetchEducation();
          
        },[setEducation])

        




    return (
        <PostContext.Provider value={{ aboutData, setAboutData, user, setUser, skills, setSkills , certification, setCertification
        , experience, setExperience , education, setEducation
        
        }}>
            <div>
                {children}
            </div>
        </PostContext.Provider>
    )
} 


