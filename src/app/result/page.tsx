"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get('q') || '';
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) return;
    fetchHsCode(query);
  }, [query]);

  const fetchHsCode = async (q: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hscode`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product_name: q })
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getConfidenceClass = (confidence: string) => {
    if (confidence === '높음') return 'bg-green-50 text-green-700';
    if (confidence === '중간') return 'bg-amber-50 text-amber-700';
    return 'bg-red-50 text-red-700';
  };

  return (
    <div className="min-h-screen bg-[#F0F4FF]">
      <nav className="flex items-center justify-between px-8 py-5">
        <button onClick={() => router.push('/')} className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1B3A7A] rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">HS</span>
          </div>
          <span className="font-bold text-[#1B3A7A] text-lg">Easy HS Code AI</span>
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
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 animate-pulse"></div>
            <p className="text-slate-400">AI가 분석 중입니다...</p>
          </div>
        )}

        {!loading && result && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100">
              <p className="text-slate-400 text-sm mb-2">추천 HS Code</p>
              <p className="text-6xl font-black text-[#1B3A7A] mb-3">{result.hscode}</p>
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${getConfidenceClass(result.confidence)}`}>
                신뢰도: {result.confidence}
              </span>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
              <p className="font-bold text-slate-700 mb-4">추론 근거</p>
              <div className="space-y-3">
                {result.reasoning && result.reasoning.map((r: string, i: number) => (
                  <div key={i} className="flex gap-3">
                    <span className="w-5 h-5 bg-blue-50 text-blue-600 rounded-full text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
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
                className="flex-1 bg-[#1B3A7A] text-white py-3 rounded-xl font-bold hover:bg-[#2563EB] transition-colors text-center"
              >
                인보이스 분석하기 →
              </a>
            </div>
          </div>
        )}

        {!loading && !result && (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-blue-100">
            <p className="text-slate-400">결과를 불러올 수 없습니다.</p>
          </div>
        )}
      </main>

      <footer className="text-center py-8 text-xs text-slate-400 flex justify-center gap-4">
        <span>서비스 소개</span>
        <span>개인정보처리방침</span>
      </footer>
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