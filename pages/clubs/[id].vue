<script setup lang="ts">
import { useUserStore } from "~/stores/user";

const route = useRoute();
const userStore = useUserStore();
const data = await useFetch(`/api/clubs/get/${route.params.id}`, {
  method: "GET",
  query: { login: userStore.userLogin },
});
const club = data.data.value;
const subscribed = ref(data.data.value["Users"].length > 0);
async function subscribe() {
  subscribed.value = true;
  await useFetch(`/api/clubs/subscribes`,{
    method: "POST",
    body: {
      clubId: route.params.id,
      login: userStore.userLogin
    }
  })
}
async function unsubscribe() {
  subscribed.value = false;
  await useFetch(`/api/clubs/subscribes`,{
    method: "DELETE",
    body: {
      clubId: route.params.id,
      login: userStore.userLogin
    }
  })
}

const clubPosts = await useFetch(`/api/posts/club`,{
  method:"GET",
  query: {
    clubId: route.params.id
  }
});
</script>
<template>
  <div>
    <div
      class="h-[378px] w-full overflow-hidden relative rounded-t-lg rounded-b-md"
    >

      <img
        :src="`/api/public${club.image}`"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute text-grey-off-black w-full h-[235px] px-4 rounded-t-lg rounded-b-md pt-10 pb-3 glass glass-xl bottom-0 flex flex-col"

      >
        <div class="text-lg">
          {{ club.name }}
        </div>
        <div class="line-clamp-3">
          {{ club.description }}
        </div>
        <div class="flex items-center gap-x-2 ">
          <Icon name="Three People" class="w-6 h-6"/>
          <div>{{club.userCount}} участников</div>
        </div>
        <div class="flex items-center gap-x-2 text-grey-off-black">
          <Icon name="Read Book" class="w-6 h-6"/>
          <div>{{club.postCount}} записей</div>
        </div>
        <div class="flex-1 relative">
          <div class="absolute right-0 bottom-0">
            <button @click="unsubscribe" v-if="subscribed" class="btn btn-primary">
              Отписаться
            </button>
            <button @click="subscribe" v-else class="btn btn-primary">
              Подписаться
            </button>
          </div>
        </div>
      </div>
    </div>

    <PostList :posts="clubPosts.data.value"/>
  </div>
</template>
