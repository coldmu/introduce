'use client';
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import { FaUserAstronaut, FaCalendarAlt } from 'react-icons/fa';
import { IoCloseCircle } from 'react-icons/io5';

import { TeamMember } from '../types/team';

interface ImageModalProps {
  member: TeamMember;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ member, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    // Lock scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  // Prevent click propagation to backdrop
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  console.log('[DEBUG] ImageModal rendered', member);
  const modalContent = (
    <div
      className="fixed inset-0 z-[1001] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      ref={modalRef}
      style={{ inset: 0, background: 'rgba(0,0,0,0.7)', backgroundColor: 'rgba(0,0,0,0.7)' }}
    >
      {/* Modal Card */}
      <div
        className="modal-card animate-zoomIn flex flex-col"
        onClick={handleContentClick}
      >
        {/* Glassy Close Button */}
        <button
          className="absolute -top-5 right-5 z-20 w-10 h-10 flex items-center justify-center bg-white/50 shadow-lg backdrop-blur-sm hover:bg-white/80 transition"
          aria-label="Close modal"
          onClick={onClose}
        >
          <span className="relative w-8 h-8 flex items-center justify-center">
            <span className="absolute inset-0 bg-white" style={{ zIndex: 1 }} />
            <IoCloseCircle size={32} className="relative text-gray-700 hover:text-blue-500 transition" style={{ zIndex: 2 }} />
          </span>
        </button>
        {/* Image Area with Gradient Ring */}
        <div className="modal-section flex flex-col items-center justify-center pt-10 pb-3 px-8 bg-gradient-to-b from-blue-100/60 to-transparent">
          <div className="relative w-40 h-48 mb-3 flex items-center justify-center">
            <Image
              src={member.image}
              alt={member.name}
              width={180}
              height={220}
              style={{ objectFit: 'contain', width: '100%', height: '100%', zIndex: 1, position: 'relative', borderRadius: 0 }}
              className="border border-white/70 shadow-lg"
              priority
            />
          </div>
        </div>
        {/* Profile Details */}
        <div className="flex flex-col items-center px-8 py-6 text-gray-900">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-1 tracking-tight text-gray-900 drop-shadow">{member.name}</h2>
          <p className="text-base sm:text-lg text-blue-700 font-semibold mb-2">{member.role}</p>
          <div className="flex gap-3 items-center mb-2">
            <span className="flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-green-200 via-blue-200 to-blue-300 text-gray-800 font-semibold text-sm">
              <FaUserAstronaut className="mr-1 text-blue-500" /> {member.mbti}
            </span>
            <span className="flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm">
              <FaCalendarAlt className="mr-1 text-blue-400" /> {member.birthDate}
            </span>
          </div>
          <p className="text-gray-700 text-center mb-4 whitespace-pre-line">{member.bio}</p>
          <div className="flex gap-4 mt-2">
            {member.socials?.github && (
              <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.426 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.238-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.273.098-2.654 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.381.202 2.4.1 2.654.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
              </a>
            )}
            {member.socials?.linkedin && (
              <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z" /></svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  if (typeof window === 'undefined') return null;
  return ReactDOM.createPortal(modalContent, document.body);
};

export default ImageModal;
