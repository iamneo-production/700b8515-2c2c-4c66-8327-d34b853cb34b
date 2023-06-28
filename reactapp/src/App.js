import React, { useEffect } from 'react';

//import { BrowserRouter as Router, Routes, Route, Navigate,Link, useLocation } from 'react-router-dom';
import { Link, Route, Routes, BrowserRouter as Router, useLocation, Navigate}from 'react-router-dom';
import styles from './App.module.css';
import Logo from './logo.png';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Viewpolicy from './Viewpolicy.jsx';
import Plans from './Plans';
import Content from './ReadMore'
  

  const plans=[
    {
        policyName:'Life Insurance',
            Applicableage: '5 to 50',
                numberOfYears:'10 years',
                    ClaimAmount: '2,00,000',
                        PolicyDetails:'insurer promises to pay a sum of money in exchange for a premium upon the death of insured person',
                            TermsandConditions:<Content/>, 
                              },
                                {
                                    policyName:'Term Life Insurance',
                                        Applicableage: '5 to 50',
                                            numberOfYears:'25 years',
                                                ClaimAmount: '2,00,000',
                                                    PolicyDetails:'insurer promises to pay a sum of money in exchange for a premium upon the death of insured person',
                                                        TermsandConditions:<Content/>, 
                                                          },
                                                            {
                                                                policyName:'Life Insurance',
                                                                    Applicableage: '5 to 50',
                                                                        numberOfYears:'15 years',
                                                                            ClaimAmount: '2,00,000',
                                                                                PolicyDetails:'insurer promises to pay a sum of money in exchange for a premium upon the death of insured person',
                                                                                    TermsandConditions:<Content/>,   
                                                                                      }

                                                                                       
                                                                                         






                                                                                           // { id: 'e2',title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
                                                                                             // { id: 'e3',title: 'Car Insurance',amount: 294.67,date: new Date(2021, 2, 28)},
                                                                                               // { id: 'e4',title: 'New Desk (Wooden)',amount: 450,date: new Date(2021, 5, 12)},
                                                                                               ]


                                                                                               const NavigationBar = () => {
                                                                                                 const location = useLocation();
                                                                                                   
                                                                                                     // Exclude Login and Signup pages from showing the navigation bar
                                                                                                       if (location.pathname === '/Login' || location.pathname === '/Signup') {
                                                                                                           return null;
                                                                                                             }

                                                                                                               return (
                                                                                                                   <div>
                                                                                                                         <nav className={styles.navigation}>
                                                                                                                               <div className={styles.logocontainer}>
                                                                                                                                       <Link to="/Login" className={styles.logolink}>
                                                                                                                                                  <img src={Logo} alt="Logo" className={styles.logo} />{/* Add the logo image */}
                                                                                                                                                          </Link>
                                                                                                                                                                </div>
                                                                                                                                                                      <div className={styles.center}>
                                                                                                                                                                              <Link to="/Viewpolicy">View policy</Link>
                                                                                                                                                                                      <Link to="/Profile">Profile</Link>
                                                                                                                                                                                              <Link to="/Notifications">My Policy</Link>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                          <div className={styles.right}>
                                                                                                                                                                                                                  <Link to="/Logout">Logout</Link>
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                            </nav>

                                                                                                                                                                                                                                <Plans items={plans}></Plans>
                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                              };

                                                                                                                                                                                                                                              const App = () => {

                                                                                                                                                                                                                                                useEffect(() => {
                                                                                                                                                                                                                                                    // Redirect to Login page when the app is deployed
                                                                                                                                                                                                                                                        const { pathname } = window.location;
                                                                                                                                                                                                                                                            if (pathname !== '/Login') {
                                                                                                                                                                                                                                                                  window.location.href = '/Login';
                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                        }, []);
                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                              // <Router>
                                                                                                                                                                                                                                                                                  //   <div className="container">
                                                                                                                                                                                                                                                                                      //     <div className="logo-container">
                                                                                                                                                                                                                                                                                          //       <Link to="/login" className="logo-link">
                                                                                                                                                                                                                                                                                              //         <img src={logo} alt="Logo" className="logo" />{/* Add the logo image */}
                                                                                                                                                                                                                                                                                                  //       </Link>
                                                                                                                                                                                                                                                                                                      //     </div>
                                                                                                                                                                                                                                                                                                          //     <Routes>
                                                                                                                                                                                                                                                                                                              //       <Route path="/Login" element={<Login />} />
                                                                                                                                                                                                                                                                                                                  //       <Route path="/Signup" element={<Signup />} />
                                                                                                                                                                                                                                                                                                                      //       <Route path="/PopularPlans" element={<PopularPlans/>} />
                                                                                                                                                                                                                                                                                                                          //       <Route path="/*" element={<Navigate to="/Login" />} />
                                                                                                                                                                                                                                                                                                                              //     </Routes>
                                                                                                                                                                                                                                                                                                                                  //   </div>
                                                                                                                                                                                                                                                                                                                                      // </Router>
                                                                                                                                                                                                                                                                                                                                        return (
                                                                                                                                                                                                                                                                                                                                            <Router>
                                                                                                                                                                                                                                                                                                                                                  <div className={styles.container}>
                                                                                                                                                                                                                                                                                                                                                          <NavigationBar />
                                                                                                                                                                                                                                                                                                                                                                  <Routes>
                                                                                                                                                                                                                                                                                                                                                                            <Route path="/Login" element={<Login />} />
                                                                                                                                                                                                                                                                                                                                                                                      <Route path="/Signup" element={<Signup />} />
                                                                                                                                                                                                                                                                                                                                                                                                <Route path="/Viewpolicy" element={<Viewpolicy />} />
                                                                                                                                                                                                                                                                                                                                                                                                          <Route path="*" element={<Navigate to="/Login" />} />
                                                                                                                                                                                                                                                                                                                                                                                                                    {/* Add more routes for other pages */}
                                                                                                                                                                                                                                                                                                                                                                                                                            </Routes>
                                                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                      </Router>
                                                                                                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                                                                        export default App;

