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
        <button type="submit" class="flex h-9 w-9 items-center justify-center rounded-lg  ring-yellow-400
        transition-all hover:ring-2 " value="Send Link">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="36px" viewBox="0 0 20 20" width="36px" fill="#FFFFFF"><g><rect fill="none" height="20" width="20" x="0"/></g><g><path d="M10,4v1h6v10h-6v1h6c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1H10z"/><polygon points="9.5,6.5 8.79,7.21 11.09,9.5 3,9.5 3,10.5 11.09,10.5 8.79,12.79 9.5,13.5 13,10"/></g></svg>
        </button>
  </form>