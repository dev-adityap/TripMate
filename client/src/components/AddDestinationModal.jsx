import React, { useState } from 'react';
import { X } from 'lucide-react';

const AddDestinationModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    imageUrl: '',
    category: 'Trek',
    budget: '',
    duration: '',
    maxPeople: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Pass the detailed data back to your Discover page to save it
    onAdd(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Add New Destination</h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Form */}
        <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
          <form id="add-dest-form" onSubmit={handleSubmit} className="space-y-5">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Destination Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Valley of Flowers" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-purple-500 transition-colors" />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">State / Location</label>
                <input required type="text" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Uttarakhand" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-purple-500 transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Cover Image URL</label>
              <input required type="url" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="https://images.unsplash.com/..." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-purple-500 transition-colors" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Category</label>
                <select name="category" value={formData.category} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-purple-500 transition-colors">
                  <option value="Trek">Trek</option>
                  <option value="Mountains">Mountains</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Beach">Beach</option>
                  <option value="Spiritual">Spiritual</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Budget (₹)</label>
                <input required type="number" name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g. 14500" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-purple-500 transition-colors" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Duration (Days)</label>
                <input required type="number" name="duration" value={formData.duration} onChange={handleChange} placeholder="e.g. 6" min="1" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-purple-500 transition-colors" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Max Group Size</label>
                <input required type="number" name="maxPeople" value={formData.maxPeople} onChange={handleChange} placeholder="e.g. 12" min="2" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-purple-500 transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Description / Itinerary Notes</label>
              <textarea required name="description" value={formData.description} onChange={handleChange} rows="4" placeholder="Brief details about the trip..." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-purple-500 transition-colors resize-none"></textarea>
            </div>
            
          </form>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 rounded-b-3xl">
          <button onClick={onClose} className="px-5 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-200 rounded-xl transition-colors">
            Cancel
          </button>
          <button type="submit" form="add-dest-form" className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
            + Publish Destination
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddDestinationModal;