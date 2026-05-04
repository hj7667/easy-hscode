"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useSession, signIn } from 'next-auth/react';
import Image from 'next/image'

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get('q') || '';
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!query) return;
    if (status === 'loading') return; // 세션 로딩 중이면 대기
    fetchHsCode(query);
  }, [query, status]);

  const fetchHsCode = async (q: string) => {
  if (!session) {
    const count = parseInt(localStorage.getItem('hs_usage_count') || '0');
    if (count >= 5) {
      setShowLoginModal(true);
      return;
    }
  } else {
    // 로그인 유저는 DB에서 카운터 확인
    const res = await fetch('/api/usage');
    const data = await res.json();
    if (data.count >= 20) { // 로그인 유저는 하루 20건
      alert('오늘 조회 한도를 초과했습니다.');
      return;
    }
  }

  setLoading(true);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hscode`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product_name: q })
    });
    const data = await res.json();
    setResult(data);

    if (!session) {
      const count = parseInt(localStorage.getItem('hs_usage_count') || '0');
      localStorage.setItem('hs_usage_count', (count + 1).toString());
    } else {
      // 로그인 유저는 DB에 카운터 + 키워드 저장
      await fetch('/api/usage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keyword: q })
      });
    }
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};

  const getConfidenceClass = (confidence: number) => {
    if (confidence >= 80) return 'bg-green-50 text-green-700';
    if (confidence >= 50) return 'bg-amber-50 text-amber-700';
    return 'bg-red-50 text-red-700';
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--brand-tint)' }}>
      <nav className="flex items-center justify-between px-8 py-5">
        <button onClick={() => router.push('/')} className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
            <Image src="/images/easyHsLogo.png" alt="Easy HS Code AI 로고" width={40} height={40} className="rounded-lg" />
          </div>
          <span className="font-bold text-lg" style={{ color: 'var(--brand-dark)' }}>Easy HS Code AI</span>
        </button>
        <a href="https://trade-edge-nine.vercel.app"
          target="_blank"
          className="text-sm bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 font-medium"
        >
          Trade-Edge 바로가기
        </a>
      </nav>

      <main className="max-w-2xl mx-auto px-4 pt-12 pb-16">
        <p className="text-slate-400 text-sm mb-2">검색어</p>
        <h2 className="text-xl font-bold text-slate-700 mb-8">"{query}"</h2>

        {loading && (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-blue-100">
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-blue-100"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent animate-spin" style={{ borderTopColor: 'var(--brand-dark)' }}></div>
                <div className="absolute inset-2 rounded-full bg-blue-50 flex items-center justify-center">
                  <span className="text-xs font-bold" style={{ color: 'var(--brand-dark)' }}>HS</span>
                </div>
              </div>
              <div>
                <p className="text-slate-700 font-bold">AI가 분석 중입니다</p>
                <p className="text-slate-400 text-sm mt-1">잠시만 기다려주세요...</p>
              </div>
            </div>
          </div>
        )}

        {!loading && result && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100">
              <p className="text-slate-400 text-sm mb-2">추천 HS Code</p>
              <p className="text-6xl font-black mb-3" style={{ color: 'var(--brand-dark)' }}>{result.hscode}</p>
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${getConfidenceClass(result.confidence)}`}>
                  신뢰도: {result.confidence}%
                </span>
              </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
              <p className="font-bold text-slate-700 mb-4">추론 근거</p>
              <div className="space-y-3">
                {result.reasoning && result.reasoning.map((r: string, i: number) => (
                  <div key={i} className="flex gap-3">
                    <span className="w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5" style={{ backgroundColor: 'var(--brand-tint)', color: 'var(--brand)' }}>
                      {i + 1}
                    </span>
                    <p className="text-slate-600 text-sm">{r}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-6 text-center text-slate-400 text-xs">
              광고 영역 (AdSense)
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => router.push('/')}
                className="flex-1 bg-white border border-slate-200 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors"
              >
                다시 검색
              </button>
              <a href="https://trade-edge-nine.vercel.app"
                target="_blank"
                className="flex-1 text-white py-3 rounded-xl font-bold transition-colors text-center"
                style={{ backgroundColor: 'var(--brand)' }}
              >
                인보이스 분석하기 →
              </a>
            </div>

            {/* 외부 링크 버튼 */}
            <div className="flex gap-3">
              
                <a href={`https://unipass.customs.go.kr/clip/index.do`}
                target="_blank"
                className="flex-1 bg-white border border-slate-200 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors text-center text-sm"
              >
                🏛️ 관세청 UNIPASS
              </a>
              
                <a href={`https://www.trademap.org/Product_SelProductCountry.aspx?nvpm=1|||${result.hscode}`}
                target="_blank"
                className="flex-1 bg-white border border-slate-200 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors text-center text-sm"
              >
                📊 Trademap
              </a>
            </div>
          </div>
        )}

        {!loading && !result && !showLoginModal && (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-blue-100">
            <p className="text-slate-400">결과를 불러올 수 없습니다.</p>
          </div>
        )}
      </main>

      <footer className="text-center py-8 text-xs text-slate-400 flex justify-center gap-4">
        <a href="/about" className="hover:text-slate-600">서비스 소개</a>
        <a href="/privacy" className="hover:text-slate-600">개인정보처리방침</a>
      </footer>
      {showLoginModal && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setShowLoginModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-lg border border-blue-100 p-10 w-full max-w-sm text-center"
            onClick={e => e.stopPropagation()}
          >
            <p className="text-2xl font-black text-slate-800 mb-2">무료 조회 5건 완료!</p>
            <p className="text-slate-400 text-sm mb-8">로그인하고 계속 무료로 이용하세요</p>
            <button
              onClick={() => signIn('google', { callbackUrl: '/detail?q=' + query })}
              className="w-full flex items-center justify-center gap-3 border border-slate-200 rounded-xl py-3 px-4 hover:bg-slate-50 transition-colors font-medium text-slate-700"
            >
              <img src="https://www.google.com/favicon.ico" className="w-5 h-5" />
              Google로 계속하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense>
      <ResultContent />
    </Suspense>
  );
}