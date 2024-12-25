import * as Styled from './styled';

const Logo: React.FC = () => {
  return (
    <Styled.Logo href="/">
      <Styled.LogoImage src={'icon/Dmvelo.svg'} alt="Logo" width={50} height={50} />
    </Styled.Logo>
  );
};

export default Logo;
