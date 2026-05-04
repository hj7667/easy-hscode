export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif" }}>
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-black mb-2" style={{ color: 'var(--brand-dark)' }}>개인정보처리방침</h1>
        <p className="text-slate-400 text-sm mb-12">최종 수정일: 2026년 5월 4일</p>

        <div className="space-y-10 text-slate-600 text-sm leading-relaxed">

          <section>
            <h2 className="font-bold text-slate-800 text-base mb-3">1. 수집하는 개인정보 항목</h2>
            <p>서비스 이용 시 아래와 같은 정보를 수집합니다.</p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-slate-500">
              <li>Google 로그인 시: 이름, 이메일 주소, 프로필 사진</li>
              <li>서비스 이용 기록: 검색 키워드, 검색 횟수</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-slate-800 text-base mb-3">2. 개인정보 수집 및 이용 목적</h2>
            <ul className="space-y-1 list-disc list-inside text-slate-500">
              <li>회원 식별 및 로그인 처리</li>
              <li>하루 무료 조회 횟수 제한 관리</li>
              <li>서비스 품질 개선 및 통계 분석</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-slate-800 text-base mb-3">3. 개인정보 보유 및 이용 기간</h2>
            <p>회원 탈퇴 시 또는 수집 목적 달성 후 즉시 파기합니다. 단, 관련 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.</p>
          </section>

          <section>
            <h2 className="font-bold text-slate-800 text-base mb-3">4. 개인정보 제3자 제공</h2>
            <p>수집한 개인정보는 제3자에게 제공하지 않습니다. 단, Google OAuth 인증 과정에서 Google의 개인정보처리방침이 적용됩니다.</p>
          </section>

          <section>
            <h2 className="font-bold text-slate-800 text-base mb-3">5. 이용자의 권리</h2>
            <p>이용자는 언제든지 개인정보 열람, 수정, 삭제를 요청할 수 있습니다. 아래 이메일로 문의해 주세요.</p>
          </section>

          <section>
            <h2 className="font-bold text-slate-800 text-base mb-3">6. 개인정보 보호책임자</h2>
            <p>이메일: <a href="mailto:chohj.biz@gmail.com" className="underline" style={{ color: 'var(--brand)' }}>chohj.biz@gmail.com</a></p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 text-center">
          <a href="/" className="text-sm font-medium" style={{ color: 'var(--brand)' }}>← 홈으로 돌아가기</a>
        </div>
      </div>
    </div>
  );
}
