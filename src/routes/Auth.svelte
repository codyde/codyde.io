<script lang="ts">
    import { supabase } from '$lib/supabaseClient'

    const signInWithGitHub = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
        })
    }
  </script>
  
  <form class="mx-auto place-items-center items-center w-3/4 py-4" on:submit|preventDefault="{signInWithGitHub}">
      <div class="">
        <!-- <input class="inputField bg-gray-900 border-b-4 border-b-blue-600 text-white w-full my-2" type="email" placeholder="Your email" bind:value="{email}" /> -->
        <button type="submit" class="border-2 border-yellow-300 text-yellow-300 rounded-l text-l w-full py-1" value="Send Link">Sign-In With GitHub</button>
  </form>