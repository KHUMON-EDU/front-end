<script>
    import LoginPage from "./LoginPage.svelte";
    import axios from 'axios'
    import { SpeedDial,P,Search,Button,Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox, TableSearch } from 'flowbite-svelte';
    import {PlusSolid} from 'flowbite-svelte-icons'
    let id = sessionStorage.getItem("id")
    let accessCode = sessionStorage.getItem("access-code")
    let nickName = sessionStorage.getItem("nickName")
    let data = {'content':[]}
    axios.get("https://khumon-edu.kro.kr/api/learning-materials",{
        headers:{"Authorization":"Bearer " + accessCode},
      }).then(
        response => {
          data.content.concat(response)
          console.log(response)
        }
      )

</script>

{#if accessCode}
<Button pill={true} class ="p-7 absolute right-6 bottom-6" shadow={true} size="xl" href="#/upload">
  <PlusSolid></PlusSolid>
</Button>

<div class="flex">
    <div class="w-30">
        <img src="images/khu_mon_logo.png" alt="logo" width="50%" style=" margin-bottom: 5%;">
    </div>
</div>
<div style="width: 100%;">
<div class="flex justify-between"> 
  <div class="justfy-start">
  </div>
  <div class=" justify-end">
      <P class=" text-right align-bottom">{nickName} 님 안녕하세요.      <a href="#/logout">로그아웃</a></P>
  </div>
</div>

{#key data.content}
  <Search class="mb-2 mt-2">
    <Button>Search</Button>
  </Search>
<Table striped={true} hoverable={true} shadow ={true}>
    <TableHead>
      <TableHeadCell>-</TableHeadCell>
      <TableHeadCell>노트 이름</TableHeadCell>
      <TableHeadCell>파일 형태</TableHeadCell>
      <TableHeadCell>문제 개수</TableHeadCell>
      <TableHeadCell>만든 날짜</TableHeadCell>
      <TableHeadCell>수정 날짜</TableHeadCell>
      <TableHeadCell>
        <span class="sr-only">보러가기</span>
      </TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      {#if data.content}
        {#each data.content as item}
        <TableBodyRow>
          <TableBodyCell><Checkbox></Checkbox></TableBodyCell>
          <TableBodyCell><a href="https://khumon-edu.kro.kr/api/learning-material/{item.id}" style="color: black;">item.title</a></TableBodyCell>
          <TableBodyCell>{item.type}</TableBodyCell>
          <TableBodyCell>10개</TableBodyCell>
          <TableBodyCell>{item.createAt}</TableBodyCell>
          <TableBodyCell>{item.modifiedAt}</TableBodyCell>
          <TableBodyCell>
            <a href="/tables" class="font-medium text-primary-600 hover:no-underlinee dark:text-primary-500">삭제</a>
          </TableBodyCell>
        </TableBodyRow>
        {/each}
        {/if}
    </TableBody>
  </Table>
  {/key}

</div>

{:else}
    <LoginPage />


{/if}