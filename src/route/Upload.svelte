<script>
    import Dropzone from "svelte-file-dropzone/Dropzone.svelte";
  
    let files = {
      accepted: [],
      rejected: []
    };
  
    function handleFilesSelect(e) {
      const { acceptedFiles, fileRejections } = e.detail;
      files.accepted = [...files.accepted, ...acceptedFiles];
      files.rejected = [...files.rejected, ...fileRejections];
    }
  </script>

<div style="align-items: center; display:flex; margin-left:10%">

    <div style="height:max-content; margin-bottom:10%">
    <img src="images/khu_mon_logo.png" alt="logo" width="100%" style=" margin-bottom: 5%;float: left; width:80%; height:auto; align-items: center; display: flex;" >
    </div>
    <div style="height:max-content; margin-bottom:10%">
    <Dropzone on:drop={handleFilesSelect}>
            <img src="images/upload_button.png" alt="logo" width="100%" style=" margin-bottom: 5%;float: left; width:%; height:auto; align-items: center; display: flex;" >
    </Dropzone>
</div>
<ol>
    {#each files.accepted as item}
      <li style="color: black;">{item.name}</li>
    {/each}
  </ol>


</div>