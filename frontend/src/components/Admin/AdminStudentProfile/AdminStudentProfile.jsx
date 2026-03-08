import React, { useState } from 'react';

const AdminStudentProfile = () => {

  const [formData, setFormData] = useState({
    name: '',
    dept: '',
    phone: '',
    email: '',
    linkedIn: '',
    skills: [],
    photo: null
  });

  const [currentSkill, setCurrentSkill] = useState('');
  const [previewUrl, setPreviewUrl] = useState(null);

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle photo upload
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData(prev => ({
        ...prev,
        photo: file
      }));

      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // Add skill tag
  const addSkill = (e) => {

    if (e.key === 'Enter' && currentSkill.trim()) {
      e.preventDefault();

      const skill = currentSkill.trim();

      if (!formData.skills.includes(skill)) {

        setFormData(prev => ({
          ...prev,
          skills: [...prev.skills, skill]
        }));

      }

      setCurrentSkill('');
    }
  };

  // Remove skill
  const removeSkill = (skillToRemove) => {

    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));

  };

  // Submit form
  const handleSubmit = async (e) => {

    e.preventDefault();

    const data = new FormData();

    Object.keys(formData).forEach(key => {

      if (key === 'skills') {
        data.append(key, JSON.stringify(formData[key]));
      }
      else {
        data.append(key, formData[key]);
      }

    });
  

    try {

      const response = await fetch('/api/students/register', {
        method: 'POST',
        body: data
      });

      const result = await response.json();

      if (response.ok) {

        alert("Student Profile Created Successfully");

        setFormData({
          name: '',
          dept: '',
          phone: '',
          email: '',
          linkedIn: '',
          skills: [],
          photo: null
        });

        setPreviewUrl(null);

      } else {

        alert(result.message);

      }

    } catch (err) {

      console.error("Upload failed", err);

    }

  };

  return (

    <div className="min-h-screen bg-slate-50 p-8">

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* FORM SECTION */}

        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-200">

          <header className="mb-8">
            <h1 className="text-2xl font-black text-slate-800">
              Create Student Profile
            </h1>
            <p className="text-slate-500 text-sm">
              Fill in the professional details for the new record.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name + Department */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="e.g. Rahul Kumar"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">
                  Department
                </label>

                <input
                  type="text"
                  name="dept"
                  required
                  value={formData.dept}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="e.g. Computer Science"
                />
              </div>

            </div>

            {/* Email + Phone */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="rahul@email.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="9876543210"
                />
              </div>

            </div>

            {/* LinkedIn */}

            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-2">
                LinkedIn Profile
              </label>

              <input
                type="text"
                name="linkedIn"
                value={formData.linkedIn}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="https://linkedin.com/in/username"
              />
            </div>

            {/* Skills */}

            <div>

              <label className="block text-xs font-bold uppercase text-slate-400 mb-2">
                Technical Skills (Press Enter)
              </label>

              <div className="flex flex-wrap gap-2 mb-3">

                {formData.skills.map(skill => (

                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full flex items-center gap-2"
                  >

                    {skill}

                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                    >
                      ×
                    </button>

                  </span>

                ))}

              </div>

              <input
                type="text"
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                onKeyDown={addSkill}
                className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Add skill..."
              />

            </div>

            {/* Photo Upload */}

            <div>

              <label className="block text-xs font-bold uppercase text-slate-400 mb-2">
                Profile Photo
              </label>

              <input
              name='photo'
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="block w-full text-sm"
              />

            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl"
            >
              Save Student Profile
            </button>

          </form>

        </div>

        {/* PREVIEW */}

        <div className="lg:col-span-1">

          <div className="sticky top-8">

            <div className="bg-white rounded-[2rem] p-8 border shadow-xl flex flex-col items-center">

              <div className="w-28 h-28 rounded-full border-4 border-blue-500 overflow-hidden mb-6">

                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-xs text-gray-400">
                    No Photo
                  </div>
                )}

              </div>

              <h3 className="text-xl font-bold">
                {formData.name || "Student Name"}
              </h3>

              <p className="text-sm text-gray-500">
                {formData.dept || "---"}
              </p>

              <p className="text-sm text-gray-500">
                {formData.email || "---"}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">

                {formData.skills.map((skill, i) => (

                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-xs rounded-lg"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default AdminStudentProfile;