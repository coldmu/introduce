'use client';
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import { IoCloseCircle } from 'react-icons/io5';

interface DetailTextBlock {
  type: 'text';
  content: string;
}
interface DetailImageBlock {
  type: 'image';
  content: string;
  width?: number;
  height?: number;
}
type DetailBlock = DetailTextBlock | DetailImageBlock;

interface ScheduleDetailModalProps {
  time: string;
  title: string;
  details: DetailBlock[];
  onClose: () => void;
}

const ScheduleDetailModal: React.FC<ScheduleDetailModalProps> = ({ time, title, details, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[1001] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      ref={modalRef}
      style={{ inset: 0, background: 'rgba(0,0,0,0.7)', backgroundColor: 'rgba(0,0,0,0.7)' }}
    >
      <div
        className="modal-card animate-zoomIn flex flex-col relative bg-white rounded-xl shadow-xl max-h-[80vh] overflow-y-auto custom-scrollbar" style={{ width: '60vw', maxWidth: 800, minWidth: 330 }}        onClick={handleContentClick}
      >
        {/* Close Button */}
        <button
          className="absolute -top-5 right-5 z-20 w-10 h-10 flex items-center justify-center bg-white/50 shadow-lg backdrop-blur-sm hover:bg-white/80 transition rounded-full"
          aria-label="Close modal"
          onClick={onClose}
        >
          <span className="relative w-8 h-8 flex items-center justify-center">
            <span className="absolute inset-0 bg-white rounded-full" style={{ zIndex: 1 }} />
            <IoCloseCircle size={32} className="relative text-gray-700 hover:text-blue-500 transition" style={{ zIndex: 2 }} />
          </span>
        </button>
        {/* Schedule Details (최상단) */}
        <div className="flex flex-col items-center px-24 pt-10 pb-6 text-gray-900 border-b border-blue-100/60 bg-gradient-to-b from-blue-50/60 to-transparent w-full z-10">
          <div className="mb-1 text-blue-600 font-semibold text-lg">{time}</div>
          <h2 className="text-2xl font-bold mb-2 text-center">{title}</h2>
        </div>
        {/* 상세 내용: 글/그림/글/그림 순서로 출력 */}
        <div className="modal-section flex flex-col items-center justify-center pt-12 pb-6 px-24 bg-gradient-to-b from-blue-100/60 to-transparent w-full">
          <div className="w-full flex flex-col">
            {details.map((block, idx) =>
              block.type === 'text' ? (
                <div key={idx} className="prose prose-blue max-w-none text-gray-700 text-left w-full mb-8">
                  {(() => {
                    const urlRegex = /(https?:\/\/[\w\-._~:/?#[\]@!$&'()*+,;=%]+)|(www\.[\w\-._~:/?#[\]@!$&'()*+,;=%]+)/gi;
                    const parts = block.content.split(urlRegex);
                    return parts.map((part, i) => {
                      if (part && part.match(urlRegex)) {
                        return (
                          <a
                            key={i}
                            href={part.startsWith('http') ? part : `https://${part}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="modern-link"
                          >
                            {part}
                          </a>
                        );
                      }
                      return part;
                    });
                  })()}
                </div>
              ) : (
                <div key={idx} className="w-full flex justify-center mt-8 mb-8">
                  <div
                    className="relative flex-shrink-0 flex items-center justify-center w-[80vw] max-w-[500px] min-w-[200px] sm:w-[95vw] sm:max-w-[95vw]"
                    style={{ width: '55vw', maxWidth: 800, minWidth: 200 }}
                  >
                    <Image
                      src={block.content}
                      alt={title + ' 이미지 ' + (idx + 1)}
                      width={block.width || 800}
                      height={block.height || 600}
                      style={{ objectFit: 'cover', width: '100%', height: 'auto', borderRadius: 12, zIndex: 1, position: 'relative' }}
                      className="border border-white/70 shadow-lg rounded-xl w-full h-auto max-w-full max-h-[60vh]"
                      priority={idx === 0}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
  if (typeof window === 'undefined') return null;
  return ReactDOM.createPortal(modalContent, document.body);
};

export default ScheduleDetailModal;
