<script lang="ts">
    import { supabase } from '$lib/supabaseClient'

    const signInWithGitHub = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
        })
    }
  </script>
  
  <form class="" on:submit|preventDefault="{signInWithGitHub}">
      <div class="">
        <!-- <input class="inputField bg-gray-900 border-b-4 border-b-blue-600 text-white w-full my-2" type="email" placeholder="Your email" bind:value="{email}" /> -->
        <button type="submit" class="flex h-9 w-9 items-center justify-center rounded-lg  ring-yellow-400 transition-all hover:ring-2" value="Send Link">
            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg>
        </button>
  </form>