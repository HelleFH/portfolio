// Consolidated and cleaned-up imports
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'; 
import { useSwipeable } from 'react-swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { Modal, Button } from 'react-bootstrap';
import Layout from './components/layout/Layout';
import ProjectsOverview from './pages/index/components/project-overview/project-overview';
import LoginModal from './pages/index/components/login-modal/LoginModal';
import SocialLinks from './components/social-links/social-links';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Assets
import Images from './assets/images';
import { frontendProjects } from './data/frontendprojects';
import { fullStackProjects } from './data/fullstackprojects';
export {
    React,
    useState,
    useEffect,
    useParams,
    useNavigate,
    Link,
    useSwipeable,
    FontAwesomeIcon,
    faChevronLeft,
    faChevronRight,
    faCopy,
    faLinkedin,
    faGithub,
    Modal,
    Button,
    Layout,
    ProjectsOverview,
    LoginModal,
    SocialLinks,
    Hero,
    Navbar,
    Footer,
    Images,
    frontendProjects,
    fullStackProjects
  };