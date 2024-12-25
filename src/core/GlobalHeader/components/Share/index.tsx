import React, { useState } from 'react';
import { Share2, Instagram, Facebook, Link } from 'lucide-react';
import * as Styled from './styled';

const Share: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShare = (platform: string) => {
    // 여기에 각 플랫폼별 공유 로직을 구현하세요
    console.log(`Sharing to ${platform}`);
    setIsOpen(false);
  };

  return (
    <div>
      <Styled.ShareButton onClick={() => setIsOpen(!isOpen)}>
        <Share2 size={20} />
      </Styled.ShareButton>
      {isOpen && (
        <Styled.ShareDropdown>
          <Styled.ShareLink onClick={() => handleShare('Instagram')}>
            <Instagram size={16} /> Instagram
          </Styled.ShareLink>
          <Styled.ShareLink onClick={() => handleShare('Facebook')}>
            <Facebook size={16} /> Facebook
          </Styled.ShareLink>
          <Styled.ShareLink onClick={() => handleShare('URL')}>
            <Link size={16} /> URL 복사
          </Styled.ShareLink>
        </Styled.ShareDropdown>
      )}
    </div>
  );
};

export default Share;
