import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI로 HS Code 자동 분류하기 | Easy HS Code AI',
  description: 'AI 기술로 CI 품명 입력만으로 3초 안에 세번 부호를 자동 분류합니다. 품목분류 통칙 기반 정확한 HS Code 조회 서비스.',
  keywords: ['AI HS Code', 'HS Code 자동 분류', 'HS Code AI', 'CI 품명 분류', '품목분류', '세번 부호', 'HS Code 3초'],
  openGraph: {
    title: 'AI로 HS Code 자동 분류하기',
    description: 'CI 품명 입력만으로 3초 안에 세번 부호를 자동 분류합니다.',
    url: 'https://easy-hscode.com/blog/hscode-ai',
  },
};

export default function HscodeAiPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif" }}>
      <div className="max-w-2xl mx-auto px-6 py-16">

        <div className="mb-8">
          <Link href="/" className="text-sm font-medium" style={{ color: 'var(--brand)' }}>← Easy HS Code AI</Link>
        </div>

        <p className="text-sm font-medium mb-2" style={{ color: 'var(--brand)' }}>서비스 소개</p>
        <h1 className="text-3xl font-black text-slate-800 mb-4 leading-tight">AI로 HS Code 자동 분류하기</h1>
        <p className="text-slate-400 text-sm mb-12">CI 품명 입력만으로 3초 안에 세번 부호 추론 완료</p>

        <div className="space-y-10 text-slate-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-black text-slate-800 mb-4">기존 방식의 문제점</h2>
            <div className="space-y-3">
              {[
                '관세율표는 수천 페이지에 달하는 복잡한 문서입니다',
                '비슷한 상품도 재질, 용도에 따라 세번 부호가 달라집니다',
                '품목분류 통칙을 이해하지 못하면 정확한 분류가 어렵습니다',
                '관세사에게 문의하면 비용과 시간이 발생합니다',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-red-400 flex-shrink-0 mt-0.5">✗</span>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-800 mb-4">Easy HS Code AI의 해결책</h2>
            <div className="space-y-3">
              {[
                'CI(Commercial Invoice) 품명을 그대로 입력하면 됩니다',
                '한국어, 영어 모두 지원합니다',
                'HS 협약 관세율표 해석에 관한 통칙(GRI)을 기반으로 AI가 자동 분류합니다',
                '분류 근거와 신뢰도(%)를 함께 제공합니다',
                '3초 안에 결과를 확인할 수 있습니다',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 mt-0.5" style={{ color: 'var(--brand)' }}>✓</span>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-800 mb-4">AI 분류 원리</h2>
            <p className="mb-4 text-sm">
              AI는 <strong>품목분류 통칙 제1호(호의 용어 및 관련 부/류의 주)</strong>를 우선 적용하여
              상품의 재질, 용도, 기능, 가공도를 종합적으로 분석합니다.
              복합 물품의 경우 통칙 제3호(본질적 특성 기준)를 적용합니다.
            </p>
            <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-600">
              분류 근거 예시: "키워드: 면 100%, 반팔, 여성용 / 분류근거: 통칙 제1호 적용, 제61류 편물제 의류 해당 / 유사사례: 남성용 면 티셔츠(6109.10)와 동일 류 분류"
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-800 mb-4">사용 방법</h2>
            <div className="space-y-4">
              {[
                { title: 'CI 품명 입력', desc: 'Commercial Invoice 상의 품명을 그대로 입력하세요. 한국어, 영어 모두 가능합니다.' },
                { title: 'AI 분석', desc: '품목분류 통칙 제1호를 우선 적용하여 재질, 용도, 기능을 종합적으로 분석합니다.' },
                { title: '결과 확인', desc: '10자리 세번 부호와 함께 분류 근거, 신뢰도(%)를 확인합니다.' },
                { title: '최종 검증', desc: '본 결과는 법적 효력이 없으며, 최종 신고 전 반드시 관세청 UNIPASS 또는 관세사를 통해 검토하세요.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="w-7 h-7 rounded-full text-sm flex items-center justify-center font-black flex-shrink-0 mt-0.5 text-white"
                    style={{ backgroundColor: 'var(--brand)' }}>{i + 1}</span>
                  <div>
                    <p className="font-bold text-slate-700 text-sm">{item.title}</p>
                    <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-800 mb-4">입력 예시</h2>
            <div className="space-y-3">
              {[
                { input: '여성용 면 100% 반팔 티셔츠', code: '6109.10.1000' },
                { input: "Women's 100% cotton short sleeve t-shirt", code: '6109.10.1000' },
                { input: '스마트폰용 OLED 디스플레이 패널', code: '8524.11.0000' },
                { input: '기초화장품 스킨로션 200ml', code: '3304.99.1000' },
                { input: 'Lithium-ion battery pack for EV', code: '8507.60.1000' },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4">
                  <p className="text-xs text-slate-400 mb-1">입력</p>
                  <p className="text-sm font-medium text-slate-700 mb-2">{item.input}</p>
                  <p className="text-xs text-slate-400 mb-1">추론 결과</p>
                  <p className="font-mono font-black text-lg" style={{ color: 'var(--brand-dark)' }}>{item.code}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-blue-50 rounded-2xl p-6">
            <h2 className="text-lg font-black mb-2" style={{ color: 'var(--brand-dark)' }}>지금 바로 무료로 시작하기</h2>
            <p className="text-sm text-slate-600 mb-4">로그인 없이 하루 5건 무료 조회 가능합니다.</p>
            <Link href="/" className="inline-block text-white text-sm font-bold px-6 py-3 rounded-xl" style={{ backgroundColor: 'var(--brand)' }}>
              HS Code 조회하기 →
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
            ← HS Code 찾는 방법
          </Link>
        </div>
      </div>
    </div>
  );
}
