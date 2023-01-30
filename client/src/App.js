import * as React from 'react';
// import './App.css';
// import AppBarNavbarComponent from './components/AppBarNavComponent';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Login from './components/Login';
import Register from './components/Register';
import PostCard from './components/PostCard'
import { CssVarsProvider } from '@mui/joy/styles';
import { Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Routes>
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
      <Route element={<PostCard />} path='/landing'/>
      <Route path='/groupies'/>
      <Route path='/profile'/>
      <Route path='/messages'/>
      <Route path='/licks'/>
      
      {/* REDIRECT */}
      <Route path="*" element={<Navigate to="/login" />}/>
      </Routes>
    </div>
  );
}