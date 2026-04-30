"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/result?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen bg-[#F0F4FF]" style={{ fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif" }}>
      
      {/* 네비게이션 */}
      <nav className="flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1B3A7A] rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">HS</span>
          </div>
          <span className="font-bold text-[#1B3A7A] text-lg">Easy HS Code AI</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm text-slate-500 hover:text-slate-700 font-medium">로그인</button>
          <a 
            href="https://trade-edge-nine.vercel.app" 
            target="_blank"
            className="text-sm bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 font-medium"
          >
            Trade-Edge 바로가기
          </a>
        </div>
      </nav>

      {/* 메인 */}
      <main className="flex flex-col items-center justify-center px-4 pt-24 pb-16">
        
        {/* 헤드라인 */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-[#1B3A7A] leading-tight mb-4">
            상품명만으로 찾는<br />
            <span className="text-[#2563EB]">3초 HS 코드</span>
          </h1>
          <p className="text-slate-500 text-lg">
            복잡한 관세율표 대신, 상품 묘사로 정확한 코드를 찾아보세요.
          </p>
        </div>

        {/* 검색창 */}
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-lg shadow-blue-100 border border-blue-100 flex items-center px-6 py-4 gap-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="예: 남성용 린넨 100% 셔츠 (5건 무료 조회 중, 초과시 로그인 필요)"
              className="flex-1 outline-none text-slate-700 text-base placeholder:text-slate-400"
            />
            <button
              onClick={handleSearch}
              className="bg-[#1B3A7A] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-[#2563EB] transition-colors whitespace-nowrap"
            >
              분류하기
            </button>
          </div>

          {/* 카운터 */}
          <div className="flex justify-center mt-6">
            <div className="bg-white/70 backdrop-blur border border-blue-100 rounded-full px-6 py-2 text-sm text-slate-500">
              현재까지 <span className="font-bold text-[#1B3A7A]">1,245건</span>의 분석이 완료되었습니다
            </div>
          </div>
        </div>

        {/* 예시 태그 */}
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

      {/* 푸터 */}
      <footer className="text-center py-8 text-xs text-slate-400 gap-4 flex justify-center">
        <span>서비스 소개</span>
        <span>개인정보처리방침</span>
      </footer>
    </div>
  );
}