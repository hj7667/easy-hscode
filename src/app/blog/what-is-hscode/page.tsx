import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HS Code란? 뜻과 구조 완벽 정리 | Easy HS Code AI',
  description: 'HS Code(품목분류코드)의 뜻, 구조, 중요성을 설명합니다. 관세율표 검색, 세번 부호, HSK까지 수출입 실무자를 위한 완벽 가이드.',
  keywords: ['HS Code', 'HS Code 뜻', 'HS Code란', '품목분류', '세번 부호', '관세율표 검색', 'HSK', 'HS Code 조회', '수입 관세 계산'],
  openGraph: {
    title: 'HS Code란? 뜻과 구조 완벽 정리',
    description: 'HS Code(품목분류코드)의 뜻, 구조, 중요성을 설명합니다.',
    url: 'https://easy-hscode.com/blog/what-is-hscode',
  },
};

export default function WhatIsHscodePage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif" }}>
      <div className="max-w-2xl mx-auto px-6 py-16">

        <div className="mb-8">
          <Link href="/" className="text-sm font-medium" style={{ color: 'var(--brand)' }}>← Easy HS Code AI</Link>
        </div>

        <p className="text-sm font-medium mb-2" style={{ color: 'var(--brand)' }}>가이드</p>
        <h1 className="text-3xl font-black text-slate-800 mb-4 leading-tight">HS Code란? 뜻과 구조 완벽 정리</h1>
        <p className="text-slate-400 text-sm mb-12">품목분류부터 세번 부호까지 — 수출입 실무자를 위한 완벽 가이드</p>

        <div className="space-y-10 text-slate-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-black text-slate-800 mb-4">HS Code란 무엇인가?</h2>
            <p>
              HS Code(Harmonized System Code)는 전 세계 200여 개국이 공통으로 사용하는 <strong>국제 상품 분류 코드</strong>입니다.
              수출입 신고 시 가장 먼저 확인해야 할 품목분류 기준으로, 수입 관세 계산, 통관 처리, 무역 통계 등 모든 무역 업무의 근간이 됩니다.
            </p>
            <p className="mt-4">
              우리나라에서는 HS Code를 기반으로 한 <strong>HSK(Harmonized System Korea)</strong>를 사용합니다.
              국제 공통 6자리에 한국 고유 분류 4자리를 추가한 <strong>10자리 세번 부호</strong>로 구성됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-800 mb-4">HS Code 구조</h2>
            <div className="bg-slate-50 rounded-2xl p-6 font-mono text-center text-2xl font-black text-slate-700 mb-6">
              6101 . 20 . 1000
            </div>
            <div className="space-y-3">
              <div className="flex gap-4 items-start p-4 rounded-xl" style={{ backgroundColor: 'var(--brand-tint)' }}>
                <span className="text-sm font-black flex-shrink-0 w-24" style={{ color: 'var(--brand-dark)' }}>앞 4자리</span>
                <div>
                  <p className="text-sm font-bold text-slate-700">호(號, Heading)</p>
                  <p className="text-sm text-slate-500">상품의 대분류. 국제 공통 기준</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 rounded-xl" style={{ backgroundColor: 'var(--brand-tint)' }}>
                <span className="text-sm font-black flex-shrink-0 w-24" style={{ color: 'var(--brand)' }}>5~6자리</span>
                <div>
                  <p className="text-sm font-bold text-slate-700">소호(小號, Subheading)</p>
                  <p className="text-sm text-slate-500">세부 분류. 국제 공통 기준 — 6자리까지 전 세계 동일</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 rounded-xl bg-slate-50">
                <span className="text-sm font-black flex-shrink-0 w-24 text-slate-500">7~10자리</span>
                <div>
                  <p className="text-sm font-bold text-slate-700">HSK 고유 번호</p>
                  <p className="text-sm text-slate-500">한국 고유 세부 분류. 7자리부터는 국가마다 다르며, 한국은 HSK로 별도 관리합니다.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 rounded-xl p-4 text-sm text-slate-600">
              💡 <strong>핵심:</strong> 6자리까지는 국제 공통, 7자리부터는 국가마다 다릅니다. 수출입 신고 시 반드시 10자리 세번 부호 기준으로 신고해야 합니다.
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-800 mb-4">왜 중요한가?</h2>
            <div className="space-y-3">
              {[
                { title: '수입 관세 계산', desc: '품목분류에 따라 관세율이 결정됩니다. 세번 부호가 잘못되면 관세 추징 대상이 될 수 있습니다.' },
                { title: '통관 적법성', desc: '수출입 신고 시 정확한 HS Code 기재는 법적 의무입니다.' },
                { title: 'FTA 혜택', desc: '한-미, 한-EU FTA 등 협정 관세 혜택을 받으려면 정확한 품목분류가 필수입니다.' },
                { title: '무역 통계', desc: '국가 간 무역 통계 집계의 기준이 됩니다.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: 'var(--brand-tint)', color: 'var(--brand)' }}>{i + 1}</span>
                  <div>
                    <p className="font-bold text-slate-700 text-sm">{item.title}</p>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-800 mb-4">세번 부호 예시</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 px-3 text-slate-500 font-medium">상품</th>
                    <th className="text-left py-2 px-3 text-slate-500 font-medium">세번 부호 (HSK)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { product: '남성용 면 100% 티셔츠', code: '6109.10.1000' },
                    { product: '스테인리스 주방칼', code: '8211.92.0000' },
                    { product: '리튬이온 배터리', code: '8507.60.1000' },
                    { product: '나일론 방수 가방', code: '4202.92.9000' },
                    { product: '스마트폰 OLED 패널', code: '8524.11.0000' },
                    { product: '기초화장품 (스킨로션)', code: '3304.99.1000' },
                  ].map((item, i) => (
                    <tr key={i} className="border-b border-slate-100">
                      <td className="py-3 px-3 text-slate-600">{item.product}</td>
                      <td className="py-3 px-3 font-mono font-bold" style={{ color: 'var(--brand-dark)' }}>{item.code}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-blue-50 rounded-2xl p-6">
            <h2 className="text-lg font-black mb-2" style={{ color: 'var(--brand-dark)' }}>
              관세율표를 일일이 대조하지 않아도 됩니다
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              상품명만 입력하면 AI가 품목분류 통칙을 기반으로 자동 분류합니다. 무료로 하루 5건 조회 가능합니다.
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

        <div className="mt-16 pt-8 border-t border-slate-100">
          <Link href="/blog/how-to-find-hscode" className="text-sm font-medium hover:underline" style={{ color: 'var(--brand)' }}>
            다음: HS Code 찾는 방법 →
          </Link>
        </div>
      </div>
    </div>
  );
}
