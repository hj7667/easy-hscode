"use client";
import Image from 'next/image'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from "next-auth/react";
export default function Home() {
  const [query, setQuery] = useState('');
  const [usageCount, setUsageCount] = useState(0);
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    const count = parseInt(localStorage.getItem('hs_usage_count') || '0');
    setUsageCount(count);
  }, []);

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/detail?q=${encodeURIComponent(query)}`);
  };
  const { data: session } = useSession();

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
          {session ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-600">{session.user?.name}</span>
              <button onClick={() => signOut()} className="text-sm text-slate-500 hover:text-slate-700 font-medium">
                로그아웃
              </button>
            </div>
          ) : (
            <button onClick={() => setShowLogin(true)} className="text-sm text-slate-500 hover:text-slate-700 font-medium">
              로그인
            </button>
          )}
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
              placeholder={`예: 남성용 린넨 100% 셔츠 (오늘 ${5 - usageCount}건 무료 조회 가능)`}
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

          <div className="flex justify-center mt-6">
            <div className="bg-white/70 backdrop-blur border border-blue-100 rounded-full px-6 py-2 text-sm text-slate-500">
              현재까지 <span className="font-bold" style={{ color: 'var(--brand-dark)' }}>1,245건</span>의 분석이 완료되었습니다
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-8 justify-center">
          {['여성용 면 티셔츠', '스테인리스 주방칼', '리튬 배터리', '나일론 방수 가방', '플라스틱 장난감'].map(tag => (
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
      </footer>

      {showLogin && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center"
        onClick={() => setShowLogin(false)}>
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-10 w-full max-w-sm text-center"
          onClick={e => e.stopPropagation()}>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Image src="/images/easyHsLogo.png" alt="Easy HS Code AI 로고" width={40} height={40} className="rounded-lg" />
            <span className="font-black text-xl" style={{ color: 'var(--brand-dark)' }}>Easy HS Code AI</span>
          </div>

          <h2 className="text-xl font-black text-slate-800 mb-2">로그인</h2>
          <p className="text-slate-400 text-sm mb-8">로그인하고 무제한으로 조회하세요</p>

          <button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className="w-full flex items-center justify-center gap-3 border border-slate-200 rounded-xl py-3 px-4 hover:bg-slate-50 transition-colors font-medium text-slate-700"
          >
            <img src="https://www.google.com/favicon.ico" className="w-5 h-5" />
            Google로 계속하기
          </button>

          <p className="text-xs text-slate-400 mt-6">
            로그인 시{' '}
            <a href="/privacy" className="underline hover:text-slate-600">개인정보처리방침</a>
            에 동의하는 것으로 간주됩니다.
          </p>
        </div>
      </div>
      )}
    </div>
  );
}