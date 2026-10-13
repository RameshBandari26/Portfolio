import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faCalendarDays,
  faLocationDot,
  faCertificate,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

// ═══════════════════════════════════════════════════════════
//  Edit these arrays to update education / certifications.
// ═══════════════════════════════════════════════════════════
const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    school: 'Rajiv Gandhi University of Knowledge Technologies, Basar',
    period: '2022 – 2026',
    score: 'GPA: 8.0',
  },
  {
    degree: 'Pre-University Course',
    school: 'Rajiv Gandhi University of Knowledge Technologies, Basar',
    period: '2020 – 2022',
    score: 'GPA: 8.3',
  },
  {
    degree: 'Secondary School Education',
    school: 'ZPHS Tadoor, Nagarkurnool',
    period: '2019 – 2020',
    score: 'GPA: 10.0',
  },
];

// 👉 Paste your HackerRank certificate links in `url`.
//    Leave url empty ('') and the "View Certificate" button is hidden.
const certifications = [
  { name: 'Java Certification', issuer: 'HackerRank', url: '' },
  { name: 'MySQL Certification', issuer: 'HackerRank', url: '' },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-14 text-yellow-500">
          <FontAwesomeIcon icon={faGraduationCap} className="text-amber-200 mr-2" />
          My <span className="text-orange-600">Education</span>
        </h2>

        <div className="relative border-l-2 border-orange-500/40 ml-3 md:ml-6 space-y-8">
          {education.map((edu) => (
            <div key={edu.degree} className="relative pl-8 md:pl-10">
              <span className="absolute -left-[9px] top-6 w-4 h-4 rounded-full border-2 border-orange-500 bg-[#121212]" />
              <div className="bg-[#1E1E1E] rounded-2xl p-6 text-left shadow-[0_0_6px_1px_rgba(255,255,255,0.03)] hover:shadow-[0_0_15px_4px_rgba(255,165,0,0.3)] transition duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-orange-400 font-semibold">{edu.school}</p>
                  </div>
                  <div className="text-sm text-gray-400 sm:text-right space-y-1">
                    <p>
                      <FontAwesomeIcon icon={faCalendarDays} className="mr-2 text-amber-200" />
                      {edu.period}
                    </p>
                    <p className="font-semibold text-amber-300">{edu.score}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h3 className="text-2xl font-bold text-center mt-16 mb-8 text-amber-300">
          <FontAwesomeIcon icon={faCertificate} className="text-amber-200 mr-2" />
          Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((c) => (
            <div
              key={c.name}
              className="bg-[#1E1E1E] rounded-2xl p-5 text-left flex items-center justify-between gap-4 shadow-[0_0_6px_1px_rgba(255,255,255,0.03)] hover:shadow-[0_0_15px_4px_rgba(255,165,0,0.3)] transition duration-300"
            >
              <div>
                <p className="font-bold text-white">{c.name}</p>
                <p className="text-sm text-gray-400">{c.issuer}</p>
              </div>
              {c.url && (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-2 border-2 border-orange-400 px-3 py-1 rounded-lg text-sm font-bold text-orange-400 transition-all duration-300 hover:bg-orange-400 hover:text-white"
                >
                  View
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
