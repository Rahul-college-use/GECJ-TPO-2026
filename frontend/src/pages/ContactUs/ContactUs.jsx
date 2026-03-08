import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Get in Touch</h2>
          <h3 className="text-4xl font-black text-slate-900">Contact <span className="text-blue-900">Administration</span></h3>
          <div className="h-1.5 w-20 bg-orange-500 mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left: Message Form (7/12) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
                <input type="text" className="bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none transition" placeholder="Rahul Kumar" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                <input type="email" className="bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none transition" placeholder="rahul@example.com" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Subject</label>
                <select className="bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none transition">
                  <option>General Inquiry</option>
                  <option>Admission Related</option>
                  <option>Placement / TPO</option>
                  <option>Exam Cell</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Message</label>
                <textarea rows="5" className="bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none transition" placeholder="Write your message here..."></textarea>
              </div>
              <button className="md:col-span-2 bg-blue-900 text-white font-black py-4 rounded-xl hover:bg-blue-800 transition shadow-lg shadow-blue-900/20 uppercase tracking-widest">
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Details (5/12) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Reach Us Box */}
            <div className="bg-blue-900 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-6">Campus Address</h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="text-2xl">📍</span>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Government Engineering College, Jehanabad<br />
                      Near Kako, Jehanabad, Bihar - 804408
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-2xl">📞</span>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      +91-XXXXXXXXXX (Office)<br />
                      +91-XXXXXXXXXX (TPO)
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-2xl">✉️</span>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      principal@gecjehanabad.ac.in<br />
                      tpo@gecjehanabad.ac.in
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-slate-200 rounded-3xl border-4 border-white shadow-md overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
              <iframe 
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.8384214435645!2d85.0116!3d25.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzI0LjIiTiA4NcKwMDAnNDEuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3613.171328533437!2d85.1517633!3d25.0960611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2c5dae570dc3b%3A0x6e7fa82d66742bf7!2sGEC%20JEHANABAD%20(Government%20Engineering%20College%20Jehanabad)!5e0!3m2!1sen!2sin!4v1772954236328!5m2!1sen!2sin"
                className="w-full h-full"
                allowFullScreen="" 
                loading="lazy"
                title="GEC Jehanabad Map"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;