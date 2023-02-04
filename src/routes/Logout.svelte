<script>
    import { supabase } from '$lib/supabaseClient'
    import { identify } from '$lib/launchdarkly/client';
	import { invalidateAll } from '$app/navigation';

    async function signout2 () {
        await identify()
        await supabase.auth.signOut()      
    }
</script>

<form class="" on:submit|preventDefault="{signout2}">
    <div class="">
      <!-- <input class="inputField bg-gray-900 border-b-4 border-b-blue-600 text-white w-full my-2" type="email" placeholder="Your email" bind:value="{email}" /> -->
      <button type="submit" class="flex h-9 w-9 items-center justify-center rounded-lg  ring-yellow-400 transition-all hover:ring-2 " value="Send Link">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"/></g></svg>
      </button>
</form>