<script>
import {Helper,Input,Button,Popover,Heading,Video, Card,P} from 'flowbite-svelte';
import PdfViewer from 'svelte-pdf'
import axios from 'axios'
import { marked } from 'marked'
export let params
let isOpenedAnswer = false;
console.log(params.id)
let accessCode = sessionStorage.getItem("access-code")
let data = []
let problems = []
let title = ""
let summary = ``
let pdfUrl = ""
let correctList = {}
let answerList = {}
let whatWrongList = {}
let mediaFlieType = ""
let text = ""
  axios.get("https://khumon-edu.kro.kr/api/learning-material/"+params.id,{
      headers:{"Authorization":"Bearer " + accessCode},
    }).then(
      response => {
        problems= response.data.questionInformations
        summary = response.data.summary
        title = response.data.title
        mediaFlieType = response.data.mediaFileType
        pdfUrl = response.data.mediaURL
        text = response.data.textData
        for(let i =0; i<problems.length; i++){
          if(problems[i].myAnswer == null){
            answerList[problems[i].id] = ""
          }
          else{
            answerList[problems[i].id] = problems[i].myAnswer
          }
            correctList[problems[i].id] = problems[i].isCorrect
            whatWrongList[problems[i].id] = problems[i].whatWrong
        }
        console.log(response)
        console.log(answerList)
        console.log(correctList)
        console.log(whatWrongList)
      }
    )

const changed = () =>{
  console.log(problems)
}

const changeIsOpenedAnswer = () => {
    isOpenedAnswer = !isOpenedAnswer;
}

  problems.forEach((e) => {
    e[""]
  })


const clickButton = (i) =>{
  console.log(answerList[i])
  axios.post("https://khumon-edu.kro.kr/api/learning-material/" + params.id + "/question/"+i,{
    content: answerList[i]
  },{
      headers:{"Authorization":"Bearer " + accessCode},
    }).then(
      response => {
        whatWrongList[i] = response.data.assessment
        correctList[i] = response.data.isCorrect
      })

}

</script>
<div class=" justify-start ml-3">
    <P align={'left'}><Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-4xl lg:text-4xl" color={"text-gray-700"}>{title}</Heading></P>
</div>



<div class=" flex flex-row">
    <div class="flex flex-col">
        <div class=" justify-center">
          
          {#key pdfUrl}
            {#if pdfUrl !=""}
              {#if mediaFlieType == "pdf"}
            <div>
            <PdfViewer data={null} url={pdfUrl} showButtons={["navigation","zoom"]} scale={0.7} />
            </div>
              {:else if mediaFlieType == "mp4"}
              <Video src= {pdfUrl} controls class="w-full max-w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700" trackSrc="flowbite.mp4" />
              {:else if mediaFlieType == "txt"}
              <Card size={"lg"} class ="mt-4">
              <Heading tag = "h3" >텍스트 파일</Heading>
              <P align={'left'}>{text}</P>
              </Card>
              {:else}


            {/if}
            {/if}
          {/key}
            <!-- <Video src="/videos/sample.mp4" controls class="w-full max-w-full h-auto rounded-3xl border border-gray-200 dark:border-gray-700" trackSrc="flowbite.mp4" /> -->
        </div>
        {#key summary}
        {#if summary !=""}
        <div class=" mt-2 flex flex-col" >
          <div style="display: flex; justify-content: center; align-items: center;">
            <Card size={"lg"} class=" text-left">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">요약</h5>
                {@html marked(summary)}
                <!-- <P align={'left'}>{summary}</P> -->

              </Card>
            </div>
            <div class="w-full">
              <a href="/"><img src="images/khu_mon_logo.png" alt="logo" width="50%" style=" margin-bottom: 5%;" class=" justify-items-center ml-28"></a>
            </div>
        </div>
        {/if}
        {/key}
    </div>
    {#key problems}
    {#if problems != ""}
    <div class=" ml-2 mt-4">
        <Card size={"xl"}>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">문제</h5>
              {#each problems as problem, i}
              <P align={'left'} class = " font-extrabold mb-4">Q{i+1}. {problem.content}</P>
              <div class = "flex flex-row">
              {#if correctList[problem.id] == null }
              <div class=" w-auto">
              <Input type="text" bind:value ={answerList[problem.id]} on:change={()=>changed()}  id="first_name" placeholder="정답 입력" required />
              </div>
                <div>
                  <Button color="red" on:click={()=>clickButton(problem.id)}>입력</Button>
                </div>
              {:else if correctList[problem.id] == true }
              <div class=" w-auto">
              <Input type="text" bind:value ={answerList[problem.id]} on:change={()=>changed()} color="green" id="first_name" placeholder="정답 입력" required />
              </div>
                <div>
                  <Button color="red" on:click={()=>clickButton(problem.id)}>입력</Button>
                </div>
              {:else}
              <div class=" w-auto">
              <Input type="text" bind:value ={answerList[problem.id]} on:change={()=>changed()} color="red" id="first_name" placeholder="정답 입력" required />
              </div>
                <div>
                  <Button color="red" on:click={()=>clickButton(problem.id)}>입력</Button>
                </div>
                {/if}

            </div>
             {#if correctList[problem.id] == null}      
             <div></div>
            {:else if correctList[problem.id] == true }
              <Helper class="mt-2" color="green">
                <span class="font-medium"> {whatWrongList[problems[i].id]}</span>
              </Helper>
            {:else}
              <Helper class="mt-2" color="red">
                <span class="font-medium">  {whatWrongList[problems[i].id]}</span>
              </Helper>
              {/if}
            
              <!-- <Button id="b{i+1}" color="alternative" disabled >정답</Button>
              <Popover class="w-64 text-sm font-light" triggeredBy="#b{i+1}"><P align={'left'} class = " font-extrabold mb-4">정답 : {problem.answer}</P></Popover> -->
              {/each}

        </Card>
    </div>
    {/if}
    {/key}
</div>