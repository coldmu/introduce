'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaUserAstronaut } from 'react-icons/fa';
import { TeamMember } from '../types/team';
import ImageModal from './ImageModal';

export default function TeamMembers() {
  const members: TeamMember[] = [
    {
      name: '김하늘',
      birthDate: '1995-03-15',
      mbti: 'INFP',
      image: '/assets/kim_ghibli.png',
    },
    {
      name: '박바람',
      birthDate: '1994-07-22',
      mbti: 'ENFJ',
      image: '/assets/na_ghibli.png',
    },
    {
      name: '이구름',
      birthDate: '1996-11-08',
      mbti: 'ESTJ',
      image: '/assets/lee_ghibli.png',
    },
    {
      name: '정초록',
      birthDate: '1997-04-30',
      mbti: 'ISFJ',
      image: '/assets/lee_ghibli.png',
    },
  ];

  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <>
      <section id="team-members" className="team-members-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Special Guests</h2>
            <div className="section-divider"></div>
          </div>
          <div className="members-grid">
            {members.map((member) => (
              <div
                key={member.name}
                className="member-card group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02] bg-white cursor-pointer"
                onClick={() => handleCardClick(member)}
              >
                <div className="member-image relative w-full h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                </div>
                <div className="p-5 bg-white">
                  <div className="member-info text-center">
                    <h3 className="member-name text-2xl font-bold mb-4">{member.name}</h3>
                    <div className="flex justify-center items-center gap-4 mb-1">
                      <span className="member-mbti enhanced-mbti-badge flex items-center px-4 py-1 rounded-full shadow-md bg-gradient-to-r from-green-300 via-blue-200 to-blue-300 text-gray-800 font-semibold text-base" style={{ minWidth: 80 }}>
                        <FaUserAstronaut className="inline mr-2 text-blue-500" />
                        {member.mbti}
                      </span>
                      <FaCalendarAlt className="inline mr-2 text-blue-400" />
                      {member.birthDate}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedMember && (
        <ImageModal member={selectedMember} onClose={handleCloseModal} />
      )}
    </>
  );
}