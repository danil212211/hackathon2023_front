<script setup lang="ts">
import {useUserStore} from "~/stores/user";

const props = defineProps(["event"]);
const subscribed = ref(props.event["subs"]?.length > 0);
const userStore = useUserStore();

async function subscribe() {
  subscribed.value = true;
  await useFetch(`/api/events/subscribes`,{
    method: "POST",
    body: {
      eventId: props.event.id,
      login: userStore.userLogin
    }
  })
}
async function unsubscribe() {
  subscribed.value = false;
  await useFetch(`/api/events/subscribes`,{
    method: "DELETE",
    body: {
      eventId: props.event.id,
      login: userStore.userLogin
    }
  })
}

</script>
<template>
  <div class="bg-white rounded-lg shadow-md text-grey-off-black">
    <img :src="event.image" class="h-[300px] w-full object-cover rounded-lg" />
    <div class="px-6 pt-2.5 pb-6">
      <div class="text-md-bold">
        {{ event.name }}
      </div>
      <div class="text-sm">
        {{ event.description }}
      </div>
      <div class="flex items-center gap-x-2">
        <Icon name="Calandar" class="w-6 h-6" />
        <div>{{$t("date")}}:{{ new Date(event.date).toLocaleString() }}</div>
      </div>
      <div class="flex items-center gap-x-2">
        <Icon name="Three People" class="w-6 h-6" />
        <div>{{$t("place")}}: {{event.place}}</div>
      </div>
      <div class="flex items-center gap-x-2">
        <Icon name="Three People" class="w-6 h-6" />
        <div>{{event.userCount}} {{ $t("eventSubscribers") }}</div>
      </div>
      <div class="flex w-full justify-center">
        <button @click="unsubscribe" class="btn btn-primary" v-if="subscribed">
          {{ $t("eventSubscribe") }}
        </button>
        <button @click="subscribe" v-else class="btn btn-primary">
          {{ $t("eventUnsubscribe") }}        </button>
      </div>
    </div>
  </div>
</template>