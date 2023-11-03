<script>
   import {Spinner, Button,Input,Textarea, Label ,Heading,P,Dropzone } from 'flowbite-svelte';
   import LoginPage from "./LoginPage.svelte";
    import axios from 'axios'
    import MainPage from './MainPage.svelte';

    let title = ""
    let content = ""

    let value = null
    let file = null
    let accessCode = sessionStorage.getItem("access-code")
  const dropHandle = (event) => {
    value = [];
    event.preventDefault();
    if (event.dataTransfer.items) {
      [...event.dataTransfer.items].forEach((item, i) => {
        if (item.kind === 'file') {
          const file = item.getAsFile();
          value.push(file.name);
          value = value;
        }
      });
    } else {
      [...event.dataTransfer.files].forEach((file, i) => {
        value = file.name;
      });
    }
  };

  const handleChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      value = files[0].name;
      file = files[0]
      value = value;
    }
  };

  const showFiles = (name) => {
    return name
  };

  function send(){

    axios.post("http://localhost:8080/api/learning-material",{
        media:file,
        data:JSON.stringify({"title":title, "content":content})
      },
      {
        headers:{"Authorization": "Bearer "+sessionStorage.getItem("access-code"),"content-type": "multipart/form-data"},
      }).then(
        response => {
          console.log(response)
        }
      )
    window.location.href = '/'
  }

  </script>
{#if accessCode}

<form on:submit|preventDefault={send}>
<div class="flex flex-col" >

    <div class="mb-1">
    <a href="/"><img src="images/khu_mon_logo.png" alt="logo" width="50%" style=" margin-bottom: 5%;float: left; width:80%; height:auto; align-items: center; display: flex;" ></a>
    </div>
    <div class=" h-full">

    <div>
      <Heading for="textarea-id" class="mb-2 flex items-start" tag="h3">제목</Heading>
      <Input type="text" id="first_name" placeholder="제목" required size="lg" bind:value={title}/>
      </div>  

    <div>
      <Heading for="textarea-id" class="mb-2 flex items-start" tag="h3">내용</Heading>
      <Textarea id="textarea-id" placeholder="내용" rows="4"  bind:value={content}/>
    </div>  

    <div class="mb-4"><Heading tag="h6" class="mb-2 flex items-start">파일을 업로드 해주세요</Heading></div>
    <Dropzone
    id="dropzone"
    on:drop={dropHandle}
    on:dragover={(event) => {
      event.preventDefault();
    }}
    on:change={handleChange}
    defaultClass="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
    >
    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
    {#if value == null}
      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
      <p class="text-xs text-gray-500 dark:text-gray-400">PDF, PNG, MP4</p>
    {:else}
      <p>{showFiles(value)}</p>
    {/if}
  </Dropzone>
</div>

<Button class = "mt-5 mb-5 h-30" type="submit">업로드</Button>


</div>
</form>

{:else}
    <LoginPage />


{/if}