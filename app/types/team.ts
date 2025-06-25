/**
 * @property thumbnail 썸네일(리스트용)
 * @property fullImage 크게보기 이미지(모달 등)
 */
/**
 * 팀원 정보를 담는 객체
 * 
 * @property name 이름
 * @property birthDate 생년월일
 * @property mbti MBTI
 * @property thumbnail 썸네일(리스트용)
 * @property fullImage 크게보기 이미지(모달 등)
 */
export interface TeamMember {
    /**
     * 이름
     */
    name: string;
    /**
     * 생년월일
     * 
     * Format: YYYY-MM-DD
     */
    birthDate: string;
    /**
     * MBTI
     */
    mbti: string;
    /**
     * 썸네일(리스트용)
     */
    thumbnail: string;
    /**
     * 크게보기 이미지(모달 등)
     */
    fullImage: string;
}
