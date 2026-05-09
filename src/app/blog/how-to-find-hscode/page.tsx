import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HS Code 찾는 방법 총정리 | Easy HS Code AI',
  description: 'HS Code 조회 방법을 단계별로 설명합니다. 관세율표 검색, UNIPASS, AI 자동 분류까지 수출입 실무자를 위한 완벽 가이드.',
  keywords: ['HS Code 찾는 방법', 'HS Code 조회', 'UNIPASS', '관세청 HS Code', '품목분류', '관세율표 검색', '수입 관세 계산'],
  openGraph: {
    title: 'HS Code 찾는 방법 총정리',
    description: 'HS Code 조회 방법을 단계별로 설명합니다.',
    url: 'https://easy-hscode.com/blog/how-to-find-hscode',
  },
};

export default function HowToFindHscodePage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif" }}>
      <div className="max-w-2xl mx-auto px-6 py-16">

        <div className="mb-8">
          <Link href="/" className="text-sm font-medium" style={{ color: 'var(--brand)' }}>← Easy HS Code AI</Link>
        </div>

        <p className="text-sm font-medium mb-2" style={{ color: 'var(--brand)' }}>가이드</p>
        <h1 className="text-3xl font-black text-slate-800 mb-4 leading-tight">HS Code 찾는 방법 총정리</h1>
        <p className="text-slate-400 text-sm mb-12">관세율표 검색부터 AI 자동 분류까지 — 방법별 비교</p>

        <div className="space-y-10 text-slate-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-black text-slate-800 mb-4">방법 1. 관세청 UNIPASS (공식)</h2>
            <p className="mb-4">
              가장 공식적인 방법입니다. 관세율표 검색 기능을 통해 품목분류를 직접 조회할 수 있습니다.
              수출입 신고 전 최종 확인 수단으로 적합합니다.
            </p>
            <div className="space-y-3">
              {[
                'UNIPASS(unipass.customs.go.kr) 접속',
                '품목분류 검색 메뉴 선택',
                '상품명 또는 키워드 입력',
                '검색 결과에서 가장 유사한 품목 선택',
                '10자리 세번 부호 확인',
              ].map((step, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: 'var(--brand-tint)', color: 'var(--brand)' }}>{i + 1}</span>
                  <p className="text-sm">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-slate-50 rounded-xl p-4 text-sm text-slate-500">
              ⚠️ UNIPASS는 전문 용어 기반이라 실무 초보자가 사용하기 어려울 수 있습니다.
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-800 mb-4">방법 2. 관세사 문의</h2>
            <p>
              정확도가 가장 높은 방법입니다. 고가 품목이나 품목분류가 복잡한 경우 추천합니다.
              다만 비용이 발생하고 시간이 걸립니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-800 mb-4">방법 3. AI 자동 분류 (빠름)</h2>
            <p className="mb-4">
              관세율표를 일일이 대조하지 않아도 됩니다. CI(Commercial Invoice) 상의 품명을 그대로 입력하면
              AI가 품목분류 통칙(HS 협약 관세율표 해석에 관한 통칙)을 기반으로 3초 안에 세번 부호를 추론합니다.
            </p>
            <div className="space-y-3">
              {[
                'Easy HS Code AI 접속',
                'CI 상의 품명 입력 (한국어/영어 모두 가능)',
                'AI가 품목분류 통칙 제1호(호의 용어 및 관련 부/류의 주)를 우선 적용하여 분석',
                '세번 부호 및 신뢰도, 분류 근거 확인',
                '관세청 UNIPASS에서 최종 확인 후 신고',
              ].map((step, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: 'var(--brand-tint)', color: 'var(--brand)' }}>{i + 1}</span>
                  <p className="text-sm">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-800 mb-4">방법별 비교</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 px-3 text-slate-500 font-medium">방법</th>
                    <th className="text-left py-2 px-3 text-slate-500 font-medium">속도</th>
                    <th className="text-left py-2 px-3 text-slate-500 font-medium">정확도</th>
                    <th className="text-left py-2 px-3 text-slate-500 font-medium">비용</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { method: 'UNIPASS', speed: '보통', accuracy: '높음', cost: '무료' },
                    { method: '관세사', speed: '느림', accuracy: '매우 높음', cost: '유료' },
                    { method: 'AI 자동 분류', speed: '3초', accuracy: '참고용', cost: '무료' },
                  ].map((item, i) => (
                    <tr key={i} className="border-b border-slate-100">
                      <td className="py-3 px-3 font-bold text-slate-700">{item.method}</td>
                      <td className="py-3 px-3">{item.speed}</td>
                      <td className="py-3 px-3">{item.accuracy}</td>
                      <td className="py-3 px-3">{item.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-blue-50 rounded-2xl p-6">
            <h2 className="text-lg font-black mb-2" style={{ color: 'var(--brand-dark)' }}>
              AI로 HS Code 3초만에 찾기
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              상품명만 입력하면 AI가 자동으로 분류합니다. 무료로 하루 5건 조회 가능합니다.
            </p>
            <Link href="/" className="inline-block text-white text-sm font-bold px-6 py-3 rounded-xl" style={{ backgroundColor: 'var(--brand)' }}>
              무료로 시작하기 →
            </Link>
          </section>

          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <p className="text-amber-800 text-xs leading-relaxed font-medium">
              ⚠️ 본 결과는 법적 효력이 없으며, 최종 신고 전 반드시 관세사 검토를 거쳐야 합니다. 관세청 UNIPASS 등 공식 채널을 통한 확인을 권장합니다.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between text-sm">
          <Link href="/blog/what-is-hscode" className="font-medium hover:underline" style={{ color: 'var(--brand)' }}>← HS Code란?</Link>
          <Link href="/blog/hscode-ai" className="font-medium hover:underline" style={{ color: 'var(--brand)' }}>다음: AI로 HS Code 분류하기 →</Link>
        </div>
      </div>
    </div>
  );
}
