<script>
    import LoginPage from "./LoginPage.svelte";
    import { Button,Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox, TableSearch } from 'flowbite-svelte';

    let id = sessionStorage.getItem("id")
    let accessCode = sessionStorage.getItem("access-code")
    let nickName = sessionStorage.getItem("nickName")

</script>

{#if accessCode}
<div class="flex">
    <div class="w-30">
        <img src="images/khu_mon_logo.png" alt="logo" width="50%" style=" margin-bottom: 5%;">
    </div>
    <div class=" align-bottom">
        <p style="color: black; align-items:end">{nickName} 님 안녕하세요.      <a href="#/logout">로그아웃</a></p>
      </div>




</div>

<div style="width: 100%;">
  <Button>추가</Button>
<Table striped={true} hoverable={true} shadow ={true}>
    <TableHead>
      <TableHeadCell>-</TableHeadCell>
      <TableHeadCell>노트 이름</TableHeadCell>
      <TableHeadCell>파일 형태</TableHeadCell>
      <TableHeadCell>문자 개수</TableHeadCell>
      <TableHeadCell>만든 날짜</TableHeadCell>
      <TableHeadCell>수정 날짜</TableHeadCell>
      <TableHeadCell>
        <span class="sr-only">보러가기</span>
      </TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      <TableBodyRow>
        <TableBodyCell><Checkbox></Checkbox></TableBodyCell>
        <TableBodyCell>인공지능 프로그래밍</TableBodyCell>
        <TableBodyCell>MP4</TableBodyCell>
        <TableBodyCell>5개</TableBodyCell>
        <TableBodyCell>2023.01.03</TableBodyCell>
        <TableBodyCell>2023.05.06</TableBodyCell>
        <TableBodyCell>
          <a href="/tables" class="font-medium text-primary-600 hover:no-underlinee dark:text-primary-500">보러가기</a>
        </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell><Checkbox></Checkbox></TableBodyCell>
        <TableBodyCell>인공지능 프로그래밍</TableBodyCell>
        <TableBodyCell>MP4</TableBodyCell>
        <TableBodyCell>5개</TableBodyCell>
        <TableBodyCell>2023.01.03</TableBodyCell>
        <TableBodyCell>2023.05.06</TableBodyCell>
        <TableBodyCell>
          <a href="/tables" class="font-medium text-primary-600 hover:no-underline dark:text-primary-500">보러가기</a>
        </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell><Checkbox></Checkbox></TableBodyCell>
        <TableBodyCell>인공지능 프로그래밍</TableBodyCell>
        <TableBodyCell>MP4</TableBodyCell>
        <TableBodyCell>5개</TableBodyCell>
        <TableBodyCell>2023.01.03</TableBodyCell>
        <TableBodyCell>2023.05.06</TableBodyCell>
        <TableBodyCell>
          <a href="/tables" class="font-medium text-primary-600 hover:no-underline dark:text-primary-500">보러가기</a>
        </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell><Checkbox></Checkbox></TableBodyCell>
        <TableBodyCell>인공지능 프로그래밍</TableBodyCell>
        <TableBodyCell>MP4</TableBodyCell>
        <TableBodyCell>5개</TableBodyCell>
        <TableBodyCell>2023.01.03</TableBodyCell>
        <TableBodyCell>2023.05.06</TableBodyCell>
        <TableBodyCell>
          <a href="/tables" class="font-medium text-primary-600 hover:no-underline dark:text-primary-500">보러가기</a>
        </TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</div>


{:else}
    <LoginPage />


{/if}