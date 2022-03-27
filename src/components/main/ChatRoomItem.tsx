import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import arrowright from '../../assets/icons/arrowright.svg';

const ChatRoomItem = () => {
  return (
    <div>
      <div>
        <Image src='/buger.png' width={70} height={70} />
        <div>
          <p>버거킹 백석 이마트점</p>
          <p>인원 1명 / 2명</p>
          <div>34분 전</div>
          <div>
            <Link href='login'>
              <a>
                <p>함께 주문하기</p>
                <img src={arrowright} alt='더보기 화살표' />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomItem;
