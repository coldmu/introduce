'use client';
import React, { useState } from 'react';
import ScheduleDetailModal from './ScheduleDetailModal';

const scheduleData = [
  {
    time: '4:00 PM',
    title: '명상 프로그램 - 마음 거울 사용법',
    summary: '간단한 스트레스 체크 및 복식호흡을 통한 마음 정돈하기',
    details: [
      { type: 'image' as const, content: '/invitation/images/schedule/event1.png'},
      { type: 'text' as const, content: '★ 간단한 스트레스 체크' },
      { type: 'text' as const, content: '★ 내 마음속 생각과 감정 알아차리기' },
      { type: 'text' as const, content: '★ 복식호흡을 통한 마음 정돈하기' },
      { type: 'text' as const, content: '# 내 마음에 위로 전하기 # 프로그램 시간: 60분' },
    ],
  },
  {
    time: '5:00 PM',
    title: '신나는 퇴근 준비 😊',
    summary: '하루 업무를 정리하고 책상 정돈, 퇴근 전 마지막 체크!',
    details: [
      { type: 'image' as const, content: '/invitation/images/schedule/getoffwork.png', width: 600, height: 400 },
      { type: 'text' as const, content: '회식을 위해 가볍게 정리하며 마무리해요 😊' },
    ],
  },
  {
    time: '5:30 PM',
    title: '강남역으로 출발🚅🚈',
    summary: '다같이 강남역으로 출발해봅시다!!',
    details: [
      { type: 'image' as const, content: '/invitation/images/schedule/gangnam.png', width: 400, height: 500 },
      { type: 'text' as const, content: '모든 일정 마무리 후, 강남역으로 이동 시작!' },
      { type: 'text' as const, content: '대중교통 또는 개인차량 이용해 파이브가이즈로 이동해요 🚇🚗' },
    ],
  },
  {
    time: '6:00 PM',
    title: '간단한 저녁 식사 - 파이브가이즈🍔🍺',
    summary: '차 한 잔과 함께하는 여유로운 마무리',
    details: [
      { type: 'image' as const, content: '/invitation/images/schedule/fiveguys.png', width: 600, height: 400 },
      { type: 'text' as const, content: '서울 서초구 강남대로 435 주류성빌딩 1층, 2층' },
      { type: 'text' as const, content: 'https://naver.me/GHvq56bs' },
      { type: 'image' as const, content: '/invitation/images/schedule/fiveguys2.jpeg'},
      { type: 'text' as const, content: '강남역 도착 후, 파이브가이즈에서 파이즈가이즈 버거, 감자튀김, 땅콩, 맥주/밀크쉐이크로 든든하게! 자유로운 휴식 타임 🍔🍟' },
      { type: 'text' as const, content: '★☆★ 메뉴는 미리미리 생각해주세요! 토핑을 뭐 넣어야할지잘 모르시겠으면 "올더웨이!" 를 외쳐주시면 됩니다! ★☆★' },
    ],
  },
  {
    time: '7:20 PM',
    title: '뮤지컬펍넘버스테이지',
    summary: '7:30 ~ 9:00 까지 담소나누면서 재밌게 즐겨요',
    details: [
      { type: 'text' as const, content: '라이브 공연과 함께 즐기는 특별한 밤!' },
      { type: 'text' as const, content: '뮤지컬과 함께 음료 한 잔, 하루의 피날레를 멋지게 🎭🍷' },
      { type: 'image' as const, content: '/invitation/images/schedule/pub1.png', width: 400, height: 500 },
      { type: 'text' as const, content: '메뉴는 아래에서 확인해주세요!!' },
      { type: 'image' as const, content: '/invitation/images/schedule/pub2.jpeg', width: 400, height: 600 },
      { type: 'image' as const, content: '/invitation/images/schedule/pub3.jpeg', width: 600, height: 600 },
      { type: 'image' as const, content: '/invitation/images/schedule/pub4.jpeg', width: 400, height: 600 },
      { type: 'image' as const, content: '/invitation/images/schedule/pub5.jpeg', width: 400, height: 600 },
      { type: 'image' as const, content: '/invitation/images/schedule/pub6.jpeg', width: 600, height: 500 },
    ],
  },
  {
    time: '???',
    title: 'Special Event',
    summary: '깜짝 이벤트가 예정되어 있습니다',
    details: [
      { type: 'image' as const, content: '/invitation/images/schedule/present.jpg', width: 600, height: 600 },
      { type: 'text' as const, content: '깜짝 선물이 준비되어 있으니 기대해주세요😍' },
    ],
  },
];

export default function EventSection() {
  const [selected, setSelected] = useState<null | typeof scheduleData[0]>(null);

  return (
    <section id="event-info" className="event-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Chillax Day</h2>
          <div className="section-divider"></div>
          <p className="event-subtitle">Details</p>
        </div>
        <div className="event-content">
          <div className="calendar-container">
            <div className="calendar-header">
              <h3>2025년 6월</h3>
            </div>
            <div className="calendar-grid">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i + 1}
                  className={`calendar-day${i + 1 === 26 ? ' special-day' : ''}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
          <div className="event-schedule">
            <h3>타임테이블</h3>
            <div className="schedule-items">
              {scheduleData.map((item) => (
                <div
                  className="schedule-item cursor-pointer hover:bg-blue-50 transition"
                  key={item.time}
                  onClick={() => setSelected(item)}
                >
                  <div className="schedule-time">{item.time}</div>
                  <div className="schedule-content">
                    <h4>{item.title}</h4>
                    <p className="truncate text-gray-600">{item.summary}</p>
                  </div>
                </div>
              ))}
            </div> 
          </div>
        </div>
        {selected && (
          <ScheduleDetailModal
            time={selected.time}
            title={selected.title}
            details={selected.details}
            onClose={() => setSelected(null)}
          />
        )}
      </div>
    </section>
  );
}