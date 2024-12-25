import * as Styled from './styled';

const Navigation: React.FC = () => {
  return (
    <Styled.Navigation>
      <Styled.NavLink href="/posts">게시글</Styled.NavLink>
      <Styled.NavLink href="/travel">여행</Styled.NavLink>
      <Styled.NavLink href="/recipes">요리레시피</Styled.NavLink>
    </Styled.Navigation>
  );
};

export default Navigation;
