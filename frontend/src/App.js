import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { SocketProvider } from './context/SocketContext';
import { Toaster } from './components/ui/sonner';

import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ForgotPassword, ResetPassword } from './pages/PasswordReset';
import { Feed } from './pages/Feed';
import { Profile } from './pages/Profile';
import { Events } from './pages/Events';
import { Wallet } from './pages/Wallet';
import { AdminPanel } from './pages/AdminPanel';
import { Messages } from './pages/Messages';
import { Settings } from './pages/Settings';
import Footer from "./components/Footer";

import './App.css';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-zinc-400">Betöltés...</p>
        </div>
      </div>
    );
  }

  return user ? children : <Navigate to="/" replace />;
};

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-zinc-400">Betöltés...</p>
        </div>
      </div>
    );
  }

  return !user ? children : <Navigate to="/feed" replace />;
};

function App() {
  return (
    <AuthProvider>
      <SocketProvider>
<BrowserRouter>

  <Toaster position="top-right" />

  <div className="min-h-screen flex flex-col">

    <div className="flex-1">

      <Routes>
        <Route path="/" element={<PublicRoute><Landing /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />
        <Route path="/reset-password" element={<PublicRoute><ResetPassword /></PublicRoute>} />

        <Route path="/feed" element={<PrivateRoute><Feed /></PrivateRoute>} />
        <Route path="/profile/:userId" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/events" element={<PrivateRoute><Events /></PrivateRoute>} />
        <Route path="/wallet" element={<PrivateRoute><Wallet /></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />

        {/* CHAT PAGE */}
        <Route path="/messages" element={<PrivateRoute><Messages /></PrivateRoute>} />

        <Route path="/admin" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
      </Routes>

    </div>

    <Footer />

  </div>

</BrowserRouter>
      </SocketProvider>
    </AuthProvider>
  );
}

export default App;