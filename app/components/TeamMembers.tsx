'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaUserAstronaut } from 'react-icons/fa';
import { TeamMember } from '../types/team';
import ImageModal from './ImageModal';

export default function TeamMembers() {
  const members: TeamMember[] = [
    {
      name: '이하준',
      birthDate: '01/05',
      mbti: 'INFJ',
      thumbnail: '/invitation/assets/1t.png',
      fullImage: '/invitation/assets/1.png',
    },
    {
      name: '김서윤',
      birthDate: '11/02',
      mbti: 'INTP',
      thumbnail: '/invitation/assets/2t.png',
      fullImage: '/invitation/assets/2.png',
    },
    
    {
      name: '박민석',
      birthDate: '01/22',
      mbti: 'ESTJ',
      thumbnail: '/invitation/assets/6t.png',
      fullImage: '/invitation/assets/6.png',
    },
    {
      name: '최다은',
      birthDate: '10/26',
      mbti: 'ENTJ',
      thumbnail: '/invitation/assets/7t.png',
      fullImage: '/invitation/assets/7.png',
    },
    {
      name: '정도윤',
      birthDate: '03/19',
      mbti: 'ENTJ',
      thumbnail: '/invitation/assets/8t.png',
      fullImage: '/invitation/assets/8.png',
    },
    {
      name: '박예진',
      birthDate: '01/19',
      mbti: 'ENFJ',
      thumbnail: '/invitation/assets/4t.png',
      fullImage: '/invitation/assets/4.png',
    },
    {
      name: '백건우',
      birthDate: '04/30',
      mbti: 'ESTJ',
      thumbnail: '/invitation/assets/17t.png',
      fullImage: '/invitation/assets/17.png',
    },
    {
      name: '윤지안',
      birthDate: '02/02',
      mbti: 'ESFJ',
      thumbnail: '/invitation/assets/9t.png',
      fullImage: '/invitation/assets/9.png',
    },
    {
      name: '최태경',
      birthDate: '09/20',
      mbti: 'ENTJ',
      thumbnail: '/invitation/assets/10t.png',
      fullImage: '/invitation/assets/10.png',
    },
    {
      name: '이하린',
      birthDate: '11/19',
      mbti: 'ISTJ',
      thumbnail: '/invitation/assets/11t.png',
      fullImage: '/invitation/assets/11.png',
    },
    {
      name: '한현우',
      birthDate: '12/09',
      mbti: 'ESTJ',
      thumbnail: '/invitation/assets/12t.png',
      fullImage: '/invitation/assets/12.png',
    },
    {
      name: '장이안',
      birthDate: '07/31',
      mbti: 'ENTP',
      thumbnail: '/invitation/assets/16t.png',
      fullImage: '/invitation/assets/16.png',
    },
    {
      name: '정수아',
      birthDate: '01/08',
      mbti: 'ESFJ',
      thumbnail: '/invitation/assets/5t.png',
      fullImage: '/invitation/assets/5.png',
    },
    {
      name: '서지우',
      birthDate: '05/16',
      mbti: 'ESTJ',
      thumbnail: '/invitation/assets/13t.png',
      fullImage: '/invitation/assets/13.png',
    },
    {
      name: '오유찬',
      birthDate: '11/21',
      mbti: 'ISTP',
      thumbnail: '/invitation/assets/14t.png',
      fullImage: '/invitation/assets/14.png',
    },
    {
      name: '류성현',
      birthDate: '02/07',
      mbti: 'ISTJ',
      thumbnail: '/invitation/assets/15t.png',
      fullImage: '/invitation/assets/15.png',
    },
    {
      name: '나구름',
      birthDate: '06/02',
      mbti: 'ENTP',
      thumbnail: '/invitation/assets/18t.png',
      fullImage: '/invitation/assets/18.png',
    },
    {
      name: '정초록',
      birthDate: '12/28',
      mbti: 'ISTJ',
      thumbnail: '/invitation/assets/19t.png',
      fullImage: '/invitation/assets/19.png',
    },
    {
      name: '김지호',
      birthDate: '12/20',
      mbti: 'INTJ',
      thumbnail: '/invitation/assets/3t.png',
      fullImage: '/invitation/assets/3.png',
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
                    src={member.thumbnail}
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