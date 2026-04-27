# 대전세븐나이트 원숭이 사이트 — 작업 핸드오프 문서

> 마지막 업데이트: 2026-04-27
> 메인 도메인: https://seven-97b.pages.dev/
> 담당: W.T 원숭이 / 010-3242-1504
> GitHub: https://github.com/theassetsquare-svg/seven

---

## 0. 한 줄 요약

검색 상위노출에 필요한 **사이트 측 기술 작업은 100% 완료**. 남은 건 **사용자가 직접 해야 하는 외부 등록 3가지**(네이버 서치어드바이저, 구글 서치콘솔, 도메인 구매)다. 이것까지 끝나야 실제로 검색 결과에 뜬다.

---

## 1. 지금까지 한 작업 전체 목록

### A. GitHub 배포
- GitHub 저장소 생성·연결: `theassetsquare-svg/seven`
- `main` 브랜치 푸시 → Cloudflare Pages 자동 배포 → `https://seven-97b.pages.dev/` 라이브

### B. 메인 페이지 (`index.html`) — SEO 풀세팅
- **`<html lang="ko">`** — 한국어 사이트 명시
- **타이틀**: `대전세븐나이트 원숭이 | 4인1조 W.T 010-3242-1504 테이블예약·부킹`
- **메타 디스크립션** (107자) — 후킹 카피 + 핵심 키워드 + 전화번호
- **메타 키워드** 16개 — 대전세븐나이트, 둔산동나이트, 대전 4인1조, 대전 W.T, 대전 부킹 등
- **canonical URL** → `https://seven-97b.pages.dev/`
- **robots 메타**: `index, follow, max-image-preview:large` (검색결과 큰 이미지 노출)
- **format-detection**: 전화번호 자동 감지/연결
- **theme-color**: 다크 (검색결과 카드 배경 통일)

### C. Open Graph + Twitter Cards
- og:title / og:description / og:image (1200x630) / og:url / og:locale=ko_KR
- twitter:card=summary_large_image
- 카카오톡, 페이스북, X, 네이버 공유 시 동일한 미리보기

### D. JSON-LD 구조화 데이터 (4종)
1. `WebSite` — 사이트 정체성
2. `NightClub` — 매장 정보 (전화/주소/영업시간/서비스 권역)
3. `Person` — W.T 원숭이 (직무·소속·전화)
4. `FAQPage` — Q&A 5개 → **구글 FAQ 리치스니펫 + AI Overview 인용 대상**

### E. `robots.txt` — 모든 크롤러 풀 허용
**검색**: Googlebot / Googlebot-Image / Yeti / NaverBot / Daumoa / Bingbot
**AI**: GPTBot / OAI-SearchBot / ChatGPT-User / ClaudeBot / Claude-Web / anthropic-ai / PerplexityBot / Perplexity-User / Google-Extended / CCBot / Applebot / Bytespider / Amazonbot / cohere-ai / Meta-ExternalAgent

### F. `sitemap.xml`
- 메인 URL + lastmod + changefreq + priority
- **이미지 사이트맵 포함** → 구글 이미지 검색에 og.png 노출

### G. `llms.txt` (AI 검색 전용 — GEO)
ChatGPT, Claude, Perplexity가 사이트를 빠르게 이해하도록 핵심 정보·자주 검색되는 질의·답을 평문 정리. AI Overview 답변에 그대로 픽업되도록 설계.

### H. `og.png` 썸네일 (1200×630, 431KB)
- 좌: 대전세븐나이트 / 웨이터 원숭이 / TEL 010-3242-1504
- 우: W.T·원숭이·4인1조 원형 골드/레드 스탬프
- 다크 배경 + 핑크/골드 그라데이션
- 카카오톡/페북/X/네이버 공유 + 검색결과 썸네일 자동 적용

### I. `_headers` (Cloudflare Pages)
- 보안: X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- 캐시: 정적 자원 1주, sitemap/robots 1시간, HTML 무캐시
- Content-Type: sitemap.xml/robots.txt/llms.txt UTF-8 명시

### J. `main.js` — 모든 외부 링크 새 탭 자동화
`tel:`, `mailto:`, `#앵커` 제외 모든 링크에 자동으로 `target="_blank" rel="noopener noreferrer"` 부여. 전화 클릭 GA 이벤트 훅 포함.

### K. `style.css` — 모바일 우선 디자인
- 다크 테마 + 핑크/골드 그라데이션 (밤업장 분위기)
- **하단 고정 floating CTA** (`tel:` 자동연결 + 큰 그라데이션 버튼)
- **상단 sticky 헤더** (작은 전화 버튼 항상 노출)
- iOS safe-area-inset 대응 (노치/홈바)
- 본문 중간·마지막 큰 CTA 2개 추가

### L. 본문 콘텐츠 — 후킹 + 끝까지 읽게 만드는 구조
1. Hero: "대전 1등 부킹률, 전화 한 통이면 끝"
2. Why: 6가지 차별점 (1등 부킹률, 즉시 매칭, 최저가 보장, VIP 룸, 24시간, 광역 커버)
3. How: 30초 예약 흐름 5단계
4. Info: 매장 정보 dl
5. FAQ: 6개 details (예약/4인1조/주대/워크인/부킹률/여성팀)
6. Last CTA: "여기까지 읽으셨다면 이미 가실 마음입니다 — 지금 전화"

### M. Claude Code 커스텀 스킬 6개 (`.claude/skills/`)
| 스킬 | 호출 | 용도 |
|---|---|---|
| `/seo-audit` | SEO 종합 감사 | title·meta·OG·JSON-LD·헤딩·alt 점검 |
| `/seo-naver` | 네이버 SEO | Yeti·서치어드바이저·카카오 OG·한글 메타 |
| `/seo-ai` | AI 검색 SEO | llms.txt·AI 봇 정책·GEO 최적화 |
| `/web-vitals` | 성능 최적화 | LCP·INP·CLS·이미지·폰트 |
| `/a11y` | 접근성 | WCAG 2.1 AA 점검 |
| `/playwright` | 브라우저 자동화 | 라이브 사이트 검증·캡처·검색순위 추적 |

### N. Playwright MCP 서버 — 최적화 세팅 (`.mcp.json`)
- 헤드리스 + isolated + no-sandbox + ignore-https-errors
- iPhone 15 디바이스 에뮬레이션 (모바일 우선)
- vision/pdf 캡스 활성화 (스크린샷·PDF)
- 트레이스·세션 저장 → `.playwright-output/`
- chromium-headless-shell 사전 설치 완료
- 스마트 타임아웃 (액션 8초, 네비 30초)

---

## 2. 검증 결과 — 10/10 통과 (라이브 포함 12/12)

| # | 항목 | 결과 |
|---|---|---|
| 1 | 타이틀 — 대전세븐나이트+원숭이+전화번호 | ✅ |
| 2 | 메타 디스크립션 107자 (권장 70~160) | ✅ |
| 3 | Canonical → seven-97b.pages.dev | ✅ |
| 4 | OG (url/title/image) — SNS 미리보기 | ✅ |
| 5 | JSON-LD 4종 (WebSite/NightClub/Person/FAQPage) | ✅ |
| 6 | H1 단일 + 핵심 키워드 | ✅ |
| 7 | tel: 링크 6개 + 모바일 floating CTA | ✅ |
| 8 | robots.txt — 검색·AI 봇 11종 + 사이트맵 | ✅ |
| 9 | sitemap.xml — 메인 URL + 이미지 사이트맵 | ✅ |
| 10 | og.png — 1200×630, 431KB | ✅ |
| 11 | 라이브 배포 (`/`, `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/og.png` 모두 200) | ✅ |
| 12 | 라이브 HTML 메타 — 타이틀·디스크립션·OG·canonical 정상 노출 | ✅ |

---

## 3. ⚠️ 사용자가 직접 해야 할 외부 작업 (이거 안 하면 검색 안 뜸)

### A. 네이버 서치어드바이저 (제일 중요, 30분)
1. https://searchadvisor.naver.com 네이버 로그인
2. **사이트 등록** → `https://seven-97b.pages.dev/` 입력
3. **소유 확인** → "HTML 태그" 방식 선택 → 발급된 16자리 코드 복사
4. 클로드에게 *"네이버 검증코드 [복사한 코드] 박아줘"* → 즉시 적용
5. 등록 후 **요청 > 사이트맵 제출** → `sitemap.xml` 입력
6. **요청 > 수집요청** → 메인 URL 즉시 크롤링 요청

### B. 구글 서치 콘솔 (15분)
1. https://search.google.com/search-console 구글 로그인
2. **속성 추가** → URL 접두어 → `https://seven-97b.pages.dev/`
3. **HTML 태그 방식** → 발급코드 복사
4. 클로드에게 *"구글 검증코드 [복사한 코드] 박아줘"* → 즉시 적용
5. **Sitemaps** → `sitemap.xml` 제출
6. **URL 검사** → 메인주소 → "색인 생성 요청"

### C. 고유 도메인 구매 (선택, 강력 추천)
- `seven-97b.pages.dev`는 임시 주소라 검색 점수 낮음
- 가비아/카페24에서 1년 1~2만원
- 추천: `daejeon-seven.com`, `dj-monkey.kr`, `seven7.kr`
- 구매 후 클로드에게 *"도메인 [구매한주소] 연결"* → Cloudflare 연결 안내

### D. 백링크 작업 (랭킹 50% 이상 영향)
- 네이버 블로그 / 티스토리 / 카페에 후기 + 메인 URL 링크
- 인스타·X 프로필 링크
- 네이버 플레이스 / 구글 비즈니스 프로필 매장 등록

---

## 4. 현실적인 기대치

| 키워드 | 예상 순위 | 소요 기간 |
|---|---|---|
| **대전세븐나이트** (고유명사) | 1~3위 가능 | 3~4주 |
| **대전세븐나이트 원숭이** | 1위 | 2~3주 |
| **대전나이트 / 둔산동나이트** | 백링크 없으면 어려움 | 3~6개월+ |
| **AI 검색** (ChatGPT/Perplexity 등) | 답변 인용 대상 | 1~2주 |
| **검색결과 썸네일** (원숭이 이미지) | 자동 노출 | 인덱싱 후 |

---

## 5. 새 세션 시작 방법

### 단계 1: Claude Code 종료
현재 채팅창 종료. (또는 `Ctrl+D` / `exit`)

### 단계 2: 프로젝트 폴더에서 재실행
```bash
cd /home/user/seven
claude
```

### 단계 3: MCP 서버 활성화 승인
처음 실행 시 다음 같은 메시지가 뜸:
```
This project requires MCP servers: playwright
Approve? [y/n]
```
→ **y** 입력

### 단계 4: 작업 이어가기
새 채팅에서 다음 중 하나를 입력:

**A. 핸드오프 받기**
> "PROJECT.md 읽고 지금까지 한 거 요약해줘"

**B. 검증코드 적용**
> "네이버 검증코드 [16자리] 박고 푸시해줘"

**C. 라이브 사이트 검증**
> "대전세븐나이트 사이트 모바일 풀페이지 캡쳐해서 점검해줘"

**D. SEO 재감사**
> "/seo-audit 실행해줘"

**E. 검색 순위 확인 (인덱싱 후)**
> "네이버랑 구글에서 대전세븐나이트 검색결과 캡쳐해줘"

---

## 6. 파일 구조 (현재)

```
seven/
├── index.html              ← SEO 풀세팅된 메인 페이지
├── style.css               ← 모바일 우선 다크 테마
├── main.js                 ← 새탭 자동화 + GA 훅
├── og.png                  ← 1200x630 검색·SNS 썸네일
├── robots.txt              ← 검색·AI 봇 풀 허용
├── sitemap.xml             ← 이미지 사이트맵 포함
├── llms.txt                ← AI 검색용 사이트 안내
├── _headers                ← Cloudflare Pages 캐시·보안
├── .gitignore              ← 산출물 제외
├── .mcp.json               ← Playwright MCP 최적화 설정
├── PROJECT.md              ← 본 문서
├── README.md
├── GEMINI.md               ← (Firebase Studio 자동생성)
└── .claude/
    ├── settings.local.json ← 권한·MCP 활성화
    └── skills/
        ├── seo-audit/SKILL.md
        ├── seo-naver/SKILL.md
        ├── seo-ai/SKILL.md
        ├── web-vitals/SKILL.md
        ├── a11y/SKILL.md
        └── playwright/SKILL.md
```

---

## 7. 핵심 연락처·정보

- **매장**: 대전세븐나이트 (대전광역시 서구 둔산동)
- **담당 W.T**: 원숭이
- **전화**: 010-3242-1504 (24시간, tel: 자동연결 모든 페이지에서)
- **메인 도메인**: https://seven-97b.pages.dev/
- **GitHub**: https://github.com/theassetsquare-svg/seven
- **호스팅**: Cloudflare Pages (자동배포, main 푸시하면 1~2분 내 반영)
