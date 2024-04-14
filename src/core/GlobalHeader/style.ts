import { styled } from '~/libs/styled';

export const Header = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 2px solid #888888;
  padding: 0 10px;
  background-color: #ffffff;
`;

export const Logo = styled.div`
  margin-left: 15px;
  cursor: pointer;
  color: black; // 로고 글자색 설정
  display: flex;
  align-items: center;
  font-size: 24px; // 글꼴 크기 증가
  font-weight: bold; // 글꼴 가중치를 굵게
  letter-spacing: 1.2px; // 글자 간격 조정
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const MenuBar = styled.div`
  cursor: pointer;
  &:hover {
    // 여기에 드롭다운 메뉴 스타일 추가
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 55;
  ${MenuBar}:hover & {
    display: block;
    border: 1px solid #333333;
  }
`;

export const Notification = styled.div`
  cursor: pointer;
  margin: 0 10px;
  // 총 모양 디자인은 아이콘 라이브러리 사용 또는 배경 이미지로 구현
`;

export const LoginButton = styled.div`
  cursor: pointer;
  // 사람 모양 디자인은 아이콘 라이브러리 사용 또는 배경 이미지로 구현
`;
