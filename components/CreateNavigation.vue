
<template>
  <div>
    <ul class="menu bg-white w-full p-2 rounded-box space-y-2.5 text-lg">
      <li>
          <a href="#video-creation-modal">
            <Icon class="w-6 h-6" name="video-creation" />
            Создать видео
          </a>
      </li>
      <li>
        <a href="#post-creation-modal">
          <Icon  class=" w-6 h-6" name="edit" />
          Создать пост
        </a>
      </li>
      <li>
        <a href="#product-creation-modal">
          <Icon  class="w-6 h-6" name="cart" />
          Создать товар
        </a>
      </li>
    </ul>
    <VideoCreationModal/>
    <PostCreationModal/>
    <ProductCreationModal/>
  </div>
</template>
<script>
import AppIcon from "~/components/AppIcon";
import FileInput from "~/components/FileInput";
export default {
  components: {FileInput, AppIcon}
}
</script>