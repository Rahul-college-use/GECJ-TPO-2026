import React, { useEffect, useState } from "react";

const StudentsCarousel = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // 1. Handle Screen Resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1); // Mobile: Show 1 card
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2); // Tablet: Show 2 cards
      } else {
        setItemsToShow(3); // Desktop: Show 3 cards
      }
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch("/api/students/all")
      .then((res) => res.json())
      .then((data) => {
        setStudentsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % studentsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + studentsData.length) % studentsData.length);
  };

  if (loading) return <div className="text-center py-20 font-bold">Loading...</div>;
  if (!studentsData.length) return <div className="text-center py-20">No Students Found</div>;

  // 2. Responsive Slice Logic
  const getVisibleStudents = () => {
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % studentsData.length;
      visible.push(studentsData[index]);
    }
    return visible;
  };

  const visibleStudents = getVisibleStudents();

  return (
    <div className="w-full py-12 md:py-20 bg-slate-50 overflow-hidden">
      <div className="text-center mb-10 md:mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Our Talent Pool</h2>
        <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="relative w-full px-4 md:px-16 flex items-center justify-center">
        {/* Navigation Buttons - Smaller on Mobile */}
        <button 
          onClick={prevSlide} 
          className="absolute left-2 md:left-6 z-30 p-3 md:p-4 bg-white shadow-xl rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all active:scale-95"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* 3. Responsive Grid Columns */}
        <div className={`grid gap-6 md:gap-10 w-full max-w-sm md:max-w-none 
          ${itemsToShow === 1 ? 'grid-cols-1' : itemsToShow === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
          
          {visibleStudents.map((student, index) => (
            <div 
              key={`${student._id}-${index}`} 
              className="group bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center"
            >
              {/* Profile Image */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-10"></div>
                <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-white shadow-md">
                  <img
                    src={`http://localhost:3000${student.photo}`}
                    alt={student.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/150" }}
                  />
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-black text-slate-800">{student.name}</h3>
              <p className="text-blue-600 font-bold text-[10px] md:text-xs tracking-widest uppercase mb-4">{student.dept}</p>
              
              <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                {student.skills?.slice(0, 3).map((skill, i) => (
                  <span key={i} className="bg-slate-50 text-slate-500 px-2 py-1 text-[9px] font-bold uppercase rounded border border-slate-100">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="w-full flex flex-col sm:flex-row gap-2 mt-auto">
                {student.linkedIn && (
                  <a href={student.linkedIn} target="_blank" className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl text-[10px] font-black uppercase text-center hover:bg-blue-100 transition-all">
                    LinkedIn
                  </a>
                )}
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl text-[10px] font-black uppercase shadow-lg shadow-blue-100">
                  Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={nextSlide} 
          className="absolute right-2 md:right-6 z-30 p-3 md:p-4 bg-white shadow-xl rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all active:scale-95"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StudentsCarousel;