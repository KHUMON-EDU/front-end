<script>
import {Button,Popover,Heading,Video, Card,P} from 'flowbite-svelte';

let isOpenedAnswer = false;
const changeIsOpenedAnswer = () => {
    isOpenedAnswer = !isOpenedAnswer;
}

let problems = [
    {
      "problem_no": 1,
      "question": "K-평균 군집화란 무엇인가요?",
      "answer": "K-평균 군집화는 클러스터 중심의 초기 위치를 기반으로 각 샘플을 가장 가까운 클러스터에 할당하는 인기 있는 방법입니다.",
    },
    {
      "problem_no": 2,
      "question": "중심 K-평균 알고리즘에서 클러스터 중심의 위치는 어떻게 업데이트되나요?",
      "answer": "클러스터 중심의 위치는 할당된 샘플들의 평균을 취함으로써 업데이트됩니다."
    },
    {
      "problem_no": 3,
      "question": "K-평균 모델을 훈련하기 전에 데이터 준비의 목적은 무엇인가요?",
      "answer": "데이터 준비는 K-평균 알고리즘이 효과적으로 작동하기 위해 데이터가 적절한 형식과 범위에 있는지 보장하기 위해 필요합니다."
    },
    {
      "problem_no": 4,
      "question": "K-평균 군집화에서 첫 번째 클러스터는 어떻게 결정되나요?",
      "answer": "첫 번째 클러스터는 가장 가까운 샘플을 기반으로 결정됩니다."
    },
    {
      "problem_no": 5,
      "question": "squeeze=True이고 첫 번째 클러스터의 샘플 수가 10보다 작으면 어떻게 될 수 있나요?",
      "answer": "squeeze=True이고 첫 번째 클러스터의 샘플 수가 10보다 작으면 오류가 발생할 수 있습니다."
    },
    {
      "problem_no": 6,
      "question": "K-평균 군집화에서 두 번째와 세 번째 클러스터는 어떻게 결정되나요?",
      "answer": "두 번째와 세 번째 클러스터는 가장 가까운 샘플을 기반으로 결정됩니다."
    },
    {
      "problem_no": 7,
      "question": "슬라이싱 연산을 사용하여 클러스터 중심을 어떻게 얻을 수 있나요?",
      "answer": "K-평균 모델에 슬라이싱 연산을 사용하여 클러스터 중심을 얻을 수 있습니다."
    },
    {
      "problem_no": 8,
      "question": "K-평균 군집화에서 팔꿈치 방법은 무엇에 사용되나요?",
      "answer": "팔꿈치 방법은 k 값을 증가시키고 관성(클러스터 중심과 할당된 샘플 간의 제곱 거리의 합)를 계산하여 최적의 k 값을 찾는 데 사용됩니다."
    },
    {
      "problem_no": 9,
      "question": "팔꿈치 방법을 사용하여 최적의 k 값은 어떻게 선택되나요?",
      "answer": "최적의 k 값은 관성 감소율이 둔화되기 시작하는 지점에서 선택됩니다."
    },
    {
      "problem_no": 10,
      "question": "K-평균 군집화에서 관성은 무엇을 나타내나요?",
      "answer": "관성은 클러스터 중심과 할당된 샘플 간의 제곱 거리의 합을 나타냅니다."
    }
  ]

  problems.forEach((e) => {
    e[""]
  })

</script>
<div class=" justify-start ml-3">
    <P align={'left'}><Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-4xl lg:text-4xl" color={"text-gray-700"}>인공지능 프로그래밍</Heading></P>
</div>
<div class=" flex flex-row">
    <div>
        <div>
            <Video src="/videos/sample.mp4" controls class="w-full max-w-full h-auto rounded-3xl border border-gray-200 dark:border-gray-700" trackSrc="flowbite.mp4" />
        </div>
        <div class=" mt-2">
            <Card size={"lg"}>
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">요약</h5>
                <P align={'left'}>K-평균은 클러스터링 방법으로, 클러스터 중심의 초기 위치를 기반으로 각 샘플을 가장 가까운 클러스터에 할당합니다.<br> 중심 K-평균 알고리즘은 할당된 샘플의 평균을 사용하여 클러스터 중심의 위치를 업데이트합니다.<br> 샘플을 클러스터에 할당하고 클러스터 중심을 업데이트하는 과정이 반복됩니다.<br> K-평균 모델을 훈련하기 전에 데이터 준비가 필요합니다.<br> 첫 번째 클러스터는 가장 가까운 샘플을 기반으로 결정됩니다.<br> squeeze=True인 경우, 샘플의 수가 10보다 작으면 첫 번째 클러스터에서 오류가 발생할 수 있습니다.<br> 두 번째와 세 번째 클러스터는 가장 가까운 샘플을 기반으로 결정됩니다.<br> 클러스터 중심은 슬라이싱 연산을 사용하여 얻을 수 있습니다.<br> 팔꿈치 방법은 k 값을 증가시키고 관성(클러스터 중심과 할당된 샘플 간의 제곱 거리의 합)를 계산하여 최적의 k 값을 찾는 데 사용됩니다.<br> 최적의 k는 관성 감소율이 둔화하기 시작하는 지점에서 선택됩니다</P>
            </Card>
            <div class="w-full">
              <a href="/"><img src="images/khu_mon_logo.png" alt="logo" width="50%" style=" margin-bottom: 5%;" class=" justify-items-center ml-28"></a>
            </div>
        </div>
    </div>
    <div class=" ml-2">
        <Card size={"xl"}>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">문제</h5>
            {#each problems as problem}
            <P align={'left'} class = " font-extrabold mb-4">Q{problem.problem_no}. {problem.question}</P>
            <Button id="b{problem.problem_no}" color="alternative" disabled >정답</Button>
            <Popover class="w-64 text-sm font-light" triggeredBy="#b{problem.problem_no}"><P align={'left'} class = " font-extrabold mb-4">정답 : {problem.answer}</P></Popover>
            {/each}
        </Card>
    </div>
</div>