export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif" }}>
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-black mb-2" style={{ color: 'var(--brand-dark)' }}>서비스 소개</h1>
        <p className="text-slate-400 text-sm mb-12">Easy HS Code AI에 대해 소개합니다</p>

        <div className="space-y-10 text-slate-600 text-sm leading-relaxed">

          <section>
            <h2 className="font-bold text-slate-800 text-base mb-3">Easy HS Code AI란?</h2>
            <p>
              수출입 업무에서 가장 복잡하고 시간이 걸리는 HS Code 분류 작업을 AI로 빠르게 해결하는 서비스입니다.
              상품명과 간단한 묘사만으로 10자리 HS Code를 3초 안에 추론해드립니다.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-slate-800 text-base mb-3">주요 기능</h2>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-5">
                <p className="font-bold text-slate-700 mb-1">🔍 AI 기반 HS Code 자동 분류</p>
                <p className="text-slate-500">상품 설명을 입력하면 AI가 관세율표를 기반으로 가장 적합한 HS Code를 추론합니다.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-5">
                <p className="font-bold text-slate-700 mb-1">📋 추론 근거 제공</p>
                <p className="text-slate-500">단순 코드 제공이 아닌, 왜 해당 코드로 분류했는지 근거를 함께 제공합니다.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-5">
                <p className="font-bold text-slate-700 mb-1">⚡ 빠른 조회</p>
                <p className="text-slate-500">복잡한 관세율표를 직접 찾아볼 필요 없이 3초 안에 결과를 확인할 수 있습니다.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-bold text-slate-800 text-base mb-3">이용 안내</h2>
            <ul className="space-y-2 list-disc list-inside text-slate-500">
              <li>비로그인 시 하루 5건 무료 조회 가능</li>
              <li>Google 로그인 시 추가 조회 가능</li>
              <li>AI 추론 결과이므로 반드시 관세청 UNIPASS에서 최종 확인 바랍니다</li>
            </ul>
          </section>

          <section className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h2 className="font-bold text-amber-800 text-base mb-2">⚠️ 법적 고지</h2>
            <p className="text-amber-700 text-xs leading-relaxed">
              본 서비스에서 제공하는 HS Code 분류 결과는 AI가 생성한 참고용 정보이며, 법적 효력이 없습니다.
              실제 수출입 신고 시에는 반드시 관세사 또는 관세청 공식 채널을 통해 확인하시기 바랍니다.
              AI 추론 결과로 인한 통관 오류, 관세 추징 등 어떠한 손해에 대해서도 운영자는 책임을 지지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-slate-800 text-base mb-3">문의</h2>
            <p>서비스 관련 문의는 아래 이메일로 연락해 주세요.</p>
            <p className="mt-1">
              <a href="mailto:chohj.biz@gmail.com" className="underline" style={{ color: 'var(--brand)' }}>chohj.biz@gmail.com</a>
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 text-center">
          <a href="/" className="text-sm font-medium" style={{ color: 'var(--brand)' }}>← 홈으로 돌아가기</a>
        </div>
      </div>
    </div>
  );
}