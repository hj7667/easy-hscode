"use client";
import Image from 'next/image'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  // const [showLogin, setShowLogin] = useState(false);
  // const [totalCount, setTotalCount] = useState(1245);
  
  // useEffect(() => {
  //   fetch('/api/stats')
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.count > 0) setTotalCount(data.count);
  //     });
  // }, []);

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/detail?q=${encodeURIComponent(query)}`);
  };
  
  // const { data: session } = useSession();

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--brand-tint)', fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif" }}>
      
      {/* 네비게이션 */}
      <nav className="flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src="/images/easyHsLogo.png"
              alt="Easy HS Code AI 로고"
              width={48}
              height={48}
              className="rounded-lg"
            />
          </div>
          <span className="font-bold text-lg" style={{ color: 'var(--brand-dark)' }}>Easy HS Code AI</span>
        </div>
        <div className="flex items-center gap-3">
          {/* 로그인 임시 비활성화 */}
          {/* {session ? ( ... ) : ( ... )} */}
          <a href="https://trade-edge-nine.vercel.app" target="_blank"
            className="text-sm bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 font-medium">
            Trade-Edge 바로가기
          </a>
        </div>
      </nav>

      {/* 메인 */}
      <main className="flex flex-col items-center justify-center px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black leading-tight mb-4" style={{ color: 'var(--brand-dark)' }}>
            상품명만으로 찾는<br />
            <span style={{ color: 'var(--brand)' }}>3초 HS 코드</span>
          </h1>
          <p className="text-slate-500 text-lg">
            복잡한 관세율표 대신, 상품 묘사로 정확한 코드를 찾아보세요.
          </p>
        </div>

        <div className="w-full max-w-2xl">
          <p className="text-xs text-slate-400 mb-2 text-center">
            💡 CI(Commercial Invoice) 상의 품명 기준으로 입력하세요
          </p>
          <div className="bg-white rounded-2xl shadow-lg shadow-blue-100 border border-blue-100 flex items-center px-6 py-4 gap-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="예: 남성용 린넨 100% 셔츠"
              className="flex-1 outline-none text-slate-700 text-base placeholder:text-slate-400"
            />
            <button
              onClick={handleSearch}
              className="text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-colors whitespace-nowrap"
              style={{ backgroundColor: 'var(--brand)' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--brand-mid)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--brand)'}
            >
              분류하기
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-8 justify-center">
          {['OLED 디스플레이 패널', '기초화장품 스킨로션', '전기차용 배터리팩', 'Stainless steel knife', 'Cotton t-shirt'].map(tag => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="bg-white border border-slate-200 text-slate-600 text-sm px-4 py-1.5 rounded-full hover:border-blue-300 hover:text-blue-600 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </main>

      <footer className="text-center py-8 text-xs text-slate-400 flex justify-center gap-4">
        <a href="/about" className="hover:text-slate-600">서비스 소개</a>
        <a href="/privacy" className="hover:text-slate-600">개인정보처리방침</a>
        <a href="/blog/what-is-hscode" className="hover:text-slate-600">HS Code란?</a>
        <a href="/blog/how-to-find-hscode" className="hover:text-slate-600">HS Code 찾는 방법</a>
        <a href="/blog/hscode-ai" className="hover:text-slate-600">AI HS Code 분류</a>
      </footer>
    </div>
  );
}