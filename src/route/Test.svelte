<script>
import {Input,Button,Popover,Heading,Video, Card,P} from 'flowbite-svelte';


const clickButton = (i) =>{
  console.log(i)
}
</script>


<Button color="red" on:click={(i) => clickButton(1)}>입력</Button>