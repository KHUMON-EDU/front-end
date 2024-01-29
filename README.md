# front-end

https://www.figma.com/file/6YlvWAkZEC370piEVRkUZ2/KhuMon?node-id=0%3A1&mode=dev


# 쿠몬학습
![로고 최종](https://github.com/KHUMON-EDU/.github/assets/62254434/1e812c58-a8e5-4638-b208-50c815fa8b7d)

## **프로젝트 소개**

쿠몬학습은 사용자의 학습 자료를 바탕으로 AI가 **자동으로 문답형 질문들을 생성** 해주는 서비스입니다.

## **시장분석**

| 서비스 플랫폼 | 텍스트 지원 | 미디어파일 지원 | 요약|  질문 기록 | 지원 언어 |
| --- | --- | --- | --- | --- | --- |
| ChatGPT | O  | X | O | O | KOR/EN |
| 클로바 X | O  | X | O | O | KOR/EN |
| genQue | O  | X | X | O | EN |
| OpExams | O  | X | O | O | KOR |
| 쿠몬학습 | O  | O | O | O | KOR/EN |

## 주요 기능

- 사용자가 회원가입과 로그인을 통해 쿠몬 서비스를 이용할 수 있고 파일을 관리할 수 있습니다.
- 사용자는 **비디오, 텍스트, PDF 파일을 업로드** 할 수 있습니다.
- 사용자는 학습자료에 대한 **적절한 문답글을 제공**받습니다.
- 사용자는 자신의 **이전 학습 기록**을 살펴볼 수 있습니다.
- 사용자는 **질문 응답 현황에 따른 학습 진척율**을 살펴볼 수 있습니다.

## 프로젝트 주요 기능 기술 및 구현
- 모듈 간 커뮤니케이션
<img width="937" alt="스크린샷 2023-11-13 오후 1 14 28" src="https://github.com/KHUMON-EDU/.github/assets/62254434/c740f3d8-b792-4e81-8622-bfe4487eb82e">
<img width="1028" alt="스크린샷 2023-11-08 오후 10 56 08" src="https://github.com/KHUMON-EDU/.github/assets/62254434/2443e834-7d04-44b6-9cd1-5f284d8608c9">
<img width="1177" alt="스크린샷 2023-11-08 오후 11 01 01" src="https://github.com/KHUMON-EDU/.github/assets/62254434/0fd599a9-5de0-4a5d-aed4-5c8540d46cd4">
<img width="1393" alt="스크린샷 2023-11-08 오후 11 28 06" src="https://github.com/KHUMON-EDU/.github/assets/62254434/54a38fc3-5143-48dd-b744-783aaf23706b">
<img width="867" alt="스크린샷 2023-11-08 오후 11 43 38" src="https://github.com/KHUMON-EDU/.github/assets/62254434/fd76364f-698a-4b38-8191-1e369bb76bc2">
<img width="1000" alt="스크린샷 2023-11-08 오후 11 46 57" src="https://github.com/KHUMON-EDU/.github/assets/62254434/7e4a70e5-35bd-42f9-82f5-0d8acab523f7">
<img width="1402" alt="스크린샷 2023-11-08 오후 11 52 54" src="https://github.com/KHUMON-EDU/.github/assets/62254434/fc5e6be2-3ad6-43ce-a0fc-fd45ae533040">


- 요약 및 퀴즈 생성
<img width="498" alt="스크린샷 2023-11-21 오후 2 06 07" src="https://github.com/KHUMON-EDU/.github/assets/62254434/734ba396-160e-4a71-a753-afe741a233e6">



## 기술 경쟁력

- 자체 모듈을 통한 **멀티미디어 (pdf, mp4) 업로드 및 한국어** 지원합니다.
- **Map-Reduce 방식**을 통한 LLM의 대용량 토큰 처리를 지원합니다.
- **JWT 인증/인가** 방식을 통한 Stateless 서버 구축으로 서버 부하를 줄이고, **성능 개선**하였습니다.

## 기대 효과

- 사용자는 게시한 학습 자료를 바탕으로 직접 문제를 풀어보며 **효과적으로 학습**할 수 있습니다.
- 동영상 강의 요약을 통해 빠르게 학습할 수 있는 여건을 마련합니다.
- IT기기를 활용해 **공부의 흥미와 재미**를 불어 일으킬 수 있습니다.

## 로그인 화면 Ver.2
<img width="1280" alt="image" src="https://github.com/van1164/KHUMON-EDU-front-end/assets/52437971/03cd61f7-82b0-4dc6-850e-a5cf03ce2ee6">

## 메인 화면 Ver.2

<img width="1280" alt="image" src="https://github.com/van1164/KHUMON-EDU-front-end/assets/52437971/e7cd8cb3-586e-4ab8-bc28-d2c69f0c6159">


## 파일 업로드 화면 Ver.2
<img width="1280" alt="image" src="https://github.com/van1164/KHUMON-EDU-front-end/assets/52437971/db696cf5-6663-49ee-921f-ae130108f851">

