<template>
  <main class="m-auto py-20" style="width: 700px">
    <!-- if the user is not signed in, show the sign in form -->
    <div v-if="!profile && !submitted" class="flex flex-col">
      <h2 class="text-2xl">Sign up / sign in</h2>
      <input
        v-model="email"
        placeholder="Email"
        class="border py-2 px-4 rounded mt-4"
      />
      <button
        @click="signIn"
        class="mt-4 py-4 px-20 w-full bg-blue-500 text-white font-bold"
      >
        Submit
      </button>
    </div>
    <!-- if the user is signed in, show them their profile -->
    <div v-if="profile">
      <h2 class="text-xl">Hello, {{ profile.email }}</h2>
      <p class="text-gray-400 my-3">User ID: {{ profile.id }}</p>
      <button
        @click="signOut"
        class="mt-4 py-4 px-20 w-full bg-blue-500 text-white font-bold"
      >
        Sign Out
      </button>
    </div>
    <div v-if="submitted">
      <h1 class="text-xl text-center">Please check your email to sign in</h1>
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    profile: null,
    submitted: false,
    email: ""
  }),
  methods: {
    async signOut() {
      /* signOut deletes the user's session */
      await this.$supabase.auth.signOut();
      this.profile = null;
    },
    async signIn() {
      /* signIn sends the user a magic link */
      const { email } = this;
      if (!email) return;
      const { error, data } = await this.$supabase.auth.signIn({
        email
      });
      this.submitted = true;
    }
  },
  async mounted() {
    /* when the component loads, fetch the user's profile */
    const profile = await this.$supabase.auth.user();
    this.profile = profile;
  }
};
</script>
