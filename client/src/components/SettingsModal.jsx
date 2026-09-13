import React from 'react';
import { X, Settings, User, Bell, Shield } from 'lucide-react';

const SettingsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const user = JSON.parse(localStorage.getItem('user') || '{"name": "Aditya Panna", "email": "aditya@example.com"}');

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-2xl space-y-6">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-700 rounded-full cursor-pointer">
          <X size={18} />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
            <Settings size={20} />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-gray-900">Account Settings</h2>
            <p className="text-xs text-gray-500">Manage your profile and preferences.</p>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <User size={18} className="text-gray-500" />
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Profile Name</p>
                <p className="text-sm font-extrabold text-gray-900">{user.name}</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell size={18} className="text-gray-500" />
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Email Notifications</p>
                <p className="text-sm font-semibold text-gray-700">{user.email}</p>
              </div>
            </div>
            <span className="text-xs font-bold bg-green-50 text-green-600 px-3 py-1 rounded-full">Active</span>
          </div>

          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield size={18} className="text-gray-500" />
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Security & Auth</p>
                <p className="text-sm font-semibold text-gray-700">Google OAuth Verified</p>
              </div>
            </div>
          </div>
        </div>

        <button onClick={onClose} className="w-full py-3 bg-purple-600 text-white font-bold rounded-xl text-sm hover:bg-purple-700 transition-colors shadow-sm cursor-pointer">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;