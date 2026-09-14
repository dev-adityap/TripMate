import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Map, MessageSquare, CheckCircle2, Check, UserPlus, Info } from 'lucide-react';
import TopHeader from '../components/home/TopHeader';

const NotificationsPage = () => {
  const navigate = useNavigate();

  // Extended mock data with target URLs for redirection
  const [notifications, setNotifications] = useState([
    { 
      id: 1, 
      type: 'system',
      title: 'Welcome to TripMate!', 
      message: 'Start exploring destinations and find your next adventure group.', 
      time: 'Just now', 
      isRead: false,
      icon: <Info size={20} className="text-blue-500" />,
      bgColor: 'bg-blue-100',
      targetPath: '/discover' // Redirects to discover page
    },
    { 
      id: 2, 
      type: 'trip',
      title: 'New trips added', 
      message: '3 new batches have opened up for the Sandakphu Trek.', 
      time: '2 hours ago', 
      isRead: false,
      icon: <Map size={20} className="text-purple-500" />,
      bgColor: 'bg-purple-100',
      targetPath: '/destination/d30' // Redirects to Sandakphu destination page
    },
    { 
      id: 3, 
      type: 'chat',
      title: 'New message in Spiti Valley Group', 
      message: 'Tanuj: "Should we rent bikes from Manali or drive our own cars?"', 
      time: 'Yesterday', 
      isRead: true,
      icon: <MessageSquare size={20} className="text-green-500" />,
      bgColor: 'bg-green-100',
      targetPath: '/trip/t3' // Redirects to the Spiti Valley private group dashboard
    },
    { 
      id: 4, 
      type: 'success',
      title: 'Trip Confirmed!', 
      message: 'You have successfully joined the Kedarkantha Winter Trek. View your dashboard for the itinerary.', 
      time: '3 days ago', 
      isRead: true,
      icon: <CheckCircle2 size={20} className="text-emerald-500" />,
      bgColor: 'bg-emerald-100',
      targetPath: '/my-trips' // Redirects to the user's trips list
    },
    { 
      id: 5, 
      type: 'social',
      title: 'New member joined', 
      message: 'Neha just joined your Goa Beach Getaway trip.', 
      time: '1 week ago', 
      isRead: true,
      icon: <UserPlus size={20} className="text-amber-500" />,
      bgColor: 'bg-amber-100',
      targetPath: '/trip/t_goa' // Redirects to the Goa group dashboard
    }
  ]);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, isRead: true } : n
    ));
  };

  // Handles clicking the main body of the notification
  const handleNotificationClick = (notif) => {
    // 1. Automatically mark it as read when clicked
    if (!notif.isRead) {
      handleMarkAsRead(notif.id);
    }
    // 2. Redirect the user to the associated page
    if (notif.targetPath) {
      navigate(notif.targetPath);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFD] text-slate-900 font-sans pb-20">
      <TopHeader />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-12">
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
              <Bell className="text-purple-600" size={32} /> 
              Notifications
            </h1>
            <p className="text-slate-500 mt-2 text-sm">
              You have <strong className="text-purple-600">{unreadCount} unread</strong> notifications.
            </p>
          </div>
          
          {unreadCount > 0 && (
            <button 
              onClick={handleMarkAllRead}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 hover:text-purple-700 hover:bg-purple-50 hover:border-purple-200 rounded-xl text-sm font-bold transition-all shadow-sm"
            >
              <Check size={16} /> Mark all as read
            </button>
          )}
        </div>

        {/* Notifications List */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden">
          {notifications.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {notifications.map((notif) => (
                <div 
                  key={notif.id} 
                  onClick={() => handleNotificationClick(notif)}
                  className={`p-4 sm:p-6 transition-colors flex gap-4 sm:gap-6 cursor-pointer ${notif.isRead ? 'bg-white hover:bg-slate-50' : 'bg-purple-50/30 hover:bg-purple-50/60'}`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${notif.bgColor}`}>
                    {notif.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                      <h3 className={`text-base font-bold ${notif.isRead ? 'text-slate-700' : 'text-slate-900'}`}>
                        {notif.title}
                      </h3>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                        {notif.time}
                      </span>
                    </div>
                    <p className={`text-sm ${notif.isRead ? 'text-slate-500' : 'text-slate-700 font-medium'}`}>
                      {notif.message}
                    </p>
                  </div>

                  {/* Actions */}
                  {!notif.isRead && (
                    <div className="flex-shrink-0 flex items-center">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation(); // Prevents the main row click (redirection) from firing!
                          handleMarkAsRead(notif.id);
                        }}
                        className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-purple-600 hover:border-purple-300 hover:bg-purple-50 transition-all tooltip-trigger shadow-sm"
                        title="Mark as read"
                      >
                        <Check size={14} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                <Bell size={32} className="text-slate-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">You're all caught up!</h3>
              <p className="text-sm text-slate-500">You have no new notifications right now.</p>
            </div>
          )}
        </div>

      </main>
    </div>
  );
};

export default NotificationsPage;