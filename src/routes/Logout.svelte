<script>
    import { supabase } from '$lib/supabaseClient'
    import { identify } from '$lib/launchdarkly/client';
	import { invalidateAll } from '$app/navigation';

    async function signout2 () {
        await identify()
        await supabase.auth.signOut()      
    }
</script>

<form class="mx-auto place-items-center items-center w-3/4 py-4" on:submit|preventDefault="{signout2}">
    <div class="">
      <!-- <input class="inputField bg-gray-900 border-b-4 border-b-blue-600 text-white w-full my-2" type="email" placeholder="Your email" bind:value="{email}" /> -->
      <button type="submit" class="border-2 border-red-300 text-red-300 rounded-l text-l w-full py-1" value="Send Link">Logout</button>
</form>