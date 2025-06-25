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
  if (typeof window === 'undefined') return null;
  return ReactDOM.createPortal(
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
        className="modal-card animate-zoomIn flex flex-col w-[90vw] max-w-[900px] sm:w-[98vw] sm:max-w-[98vw]"
        onClick={handleContentClick}
        style={{ width: '80vw', maxWidth: 800, minWidth: 200 }}
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
          <div className="relative w-[78vw] max-w-[700px] aspect-[4/5] mb-3 flex items-center justify-center">
            <Image
              src={member.fullImage}
              alt={member.name}
              width={1200}
              height={1500}
              className="rounded-2xl mx-auto shadow-xl w-full h-full"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
        {/* Profile Details */}
        <div className="flex flex-col items-center px-8 py-6 text-gray-900">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-1 tracking-tight text-gray-900 drop-shadow">{member.name}</h2>
          <div className="profile-badges mb-4">
            <div className="profile-badge profile-badge--mbti">
              <FaUserAstronaut className="profile-badge__icon profile-badge__icon--mbti" />
              <span className="profile-badge__text">{member.mbti}</span>
            </div>
            <div className="profile-badge profile-badge--birth">
              <FaCalendarAlt className="profile-badge__icon profile-badge__icon--birth" />
              <span className="profile-badge__text">{member.birthDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ImageModal;
